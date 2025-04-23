import React, { useState, useEffect } from 'react';
import {
  MantineProvider,
  ColorSchemeProvider,
  Button,
  Text,
  Paper,
  useMantineColorScheme,
} from '@mantine/core';

function InnerContent() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Paper p="xl" radius="md" shadow="sm" style={{ minHeight: '100vh' }}>
      <Text mb="md" size="lg">
        Current mode: {colorScheme}
      </Text>
      <Button onClick={() => toggleColorScheme()}>Toggle Theme</Button>
    </Paper>
  );
}

export default function TestThemeToggle() {
  const [colorScheme, setColorScheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('mantine-color-scheme');
    if (saved) setColorScheme(saved);
  }, []);

  const toggleColorScheme = (value) => {
    const next = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(next);
    localStorage.setItem('mantine-color-scheme', next);
  };

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
        <InnerContent />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}