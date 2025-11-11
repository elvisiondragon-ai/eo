import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface EventCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  className?: string;
}

export const EventCard = ({ image, title, category, description, className }: EventCardProps) => {
  return (
    <Card className={cn("group overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500", className)}>
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={image} 
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-elegant-black/80 via-elegant-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-playfair text-2xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  );
};
