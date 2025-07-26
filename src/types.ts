// src/types.ts
export interface Doctor {
  id: number;
  name: string;
  email: string;
  password: string;
  specialty: string; // ✅ changed from 'specialization'
  availableDates: string[];
}


export interface Appointment {
  id?: number;
  doctorId: number;
  patientName: string;
  date: string;
  time: string;
}
