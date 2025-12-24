import LoaderAnimation from '@/Components/LoaderAnimation/LoaderAnimation';
import LoginClient from '@/Components/Login/LoginClient';
import React, { Suspense } from 'react';

export default function page() {
  return (
    <Suspense fallback={<LoaderAnimation></LoaderAnimation>}>
      <LoginClient></LoginClient>
    </Suspense>
  );
}
