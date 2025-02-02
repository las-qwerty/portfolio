import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
        <Route path="/" element={<App />} />
        </Routes>
    </BrowserRouter>
    </React.StrictMode>
)
// Add this to handle routing for GitHub Pages
window.addEventListener('load', () => {
    const redirect = sessionStorage.getItem('redirect');
    if (redirect) {
        sessionStorage.removeItem('redirect');
        window.history.replaceState(null, null, redirect);
    }
});

window.addEventListener('beforeunload', () => {
    const pathname = window.location.pathname;
    if (pathname !== '/') {
        sessionStorage.setItem('redirect', pathname);
    }
});