'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import {
  Baby,
  CheckCircle,
  ChevronRight,
  Heart,
  Stethoscope,
} from 'lucide-react';
import axios from 'axios';
import ServiceOverviewSkeleton from '../Skeleton/ServiceOverviewSkeleton';
import Link from 'next/link';

export default function ServiceOverview() {
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState([]);
  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const result = await axios.get(`/api/services`);
        setService(result.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Trusted Care Services
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Care.io offers reliable, professional, and compassionate caregiving
            solutions tailored to your family’s unique needs — anytime,
            anywhere.
          </p>
        </div>
        {loading ? (
          <ServiceOverviewSkeleton></ServiceOverviewSkeleton>
        ) : (
          <div className="space-y-20 ">
            {service.map((service, index) => (
              <div key={service._id}>
                {index % 2 === 0 ? (
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-white border border-gray-300 p-8 rounded-3xl">
                    <div className="relative h-full rounded-3xl overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={1200}
                        height={800}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-10 left-10 text-white">
                        <p className="text-4xl font-bold">{service.title}</p>
                        <p className="text-xl opacity-90">{service.subtitle}</p>
                      </div>
                    </div>

                    <div className="">
                      <div className="flex items-center gap-5 mb-8">
                        <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                          {service.icon === 'Baby' ? (
                            <Baby className="w-10 h-10 text-primary" />
                          ) : service.icon === 'Heart' ? (
                            <Heart className="w-10 h-10 text-primary" />
                          ) : (
                            <Stethoscope className="w-10 h-10 text-primary" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900">
                            {service.title}
                          </h3>
                          <p className="text-lg text-gray-600">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-lg text-gray-700 mb-8">
                        {service.shortDescription}
                      </p>

                      <ul className="space-y-2 mb-5">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex gap-4">
                        <Link
                          href={`service/${service._id}`}
                          className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out rounded-full hover:pl-10 hover:pr-6  group cursor-pointer border border-gray-300"
                        >
                          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-secondary group-hover:h-full"></span>
                          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <ChevronRight className="w-5 h-5 text-primary " />
                          </span>
                          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <ChevronRight className="w-5 h-5 text-primary" />
                          </span>
                          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                            See Details
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-white border border-gray-300 p-8 rounded-3xl">
                    <div className="order-2 lg:order-1">
                      <div className="flex items-center gap-5 mb-8">
                        <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                          {service.icon === 'Baby' ? (
                            <Baby className="w-10 h-10 text-primary" />
                          ) : service.icon === 'Heart' ? (
                            <Heart className="w-10 h-10 text-primary" />
                          ) : (
                            <Stethoscope className="w-10 h-10 text-primary" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900">
                            {service.title}
                          </h3>
                          <p className="text-lg text-gray-600">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-lg text-gray-700 mb-8">
                        {service.shortDescription}
                      </p>

                      <ul className="space-y-2 mb-5">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex gap-4">
                        <Link
                          href={`service/${service._id}`}
                          className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out rounded-full hover:pl-10 hover:pr-6  group cursor-pointer border border-gray-300"
                        >
                          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-secondary group-hover:h-full"></span>
                          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <ChevronRight className="w-5 h-5 text-primary " />
                          </span>
                          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <ChevronRight className="w-5 h-5 text-primary" />
                          </span>
                          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                            See Details
                          </span>
                        </Link>
                      </div>
                    </div>

                    <div className="order-1 lg:order-2 relative h-full rounded-3xl overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={1200}
                        height={800}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-10 left-10 text-white">
                        <p className="text-4xl font-bold">{service.title}</p>
                        <p className="text-xl opacity-90">{service.subtitle}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
