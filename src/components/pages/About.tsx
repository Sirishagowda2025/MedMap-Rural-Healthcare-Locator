import { Heart, Target, Users, Lightbulb, Globe, ArrowRight, ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { useUserData } from '../../hooks/useUserData';

const About = () => {
  const { userData } = useUserData();

  return (
    <div className="min-h-screen py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-6">
          <Link to={userData ? "/dashboard" : "/"}>
            <Button variant="outline" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to {userData ? "Dashboard" : "Home"}</span>
              <span className="sm:hidden">Back</span>
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outline" size="sm" className="flex items-center space-x-1">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl md:text-5xl font-bold text-foreground mb-4">
            About MedMap
          </h1>
          <p className="text-base md:text-xl text-muted-foreground">
            Empowering rural communities with accessible healthcare information
          </p>
        </div>

        {/* Mission Statement */}
        <div className="card-healthcare p-8 mb-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            MedMap was built for <strong className="text-primary">Innothon 2025 – Tech for Impact</strong> to empower rural communities 
            with simple access to healthcare information. We believe that every person, regardless of their location, 
            deserves easy access to essential healthcare services and information.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="card-healthcare p-6 text-center">
            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">500M+</div>
            <p className="text-muted-foreground">People we can help across rural India</p>
          </div>
          
          <div className="card-healthcare p-6 text-center">
            <div className="w-12 h-12 gradient-wellness rounded-xl flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-wellness-foreground" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">600K+</div>
            <p className="text-muted-foreground">Villages that need better healthcare access</p>
          </div>
          
          <div className="card-healthcare p-6 text-center">
            <div className="w-12 h-12 bg-emergency rounded-xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-emergency-foreground" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <p className="text-muted-foreground">Emergency support availability</p>
          </div>
        </div>

        {/* What We Do */}
        <div className="card-healthcare p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Lightbulb className="w-6 h-6 text-primary mr-2" />
            What MedMap Does
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Healthcare Discovery</h3>
                  <p className="text-muted-foreground text-sm">
                    Find nearby clinics, PHCs, and hospitals with contact details and services
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Emergency Access</h3>
                  <p className="text-muted-foreground text-sm">
                    Quick access to emergency numbers and helplines
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Health Education</h3>
                  <p className="text-muted-foreground text-sm">
                    Essential health tips and preventive care information
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Personalized Experience</h3>
                  <p className="text-muted-foreground text-sm">
                    Tailored healthcare information based on user needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="card-healthcare p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Future Vision & Scalability</h2>
          
          <div className="space-y-6">
            <p className="text-muted-foreground">
              This prototype currently serves 3 districts: <strong>Mandya, Koppal, and Gadchiroli</strong>. 
              If scaled with government APIs and partnerships, MedMap can support all 600+ districts across India.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">🎯 Planned Features</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• GPS-based location detection</li>
                  <li>• Integration with Ayushman Bharat</li>
                  <li>• ASHA worker network connection</li>
                  <li>• Multi-language support</li>
                  <li>• Offline functionality</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">🤝 Partnership Opportunities</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Government health departments</li>
                  <li>• NGOs and health organizations</li>
                  <li>• Rural healthcare workers</li>
                  <li>• Technology partners</li>
                  <li>• Telemedicine providers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Creator & Technology */}
        <div className="card-healthcare p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Built with Care</h2>
          <div className="space-y-4 mb-6">
            <p className="text-sm sm:text-base text-muted-foreground">
              MedMap was created by <strong className="text-primary">Sirisha D</strong> for <strong className="text-primary">Innothon 2025 – Tech for Impact</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              A solo project built using <strong className="text-primary">Lovable</strong> platform with modern web technologies 
              to ensure fast, reliable, and accessible healthcare information delivery.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
            <span className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-full border border-primary/20">
              React
            </span>
            <span className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-full border border-primary/20">
              TypeScript
            </span>
            <span className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-full border border-primary/20">
              Tailwind CSS
            </span>
            <span className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-full border border-primary/20">
              Mobile-First Design
            </span>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">🤝 Join Our Mission</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Are you a health worker or NGO? Join us to expand this network and help more communities.
              </p>
            </div>
            
            <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">🏆 Impact Goal</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Making healthcare information accessible to 500M+ people across rural India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;