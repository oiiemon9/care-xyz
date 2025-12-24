'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function LoginClient() {
  const route = useRouter();
  const [loading, setLoading] = useState(false);
  const params = useSearchParams();
  const callback = params.get('callbackUrl') || '/';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const result = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result.ok) {
      route.push(callback || '/');
      toast.success('User Login Successful');
    } else {
      toast.error('Email or Password not valid');
    }
    setLoading(false);
  };

  const handelSingIn = async () => {
    const result = await signIn('google', {
      redirect: 'false',
      callbackUrl: callback || '/',
    });
  };

  return (
    <section className="flex items-center justify-center py-16">
      <div className="w-full max-w-md p-8 bg-white dark:bg-zinc-900 rounded-lg shadow-none sm:shadow-lg transition-all duration-300">
        <h1 className="text-3xl font-bold text-center text-text-main-light dark:text-white mb-10 tracking-tight">
          Log in
        </h1>
        <button
          onClick={handelSingIn}
          className="btn bg-white text-black border-[#e5e5e5] w-full"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        <div className="divider">OR</div>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <label
              className="block text-sm font-bold text-text-main-light dark:text-gray-300"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="joe@email.com"
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
              type="password"
              placeholder="Enter your Password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              className={`w-full px-4 py-3 border rounded bg-input-bg-light dark:bg-input-bg-dark text-text-main-light dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow duration-200
                ${
                  errors.password
                    ? 'border-red-500'
                    : 'border-input-border-light dark:border-input-border-dark'
                }
              `}
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
            {loading && (
              <span className="loading loading-spinner text-secondary"></span>
            )}{' '}
            Login
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-text-muted-light dark:text-gray-400">
          Don't have an account?{' '}
          <Link
            className="font-bold text-text-main-light dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-200"
            href={'/register'}
          >
            Register here.
          </Link>
        </div>
      </div>
    </section>
  );
}
