
export interface User {
  id: string;
  name: string;
  email: string;
  cpf?: string;
  phone?: string;
  birthDate?: string;
  role: 'patient' | 'doctor';
  avatar?: string;
  createdAt: Date;
}

export interface Patient extends User {
  role: 'patient';
  medicalHistory?: MedicalHistory;
  appointments?: Appointment[];
  prescriptions?: Prescription[];
}

export interface Doctor extends User {
  role: 'doctor';
  crm: string;
  specialty: string;
  bio?: string;
  patients?: Patient[];
  availableSlots?: TimeSlot[];
  appointments?: Appointment[];
}

export interface MedicalHistory {
  id: string;
  patientId: string;
  notes: MedicalNote[];
  conditions?: string[];
  allergies?: string[];
  medications?: string[];
}

export interface MedicalNote {
  id: string;
  doctorId: string;
  doctorName: string;
  date: Date;
  content: string;
  isPrivate: boolean;
}

export interface TimeSlot {
  id: string;
  doctorId: string;
  startTime: Date;
  endTime: Date;
  isBooked: boolean;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  patientName: string;
  doctorName: string;
  startTime: Date;
  endTime: Date;
  status: 'scheduled' | 'completed' | 'cancelled' | 'no-show';
  notes?: string;
  followUpRequired?: boolean;
}

export interface Prescription {
  id: string;
  patientId: string;
  doctorId: string;
  doctorName: string;
  dateIssued: Date;
  medications: Medication[];
  instructions: string;
  expiryDate?: Date;
  fileUrl?: string;
}

export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age?: number;
  image?: string;
  content: string;
  rating: number;
  date: Date;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  author: string;
  authorRole: string;
  content: string;
  excerpt: string;
  coverImage: string;
  publishedAt: Date;
  tags: string[];
  readTimeMinutes: number;
}
