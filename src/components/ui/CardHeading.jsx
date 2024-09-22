export default function CardHeading({ heading }) {
  return (
    <h2 className="flex items-center gap-x-2.5 px-4 pt-2.5 text-base font-medium before:h-1.5 before:w-1.5 before:rounded-full before:bg-blue-600">
      {heading}
    </h2>
  );
}
