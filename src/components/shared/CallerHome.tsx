'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const CallerHome = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-4">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-gray-800 p-8 shadow-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight">Video Call App</h1>
        <p className="text-gray-400">Create an account or log in to start calling</p>

        <div className="flex flex-col gap-4 mt-6">
          <button
            onClick={() => router.push('/signup')}
            className="w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-all cursor-pointer"
          >
            Create Account
          </button>

          <button
            onClick={() => router.push('/login')}
            className="w-full rounded-lg border border-gray-600 bg-transparent px-5 py-3 text-sm font-semibold text-white hover:bg-gray-700 transition-all cursor-pointer"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallerHome;