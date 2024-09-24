import React from 'react';
import Button from './components/Button';  // Импортируем компонент Button
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const App = () => {
  return (
    <div className="p-6 space-y-4">
      {/* Solid Button */}
      <Button variant="solid">Solid Button</Button>

      {/* Outline Button */}
      <Button variant="outline">Outline Button</Button>

      {/* Ghost Button */}
      <Button variant="ghost">Ghost Button</Button>

      {/* Loading Button */}
      <Button 
        variant="solid" 
        isLoading={true} 
        leftIcon={<AiOutlineLoading3Quarters />}
      >
        Loading Button
      </Button>

      {/* Button with custom styles */}
      <Button 
        variant="solid" 
        className="bg-red-500 hover:bg-red-700"
      >
        Custom Red Button
      </Button>

      
    </div>

    
  );
};

export default App;
