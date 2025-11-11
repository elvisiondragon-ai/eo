import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const TestimonialCard = ({ name, role, content, rating }: TestimonialCardProps) => {
  return (
    <Card className="p-8 shadow-elegant hover:shadow-glow transition-all duration-300 bg-card">
      <Quote className="h-8 w-8 text-primary mb-4" />
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-primary text-lg">★</span>
        ))}
      </div>
      <p className="text-foreground mb-6 leading-relaxed italic">{content}</p>
      <div>
        <p className="font-playfair font-semibold text-lg text-foreground">{name}</p>
        <p className="text-muted-foreground text-sm">{role}</p>
      </div>
    </Card>
  );
};
