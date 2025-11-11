import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  popular?: boolean;
}

export const ServiceCard = ({ title, description, features, price, popular }: ServiceCardProps) => {
  return (
    <Card className={`p-8 shadow-elegant hover:shadow-glow transition-all duration-300 relative ${popular ? 'border-primary border-2' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
            Paling Populer
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="font-playfair text-3xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="font-playfair text-4xl font-bold text-primary">{price}</div>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <Link to="/contact">
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          size="lg"
        >
          Konsultasi Gratis
        </Button>
      </Link>
    </Card>
  );
};
