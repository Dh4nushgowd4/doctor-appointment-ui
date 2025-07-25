import Header from '../components/Header';
import AppointmentForm from '../components/AppointmentForm';

export default function AppointmentPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-md mx-auto mt-8">
        <AppointmentForm />
      </div>
    </main>
  );
}
