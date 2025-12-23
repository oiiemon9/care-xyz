'use client';

import LoaderAnimation from '@/Components/LoaderAnimation/LoaderAnimation';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { notFound, useParams } from 'next/navigation';
import React from 'react';
import { useForm, useWatch } from 'react-hook-form';

export default function BookingPage() {
  const { service_id } = useParams();
  const { data: loginUser } = useSession();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const selectDivision = useWatch({ control, name: 'division' });
  const selectDistricts = useWatch({ control, name: 'districts' });

  const getDistricts = (division) => {
    return locationData.find((d) => d.division === division)?.districts || [];
  };

  const getCities = (division, district) => {
    const findDistrict = getDistricts(division);
    return findDistrict.find((d, i) => d.name === district)?.cities || [];
  };

  const {
    data: service,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['service', service_id],
    enabled: !!service_id,
    queryFn: async () => {
      const res = await axios.get(`/api/services/${service_id}`);
      return res.data;
    },
  });
  const { data: locationData } = useQuery({
    queryKey: ['location'],

    queryFn: async () => {
      const res = await axios.get(`/api/location`);
      return res.data;
    },
  });
  console.log(locationData);

  if (isLoading) {
    return <LoaderAnimation></LoaderAnimation>;
  }

  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Booking Form */}
      <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Book This Service
        </h2>
        <div className="pb-8 border-b border-gray-300">
          <h1>Service: {service?.title}</h1>
          <h4 className="text-2xl font-bold text-blue-600">
            Price Per Hour: ${service?.pricePerHour}
          </h4>
        </div>

        <form className="space-y-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                defaultValue={loginUser?.user.name}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Enter your full name"
                readOnly
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                defaultValue={loginUser?.user.email}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="your@email.com"
                readOnly
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="+880 1XXXXXXXXX"
            />
          </div>

          {/* Preferred Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Date *
            </label>
            <input
              type="date"
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Division
              </label>

              <select
                defaultValue=""
                {...register('division')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
              >
                <option disabled value="">
                  Pick a division
                </option>
                {locationData.map((division, i) => (
                  <option key={i}>{division?.division}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                District
              </label>
              <select
                defaultValue=""
                {...register('districts')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
              >
                <option disabled value="">
                  Pick a District
                </option>
                {getDistricts(selectDivision).map((districts, i) => (
                  <option key={i}>{districts?.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <select
                defaultValue=""
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
              >
                <option disabled value="">
                  Pick a City
                </option>
                {getCities(selectDivision, selectDistricts).map((citie, i) => (
                  <option key={i}>{citie}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Additional Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Message (Optional)
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
              placeholder="Any special requirements or notes..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-6">
            <p className="text-gray-600">
              Total Amount:{' '}
              <span className="text-2xl font-bold text-blue-600">
                ${service?.price}
              </span>
            </p>
          </div>

          {/* Price Reminder Below Form */}
          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-lg text-lg transition transform hover:scale-105"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
