
import React from 'react';

interface ConfigInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const ConfigInput = ({ label, placeholder, value, onChange }: ConfigInputProps) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-300 mb-2">{label}</label>
      <input
        type="text"
        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default ConfigInput;
