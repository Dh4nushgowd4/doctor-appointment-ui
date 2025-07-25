export interface Doctor {
    id: number;
    name: string;
    specialty: string;
    availableDays: string[];
  }
  
  export interface Appointment {
    id?: number;
    doctorId: number;
    patientName: string;
    date: string;
    time: string;
  }
  