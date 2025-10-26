import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  name: string;
  slug: string;
  icon: LucideIcon;
  count: number;
  gradient: string;
}

const CategoryCard = ({ name, slug, icon: Icon, count, gradient }: CategoryCardProps) => {
  return (
    <Link to={`/category/${slug}`}>
      <Card className={`group overflow-hidden transition-smooth hover:shadow-glow hover:-translate-y-2 cursor-pointer ${gradient}`}>
        <div className="p-6 space-y-3 text-center">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-white/90 dark:bg-black/30 flex items-center justify-center backdrop-blur-sm">
            <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-smooth" />
          </div>
          <div>
            <h3 className="font-semibold text-white group-hover:scale-105 transition-smooth">
              {name}
            </h3>
            <p className="text-sm text-white/80 mt-1">
              {count}+ apps
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
