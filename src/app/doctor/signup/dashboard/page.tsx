"use client";

import { useEffect, useState } from "react";
import { fetchAppointments } from "@/services/doctorApi";
import type { Appointment } from "@/types";

export default function DoctorDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const data = await fetchAppointments();
        setAppointments(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    getAppointments();
  }, []);

  if (loading) return <p>Loading appointments...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Appointments</h1>
      <ul className="space-y-2">
        {appointments.map((appt) => (
          <li key={appt.id} className="p-4 border rounded bg-white">
            <p><strong>Patient:</strong> {appt.patientName}</p>
            <p><strong>Date:</strong> {appt.date}</p>
            <p><strong>Time:</strong> {appt.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
