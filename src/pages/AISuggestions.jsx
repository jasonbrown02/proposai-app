import React from 'react';
import {
  Title,
  Text,
  TextInput,
  Textarea,
  Button,
  Paper,
  Group,
} from '@mantine/core';
import { IconBrain, IconSend } from '@tabler/icons-react';

function AISuggestions() {
  return (
    <div style={{ padding: '24px' }}>
      <div style={{ marginBottom: '24px' }}>
        <Title order={2} style={{ marginBottom: '12px', fontSize: '2.2rem' }}>
          AI Suggestions
        </Title>
        <Text style={{ color: '#555', fontSize: '1.3rem' }}>
          Get intelligent proposal suggestions based on your requirements
        </Text>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px' }}>
        <Paper shadow="xs" p="md" withBorder>
          <Title order={4} style={{ marginBottom: '16px', fontSize: '1.4rem' }}>
            Input Requirements
          </Title>
          <form>
            <TextInput
              label="Project Title"
              placeholder="Enter project title"
              style={{ marginBottom: '16px' }}
              size="md"
              styles={{
                input: {
                  backgroundColor: '#f0f0f0',
                  color: '#111',
                  fontSize: '16px',
                },
              }}
            />
            <Textarea
              label="Project Description"
              placeholder="Describe your project requirements"
              minRows={4}
              style={{ marginBottom: '16px' }}
              size="md"
              styles={{
                input: {
                  backgroundColor: '#f0f0f0',
                  color: '#111',
                  fontSize: '16px',
                },
              }}
            />
            <TextInput
              label="Budget Range"
              placeholder="e.g. $5,000 - $10,000"
              style={{ marginBottom: '16px' }}
              size="md"
              styles={{
                input: {
                  backgroundColor: '#f0f0f0',
                  color: '#111',
                  fontSize: '16px',
                },
              }}
            />
            <TextInput
              label="Timeline"
              placeholder="e.g. 2 weeks, 3 months"
              style={{ marginBottom: '16px' }}
              size="md"
              styles={{
                input: {
                  backgroundColor: '#f0f0f0',
                  color: '#111',
                  fontSize: '16px',
                },
              }}
            />
            <Button
              leftSection={<IconSend size={16} />}
              fullWidth
              size="md"
              radius="xl"
            >
              Generate Suggestions
            </Button>
          </form>
        </Paper>

        <Paper shadow="xs" p="md" withBorder>
          <Group justify="space-between" style={{ marginBottom: '16px' }}>
            <Title order={4} style={{ fontSize: '1.4rem' }}>AI Generated Proposal</Title>
            <IconBrain size={24} style={{ color: '#228be6' }} />
          </Group>

          <div
            style={{
              backgroundColor: '#fafafa',
              padding: '16px',
              borderRadius: '8px',
              minHeight: '400px',
              marginBottom: '16px',
            }}
          >
            <Text style={{ fontSize: '1.2rem', color: '#888', fontStyle: 'italic' }}>
              Your AI-generated proposal will appear here after you submit your requirements.
            </Text>
          </div>

          <Group justify="flex-end">
            <Button variant="outline" size="md" radius="xl">Save as Draft</Button>
            <Button size="md" radius="xl">Export as PDF</Button>
          </Group>
        </Paper>
      </div>
    </div>
  );
}

export default AISuggestions;