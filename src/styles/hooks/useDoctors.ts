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
          {
            id: 1, name: 'Dr. Smith', specialty: 'Cardiologist', availableDates: ['Mon', 'Wed'],
            email: '',
            password: ''
          },
          {
            id: 2, name: 'Dr. Patel', specialty: 'Dermatologist', availableDates: ['Tue', 'Thu'],
            email: '',
            password: ''
          }
          
        ]);
        setLoading(false);
      }, 1000);
    };

    fetchDoctors();
  }, []);

  return { doctors, loading };
}
