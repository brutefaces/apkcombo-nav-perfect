import { Link } from "react-router-dom";
import { Download, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AppCardProps {
  id: string;
  name: string;
  icon: string;
  category: string;
  downloads: string;
  rating: number;
  featured?: boolean;
}

const AppCard = ({ id, name, icon, category, downloads, rating, featured }: AppCardProps) => {
  return (
    <Link to={`/app/${id}`}>
      <Card className="group overflow-hidden transition-smooth hover:shadow-lg hover:-translate-y-1 cursor-pointer">
        <div className="p-4 space-y-3">
          <div className="flex items-start gap-3">
            <div className="relative">
              <img
                src={icon}
                alt={name}
                className="w-16 h-16 rounded-xl object-cover shadow-md"
              />
              {featured && (
                <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-1.5 py-0">
                  Hot
                </Badge>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-smooth">
                {name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">{category}</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Download className="h-3 w-3" />
              <span>{downloads}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span>{rating}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default AppCard;
