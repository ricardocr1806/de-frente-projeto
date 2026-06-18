import { Star } from "lucide-react";

export function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-gold text-gold"
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}
