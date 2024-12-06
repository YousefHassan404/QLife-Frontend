import React, { createContext, useState } from 'react';

// Create a context
export const SideContext = createContext();

// Create a provider component
export const SideProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false); // Initial state
    console.log(isOpen)
  // You can add functions to update the Side state if needed
const toggleSidebar = () => {
    setIsOpen(!isOpen);
};
  return (
    <SideContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SideContext.Provider>
  );
};
