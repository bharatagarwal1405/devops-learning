import React from 'react';
import { Card } from '@shared/ui';

export const Overview: React.FC = () => {
  const metrics = [
    { label: 'Total Users', value: '2,543' },
    { label: 'Active Sessions', value: '847' },
    { label: 'API Calls/Min', value: '12.5K' },
    { label: 'Uptime', value: '99.98%' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.label}>
          <p className="text-sm text-gray-600">{metric.label}</p>
          <p className="mt-2 text-2xl font-bold">{metric.value}</p>
        </Card>
      ))}
    </div>
  );
};

export default Overview;
