import React from 'react';
import ReactDOM from 'react-dom/client'; // Use ReactDOM.createRoot for React 18+
import App from './App'; // Import your main App component
import { AppProvider } from './context/AppContext'; // Import the context provider

// Use createRoot for React 18+
const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
