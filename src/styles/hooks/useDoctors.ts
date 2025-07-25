// src/hooks/useDoctors.ts
import { useEffect, useState } from 'react';
import { Doctor } from '../../types';


export function useDoctors() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchDoctors = async () => {
      setLoading(true);
      // Simulated delay
      setTimeout(() => {
        setDoctors([
          { id: 1, name: 'Dr. Smith', specialty: 'Cardiologist', availableDays: ['Mon', 'Wed'] },
          { id: 2, name: 'Dr. Patel', specialty: 'Dermatologist', availableDays: ['Tue', 'Thu'] },
        ]);
        setLoading(false);
      }, 1000);
    };

    fetchDoctors();
  }, []);

  return { doctors, loading };
}
