export interface UserData {
  fullName: string;
  age: number;
  location: string;
  helpNeeded: string[];
}

export interface Clinic {
  id: string;
  name: string;
  services: string[];
  timings: string;
  phone: string;
  address: string;
  district: string;
}

export interface EmergencyContact {
  id: string;
  title: string;
  number: string;
  description: string;
  icon: string;
}

export interface HealthTip {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}