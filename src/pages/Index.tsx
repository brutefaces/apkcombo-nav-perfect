import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppCard from "@/components/AppCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredApps, hotGames } from "@/data/mockData";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 gradient-hero opacity-10"></div>
          <div className="container py-20 md:py-32 relative">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Zap className="h-4 w-4" />
                Download APK - Latest Version
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Download Your Favorite
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Android Apps & Games
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Access the latest versions of apps and games with fast, secure downloads
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="gradient-primary text-lg px-8" asChild>
                  <Link to="/categories">
                    Explore Categories
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <Link to="/download">
                    <Download className="mr-2 h-5 w-5" />
                    Download Guide
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 border-y bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Fast Downloads</h3>
                <p className="text-sm text-muted-foreground">Quick and reliable APK downloads</p>
              </div>
              <div className="text-center space-y-2">
                <div className="mx-auto w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold">Safe & Secure</h3>
                <p className="text-sm text-muted-foreground">All files are verified and safe</p>
              </div>
              <div className="text-center space-y-2">
                <div className="mx-auto w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold">Latest Versions</h3>
                <p className="text-sm text-muted-foreground">Always up-to-date apps and games</p>
              </div>
            </div>
          </div>
        </section>

        {/* Editor's Choice */}
        <section className="py-16">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold">Editor's Choice</h2>
                <p className="text-muted-foreground mt-2">Handpicked apps recommended for you</p>
              </div>
              <Button variant="outline" asChild>
                <Link to="/categories">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {featuredApps.map((app) => (
                <AppCard key={app.id} {...app} />
              ))}
            </div>
          </div>
        </section>

        {/* Hot Games */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold">Games - Hot 🔥</h2>
                <p className="text-muted-foreground mt-2">Trending games everyone's playing</p>
              </div>
              <Button variant="outline" asChild>
                <Link to="/category/games">
                  See More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {hotGames.map((game) => (
                <AppCard key={game.id} {...game} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
