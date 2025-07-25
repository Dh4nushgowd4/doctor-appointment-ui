// src/app/page.tsx

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/doctor/login'); // Redirect to doctor login on home visit
  }, [router]);

  return null; // optional: show loading while redirecting
}
