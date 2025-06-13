import React from 'react';
import PricingTable from '@/components/smart-meters/PricingTable';
import { pricingData } from '@/data';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Banner from '@/components/smart-meters/Banner';

const techMap = {
  '4g-cat-1': '4G CAT 1',
  'lorawan': 'LoRaWAN',
};

export function generateStaticParams() {
  return Object.keys(techMap).map(technology => ({
    technology,
  }));
}

const Page = ({ params }) => {
    
  const techName = techMap[params.technology];
  if (!techName) return notFound();

  const techData = pricingData.find(item => item.technology === techName);

  return (
    <main className="min-h-screen flex flex-col">
        <Navbar/>
        <Banner technology={techName} />
        <div className="py-16 ">
        {techData && <PricingTable data={techData} />}
        </div>

    </main>
    
  );
};

export default Page;
