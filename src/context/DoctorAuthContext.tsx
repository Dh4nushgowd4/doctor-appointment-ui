// src/context/DoctorAuthContext.tsx
'use client';

import React, { createContext, useContext, useState } from 'react';
import { Doctor } from '@/types';

interface DoctorAuthContextType {
  currentDoctor: Doctor | null;
  login: (doc: Doctor) => void;
  logout: () => void;
}

const DoctorAuthContext = createContext<DoctorAuthContextType | undefined>(undefined);

export const DoctorAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentDoctor, setCurrentDoctor] = useState<Doctor | null>(null);

  const login = (doc: Doctor) => {
    setCurrentDoctor(doc);
    console.log("Doctor logged in:", doc.name);
  };

  const logout = () => {
    setCurrentDoctor(null);
    console.log("Doctor logged out");
  };

  return (
    <DoctorAuthContext.Provider value={{ currentDoctor, login, logout }}>
      {children}
    </DoctorAuthContext.Provider>
  );
};

export const useDoctorAuth = () => {
  const context = useContext(DoctorAuthContext);
  if (!context) {
    throw new Error('useDoctorAuth must be used within a DoctorAuthProvider');
  }
  return context;
};
