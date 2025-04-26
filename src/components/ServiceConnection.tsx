
import React from 'react';

interface ServiceConnectionProps {
  name: string;
  icon: string;
  isConnected?: boolean;
}

const ServiceConnection = ({ name, icon, isConnected = true }: ServiceConnectionProps) => {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-800 mb-3">
      <div className="flex items-center gap-3">
        <img src={icon} alt={name} className="w-6 h-6" />
        <span className="text-gray-200">{name}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-orange-400">
          {isConnected ? 'Connected' : 'Not Connected'}
        </span>
        <div className={`w-2 h-2 rounded-full ${
          isConnected ? 'bg-orange-400' : 'bg-gray-400'
        }`} />
      </div>
    </div>
  );
};

export default ServiceConnection;
