"use client";
import { useForm } from "react-hook-form";
import { loginDoctor } from "@/services/doctorApi";
import { useDoctorAuth } from "@/context/DoctorAuthContext";
import { useRouter } from "next/navigation";


type LoginForm = { email: string; password: string };

export default function LoginPage() {
  const router = useRouter();
  const { login } = useDoctorAuth();
  const { register, handleSubmit } = useForm<LoginForm>();

  async function onSubmit(data: LoginForm) {
    const doc = await loginDoctor(data.email, data.password);
    if (doc) { login(doc); router.push("/doctor/dashboard"); }
    else alert("Invalid credentials");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6">
      <input {...register("email")} placeholder="Email" className="w-full p-2 border rounded mb-4" />
      <input type="password" {...register("password")} placeholder="Password" className="w-full p-2 border rounded mb-4" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
    </form>
  );
}
