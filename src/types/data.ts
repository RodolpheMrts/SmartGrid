export interface DataPoint {
  name: string;
  value: number;
}

export interface DataSet {
  id: string;
  label: string;
  data: DataPoint[];
  color: string;
}