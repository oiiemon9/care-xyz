'use client';

import LoaderAnimation from '@/Components/LoaderAnimation/LoaderAnimation';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { notFound, useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function BookingPage() {
  const { service_id } = useParams();
  const { data: loginUser } = useSession();
  const [totalPrice, setTotalPrice] = useState(0);
  const route = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const selectDivision = useWatch({ control, name: 'division' });
  const selectDistricts = useWatch({ control, name: 'districts' });

  const getDistricts = (division) => {
    return locationData?.find((d) => d.division === division)?.districts || [];
  };

  const getCities = (division, district) => {
    const findDistrict = getDistricts(division);
    return findDistrict?.find((d, i) => d.name === district)?.cities || [];
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
      setTotalPrice(res?.data?.pricePerHour);
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

  if (isLoading) {
    return <LoaderAnimation></LoaderAnimation>;
  }

  if (!service) {
    notFound();
  }

  const handelBooking = async (data) => {
    const bookingInfo = data;
    data.totalPrice = totalPrice;
    data.status = 'Pending';
    data.createAt = new Date().toISOString();
    data.serviceId = service?._id;
    data.serviceTitle = service?.title;

    try {
      const res = await axios.post('/api/bookings', bookingInfo);
      if (res.data.insertedId) {
        toast.success('Booking Successful');
        route.push('/');
        await axios.post('/api/send-invoice', {
          email: data.email,
          serviceName: data.serviceTitle,
          totalPrice: totalPrice,
          orderId: res.data.insertedId,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

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

        <form onSubmit={handleSubmit(handelBooking)} className="space-y-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                defaultValue={loginUser?.user.name}
                {...register('name')}
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
                defaultValue={loginUser?.user.email}
                {...register('email')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="your@email.com"
                readOnly
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              {...register('number', { required: true })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="+880 1XXXXXXXXX"
            />
            {errors.number?.type === 'required' && (
              <p className="text-red-600">First name is required</p>
            )}
          </div>

          {/* Preferred Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Date *
            </label>
            <input
              type="date"
              min={new Date().toISOString().split('T')[0]}
              {...register('date', { required: true })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
            {errors.date?.type === 'required' && (
              <p className="text-red-600">First name is required</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duration (Hour)
            </label>
            <input
              type="number"
              defaultValue={1}
              min={1}
              onChange={(e) =>
                setTotalPrice(
                  parseInt(service?.pricePerHour) * parseInt(e.target.value)
                )
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder=""
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Division
              </label>

              <select
                defaultValue=""
                {...register('division', { required: true })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
              >
                <option disabled value="">
                  Pick a division
                </option>
                {locationData?.map((division, i) => (
                  <option value={division?.division} key={i}>
                    {division?.division}
                  </option>
                ))}
              </select>
              {errors.division?.type === 'required' && (
                <p className="text-red-600">First name is required</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                District
              </label>
              <select
                defaultValue=""
                {...register('districts', { required: true })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
              >
                <option disabled value="">
                  Pick a District
                </option>
                {getDistricts(selectDivision).map((districts, i) => (
                  <option value={districts?.name} key={i}>
                    {districts?.name}
                  </option>
                ))}
              </select>
              {errors.districts?.type === 'required' && (
                <p className="text-red-600">First name is required</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <select
                defaultValue=""
                {...register('city', { required: true })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
              >
                <option disabled value="">
                  Pick a City
                </option>
                {getCities(selectDivision, selectDistricts).map((city, i) => (
                  <option value={city} key={i}>
                    {city}
                  </option>
                ))}
              </select>
              {errors.city?.type === 'required' && (
                <p className="text-red-600">First name is required</p>
              )}
            </div>
          </div>

          {/* Additional Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <textarea
              rows={4}
              {...register('address', { required: true })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
              placeholder="Exact Address..."
            />
            {errors.address?.type === 'required' && (
              <p className="text-red-600">First name is required</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center pt-6">
            <p className="text-gray-600">
              Total Amount:{' '}
              <span className="text-2xl font-bold text-blue-600">
                ${totalPrice}
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
