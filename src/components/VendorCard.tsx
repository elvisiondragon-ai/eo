import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star } from "lucide-react";

interface VendorCardProps {
  name: string;
  category: string;
  location: string;
  rating: number;
  description: string;
  specialties: string[];
}

export const VendorCard = ({ name, category, location, rating, description, specialties }: VendorCardProps) => {
  return (
    <Card className="p-6 shadow-elegant hover:shadow-glow transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-playfair text-2xl font-semibold text-foreground mb-1">{name}</h3>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
          <Star className="h-4 w-4 text-primary fill-primary" />
          <span className="font-semibold text-primary">{rating}</span>
        </div>
      </div>
      
      <Badge className="mb-3 bg-secondary text-secondary-foreground">{category}</Badge>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {specialties.map((specialty, index) => (
          <Badge key={index} variant="outline" className="text-xs">
            {specialty}
          </Badge>
        ))}
      </div>
    </Card>
  );
};
