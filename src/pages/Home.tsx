import React from 'react';
import { motion } from 'framer-motion';
import { PricingCard } from '../components/PricingCard';
import { ServerStatus } from '../components/ServerStatus';
import { useNavigate } from 'react-router-dom';
import type { Plan } from '../types';

const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Basic RDP',
    price: 29.99,
    specs: {
      cpu: '2 vCPU',
      ram: '4GB RAM',
      storage: '60GB SSD',
      bandwidth: '1TB'
    },
    features: [
      '24/7 Support',
      'Windows Server 2019',
      'Anti-DDoS Protection',
      'Automated Backups'
    ]
  },
  {
    id: 'pro',
    name: 'Professional RDP',
    price: 49.99,
    specs: {
      cpu: '4 vCPU',
      ram: '8GB RAM',
      storage: '120GB SSD',
      bandwidth: '2TB'
    },
    features: [
      '24/7 Priority Support',
      'Windows Server 2019',
      'Anti-DDoS Protection',
      'Daily Backups',
      'Dedicated IP'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise RDP',
    price: 99.99,
    specs: {
      cpu: '8 vCPU',
      ram: '16GB RAM',
      storage: '250GB SSD',
      bandwidth: '5TB'
    },
    features: [
      '24/7 VIP Support',
      'Windows Server 2019',
      'Advanced DDoS Protection',
      'Hourly Backups',
      'Dedicated IP',
      'Load Balancing',
      'High Availability'
    ]
  }
];

export function Home() {
  const navigate = useNavigate();

  const handleSelectPlan = (plan: Plan) => {
    navigate('/login', { state: { selectedPlan: plan } });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 px-4"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            High-Performance RDP Solutions
          </motion.h1>
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-xl text-gray-400 mb-8"
          >
            Secure, reliable, and lightning-fast remote desktop services
          </motion.p>
        </div>
      </motion.section>

      {/* Server Status */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <ServerStatus />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map(plan => (
              <PricingCard
                key={plan.id}
                plan={plan}
                onSelect={handleSelectPlan}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}