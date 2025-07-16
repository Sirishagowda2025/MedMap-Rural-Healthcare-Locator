import { Link } from 'react-router-dom';
import { MapPin, Phone, BookOpen, ArrowRight, Heart, Shield, Users } from 'lucide-react';
import { Button } from '../ui/button';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center shadow-[var(--shadow-elevated)]">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-glow">
            Welcome to <span className="text-primary">MedMap</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your guide to essential healthcare services in rural areas. 
            Find nearby clinics, emergency contacts, and health information instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/check-in">
              <Button className="btn-accent text-lg px-8 py-4 w-full sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
            <Link to="/emergency">
              <Button className="btn-emergency text-lg px-8 py-4 w-full sm:w-auto">
                Emergency Help
                <Phone className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            How MedMap Helps You
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Find Clinics */}
            <div className="card-healthcare p-8 text-center group hover:scale-105 transition-[var(--transition-bounce)]">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-[var(--shadow-glow)]">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Find Nearby Clinics</h3>
              <p className="text-muted-foreground">
                Locate healthcare centers, PHCs, and hospitals in your district with contact details and services offered.
              </p>
            </div>

            {/* Emergency Contacts */}
            <div className="card-healthcare p-8 text-center group hover:scale-105 transition-[var(--transition-bounce)]">
              <div className="w-16 h-16 bg-emergency rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-[var(--shadow-glow)]">
                <Phone className="w-8 h-8 text-emergency-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Access Emergency Contacts</h3>
              <p className="text-muted-foreground">
                Quick access to ambulance, women's helpline, child helpline, and COVID support numbers.
              </p>
            </div>

            {/* Health Tips */}
            <div className="card-healthcare p-8 text-center group hover:scale-105 transition-[var(--transition-bounce)]">
              <div className="w-16 h-16 gradient-wellness rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-[var(--shadow-glow)]">
                <BookOpen className="w-8 h-8 text-wellness-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Get Health Tips</h3>
              <p className="text-muted-foreground">
                Essential health information including hygiene practices, maternal care, and preventive measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/30 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Making Healthcare Accessible</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">500M+</div>
              <p className="text-muted-foreground">People we can help across rural India</p>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">600K+</div>
              <p className="text-muted-foreground">Villages that need better healthcare access</p>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Emergency support and information access</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;