export interface Doctor {
    id: number;
    name: string;
    specialization: string;
    availableDates: string[]; // or Date[]
  }
  