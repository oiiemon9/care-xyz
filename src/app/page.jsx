import About from '@/Components/HomeSection/About';
import Hero from '@/Components/HomeSection/Hero';
import ServiceOverview from '@/Components/HomeSection/ServiceOverview';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <About></About>
      <ServiceOverview></ServiceOverview>
    </div>
  );
}
