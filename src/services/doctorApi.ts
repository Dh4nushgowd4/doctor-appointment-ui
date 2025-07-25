// src/services/doctorApi.ts

import type { Appointment } from "@/types/doctor";

export const fetchAppointments = async (): Promise<Appointment[]> => {
  const res = await fetch("http://localhost:3000/appointments");

  if (!res.ok) {
    throw new Error("Failed to fetch appointments");
  }

  return res.json(); // returns an array of appointments
};
