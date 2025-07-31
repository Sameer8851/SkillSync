import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function FeedbackCard({ feedback, onDelete, canDelete, isDeleting }) {
  const { id, name, role, message, rating, image } = feedback;
  const stars = "⭐️".repeat(rating) + "☆".repeat(5 - rating);

  return (
    <Card
      className={`w-full max-w-sm bg-muted/30 border border-muted-foreground/20 overflow-hidden relative transition-opacity duration-900 ${
        isDeleting ? "opacity-0" : "opacity-100"
      }`}
    >
      {canDelete && (
        <button
          onClick={() => onDelete(id)}
          className="absolute top-2 right-2 text-red-500 text-lg font-bold hover:text-red-700"
          title="Delete Feedback"
        >
          ×
        </button>
      )}

      <CardContent className="p-4 space-y-4">
        <div className="flex items-center space-x-3">
          <Image
            src={image || "/placeholder.png"}
            alt={name}
            width={40}
            height={40}
            className="rounded-full border border-muted-foreground/30"
          />
          <div>
            <p className="font-semibold text-white">{name}</p>
            <Badge variant="secondary" className="text-xs">
              {role}
            </Badge>
          </div>
        </div>

        <p className="text-muted-foreground text-sm italic break-words">
          "{message}"
        </p>

        <p className="text-yellow-400 text-sm">{stars}</p>
      </CardContent>
    </Card>
  );
}
