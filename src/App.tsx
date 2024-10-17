import React, { useState } from 'react';
import { User } from 'lucide-react';
import Header from './components/Header';
import QooperInfo from './components/QooperInfo';
import UserModal from './components/UserModal';

function App() {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header>
        <button
          onClick={() => setIsUserModalOpen(true)}
          className="text-white hover:text-gray-200 transition-colors"
        >
          <User size={24} />
        </button>
      </Header>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">RoboBloq Qooper Robots</h1>
        <QooperInfo />
      </main>
      <UserModal isOpen={isUserModalOpen} onClose={() => setIsUserModalOpen(false)} />
    </div>
  );
}

export default App;