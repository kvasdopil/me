import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  to?: string;
  label?: string;
  className?: string;
}

export default function BackButton({
  to = "/",
  label = "Back to Home",
  className = "cursor-pointer fixed top-6 left-6 z-20 inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-md shadow-md hover:shadow-lg border border-gray-200",
}: BackButtonProps) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(to)} className={className}>
      ← {label}
    </button>
  );
}
