import { getSingleService } from '@/actions/server/service';
import {
  ArrowRight,
  CheckCircle,
  Heart,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react';
import * as Icons from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

export default async function serviceInfo({ params }) {
  const { service_id } = await params;
  const service = await getSingleService(service_id);
  if (!service) {
    notFound();
  }

  const IconComponent = Icons[service?.icon];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16">
          <Image
            src={service.image}
            alt={service.title}
            width={1400}
            height={800}
            quality={100}
            className="w-full h-96 md:h-[600px] object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-10 text-white">
            <div className="flex items-center gap-6 mb-4">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                <IconComponent className="w-10 h-10" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold">
                  {service.title}
                </h1>
                <p className="text-xl md:text-2xl opacity-90">
                  {service.subtitle}
                </p>
              </div>
            </div>
            <p className="text-lg max-w-2xl">{service.shortDescription}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white rounded-3xl p-10  border border-gray-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About This Service
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 border border-gray-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-primary" />
                Key Features
              </h2>
              <ul className="grid md:grid-cols-2 gap-6">
                {service?.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-10 border border-gray-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Heart className="w-8 h-8 text-primary" />
                Benefits for Your Family
              </h2>
              <ul className="space-y-5">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-3xl p-10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Service Summary</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-primary-100">Caregiver Type</p>
                  <p className="text-xl font-semibold">
                    {service.caregiverType}
                  </p>
                </div>
                <div>
                  <p className="text-primary-100">Price Range</p>
                  <p className="text-3xl font-bold">{service.priceRange}</p>
                </div>
                <div>
                  <p className="text-primary-100">Available Durations</p>
                  <p className="text-lg">
                    {service.durationOptions.join(', ')}
                  </p>
                </div>
              </div>

              <Link
                href={`/booking/${service._id}`}
                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out rounded-full hover:pl-10 hover:pr-6  group cursor-pointer border border-secondary-300 w-full mt-10"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-secondary group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <Icons.ChevronRight className="w-5 h-5 " />
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <Icons.ChevronRight className="w-5 h-5 " />
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Book This Service Now
                </span>
              </Link>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center">
              <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-xl font-semibold text-gray-900">
                100% Verified & Trusted Caregivers
              </p>
              <p className="text-gray-600 mt-3">
                Background checked • Trained • Insured
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
