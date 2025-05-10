export const Knight: React.FC<React.SVGProps<SVGSVGElement>> = ({
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
    <path d="M7 20c0-5 4-9 7-9l-3-5 6 2c-1 2-1 4 1 6 1 1 2 2 2 3v3H7z" />
    <circle cx="15" cy="10" r="1" />
    <rect x="7" y="20" width="10" height="2" rx="1" />
  </svg>
);
