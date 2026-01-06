
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const mountApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Critical error: Root element not found in DOM.");
    return;
  }
  
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (err) {
    console.error("Failed to render React application:", err);
  }
};

// Handle mounting regardless of script load order
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
