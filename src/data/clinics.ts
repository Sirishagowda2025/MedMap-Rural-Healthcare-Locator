import { Clinic } from '../types';

export const clinics: Clinic[] = [
  {
    id: '1',
    name: 'Mandya Rural Health Center',
    services: ['General OPD', 'Vaccination', 'Maternal Care', 'Basic Surgery'],
    timings: '9AM–4PM, Mon–Sat',
    phone: '080-12345678',
    address: 'Near Bus Stand, Mandya Town',
    district: 'Mandya'
  },
  {
    id: '2',
    name: 'Primary Health Centre Mandya',
    services: ['Emergency Care', 'Child Health', 'Family Planning'],
    timings: '24/7 Emergency, 8AM–6PM Regular',
    phone: '080-87654321',
    address: 'Main Road, Mandya',
    district: 'Mandya'
  },
  {
    id: '3',
    name: 'Koppal Government Hospital',
    services: ['General Medicine', 'Surgery', 'Gynecology', 'Pediatrics'],
    timings: '8AM–2PM, Mon–Sat',
    phone: '08533-222333',
    address: 'Hospital Road, Koppal',
    district: 'Koppal'
  },
  {
    id: '4',
    name: 'Koppal Rural PHC',
    services: ['Basic Health', 'Immunization', 'ASHA Services'],
    timings: '9AM–1PM, Mon–Fri',
    phone: '08533-444555',
    address: 'Village Center, Koppal',
    district: 'Koppal'
  },
  {
    id: '5',
    name: 'Gadchiroli District Hospital',
    services: ['Emergency', 'Malaria Treatment', 'Tribal Health'],
    timings: '24/7 Emergency Available',
    phone: '07132-123456',
    address: 'Civil Lines, Gadchiroli',
    district: 'Gadchiroli'
  },
  {
    id: '6',
    name: 'Gadchiroli Community Health Centre',
    services: ['Women Health', 'Child Care', 'Nutritional Support'],
    timings: '8AM–4PM, Mon–Sat',
    phone: '07132-789012',
    address: 'Tribal Area, Gadchiroli',
    district: 'Gadchiroli'
  }
];