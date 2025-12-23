import Link from 'next/link';
import React from 'react';

export default function notFound() {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-4">
      <h1 className="text-5xl font-bold">404 - Service Not Found</h1>
      <p className="text-lg text-gray-600">
        Sorry, the service you are looking for does not exist.
      </p>
      <Link href="/" className="text-primary underline">
        Go back to Home
      </Link>
    </div>
  );
}
