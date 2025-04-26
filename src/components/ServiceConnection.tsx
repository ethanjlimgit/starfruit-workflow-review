
import React from 'react';

interface ServiceConnectionProps {
  name: string;
  icon: string;
  isConnected?: boolean;
}

const ServiceConnection = ({ name, icon, isConnected = true }: ServiceConnectionProps) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-gray-900">
      <div className="flex items-center gap-3">
        <img src={icon} alt={name} className="w-6 h-6 rounded" />
        <span className="text-white">{name}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-emerald-500 text-sm">
          {isConnected ? 'Connected' : 'Not Connected'}
        </span>
        <div className={`w-1.5 h-1.5 rounded-full ${
          isConnected ? 'bg-emerald-500' : 'bg-gray-400'
        }`} />
      </div>
    </div>
  );
};

export default ServiceConnection;
