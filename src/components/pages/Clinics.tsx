import { useState, useMemo } from 'react';
import { MapPin, Clock, Phone, Heart, Filter } from 'lucide-react';
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
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nearby Clinics & PHCs
          </h1>
          <p className="text-lg text-muted-foreground">
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
          <div className="grid gap-6">
            {filteredClinics.map(clinic => (
              <div key={clinic.id} className="card-healthcare p-6 hover:scale-[1.02] transition-[var(--transition-smooth)]">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    {/* Clinic Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {clinic.name}
                        </h3>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{clinic.address}</span>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20">
                        {clinic.district}
                      </span>
                    </div>

                    {/* Services */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Services Offered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {clinic.services.map((service, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 text-xs font-medium rounded-full border ${getServiceBadgeColor(service)}`}
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Timings */}
                    <div className="flex items-center text-muted-foreground mb-4">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{clinic.timings}</span>
                    </div>
                  </div>

                  {/* Contact Section */}
                  <div className="lg:ml-6 mt-4 lg:mt-0">
                    <div className="text-center lg:text-right">
                      <div className="text-lg font-bold text-foreground mb-2">
                        📞 {clinic.phone}
                      </div>
                      <a href={`tel:${clinic.phone}`}>
                        <Button className="btn-secondary w-full lg:w-auto">
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