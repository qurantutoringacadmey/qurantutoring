import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildContactEmailHtml } from "@/lib/email-template";
import { site } from "@/lib/data";

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!resendApiKey || !fromEmail || !toEmail) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  let body: {
    name?: string;
    email?: string;
    phone?: string;
    course?: string;
    message?: string;
    formType?: "contact" | "trial";
    inquiryType?: string;
    studentAge?: string;
    preferredTime?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const {
    name,
    email,
    phone,
    course,
    message,
    formType = "contact",
    inquiryType,
    studentAge,
    preferredTime,
  } = body;

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const escapeHtml = (value: string) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const resend = new Resend(resendApiKey);

  const isTrial = formType === "trial";
  const subject = isTrial
    ? `New free trial booking from ${name} – Quran Tutoring`
    : `New ${inquiryType || "enquiry"} from ${name} – Quran Tutoring`;

  const extraFields: { label: string; value: string }[] = [];
  if (isTrial) {
    if (studentAge) extraFields.push({ label: "Student Age", value: escapeHtml(studentAge) });
    if (preferredTime) extraFields.push({ label: "Preferred Time", value: escapeHtml(preferredTime) });
  } else if (inquiryType) {
    extraFields.push({ label: "Enquiry Type", value: escapeHtml(inquiryType) });
  }

  try {
    const { error } = await resend.emails.send({
      from: `Quran Tutoring Website <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject,
      html: buildContactEmailHtml({
        name: escapeHtml(name),
        email: escapeHtml(email),
        phone: escapeHtml(phone || "Not provided"),
        course: escapeHtml(course || "Not specified"),
        message: escapeHtml(message || "(No message provided)").replace(/\n/g, "<br/>"),
        siteUrl: site.url,
        heading: isTrial
          ? "New free trial booking request"
          : "New enquiry from the website contact form",
        extraFields,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error sending email:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
