import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import './index.module.scss';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}