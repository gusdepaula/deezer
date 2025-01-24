import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from './components/ui/provider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(Provider, { children: _jsx(BrowserRouter, { children: _jsx(App, {}) }) }) }));
