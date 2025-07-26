import { Doctor } from '../types';

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="border rounded-xl shadow-md p-4 bg-white">
      <h2 className="text-lg font-bold">{doctor.name}</h2>
      <p>{doctor.specialty}</p>
      <p className="text-sm text-gray-500">Available: {doctor.availableDates.join(', ')}</p>
    </div>
  );
}
