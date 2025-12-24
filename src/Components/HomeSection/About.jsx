import { Clock, Heart, ShieldCheck, Users } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import CountUpAnimation from '../CountUpAnimation/CountUpAnimation';

export default function About() {
  return (
    <section className="container mx-auto px-4 py-32">
      <div className="">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Caring for What Matters Most
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to making professional caregiving simple, secure,
            and accessible for every family.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="rounded-2xl">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Care.io is a trusted platform that connects families with
                verified, compassionate caretakers for children, the elderly,
                and individuals with special needs. Whether you need reliable
                babysitting, elderly care, or specialized home support, we make
                the process effortless and secure.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to provide peace of mind by ensuring every
                caregiver is carefully vetted, every booking is transparent, and
                every family feels supported — anytime, anywhere.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                <Heart className="w-10 h-10 text-primary mx-auto mb-3" />

                <CountUpAnimation end={500} suffix="+"></CountUpAnimation>

                <p className="text-gray-600">Happy Families</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-gray-900">100%</p>
                <p className="text-gray-600">Verified Caregivers</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-gray-900">24/7</p>
                <p className="text-gray-600">Support</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                <CountUpAnimation
                  start={500}
                  end={1000}
                  suffix="+"
                ></CountUpAnimation>
                <p className="text-gray-600">Bookings</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dzfrakxek/image/upload/v1766396682/2148962321_a6hvys.jpg"
                alt="Professional caregiver helping elderly woman"
                width={600}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
