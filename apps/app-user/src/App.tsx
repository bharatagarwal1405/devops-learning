import React from 'react';
import UserList from './components/UserList';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <UserList />
    </div>
  );
};

export default App;
