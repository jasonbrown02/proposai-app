import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import AISuggestions from './pages/AISuggestions.jsx';
import Settings from './pages/Settings.jsx';
import RFPEdit from './pages/RFPEdit.jsx';
import TrainMyAI from './pages/TrainMyAI.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';

function App() {
  const [colorScheme, setColorScheme] = useState('dark');

  const toggleColorScheme = (value) => {
    const nextScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextScheme);
    localStorage.setItem('mantine-color-scheme', nextScheme);
  };

  useEffect(() => {
    const saved = localStorage.getItem('mantine-color-scheme');
    if (saved) {
      setColorScheme(saved);
    }
  }, []);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          primaryColor: 'blue',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MainLayout colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                  <Dashboard />
                </MainLayout>
              }
            />
            <Route
              path="/ai-suggestions"
              element={
                <MainLayout colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                  <AISuggestions />
                </MainLayout>
              }
            />
            <Route
              path="/settings"
              element={
                <MainLayout colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                  <Settings />
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
              path="/train-my-ai"
              element={
                <MainLayout colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                  <TrainMyAI />
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