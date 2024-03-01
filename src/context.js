import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [alertClosed, setAlertClosed] = useState(false);

  return (
    <AppContext.Provider value={{ alertClosed, setAlertClosed }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
