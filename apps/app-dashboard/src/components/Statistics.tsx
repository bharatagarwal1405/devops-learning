import React from 'react';
import { Card, Button } from '@shared/ui';
import { useCounter } from '@shared/ui';

export const Statistics: React.FC = () => {
  const { count, increment, decrement, reset } = useCounter({
    initialValue: 100,
    step: 5,
  });

  return (
    <div className="space-y-4">
      <Card title="Active Users">
        <p className="text-4xl font-bold text-blue-600">{count}</p>
        <p className="mt-2 text-gray-600">Total users in system</p>
        <div className="mt-4 flex gap-2">
          <Button variant="primary" size="sm" onClick={increment}>
            Increase
          </Button>
          <Button variant="secondary" size="sm" onClick={decrement}>
            Decrease
          </Button>
          <Button variant="danger" size="sm" onClick={reset}>
            Reset
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Statistics;
