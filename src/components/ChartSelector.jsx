import { BarChart2, LineChart } from 'lucide-react';

export function ChartSelector({ selectedType, onTypeChange }) {
  return (
    <div className="flex space-x-4">
      <button
        onClick={() => onTypeChange('line')}
        className={`p-2 rounded-md ${
          selectedType === 'line'
            ? 'bg-blue-100 text-blue-600'
            : 'bg-gray-100 text-gray-600'
        }`}
      >
        <LineChart className="w-6 h-6" />
      </button>
      <button
        onClick={() => onTypeChange('bar')}
        className={`p-2 rounded-md ${
          selectedType === 'bar'
            ? 'bg-blue-100 text-blue-600'
            : 'bg-gray-100 text-gray-600'
        }`}
      >
        <BarChart2 className="w-6 h-6" />
      </button>
    </div>
  );
}
