import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-8 sm:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 gradient-primary rounded-md flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold text-primary">MedMap</span>
          </div>
          
          <p className="text-sm sm:text-base text-muted-foreground mb-4">
            Rural Healthcare Locator - Your guide to essential healthcare services
          </p>
          
          <div className="border-t border-border pt-4 space-y-2">
            <p className="text-sm text-muted-foreground">
              Built by <span className="font-semibold text-primary">Sirisha D</span> for <span className="font-semibold text-primary">Innothon 2025</span> – Tech for Impact
            </p>
            <p className="text-xs text-muted-foreground">
              A solo project focused on rural health access using <strong>Lovable</strong>
            </p>
            <p className="text-xs text-muted-foreground">
              Empowering rural communities • Helping 500M+ people across 600K+ villages
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;