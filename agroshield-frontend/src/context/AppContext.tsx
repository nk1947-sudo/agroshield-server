import React, { createContext, useState, useContext, useMemo, useCallback } from 'react';

// Define user roles
export const USER_ROLES = {
  FIELD_OFFICER: 'Field Officer',
  DAO: 'District Agricultural Officer',
  LEGAL_OFFICER: 'Legal Officer',
  LAB_COORDINATOR: 'Lab Coordinator',
  HQ_MONITORING: 'HQ Monitoring Cell',
  DISTRICT_ADMIN: 'District Admin',
};

// App context interface
interface AppContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  userRole: string;
  setUserRole: (role: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [userRole, setUserRole] = useState(USER_ROLES.DAO);
  const [activeTab, setActiveTab] = useState('dashboard');

  const toggleDarkMode = useCallback(() => setDarkMode((prev) => !prev), []);

  const contextValue = useMemo(() => ({
    darkMode,
    toggleDarkMode,
    userRole,
    setUserRole,
    activeTab,
    setActiveTab,
  }), [darkMode, userRole, activeTab]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
