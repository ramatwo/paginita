import React from 'react';

const qooperModels = [
  {
    name: 'Qoopers',
    description: 'The original Qooper robot, perfect for beginners to learn coding and robotics.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400&h=300',
  },
  {
    name: 'Qoopers 2',
    description: 'An advanced version of Qoopers with enhanced features and capabilities.',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=400&h=300',
  },
  {
    name: 'Qoopers Plus',
    description: 'A more versatile robot with additional sensors and programming options.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400&h=300',
  },
];

const QooperInfo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {qooperModels.map((model, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={model.image} alt={model.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{model.name}</h3>
            <p className="text-gray-600">{model.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QooperInfo;