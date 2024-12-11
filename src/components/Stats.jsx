import { Calculator } from 'lucide-react';
import { calculateStats } from '../utils/dataManagement';

export function Stats({ data }) {
  const stats = calculateStats(data);

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <Calculator className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-medium text-gray-900">Statistiques</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[{
          label: 'Minimum',
          value: stats.min
        }, {
          label: 'Maximum',
          value: stats.max
        }, {
          label: 'Moyenne',
          value: stats.average.toFixed(2)
        }, {
          label: 'Total',
          value: stats.total
        }].map(({ label, value }) => (
          <div key={label} className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-500">{label}</div>
            <div className="text-lg font-semibold text-gray-900">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
