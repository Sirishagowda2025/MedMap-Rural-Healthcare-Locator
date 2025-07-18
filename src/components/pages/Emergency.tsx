import { Phone, Heart, AlertTriangle, ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { emergencyContacts } from '../../data/emergency';
import { useUserData } from '../../hooks/useUserData';

const Emergency = () => {
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
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-emergency rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-emergency-foreground" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Emergency Numbers
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Quick access to essential helpline numbers - available 24/7
          </p>
        </div>

        {/* Emergency Alert */}
        <div className="card-healthcare p-6 mb-8 bg-emergency/10 border-emergency/30">
          <div className="flex items-center">
            <AlertTriangle className="w-8 h-8 text-emergency mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-emergency mb-2">
                Life-threatening Emergency?
              </h2>
              <p className="text-foreground font-medium">
                Call <span className="text-2xl font-bold">108</span> immediately for free ambulance service
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Contacts Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
          {emergencyContacts.map(contact => (
            <div key={contact.id} className="card-healthcare p-6 sm:p-8 text-center hover:scale-105 transition-[var(--transition-bounce)]">
              {/* Icon */}
              <div className="text-5xl sm:text-6xl mb-4">{contact.icon}</div>
              
              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                {contact.title}
              </h3>
              
              {/* Number */}
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                {contact.number}
              </div>
              
              {/* Description */}
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                {contact.description}
              </p>
              
              {/* Call Button */}
              <a href={`tel:${contact.number}`} className="block">
                <Button className="btn-primary w-full text-base sm:text-lg py-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  📞 Tap to Call
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="space-y-6">
          {/* Important Notice */}
          <div className="card-healthcare p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
              <Heart className="w-6 h-6 text-primary mr-2" />
              Important Information
            </h2>
            <div className="space-y-3 text-muted-foreground">
              <p>• All emergency numbers are toll-free and available 24/7</p>
              <p>• Keep these numbers saved in your phone for quick access</p>
              <p>• Emergency services work across all networks and locations in India</p>
              <p>• For non-emergency health queries, visit your nearest clinic or PHC</p>
            </div>
          </div>

          {/* When to Call */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-healthcare p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                📞 When to Call 108 (Ambulance)
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Severe injury or accident</li>
                <li>• Heart attack or chest pain</li>
                <li>• Difficulty breathing</li>
                <li>• Unconsciousness</li>
                <li>• Severe bleeding</li>
                <li>• Poisoning or overdose</li>
              </ul>
            </div>

            <div className="card-healthcare p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                👩 When to Call 181 (Women's Helpline)
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Domestic violence</li>
                <li>• Sexual harassment</li>
                <li>• Dowry-related issues</li>
                <li>• Women's safety concerns</li>
                <li>• Legal assistance for women</li>
                <li>• Counseling support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;