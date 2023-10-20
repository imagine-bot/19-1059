// ./components/PricingPlans.tsx
import React, { useState } from 'react';
import PricingCard from './PricingCard';

const PricingPlans: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const plans = [
    { title: 'Basic', monthlyPrice: 9, annualPrice: 90 },
    { title: 'Pro', monthlyPrice: 19, annualPrice: 190 },
    { title: 'Enterprise', monthlyPrice: 49, annualPrice: 490 },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-end">
        <label htmlFor="pricing" className="mr-3 self-center">
          Annual Pricing
        </label>
        <input
          type="checkbox"
          id="pricing"
          name="pricing"
          className="toggle toggle-blue"
          checked={isAnnual}
          onChange={() => setIsAnnual(!isAnnual)}
        />
      </div>
      <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.title} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;