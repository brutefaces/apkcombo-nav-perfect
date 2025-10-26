import { Link } from "react-router-dom";
import { Smartphone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg">
              <div className="rounded-lg bg-primary p-1.5">
                <Smartphone className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                APKHub
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Download the latest APK files for Android apps and games.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/categories" className="hover:text-primary transition-smooth">All Categories</Link></li>
              <li><Link to="/category/games" className="hover:text-primary transition-smooth">Games</Link></li>
              <li><Link to="/category/apps" className="hover:text-primary transition-smooth">Apps</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/download" className="hover:text-primary transition-smooth">Download Guide</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-smooth">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-smooth">Privacy Policy</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-smooth">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 APKHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
