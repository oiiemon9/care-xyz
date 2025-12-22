import React from 'react';

import Image from 'next/image';

import {
  Baby,
  CheckCircle,
  ChevronRight,
  Heart,
  Stethoscope,
} from 'lucide-react';

const services = [
  {
    id: 'baby-care',
    title: 'Baby Care',
    subtitle: 'Safe & Loving Care for Your Little Ones',
    description:
      'Our professional babysitters provide nurturing care in a safe environment. From feeding and playtime to bedtime routines, we ensure your child is happy and secure.',
    features: [
      'Experienced & background-checked caregivers',
      'Flexible hours (day/night)',
      'Activities for child development',
      'Emergency contact system',
    ],
    priceRange: '৳ 800 – ৳ 1,500 per day',
    image:
      'https://res.cloudinary.com/dzfrakxek/image/upload/v1766400916/pediatrics-doctor-examines-baby_s2dqjv.png',
    icon: Baby,
  },
  {
    id: 'elderly-care',
    title: 'Elderly Care',
    subtitle: 'Compassionate Support for Seniors',
    description:
      'We offer personalized care for elderly loved ones, helping with daily tasks, medication reminders, companionship, and light household help.',
    features: [
      'Trained caregivers for seniors',
      'Health monitoring & assistance',
      'Companionship & conversation',
      '24/7 availability',
    ],
    priceRange: '৳ 1,200 – ৳ 2,000 per day',
    image:
      'https://res.cloudinary.com/dzfrakxek/image/upload/v1766401044/doctor-with-old-man-wheelchair-w_aij22r.png',
    icon: Heart,
  },
  {
    id: 'sick-people-care',
    title: 'Special Care',
    subtitle: 'Dedicated Support for Medical Needs',
    description:
      'Trained caregivers provide specialized home care for individuals recovering from illness, surgery, or living with disabilities.',
    features: [
      'Medical assistance & monitoring',
      'Mobility support & therapy',
      'Personalized care plans',
      'Hygiene & comfort focus',
    ],
    priceRange: '৳ 1,500 – ৳ 3,000 per day',
    image:
      'https://res.cloudinary.com/dzfrakxek/image/upload/v1766401142/biracial-female-doctor-examining_wse5ij.png',
    icon: Stethoscope,
  },
];

export default function ServiceOverview() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Trusted Care Services
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Care.xyz offers reliable, professional, and compassionate caregiving
            solutions tailored to your family’s unique needs — anytime,
            anywhere.
          </p>
        </div>

        <div className="space-y-20 ">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-white border border-gray-300 p-8 rounded-3xl"
            >
              {index % 2 === 0 ? (
                <>
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
                        <service.icon className="w-10 h-10 text-primary" />
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
                      {service.description}
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
                      <button className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out rounded-full hover:pl-10 hover:pr-6  group cursor-pointer border border-gray-300">
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
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="">
                    <div className="flex items-center gap-5 mb-8">
                      <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <service.icon className="w-10 h-10 text-primary" />
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
                      {service.description}
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
                      <button className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out rounded-full hover:pl-10 hover:pr-6  group cursor-pointer border border-gray-300">
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
                      </button>
                    </div>
                  </div>

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
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
