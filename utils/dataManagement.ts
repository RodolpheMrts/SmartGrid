import type { DataPoint } from '../src/types/data';

export const validateDataPoint = (point: DataPoint): boolean => {
  return (
    typeof point.name === 'string' &&
    point.name.trim() !== '' &&
    typeof point.value === 'number' &&
    !isNaN(point.value)
  );
};

export const formatValue = (value: number): string => {
  return new Intl.NumberFormat('fr-FR').format(value);
};

export const calculateStats = (data: DataPoint[]) => {
  if (data.length === 0) return { min: 0, max: 0, average: 0, total: 0 };

  const values = data.map(d => d.value);
  return {
    min: Math.min(...values),
    max: Math.max(...values),
    average: values.reduce((a, b) => a + b, 0) / values.length,
    total: values.reduce((a, b) => a + b, 0)
  };
};