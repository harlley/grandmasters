export const King: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
    <rect x="10" y="6" width="4" height="8" rx="2" />
    <rect x="7" y="20" width="10" height="2" rx="1" />
    <rect x="11" y="3" width="2" height="4" />
    <rect x="9" y="5" width="6" height="2" />
  </svg>
);
