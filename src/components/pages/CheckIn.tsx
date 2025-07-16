import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, MapPin, Heart, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useUserData } from '../../hooks/useUserData';

const CheckIn = () => {
  const navigate = useNavigate();
  const { saveUserData } = useUserData();
  
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    location: '',
    helpNeeded: [] as string[]
  });

  const districts = [
    'Mandya',
    'Koppal', 
    'Gadchiroli',
    'Other'
  ];

  const helpOptions = [
    { id: 'general', label: 'General Checkup', icon: '🏥' },
    { id: 'women', label: "Women's Health", icon: '👩‍⚕️' },
    { id: 'children', label: 'Children Health', icon: '👶' },
    { id: 'emergency', label: 'Emergency', icon: '🚨' },
    { id: 'covid', label: 'COVID Help', icon: '😷' }
  ];

  const handleHelpChange = (helpId: string) => {
    setFormData(prev => ({
      ...prev,
      helpNeeded: prev.helpNeeded.includes(helpId)
        ? prev.helpNeeded.filter(h => h !== helpId)
        : [...prev.helpNeeded, helpId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.age || !formData.location) {
      alert('Please fill in all required fields');
      return;
    }

    saveUserData({
      fullName: formData.fullName,
      age: parseInt(formData.age),
      location: formData.location,
      helpNeeded: formData.helpNeeded
    });

    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen gradient-hero py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tell Us About Yourself
          </h1>
          <p className="text-lg text-muted-foreground">
            Help us provide personalized healthcare information for your area
          </p>
        </div>

        <div className="card-healthcare p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium text-foreground">
                Full Name *
              </Label>
              <Input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                placeholder="Enter your full name"
                className="w-full p-3 text-lg border-2 border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>

            {/* Age */}
            <div className="space-y-2">
              <Label htmlFor="age" className="text-sm font-medium text-foreground">
                Age *
              </Label>
              <Input
                id="age"
                type="number"
                value={formData.age}
                onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                placeholder="Enter your age"
                min="1"
                max="120"
                className="w-full p-3 text-lg border-2 border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location" className="text-sm font-medium text-foreground">
                District *
              </Label>
              <select
                id="location"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                className="w-full p-3 text-lg border-2 border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background"
                required
              >
                <option value="">Select your district</option>
                {districts.map(district => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </div>

            {/* Help Needed */}
            <div className="space-y-4">
              <Label className="text-sm font-medium text-foreground">
                What type of help do you need? (Select all that apply)
              </Label>
              <div className="grid gap-3">
                {helpOptions.map(option => (
                  <label
                    key={option.id}
                    className={`flex items-center space-x-3 p-3 sm:p-4 border-2 rounded-lg cursor-pointer transition-[var(--transition-smooth)] ${
                      formData.helpNeeded.includes(option.id)
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50 hover:bg-primary/5'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.helpNeeded.includes(option.id)}
                      onChange={() => handleHelpChange(option.id)}
                      className="sr-only"
                    />
                    <span className="text-2xl">{option.icon}</span>
                    <span className="font-medium text-foreground">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="btn-primary w-full text-lg py-4 mt-8"
            >
              Continue to Dashboard
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            <AlertCircle className="w-4 h-4 inline mr-1" />
            Your information is stored locally and never shared with third parties
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckIn;