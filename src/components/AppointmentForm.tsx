'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createAppointment } from '../lib/api';

const schema = z.object({
  doctorId: z.string(),
  patientName: z.string().min(2),
  date: z.string(),
  time: z.string(),
});

type FormData = z.infer<typeof schema>;

export default function AppointmentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await createAppointment(data);
    alert('Appointment Scheduled!');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 bg-white rounded shadow">
      <div>
        <label>Doctor ID</label>
        <input {...register('doctorId')} className="input" />
        {errors.doctorId && <p className="text-red-500">{errors.doctorId.message}</p>}
      </div>
      <div>
        <label>Patient Name</label>
        <input {...register('patientName')} className="input" />
        {errors.patientName && <p className="text-red-500">{errors.patientName.message}</p>}
      </div>
      <div>
        <label>Date</label>
        <input type="date" {...register('date')} className="input" />
      </div>
      <div>
        <label>Time</label>
        <input type="time" {...register('time')} className="input" />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Book Appointment
      </button>
    </form>
  );
}
