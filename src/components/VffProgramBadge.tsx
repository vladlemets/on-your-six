import { VFF } from "@/lib/site";
import { cn } from "@/lib/utils";

type VffBadgeProps = {
  className?: string;
  /** show full logo image vs compact text link */
  showLogo?: boolean;
};

/** “A program of Veterans First Foundation” with link + optional logo */
export function VffProgramBadge({ className, showLogo = true }: VffBadgeProps) {
  return (
    <a
      href={VFF.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-3 group transition-opacity hover:opacity-90",
        className,
      )}
    >
      {showLogo && (
        <img
          src={VFF.logoUrl}
          alt={VFF.name}
          className="h-8 sm:h-10 w-auto object-contain"
        />
      )}
      <span className="text-left leading-tight">
        <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-gray-400 group-hover:text-[#ff5e00] transition-colors">
          A permanent program of
        </span>
        <span className="block text-xs sm:text-sm font-bold text-white group-hover:text-[#ff5e00] transition-colors">
          {VFF.name}
        </span>
      </span>
    </a>
  );
}
