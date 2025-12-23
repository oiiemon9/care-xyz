'use client';

import { postUser } from '@/actions/server/auth';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function Register() {
  const route = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await postUser(data);
    if (!result) {
      toast.error('Something is wrong!');
    }
    if (result?.acknowledged) {
      toast.success('User Successfully Create');
      route.push(`/login`);
    }
  };

  return (
    <section className="flex items-center justify-center py-16">
      <div className="w-full max-w-md p-8 bg-white dark:bg-zinc-900 rounded-lg shadow-none sm:shadow-lg transition-all duration-300">
        <h1 className="text-3xl font-bold text-center text-text-main-light dark:text-white mb-10 tracking-tight">
          Register
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <label
              className="block text-sm font-bold text-text-main-light dark:text-gray-300"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              {...register('name', { required: 'Name is required' })}
              className={`w-full px-4 py-3 border rounded bg-input-bg-light dark:bg-input-bg-dark text-text-main-light dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow duration-200
                ${
                  errors.name
                    ? 'border-red-500'
                    : 'border-input-border-light dark:border-input-border-dark'
                }
              `}
              placeholder="Your Name"
              type="text"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label
              className="block text-sm font-bold text-text-main-light dark:text-gray-300"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
              className={`w-full px-4 py-3 border rounded bg-input-bg-light dark:bg-input-bg-dark text-text-main-light dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow duration-200
                ${
                  errors.email
                    ? 'border-red-500'
                    : 'border-input-border-light dark:border-input-border-dark'
                }
              `}
              placeholder="joe@email.com"
              type="email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              className="block text-sm font-bold text-text-main-light dark:text-gray-300"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                  message:
                    'Password must be at least 6 characters and include both uppercase and lowercase letters',
                },
              })}
              className={`w-full px-4 py-3 border rounded bg-input-bg-light dark:bg-input-bg-dark text-text-main-light dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow duration-200${
                errors.password
                  ? 'border-red-500'
                  : 'border-input-border-light dark:border-input-border-dark'
              }`}
              placeholder="Enter your Password"
              type="password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <a
              className="text-sm font-bold text-text-muted-light dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
              href="#"
            >
              forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-medium py-3 px-4 rounded hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 transition-colors duration-200 shadow-sm text-lg"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-text-muted-light dark:text-gray-400">
          Don't have an account?{' '}
          <a
            className="font-bold text-text-main-light dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-200"
            href="#"
          >
            Register here.
          </a>
        </div>
      </div>
    </section>
  );
}
