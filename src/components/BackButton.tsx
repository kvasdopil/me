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

  const handleClick = () => {
    // Use browser history back when going to home page to preserve scroll position
    if (to === "/") {
      navigate(-1);
    } else {
      navigate(to);
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      ← {label}
    </button>
  );
}
