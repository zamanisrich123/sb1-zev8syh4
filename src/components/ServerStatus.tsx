import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

export function ServerStatus() {
  const [uptime, setUptime] = React.useState(99.99);

  React.useEffect(() => {
    // Simulate uptime changes
    const interval = setInterval(() => {
      setUptime(prev => Math.max(99.95, Math.min(100, prev + (Math.random() - 0.5) * 0.01)));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900 p-6 rounded-xl shadow-xl"
    >
      <div className="flex items-center space-x-4 mb-4">
        <Activity className="h-8 w-8 text-green-500" />
        <h2 className="text-2xl font-bold text-white">Server Status</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-gray-400 mb-2">Uptime</h3>
          <p className="text-2xl font-bold text-green-500">{uptime.toFixed(2)}%</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-gray-400 mb-2">Response Time</h3>
          <p className="text-2xl font-bold text-blue-500">45ms</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-gray-400 mb-2">Active Servers</h3>
          <p className="text-2xl font-bold text-purple-500">12/12</p>
        </div>
      </div>
    </motion.div>
  );
}