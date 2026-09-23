import { cn } from "@/lib/utils";

type Oy6LogoProps = {
  className?: string;
  /** light = white "ON YOUR" on dark headers; dark = charcoal on light bg */
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
};

/**
 * Stacked wordmark: ON YOUR / SIX
 * SIX letters are spaced to match the full width of ON YOUR.
 */
export function Oy6Logo({ className, variant = "light", size = "md" }: Oy6LogoProps) {
  const top =
    size === "sm"
      ? "text-[10px] tracking-[0.22em] pr-[0.22em]"
      : size === "lg"
        ? "text-sm sm:text-base tracking-[0.28em] pr-[0.28em]"
        : "text-[11px] sm:text-xs tracking-[0.26em] pr-[0.26em]";

  const six =
    size === "sm"
      ? "text-[1.45rem]"
      : size === "lg"
        ? "text-[2.6rem] sm:text-[3.1rem]"
        : "text-[1.75rem] sm:text-[2.05rem]";

  return (
    <div
      className={cn("inline-flex flex-col leading-none select-none", className)}
      aria-label="On Your Six"
    >
      <span
        className={cn(
          "font-bold uppercase whitespace-nowrap",
          top,
          variant === "light" ? "text-white" : "text-[#2d3136]",
        )}
      >
        ON YOUR
      </span>
      <span
        className={cn(
          "flex w-full justify-between font-black uppercase text-[#ff5e00] leading-[0.85] mt-0.5",
          six,
        )}
        aria-hidden="true"
      >
        <span>S</span>
        <span>I</span>
        <span>X</span>
      </span>
    </div>
  );
}
