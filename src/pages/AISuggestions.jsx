import React from 'react';
import {
  Title,
  Text,
  TextInput,
  Textarea,
  Button,
  Paper,
  Group,
  Stack,
} from '@mantine/core';
import { IconBrain, IconSend } from '@tabler/icons-react';

function AISuggestions() {
  return (
    <div style={{ padding: '24px' }}>
      <div style={{ marginBottom: '24px' }}>
        <Title order={2} mb="xs">AI Suggestions</Title>
        <Text c="dimmed">
          Get intelligent proposal suggestions based on your requirements
        </Text>
      </div>

      <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: '1fr', lg: '3fr' }}>
        <div style={{ gridColumn: 'span 1' }}>
          <Paper shadow="xs" p="md" withBorder>
            <Title order={4} mb="md">Input Requirements</Title>
            <Stack>
              <TextInput label="Project Title" placeholder="Enter project title" />
              <Textarea
                label="Project Description"
                placeholder="Describe your project requirements"
                minRows={4}
              />
              <TextInput label="Budget Range" placeholder="e.g. $5,000 - $10,000" />
              <TextInput label="Timeline" placeholder="e.g. 2 weeks, 3 months" />
              <Button leftSection={<IconSend size={16} />} fullWidth>
                Generate Suggestions
              </Button>
            </Stack>
          </Paper>
        </div>

        <div style={{ gridColumn: 'span 2' }}>
          <Paper shadow="xs" p="md" withBorder>
            <Group justify="space-between" mb="md">
              <Title order={4}>AI Generated Proposal</Title>
              <IconBrain size={24} color="#228be6" />
            </Group>

            <div
              style={{
                backgroundColor: '#f8f9fa',
                padding: '16px',
                borderRadius: '8px',
                minHeight: '400px',
                marginBottom: '16px',
              }}
            >
              <Text c="dimmed" fs="italic">
                Your AI-generated proposal will appear here after you submit your requirements.
              </Text>
            </div>

            <Group justify="flex-end">
              <Button variant="outline">Save as Draft</Button>
              <Button>Export as PDF</Button>
            </Group>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default AISuggestions;