export const Bishop: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
    <ellipse cx="12" cy="13" rx="5" ry="7" />
    <rect x="7" y="20" width="10" height="2" rx="1" />
    <circle cx="12" cy="7" r="1.5" />
  </svg>
);
