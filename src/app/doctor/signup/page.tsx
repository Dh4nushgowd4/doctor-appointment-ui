"use client";
import DoctorForm from "@/components/DoctorForm";
import { signupDoctor } from "@/services/doctorApi";
import { useRouter } from "next/navigation";
import { useDoctorAuth } from "@/context/DoctorAuthContext";

export default function SignupPage() {
  const router = useRouter();
  const { login } = useDoctorAuth();

  async function handleSignup(data: any) {
    const doc = await signupDoctor(data);
    login(doc);
    router.push("/doctor/dashboard");
  }

  return <DoctorForm onSubmit={handleSignup} />;
}
