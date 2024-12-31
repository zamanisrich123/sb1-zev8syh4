import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { Plan } from '../types';

interface PricingCardProps {
  plan: Plan;
  onSelect: (plan: Plan) => void;
}

export function PricingCard({ plan, onSelect }: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-900 rounded-xl p-6 shadow-xl border border-gray-800"
    >
      <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-blue-500">${plan.price}</span>
        <span className="text-gray-400">/month</span>
      </div>

      <div className="space-y-4 mb-8">
        <div className="border-t border-gray-800 pt-4">
          <h4 className="text-lg font-semibold text-white mb-2">Specifications</h4>
          <ul className="space-y-2 text-gray-400">
            <li>CPU: {plan.specs.cpu}</li>
            <li>RAM: {plan.specs.ram}</li>
            <li>Storage: {plan.specs.storage}</li>
            <li>Bandwidth: {plan.specs.bandwidth}</li>
          </ul>
        </div>

        <div className="border-t border-gray-800 pt-4">
          <h4 className="text-lg font-semibold text-white mb-2">Features</h4>
          <ul className="space-y-2">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-400">
                <Check className="h-5 w-5 text-blue-500 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        onClick={() => onSelect(plan)}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Select Plan
      </button>
    </motion.div>
  );
}