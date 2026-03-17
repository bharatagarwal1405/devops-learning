import React from 'react';
import Overview from './components/Overview';
import Statistics from './components/Statistics';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Analytics and statistics overview
          </p>
        </div>
      </header>

      <main className="max-w-7xl p-4 sm:p-6 lg:p-8">
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Overview</h2>
          <Overview />
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Statistics</h2>
          <Statistics />
        </section>
      </main>
    </div>
  );
};

export default App;
