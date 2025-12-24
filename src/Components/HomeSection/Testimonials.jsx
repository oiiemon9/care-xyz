import React from 'react';
import Marquee from 'react-fast-marquee';
import { Star } from 'lucide-react'; // npm install lucide-react for icons (or use Font Awesome)

const testimonials = [
  {
    quote:
      'Care.io made finding a reliable babysitter incredibly easy and stress-free. The caregivers are professional and caring!',
    name: 'Sarah Johnson',
    role: 'Mother of Two',
    avatar:
      'https://anannymatch.com/wp-content/uploads/2023/10/Blog_Photos-29.png', // Real family photo
  },
  {
    quote:
      'We found the perfect elderly care provider for my parents through Care.io. Highly trustworthy and compassionate service.',
    name: 'Michael Lee',
    role: 'Son Caring for Elderly Parents',
    avatar:
      'https://gaphotos.s3.amazonaws.com/photos/g/1330000/1339000/1339549/123D8EF21631740826574-e.jpg', // Elderly care photo
  },
  {
    quote:
      "The platform is seamless and secure. It has been a lifesaver for our family's childcare needs.",
    name: 'Emily Davis',
    role: 'Busy Working Parent',
    avatar:
      'https://patch.com/img/cdn20/users/22896833/20241009/022358/styles/patch_image/public/img-9542___09142300829.jpg',
  },
  {
    quote:
      'Excellent for home care services. Transparent pricing and great support throughout the booking process.',
    name: 'David Kim',
    role: 'Family Caregiver',
    avatar:
      'https://cdn.prod.website-files.com/65a823bc36fc91ffafdc2c49/688cce1eba8021c7b15d5b69_Happy%20family%20uses%20laptop%20to%20review%20nanny%20and%20household%20employer%20registration.jpg',
  },
  {
    quote:
      'Compassionate caregivers and easy booking. Care.io exceeded all our expectations!',
    name: 'Anna Rodriguez',
    role: 'Parent',
    avatar:
      'https://images.squarespace-cdn.com/content/v1/5f89d8aa9639362cabf16138/650ee02f-e592-439d-aa8e-4adaa7c49b6e/Baylys+House+%2842+of+119%29.jpg',
  },
];
export default function Testimonials() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What Our Families Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Thousands of families trust Care.io for reliable and compassionate
              care services
            </p>
          </div>

          <Marquee
            gradient={true}
            gradientWidth={20}
            speed={60}
            pauseOnHover={true}
          >
            {testimonials.concat(testimonials).map((t, index) => (
              <div
                key={index}
                className="mx-6 w-96 bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {t.name}
                    </h3>
                    <p className="text-gray-500">{t.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-700 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </div>
  );
}
