"use client";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Step 1: Define the fields
const fields = ["name", "email", "password", "specialty"] as const;

// Step 2: Define types
type DoctorFormInputs = {
  name: string;
  email: string;
  password: string;
  specialty: string;
};

// Step 3: Define validation schema
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  specialty: yup.string().required("Specialty is required"),
});

export default function DoctorForm({
  onSubmit,
}: {
  onSubmit: (data: DoctorFormInputs) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DoctorFormInputs>({
    resolver: yupResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 bg-white rounded shadow"
    >
      {fields.map((field) => (
        <div key={field} className="mb-4">
          <input
            type={field === "password" ? "password" : "text"}
            {...register(field)}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="w-full p-2 border rounded"
          />
          <p className="text-red-500 text-sm">
            {errors[field]?.message}
          </p>
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
