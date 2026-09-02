interface LiveProjectButtonProps {
  className?: string;
  href?: string;
  label?: string;
}

export default function LiveProjectButton({
  className = '',
  href,
  label = 'Live Project',
}: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      className={`inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base whitespace-nowrap transition-colors hover:bg-[#D7E2EA]/10 ${className}`}
    >
      {label}
    </a>
  );
}
