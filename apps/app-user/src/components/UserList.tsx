import React, { useState } from 'react';
import { Button, Card } from '@shared/ui';

interface User {
  id: string;
  name: string;
  email: string;
}

export const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  ]);

  const handleAddUser = () => {
    const newUser: User = {
      id: String(users.length + 1),
      name: 'New User',
      email: 'new@example.com',
    };
    setUsers([...users, newUser]);
  };

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">User Management</h1>
      
      <Button
        variant="primary"
        size="md"
        onClick={handleAddUser}
        className="mb-6"
      >
        Add User
      </Button>

      <div className="grid gap-4">
        {users.map((user) => (
          <Card key={user.id} title={user.name}>
            <p className="text-gray-600">Email: {user.email}</p>
            <p className="text-sm text-gray-500">ID: {user.id}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserList;
