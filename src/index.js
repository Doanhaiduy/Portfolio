import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProfileContextProvider from './context/ProfileContext';
import ThemeContextProvider from './context/ThemeContext';
import { Analytics } from '@vercel/analytics/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeContextProvider>
            <ProfileContextProvider>
                <App />
                <Analytics />
            </ProfileContextProvider>
        </ThemeContextProvider>
    </React.StrictMode>
);

reportWebVitals();
