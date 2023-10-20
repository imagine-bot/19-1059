// ./components/PricingCard.tsx
import React, { useState } from 'react';
import Image from 'next/image';

type PricingPlan = {
  title: string;
  monthlyPrice: number;
  annualPrice: number;
};

const PricingCard: React.FC<PricingPlan> = ({ title, monthlyPrice, annualPrice }) => {
  const [isAnnual, setIsAnnual] = useState(false);
  const price = isAnnual ? annualPrice : monthlyPrice;

  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <Image className="h-48 w-full object-cover" src="https://source.unsplash.com/random" alt="" />
      </div>
      <div className="px-6 py-8">
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-lg text-gray-500">Price: ${price}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="mt-auto flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default PricingCard;