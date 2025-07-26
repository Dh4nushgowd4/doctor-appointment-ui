import type { Appointment, Doctor } from "@/types";

// ✅ Fetch all appointments
export const fetchAppointments = async (): Promise<Appointment[]> => {
  const res = await fetch("http://localhost:3000/appointments");

  if (!res.ok) {
    throw new Error("Failed to fetch appointments");
  }

  return res.json();
};

// ✅ Signup a new doctor
export const signupDoctor = async (doctorData: {
  name: string;
  email: string;
  password: string;
  specialty: string;
}): Promise<Doctor> => {
  const res = await fetch("http://localhost:3000/doctors", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(doctorData),
  });

  if (!res.ok) {
    throw new Error("Failed to sign up doctor");
  }

  return res.json();
};

// ✅ Login a doctor by verifying email and password
export const loginDoctor = async (
  email: string,
  password: string
): Promise<Doctor> => {
  const res = await fetch(
    `http://localhost:3000/doctors?email=${encodeURIComponent(email)}`
  );

  if (!res.ok) {
    throw new Error("Doctor not found");
  }

  const doctors: Doctor[] = await res.json();

  const doctor = doctors.find((d) => d.password === password); // Note: insecure in real apps

  if (!doctor) {
    throw new Error("Invalid credentials");
  }

  return doctor;
};
