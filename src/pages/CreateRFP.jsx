// src/pages/CreateRFP.jsx

import React, { useState } from 'react';
import {
  Box,
  Button,
  TextInput,
  Title,
  Stack,
  Paper,
  Text,
  Notification,
} from '@mantine/core';
import { IconAlertCircle, IconCheck } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export default function CreateRFP() {
  const [projectName, setProjectName] = useState('');
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!projectName.trim() || !summary.trim()) {
      setError('Please fill out both the project name and summary.');
      return;
    }

    setError('');

    // Simulate save or call Airtable API here
    console.log('Saving new RFP:', { projectName, summary });

    // Navigate to Upload page
    navigate('/upload-rfp');
  };

  return (
    <Box p="lg">
      <Title order={2} mb="lg" style={{ color: 'var(--mantine-color-text)' }}>
        Create New RFP Project
      </Title>

      <Paper p="xl" radius="md" withBorder style={{ backgroundColor: 'var(--mantine-color-body)' }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing="md">
            <TextInput
              label="Project Name"
              placeholder="e.g. City of Springfield Website Redesign"
              value={projectName}
              onChange={(e) => setProjectName(e.currentTarget.value)}
              required
            />

            <TextInput
              label="Short Summary"
              placeholder="A short description of the RFP"
              value={summary}
              onChange={(e) => setSummary(e.currentTarget.value)}
              required
            />

            {error && (
              <Notification icon={<IconAlertCircle size={18} />} color="red" title="Missing Fields" withCloseButton onClose={() => setError('')}>
                {error}
              </Notification>
            )}

            <Button type="submit" radius="xl" color="orange">
              Create Project
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}