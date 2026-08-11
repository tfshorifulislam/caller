'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const SignUpPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4 text-white">
      <div className="w-full max-w-md space-y-6 rounded-xl bg-gray-800 p-8 shadow-2xl">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight">Create an Account</h1>
          <p className="mt-1 text-sm text-gray-400">Sign up to start video calling</p>
        </div>

        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="form-name">Name</FieldLabel>
              <Input
                id="form-name"
                type="text"
                placeholder="John Doe"
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="form-email">Email</FieldLabel>
              <Input
                id="form-email"
                type="email"
                placeholder="john@example.com"
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="form-password">Password</FieldLabel>
              <Input
                id="form-password"
                type="password"
                placeholder="••••••••"
                required
              />
            </Field>

            <Button type="submit" className="w-full mt-2">
              Sign Up
            </Button>
          </FieldGroup>
        </form>

        <p className="text-center text-sm text-gray-400">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-400 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;