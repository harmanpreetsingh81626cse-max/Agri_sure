import { Bookmark } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

interface BookmarkButtonProps {
  cropId: string;
  cropName: string;
}

function BookmarkButton({ cropId, cropName }: BookmarkButtonProps) {
  const { user, isFavorite, toggleFavorite } = useAuth();

  // not logged in -> no bookmark option at all
  if (!user) return null;

  const saved = isFavorite(cropId);

  return (
    <button
      type="button"
      className={`bookmark-btn${saved ? " saved" : ""}`}
      onClick={() => toggleFavorite(cropId)}
      aria-label={saved ? `Remove ${cropName} from bookmarks` : `Bookmark ${cropName}`}
      title={saved ? "Remove bookmark" : "Bookmark this crop"}
    >
      <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
    </button>
  );
}

export default BookmarkButton;