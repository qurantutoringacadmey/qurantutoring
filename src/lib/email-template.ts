export function buildContactEmailHtml({
  name,
  email,
  phone,
  course,
  message,
  siteUrl,
  heading = "New enquiry from the website contact form",
  extraFields = [],
}: {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
  siteUrl: string;
  heading?: string;
  extraFields?: { label: string; value: string }[];
}) {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #f1ebe3;font-size:13px;font-weight:600;color:#8a7a6a;width:140px;vertical-align:top;">
        ${label}
      </td>
      <td style="padding:10px 0;border-bottom:1px solid #f1ebe3;font-size:14px;color:#1a1a22;vertical-align:top;">
        ${value}
      </td>
    </tr>`;

  return `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Enquiry – Quran Tutoring</title>
  </head>
  <body style="margin:0;padding:0;background-color:#fdf6ee;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fdf6ee;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.06);">

            <tr>
              <td style="background-color:#0f1115;padding:28px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="font-size:20px;font-weight:800;color:#ffffff;">
                      Quran<span style="color:#e8730a;">Tutoring</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:28px 32px 8px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="display:inline-block;background-color:#fdf1e6;color:#c25c00;font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;padding:6px 14px;border-radius:999px;">
                      ${heading}
                    </td>
                  </tr>
                </table>
                <h1 style="margin:18px 0 6px 0;font-size:20px;color:#0f1115;">
                  You have a new message from ${name}
                </h1>
                <p style="margin:0 0 20px 0;font-size:14px;color:#6b6b6b;line-height:1.5;">
                  Someone just submitted the contact form on qurantutoring.net. Reply directly to this email to respond, it will go straight to ${email}.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:0 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #f1ebe3;">
                  ${row("Name", name)}
                  ${row("Email", `<a href="mailto:${email}" style="color:#e8730a;text-decoration:none;">${email}</a>`)}
                  ${row("Phone", phone)}
                  ${row("Course Interest", course)}
                  ${extraFields.map((f) => row(f.label, f.value)).join("")}
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 32px 8px 32px;">
                <p style="margin:0 0 8px 0;font-size:13px;font-weight:600;color:#8a7a6a;">Message</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fdf6ee;border-radius:12px;">
                  <tr>
                    <td style="padding:16px;font-size:14px;line-height:1.6;color:#1a1a22;">
                      ${message}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:28px 32px 32px 32px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="background-color:#e8730a;border-radius:999px;">
                      <a href="mailto:${email}" style="display:inline-block;padding:12px 24px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">
                        Reply to ${name.split(" ")[0]}
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="background-color:#0f1115;padding:18px 32px;text-align:center;">
                <p style="margin:0;font-size:12px;color:#9a9a9a;">
                  Sent automatically from the contact form at
                  <a href="${siteUrl}" style="color:#e8730a;text-decoration:none;"> ${siteUrl.replace("https://", "")}</a>
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
