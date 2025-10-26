import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppCard from "@/components/AppCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Star, Shield, Clock, Smartphone } from "lucide-react";
import { allApps } from "@/data/mockData";

const AppDetail = () => {
  const { id } = useParams();
  const app = allApps.find(a => a.id === id) || allApps[0];
  const similarApps = allApps.filter(a => a.category === app.category && a.id !== app.id).slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* App Header */}
        <section className="border-b bg-muted/30">
          <div className="container py-12">
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              <div>
                <img
                  src={app.icon}
                  alt={app.name}
                  className="w-full aspect-square rounded-3xl shadow-lg object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge>{app.category}</Badge>
                    {app.featured && (
                      <Badge variant="destructive">Editor's Choice</Badge>
                    )}
                  </div>
                  <h1 className="text-4xl font-bold mb-2">{app.name}</h1>
                  <p className="text-muted-foreground">
                    Fast, secure, and feature-rich application
                  </p>
                </div>

                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <div>
                      <div className="font-semibold">{app.rating}</div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">{app.downloads}</div>
                      <div className="text-xs text-muted-foreground">Downloads</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-secondary" />
                    <div>
                      <div className="font-semibold">Android 5.0+</div>
                      <div className="text-xs text-muted-foreground">Version</div>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="gradient-primary w-full md:w-auto px-12">
                  <Download className="mr-2 h-5 w-5" />
                  Download APK
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-12">
          <div className="container max-w-4xl">
            <h2 className="text-2xl font-bold mb-4">About {app.name}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {app.name} is one of the most popular apps in the {app.category} category. 
              With over {app.downloads} downloads and a {app.rating} star rating, it has become 
              a trusted choice for millions of users worldwide. The app offers a seamless experience 
              with regular updates and new features.
            </p>

            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Shield className="h-5 w-5 text-primary mt-0.5" />
                <span>Secure and safe to use with regular security updates</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <span>Fast performance and optimized for all Android devices</span>
              </li>
              <li className="flex items-start gap-2">
                <Download className="h-5 w-5 text-primary mt-0.5" />
                <span>Regular updates with new features and improvements</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Similar Apps */}
        {similarApps.length > 0 && (
          <section className="py-12 bg-muted/30">
            <div className="container">
              <h2 className="text-2xl font-bold mb-6">Similar Apps</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {similarApps.map((app) => (
                  <AppCard key={app.id} {...app} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AppDetail;
