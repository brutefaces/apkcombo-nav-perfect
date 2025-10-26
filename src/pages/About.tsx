import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Smartphone, Users, Globe, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Smartphone, label: "Apps Available", value: "10,000+" },
    { icon: Users, label: "Active Users", value: "1M+" },
    { icon: Globe, label: "Countries", value: "150+" },
    { icon: Heart, label: "Downloads", value: "100M+" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 gradient-hero opacity-5"></div>
          <div className="container py-20 relative">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl font-bold">About APKHub</h1>
              <p className="text-xl text-muted-foreground">
                Your trusted source for Android apps and games
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                APKHub is a leading platform for downloading Android applications and games. 
                We provide a safe, fast, and reliable way to access the latest versions of 
                your favorite apps, all in one convenient location.
              </p>
              
              <h2 className="text-2xl font-bold mt-12 mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to make Android apps accessible to everyone, everywhere. 
                We believe in providing a secure platform where users can discover, download, 
                and enjoy the best apps and games for their Android devices.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">Why Choose Us?</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>All APK files are verified and scanned for security</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Fast download speeds with reliable servers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Regular updates to ensure you have the latest versions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>User-friendly interface for easy navigation</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center">
                  <stat.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
