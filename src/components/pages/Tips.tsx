import { BookOpen, Heart, Droplets, Baby, Brain, Shield } from 'lucide-react';
import { healthTips } from '../../data/tips';

const Tips = () => {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'prevention': return Shield;
      case 'women health': return Heart;
      case 'child health': return Baby;
      case 'mental health': return Brain;
      default: return BookOpen;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'prevention': return 'text-primary';
      case 'women health': return 'text-secondary';
      case 'child health': return 'text-wellness';
      case 'mental health': return 'text-accent';
      default: return 'text-primary';
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 gradient-wellness rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-wellness-foreground" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Health Awareness & Safety Tips
          </h1>
          <p className="text-lg text-muted-foreground">
            Essential health information to keep you and your family safe
          </p>
        </div>

        {/* Health Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {healthTips.map(tip => {
            const CategoryIcon = getCategoryIcon(tip.category);
            const categoryColor = getCategoryColor(tip.category);
            
            return (
              <div key={tip.id} className="card-healthcare p-6 hover:scale-105 transition-[var(--transition-bounce)]">
                {/* Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{tip.icon}</div>
                  <div className={`flex items-center ${categoryColor}`}>
                    <CategoryIcon className="w-4 h-4 mr-1" />
                    <span className="text-xs font-medium uppercase tracking-wide">
                      {tip.category}
                    </span>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {tip.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {tip.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Quick Tips */}
        <div className="card-healthcare p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Heart className="w-6 h-6 text-primary mr-2" />
            Quick Health Reminders
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">🍎 Daily Health Habits</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Drink 8-10 glasses of clean water daily</li>
                <li>• Eat fresh fruits and vegetables</li>
                <li>• Exercise for at least 30 minutes</li>
                <li>• Get 7-8 hours of sleep</li>
                <li>• Wash hands frequently</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">⚠️ When to See a Doctor</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Fever lasting more than 3 days</li>
                <li>• Persistent cough or breathing problems</li>
                <li>• Severe stomach pain or vomiting</li>
                <li>• Unusual changes in health</li>
                <li>• Regular checkups (once a year)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Seasonal Health Tips */}
        <div className="card-healthcare p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Droplets className="w-6 h-6 text-primary mr-2" />
            Seasonal Health Care
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">☀️</div>
              <h3 className="font-semibold text-foreground mb-2">Summer Care</h3>
              <p className="text-sm text-muted-foreground">
                Stay hydrated, avoid heat stroke, use sun protection
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-3">🌧️</div>
              <h3 className="font-semibold text-foreground mb-2">Monsoon Care</h3>
              <p className="text-sm text-muted-foreground">
                Prevent waterborne diseases, avoid stagnant water
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-3">🥶</div>
              <h3 className="font-semibold text-foreground mb-2">Winter Care</h3>
              <p className="text-sm text-muted-foreground">
                Keep warm, prevent respiratory infections, vitamin D
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;