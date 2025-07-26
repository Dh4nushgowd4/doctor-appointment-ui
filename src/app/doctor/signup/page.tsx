'use client';

import { useForm } from 'react-hook-form';
import { signupDoctor } from '@/lib/api';
import { useState } from 'react';
import type { Doctor } from '@/types';

type SignupFormValues = Omit<Doctor, 'id'>;

export default function DoctorSignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>();

  const [message, setMessage] = useState('');

  const onSubmit = async (data: SignupFormValues) => {
    try {
      await signupDoctor(data);
      setMessage('Signup successful!');
    } catch (error) {
      setMessage('Signup failed.');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Doctor Signup</h2>

        <input
          {...register('name', { required: 'Name is required' })}
          placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        <input
          {...register('email', { required: 'Email is required' })}
          placeholder="Email"
          type="email"
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <input
          {...register('password', { required: 'Password is required' })}
          placeholder="Password"
          type="password"
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

        <input
          {...register('specialty', { required: 'Specialty is required' })}
          placeholder="Specialty"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        {errors.specialty && <p className="text-red-500 text-sm">{errors.specialty.message}</p>}

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Sign Up
        </button>

        {message && <p className="mt-4 text-center text-sm">{message}</p>}
      </form>
    </main>
  );
}
