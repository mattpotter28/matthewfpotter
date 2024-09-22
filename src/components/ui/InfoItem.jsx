export default function InfoItem({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-x-1.5">
      <Icon className="size-3.5" />
      <span className="text-xs font-medium">{text}</span>
    </div>
  );
}
