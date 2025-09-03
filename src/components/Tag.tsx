export type TagProps = {
  label: string;
  className?: string;
};

export default function Tag({ label, className }: TagProps) {
  const baseClass =
    "inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 shadow-sm";
  const combined = className ? `${baseClass} ${className}` : baseClass;
  return <span className={combined}>{label}</span>;
}
