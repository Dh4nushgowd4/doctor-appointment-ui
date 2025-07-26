// src/types/doctor.ts

// Doctor interface for signup, login, profile, etc.
// src/types/doctor.ts

export interface Doctor {
    id: number;
    name: string;
    email: string;
    specialty: string;
    availableDays: string[];
  }
  
  export interface Appointment {
    id: number;
    doctorId: number;
    patientName: string;
    date: string;
    time: string;
  }
  
  
  // Used for login credentials
  export interface DoctorLoginInput {
    email: string;
    password: string;
  }
  
  // Used for signup form input
  export interface DoctorSignupInput {
    name: string;
    email: string;
    password: string;
    specialty: string;
  }
  
  // Optional: used after login to keep doctor in context
  export interface DoctorAuthState {
    isLoggedIn: boolean;
    doctor: Doctor | null;
  }
  