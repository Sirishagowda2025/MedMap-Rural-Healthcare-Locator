import { Heart, Target, Users, Lightbulb, Globe, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const About = () => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About MedMap
          </h1>
          <p className="text-xl text-muted-foreground">
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
        <div className="card-healthcare p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Built with Care</h2>
          <p className="text-muted-foreground mb-6">
            MedMap was created by <strong className="text-primary">Sirisha D</strong> using modern web technologies 
            to ensure fast, reliable, and accessible healthcare information delivery.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
              React
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
              Mobile-First Design
            </span>
          </div>
          
          <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Are you a health worker or NGO?</strong> Join us to expand this network and help more communities. 
              Together, we can make healthcare information accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;