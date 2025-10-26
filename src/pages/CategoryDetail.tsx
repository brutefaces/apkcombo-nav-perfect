import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppCard from "@/components/AppCard";
import { Badge } from "@/components/ui/badge";
import { allApps, gameCategories } from "@/data/mockData";
import { Gamepad2 } from "lucide-react";

const CategoryDetail = () => {
  const { slug } = useParams();
  
  const categoryName = slug?.split("-").map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(" ") || "Category";

  const relatedApps = allApps.filter(app => 
    app.category.toLowerCase().includes(slug?.split("-")[0] || "")
  );

  const displayApps = relatedApps.length > 0 ? relatedApps : allApps.slice(0, 12);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Category Hero */}
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 gradient-hero opacity-5"></div>
          <div className="container py-12 relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center">
                <Gamepad2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">{categoryName}</h1>
                <p className="text-muted-foreground mt-1">
                  {displayApps.length}+ apps available
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Subcategories (for games) */}
        {slug === "games" && (
          <section className="border-b bg-muted/30">
            <div className="container py-6">
              <div className="flex flex-wrap gap-2">
                {gameCategories.map((subcat) => (
                  <Badge 
                    key={subcat.slug} 
                    variant="secondary" 
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    {subcat.name}
                  </Badge>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Apps Grid */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {displayApps.map((app) => (
                <AppCard key={app.id} {...app} />
              ))}
            </div>

            {displayApps.length === 0 && (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground">No apps found in this category yet.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryDetail;
