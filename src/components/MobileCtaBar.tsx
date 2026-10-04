import Link from "next/link";

export default function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-white/95 p-3 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.06)] sm:hidden">
      <Link
        href="/book-trial"
        className="block w-full rounded-full bg-brand py-3 text-center font-semibold text-white shadow-lg shadow-brand/30 transition active:scale-[0.98]"
      >
        Book Your Free Trial
      </Link>
    </div>
  );
}
