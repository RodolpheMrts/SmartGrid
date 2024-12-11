import React, { useState } from 'react';
import { DataInput } from './components/DataInput';
import { ChartDisplay } from './components/ChartDisplay';
import { ChartSelector } from './components/ChartSelector';
import { Stats } from './components/Stats';
import { DataTable } from './components/DataTable';
import { validateDataPoint } from './utils/dataManagement';
import BottomBar from './components/BottomBar';
import { AreaChart } from 'lucide-react';


function App() {
  const [data, setData] = useState([]);
  const [chartType, setChartType] = useState('line');

  const handleDataAdd = (point) => {
    if (validateDataPoint(point)) {
      setData([...data, point]);
    }
  };

  const handleDataDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Ajouter des données
                </h2>
                <DataInput onDataAdd={handleDataAdd} />
                <DataTable data={data} onDelete={handleDataDelete} />
              </div>
            </div>

            <div className="md:col-span-2">
              <Stats data={data} />
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-2">
                    <AreaChart className="w-5 h-5 text-blue-600" />
                    <h2 className="text-lg font-medium text-gray-900">Visualisation</h2>
                  </div>
                  <ChartSelector
                    selectedType={chartType}
                    onTypeChange={setChartType}
                  />
                </div>
                {data.length > 0 ? (
                  <ChartDisplay data={data} type={chartType} />
                ) : (
                  <div className="flex items-center justify-center h-[400px] text-gray-500">
                    Ajoutez des données pour voir le graphique
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <BottomBar />
    </div>
  );
}

export default App;
