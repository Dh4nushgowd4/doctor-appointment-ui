// src/types/doctor.ts

export interface Doctor {
  id: number;
  name: string;
  email: string;
  password?: string; // Optional if hidden on fetch
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
