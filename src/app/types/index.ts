// src/types/index.ts or src/types.ts

export interface Appointment {
  id: number;
  doctorId: number;
  patientName: string;
  date: string;
  time: string;
}

export interface Doctor {
  id: number;
  name: string;
  email: string;
  password: string;
  specialty: string;
  availableDates: string[];
}
