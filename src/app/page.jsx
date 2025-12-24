import About from '@/Components/HomeSection/About';
import Hero from '@/Components/HomeSection/Hero';
import ServiceOverview from '@/Components/HomeSection/ServiceOverview';
import Testimonials from '@/Components/HomeSection/Testimonials';
import Image from 'next/image';

export const metadata = {
  title: 'Care.IO – Trusted Baby Sitting & Elderly Care Services in Bangladesh',
  description:
    'Care.IO is a reliable caregiving platform in Bangladesh where you can book baby care, elderly care, and sick people care services easily and securely from your home.',
  keywords: [
    'baby care service Bangladesh',
    'elderly care service Bangladesh',
    'home care service',
    'caretaker booking platform',
    'Care IO',
    'caregiver service website',
  ],
  authors: [{ name: 'Care.IO Team' }],
  creator: 'Care.IO',
  openGraph: {
    title: 'Care.IO – Trusted Baby Sitting & Elderly Care Services',
    description:
      'Book trusted baby sitting, elderly care and home care services easily with Care.IO.',
    url: 'https://care-io.vercel.app',
    siteName: 'Care.IO',
    images: [
      {
        url: 'https://res.cloudinary.com/dzfrakxek/image/upload/v1766547681/Screenshot_2025-12-24_094032_xxyq6i.png',
        width: 1200,
        height: 630,
        alt: 'Care.IO Home Care Service Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Care.IO – Trusted Home Care Services',
    description:
      'Find professional baby sitting & elderly care services in Bangladesh with Care.IO.',
    images: [
      'https://res.cloudinary.com/dzfrakxek/image/upload/v1766547681/Screenshot_2025-12-24_094032_xxyq6i.png',
    ],
  },
};

export default function Home() {
  return (
    <div className="">
      <div id="home">
        <Hero></Hero>
      </div>
      <div id="about">
        <About></About>
      </div>
      <div id="services">
        <ServiceOverview></ServiceOverview>
      </div>
      <div id="testimonials">
        <Testimonials></Testimonials>
      </div>
    </div>
  );
}
