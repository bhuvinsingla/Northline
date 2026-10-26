export type IconName =
  | "mobility"
  | "logistics"
  | "network"
  | "route"
  | "supply"
  | "geo"
  | "software"
  | "retail"
  | "lastmile"
  | "food";

const paths: Record<IconName, string> = {
  mobility: "M3 15h13l2-4h3v4h1M6 15v2M15 15v2M5 17h2M14 17h2M4 15l2-6h7l2 3",
  logistics: "M4 8h7v8H4zM11 10h5l4 3v3h-9zM7 16v2M16 16v2M6 18h2M15 18h2",
  network: "M5 6h4v4H5zM15 5h4v4h-4zM14 15h5v4h-5zM9 8v4H8v3h6M9 8h6",
  route: "M4 18V8h6v6h6V6h4",
  supply: "M4 10 12 5l8 5v9H4zM12 10v9M4 10h16",
  geo: "M12 20s6-5.2 6-9a6 6 0 1 0-12 0c0 3.8 6 9 6 9zM12 11.2a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2z",
  software: "M4 5h16v11H4zM8 20h8M12 16v4",
  retail: "M4 10h16v9H4zM6 10V7h12v3M9 14h6",
  lastmile: "M5 17h10l3-5H8M6 17a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM15 17a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM4 8h6",
  food: "M6 8h12v11H6zM8 8V6h8v2M9 12h6M9 15h4",
};

export function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="miter"
    >
      <path d={paths[name]} />
    </svg>
  );
}

export function IconBadge({ name }: { name: IconName }) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center border border-copper/50 text-copper">
      <Icon name={name} />
    </span>
  );
}
