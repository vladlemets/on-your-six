import { cn } from "@/lib/utils";

type Oy6LogoProps = {
  className?: string;
  /** light = white ON YOUR (dark backgrounds); dark = charcoal ON YOUR */
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
};

const HEIGHT: Record<NonNullable<Oy6LogoProps["size"]>, string> = {
  sm: "h-9",
  md: "h-11 sm:h-12",
  lg: "h-16 sm:h-20",
};

/**
 * Symmetrical stacked wordmark image: ON YOUR / SIX
 * SIX spans the exact same width as ON YOUR (PNG).
 */
export function Oy6Logo({ className, variant = "light", size = "md" }: Oy6LogoProps) {
  const src = variant === "dark" ? "/oy6-logo-dark.png?v=2" : "/oy6-logo.png?v=2";

  return (
    <img
      src={src}
      alt="On Your Six"
      className={cn("w-auto object-contain object-left", HEIGHT[size], className)}
      width={200}
      height={75}
      decoding="async"
    />
  );
}
