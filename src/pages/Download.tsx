import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Download, Smartphone, Shield, CheckCircle2 } from "lucide-react";

const DownloadPage = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "Enable Unknown Sources",
      description: "Go to Settings > Security and enable 'Unknown Sources' to allow APK installations",
    },
    {
      icon: Download,
      title: "Download the APK",
      description: "Click the download button on any app page to get the APK file",
    },
    {
      icon: CheckCircle2,
      title: "Install the App",
      description: "Open the downloaded APK file and follow the installation prompts",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 gradient-hero opacity-5"></div>
          <div className="container py-20 relative">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <Download className="h-16 w-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold">How to Download & Install APK Files</h1>
              <p className="text-xl text-muted-foreground">
                Follow these simple steps to install apps from APKHub
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-4xl">
            <div className="grid gap-8">
              {steps.map((step, index) => (
                <Card key={index} className="p-6">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary mb-2">
                        Step {index + 1}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container max-w-4xl">
            <Card className="p-8">
              <div className="flex gap-4 items-start">
                <Shield className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Safety & Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All APK files on APKHub are scanned and verified for security. 
                    We ensure that every download is safe and free from malware. 
                    However, we always recommend downloading apps from trusted sources 
                    and keeping your device's security software up to date.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DownloadPage;
