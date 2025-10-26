import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import {
  Gamepad2,
  Smartphone,
  Wrench,
  MessageCircle,
  Film,
  GraduationCap,
  Camera,
  Briefcase,
} from "lucide-react";

const Categories = () => {
  const mainCategories = [
    { name: "Games", slug: "games", icon: Gamepad2, count: 5000, gradient: "gradient-primary" },
    { name: "Apps", slug: "apps", icon: Smartphone, count: 3000, gradient: "bg-gradient-to-br from-secondary to-secondary/80" },
    { name: "Tools", slug: "tools", icon: Wrench, count: 1500, gradient: "bg-gradient-to-br from-accent to-accent/80" },
    { name: "Social", slug: "social", icon: MessageCircle, count: 800, gradient: "bg-gradient-to-br from-pink-500 to-pink-600" },
    { name: "Entertainment", slug: "entertainment", icon: Film, count: 1200, gradient: "bg-gradient-to-br from-purple-500 to-purple-600" },
    { name: "Education", slug: "education", icon: GraduationCap, count: 600, gradient: "bg-gradient-to-br from-blue-500 to-blue-600" },
    { name: "Photography", slug: "photography", icon: Camera, count: 400, gradient: "bg-gradient-to-br from-orange-500 to-orange-600" },
    { name: "Productivity", slug: "productivity", icon: Briefcase, count: 900, gradient: "bg-gradient-to-br from-green-500 to-green-600" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Browse Categories</h1>
            <p className="text-lg text-muted-foreground">
              Explore our extensive collection of apps and games organized by category
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mainCategories.map((category) => (
              <CategoryCard key={category.slug} {...category} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
