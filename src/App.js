// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';

import Dashboard from './pages/Dashboard.jsx';
import RFPEdit from './pages/RFPEdit.jsx';
import TrainMyAI from './pages/TrainMyAI.jsx';
import CreateRFP from './pages/CreateRFP.jsx';
import RFPResponses from './pages/RFPResponses.jsx';
import UploadRFP from './pages/UploadRFP.jsx';
import Auth from './pages/Auth.jsx';
import Terms from './pages/Terms.jsx';
import Privacy from './pages/Privacy.jsx';

import MainLayout from './layouts/MainLayout.jsx';
import { theme as customTheme } from './theme.js';
import ButtonStyles from './styles/ButtonStyles.js';

function App() {
  const [colorScheme, setColorScheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('mantine-color-scheme');
    if (saved) {
      setColorScheme(saved);
    }
  }, []);

  const toggleColorScheme = (value) => {
    const next = typeof value === 'string' ? value : (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(next);
    localStorage.setItem('mantine-color-scheme', next);
  };

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        key={colorScheme} // Force theme refresh
        theme={{ ...customTheme, colorScheme }}
        styles={{ Button: ButtonStyles }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route
              path="/"
              element={
                <MainLayout colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                  <Dashboard />
                </MainLayout>
              }
            />
            <Route
              path="/create-rfp"
              element={
                <MainLayout colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                  <CreateRFP />
                </MainLayout>
              }
            />
            <Route
              path="/upload-rfp"
              element={
                <MainLayout colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                  <UploadRFP />
                </MainLayout>
              }
            />
            <Route
              path="/rfp-responses"
              element={
                <MainLayout colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                  <RFPResponses />
                </MainLayout>
              }
            />
            <Route
              path="/train-my-ai"
              element={
                <MainLayout colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                  <TrainMyAI />
                </MainLayout>
              }
            />
            <Route
              path="/rfp-edit/:id"
              element={
                <MainLayout colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                  <RFPEdit />
                </MainLayout>
              }
            />
            <Route
              path="/terms"
              element={
                <MainLayout colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                  <Terms />
                </MainLayout>
              }
            />
            <Route
              path="/privacy"
              element={
                <MainLayout colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                  <Privacy />
                </MainLayout>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;