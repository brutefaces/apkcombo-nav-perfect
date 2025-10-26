import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppCard from "@/components/AppCard";
import { allApps } from "@/data/mockData";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const results = allApps.filter(app =>
    app.name.toLowerCase().includes(query.toLowerCase()) ||
    app.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Search Results for "{query}"
            </h1>
            <p className="text-muted-foreground">
              Found {results.length} {results.length === 1 ? "result" : "results"}
            </p>
          </div>

          {results.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {results.map((app) => (
                <AppCard key={app.id} {...app} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <SearchIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">No results found</h2>
              <p className="text-muted-foreground">
                Try searching with different keywords
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Search;
