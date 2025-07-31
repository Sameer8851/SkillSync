import { StarIcon } from "lucide-react";
import Image from "next/image";

export default function FeedbackCard({ feedback }) {
  return (
    <div className="bg-background border border-border rounded-lg p-6 shadow-sm flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-primary/30">
          <Image
            src={feedback.image || "/default-user.jpg"}
            alt={feedback.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-semibold">{feedback.name}</p>
          <p className="text-sm text-muted-foreground">{feedback.role}</p>
        </div>
      </div>

      <p className="text-muted-foreground italic relative pl-4 border-l-2 border-primary">
        “{feedback.message}”
      </p>

      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon
            key={index}
            size={16}
            className={
              index < feedback.rating
                ? "text-yellow-500 fill-yellow-500"
                : "text-muted"
            }
          />
        ))}
      </div>
    </div>
  );
}
