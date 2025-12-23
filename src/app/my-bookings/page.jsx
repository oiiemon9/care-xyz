'use client';
import React, { useEffect } from 'react';
import {
  Calendar,
  MapPin,
  User,
  Phone,
  Clock,
  DollarSign,
  BadgeCheck,
} from 'lucide-react';
import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import LoaderAnimation from '@/Components/LoaderAnimation/LoaderAnimation';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function page() {
  const session = useSession();
  const router = useRouter();
  const email = session?.data?.user?.email;

  const { data: bookings, isLoading } = useQuery({
    queryKey: ['my-bookings', email],
    enabled: !!email,
    queryFn: async () => {
      const res = await axios.get(`/api/bookings?email=${email}`);
      return res.data;
    },
  });
  useEffect(() => {
    if (session.status === 'unauthenticated') {
      return router.push('/login');
    }
  }, [session.status, router]);

  if (session.status === 'loading' || isLoading) {
    return <LoaderAnimation></LoaderAnimation>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          My Booking Details
        </h1>

        <div className="space-y-10">
          {bookings?.map((booking) => (
            <div
              key={booking._id}
              className="bg-white shadow-xl rounded-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-6 text-white">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold">
                    {booking.serviceTitle}
                  </h2>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      booking.status === 'Pending'
                        ? 'bg-yellow-500 text-yellow-900'
                        : 'bg-green-500 text-green-900'
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
                <p className="mt-2 text-blue-100 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Booked on:{' '}
                  {format(new Date(booking.createAt), 'dd MMMM yyyy')}
                </p>
              </div>

              {/* Main Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Customer Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <User className="w-6 h-6 text-blue-600" />
                      Customer Details
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        <span className="font-medium">Name:</span>{' '}
                        {booking.name}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Email:</span>{' '}
                        {booking.email}
                      </p>
                      <p className="text-gray-700 flex items-center gap-2">
                        <Phone className="w-5 h-5 text-gray-500" />
                        {booking.number}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <Calendar className="w-6 h-6 text-blue-600" />
                      Service Information
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        <span className="font-medium">Service Date:</span>{' '}
                        {format(new Date(booking.date), 'dd MMMM yyyy')}
                      </p>
                      <p className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
                        Total Price: ${booking.totalPrice}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address Section */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    Service Location
                  </h3>
                  <div className="bg-gray-100 rounded-lg p-5">
                    <p className="text-gray-700 whitespace-pre-line">
                      {booking.address}
                    </p>
                    <p className="text-gray-600 mt-2">
                      {booking.city}, {booking.districts}, {booking.division}
                    </p>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-10 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                    <BadgeCheck className="w-5 h-5 text-green-600" />
                    Your booking is {booking.status.toLowerCase()}. We will
                    contact you soon.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
