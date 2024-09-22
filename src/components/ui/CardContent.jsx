import clsx from "clsx";

export default function CardContent({ children, className }) {
  return (
    <div className={clsx("rounded-md bg-gray-50 p-4", className)}>
      {children}
    </div>
  );
}
