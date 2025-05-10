export const Pawn: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width={24}
    height={24}
    {...props}
  >
    <circle cx="12" cy="7" r="3" />
    <rect x="9" y="10" width="6" height="7" rx="2" />
    <rect x="7" y="19" width="10" height="2" rx="1" />
  </svg>
);
