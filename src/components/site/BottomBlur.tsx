/**
 * Atmospheric bottom edge — a fixed strip with backdrop-blur that fades
 * from transparent to the page background, masked so the blur intensifies
 * downward.
 */
export function BottomBlur() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 bottom-0 h-32 md:h-40 z-40"
      style={{
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        maskImage:
          "linear-gradient(to top, black 30%, rgba(0,0,0,0.7) 60%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to top, black 30%, rgba(0,0,0,0.7) 60%, transparent 100%)",
        background:
          "linear-gradient(to top, color-mix(in oklab, var(--background) 80%, transparent) 0%, transparent 100%)",
      }}
    />
  );
}
