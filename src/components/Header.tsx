import React, { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-white text-2xl font-bold">RoboBloq</h2>
        {children}
      </div>
    </header>
  );
};

export default Header;