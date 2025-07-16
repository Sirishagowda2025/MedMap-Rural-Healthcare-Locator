import { Link } from 'react-router-dom';
import { MapPin, Phone, BookOpen, User, Heart, AlertCircle, ArrowLeft, Home, Settings } from 'lucide-react';
import { Button } from '../ui/button';
import { useUserData } from '../../hooks/useUserData';

const Dashboard = () => {
  const { userData, clearUserData } = useUserData();

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-4">No User Data Found</h1>
          <p className="text-muted-foreground mb-6">Please complete the check-in process first.</p>
          <Link to="/check-in">
            <Button className="btn-primary">Go to Check-in</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getLocationSpecificMessage = () => {
    switch (userData.location) {
      case 'Mandya':
        return 'We found 2 healthcare centers in Mandya district.';
      case 'Koppal':
        return 'We found 2 healthcare facilities in Koppal district.';
      case 'Gadchiroli':
        return 'We found 2 health centers in Gadchiroli district.';
      default:
        return 'Emergency contacts are available for your area.';
    }
  };

  return (
    <div className="min-h-screen gradient-hero py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-6">
          <Link to="/">
            <Button variant="outline" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Home</span>
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" size="sm" className="flex items-center space-x-1">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">About</span>
            </Button>
          </Link>
        </div>

        {/* Welcome Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
            Hello, {userData.fullName.split(' ')[0]}! 👋
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            {getLocationSpecificMessage()}
          </p>
        </div>

        {/* Quick Access Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Clinics Card */}
          <Link to="/clinics" className="group">
            <div className="card-healthcare p-4 sm:p-6 text-center group-hover:scale-105 transition-[var(--transition-bounce)]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-[var(--shadow-glow)]">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                Clinics in {userData.location}
              </h3>
              <p className="text-muted-foreground text-sm">
                Find nearby healthcare centers and their services
              </p>
            </div>
          </Link>

          {/* Emergency Card */}
          <Link to="/emergency" className="group">
            <div className="card-healthcare p-4 sm:p-6 text-center group-hover:scale-105 transition-[var(--transition-bounce)]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emergency rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-[var(--shadow-glow)]">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-emergency-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                Emergency Contacts
              </h3>
              <p className="text-muted-foreground text-sm">
                Quick access to ambulance and helpline numbers
              </p>
            </div>
          </Link>

          {/* Health Tips Card */}
          <Link to="/tips" className="group sm:col-span-2 lg:col-span-1">
            <div className="card-healthcare p-4 sm:p-6 text-center group-hover:scale-105 transition-[var(--transition-bounce)]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-wellness rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-[var(--shadow-glow)]">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-wellness-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                Wellness Tips
              </h3>
              <p className="text-muted-foreground text-sm">
                Essential health information and preventive care
              </p>
            </div>
          </Link>
        </div>

        {/* Personalized Recommendations */}
        <div className="card-healthcare p-6 mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
            <Heart className="w-6 h-6 text-primary mr-2" />
            Recommended for You
          </h2>
          
          <div className="space-y-4">
            {userData.helpNeeded.includes('emergency') && (
              <div className="p-4 bg-emergency/10 border border-emergency/20 rounded-lg">
                <h3 className="font-semibold text-emergency mb-2">⚡ Emergency Resources</h3>
                <p className="text-sm text-muted-foreground">
                  Quick access to ambulance (108) and emergency services is available 24/7.
                </p>
              </div>
            )}
            
            {userData.helpNeeded.includes('women') && (
              <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
                <h3 className="font-semibold text-secondary mb-2">👩‍⚕️ Women's Health</h3>
                <p className="text-sm text-muted-foreground">
                  Find specialized women's health services and maternal care in your area.
                </p>
              </div>
            )}
            
            {userData.helpNeeded.includes('children') && (
              <div className="p-4 bg-wellness/10 border border-wellness/20 rounded-lg">
                <h3 className="font-semibold text-wellness mb-2">👶 Child Health</h3>
                <p className="text-sm text-muted-foreground">
                  Access child healthcare services, vaccination schedules, and nutrition tips.
                </p>
              </div>
            )}

            {userData.helpNeeded.includes('covid') && (
              <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                <h3 className="font-semibold text-accent mb-2">😷 COVID Support</h3>
                <p className="text-sm text-muted-foreground">
                  COVID helpline (1075) and testing centers are available in your district.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* User Info Card */}
        <div className="card-healthcare p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Your Information</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p><span className="font-medium">Name:</span> {userData.fullName}</p>
                <p><span className="font-medium">Age:</span> {userData.age} years</p>
                <p><span className="font-medium">Location:</span> {userData.location}</p>
                <p><span className="font-medium">Help Needed:</span> {userData.helpNeeded.length > 0 ? userData.helpNeeded.join(', ') : 'None specified'}</p>
              </div>
            </div>
            <Button
              onClick={clearUserData}
              variant="outline"
              size="sm"
              className="text-muted-foreground hover:text-destructive"
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;