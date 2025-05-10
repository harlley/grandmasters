export const Queen: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
    <circle cx="6" cy="8" r="2" />
    <circle cx="12" cy="6" r="2" />
    <circle cx="18" cy="8" r="2" />
    <ellipse cx="12" cy="15" rx="7" ry="5" />
    <rect x="7" y="20" width="10" height="2" rx="1" />
  </svg>
);
