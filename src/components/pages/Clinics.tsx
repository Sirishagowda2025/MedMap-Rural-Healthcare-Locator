import { useState, useMemo } from 'react';
import { MapPin, Clock, Phone, Heart, Filter, ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { useUserData } from '../../hooks/useUserData';
import { clinics } from '../../data/clinics';

const Clinics = () => {
  const { userData } = useUserData();
  const [selectedDistrict, setSelectedDistrict] = useState(userData?.location || 'All');

  const districts = ['All', 'Mandya', 'Koppal', 'Gadchiroli'];

  const filteredClinics = useMemo(() => {
    if (selectedDistrict === 'All') return clinics;
    return clinics.filter(clinic => clinic.district === selectedDistrict);
  }, [selectedDistrict]);

  const getServiceBadgeColor = (service: string) => {
    if (service.toLowerCase().includes('emergency')) return 'bg-emergency/10 text-emergency border-emergency/20';
    if (service.toLowerCase().includes('women') || service.toLowerCase().includes('maternal')) return 'bg-secondary/10 text-secondary border-secondary/20';
    if (service.toLowerCase().includes('child') || service.toLowerCase().includes('pediatric')) return 'bg-wellness/10 text-wellness border-wellness/20';
    return 'bg-primary/10 text-primary border-primary/20';
  };

  return (
    <div className="min-h-screen py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
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
          <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Nearby Clinics & PHCs
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            {selectedDistrict === 'All' 
              ? 'Healthcare centers across all districts'
              : `Healthcare centers in ${selectedDistrict} district`
            }
          </p>
        </div>

        {/* Filter */}
        <div className="card-healthcare p-4 mb-8">
          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="font-medium text-foreground">Filter by District:</span>
            <div className="flex flex-wrap gap-2">
              {districts.map(district => (
                <Button
                  key={district}
                  onClick={() => setSelectedDistrict(district)}
                  variant={selectedDistrict === district ? "default" : "outline"}
                  size="sm"
                  className={selectedDistrict === district ? "btn-primary" : ""}
                >
                  {district}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Clinics List */}
        {filteredClinics.length > 0 ? (
          <div className="grid gap-4 sm:gap-6">
            {filteredClinics.map(clinic => (
              <div key={clinic.id} className="card-healthcare p-4 sm:p-6 hover:scale-[1.02] transition-[var(--transition-smooth)]">
                <div className="space-y-4">
                  {/* Clinic Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                        {clinic.name}
                      </h3>
                      <div className="flex items-start text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4 mr-1 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{clinic.address}</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 self-start">
                      {clinic.district}
                    </span>
                  </div>

                  {/* Services */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Services Offered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {clinic.services.map((service, index) => (
                        <span
                          key={index}
                          className={`px-2 sm:px-3 py-1 text-xs font-medium rounded-full border ${getServiceBadgeColor(service)}`}
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Timings and Contact */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{clinic.timings}</span>
                    </div>

                    {/* Contact Section */}
                    <div className="text-center sm:text-right">
                      <div className="text-base sm:text-lg font-bold text-foreground mb-2">
                        📞 {clinic.phone}
                      </div>
                      <a href={`tel:${clinic.phone}`}>
                        <Button className="btn-secondary w-full sm:w-auto">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No Clinics Found
            </h3>
            <p className="text-muted-foreground mb-6">
              No healthcare centers found in {selectedDistrict} district.
            </p>
            <Button 
              onClick={() => setSelectedDistrict('All')}
              className="btn-primary"
            >
              View All Districts
            </Button>
          </div>
        )}

        {/* Emergency Notice */}
        <div className="card-healthcare p-6 mt-8 bg-emergency/5 border-emergency/20">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-emergency rounded-xl flex items-center justify-center mr-4">
              <Phone className="w-6 h-6 text-emergency-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Emergency?
              </h3>
              <p className="text-muted-foreground text-sm">
                For immediate medical emergencies, call <strong>108</strong> for free ambulance service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinics;