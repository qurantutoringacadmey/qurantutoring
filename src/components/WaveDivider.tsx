export default function WaveDivider({
  fill = "#ffffff",
  flip = false,
  className = "",
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 ${flip ? "top-0 -translate-y-px rotate-180" : "bottom-0 translate-y-px"} ${className}`}
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="h-[50px] w-full sm:h-[80px]"
      >
        <path
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,88 1440,40 L1440,90 L0,90 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
