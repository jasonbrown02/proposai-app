import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  Group,
  Stack,
  Text,
  Textarea,
  Title,
} from '@mantine/core';

function AISuggestions() {
  const [responses, setResponses] = useState([
    {
      id: 1,
      question: 'What is your technical approach?',
      draft: '',
    },
    {
      id: 2,
      question: 'Describe your team’s qualifications.',
      draft: '',
    },
  ]);

  const handleDraftChange = (id, value) => {
    setResponses((prev) =>
      prev.map((r) => (r.id === id ? { ...r, draft: value } : r))
    );
  };

  const handleSave = (id) => {
    console.log('Saved draft for response:', id);
  };

  return (
    <Box p="lg">
      <Title order={2} mb="lg" style={{ color: 'var(--mantine-color-text)' }}>
        AI Suggestions
      </Title>

      <Stack spacing="lg">
        {responses.map((response) => (
          <Card
            key={response.id}
            p="lg"
            radius="md"
            withBorder
            style={{
              backgroundColor: 'var(--mantine-color-body)',
              borderColor: '#2c2c2c',
            }}
          >
            <Text
              size="lg"
              fw={600}
              mb="xs"
              style={{ color: 'var(--mantine-color-text)' }}
            >
              {response.id}. {response.question}
            </Text>

            <Textarea
              autosize
              minRows={4}
              radius="md"
              value={response.draft}
              onChange={(e) => handleDraftChange(response.id, e.currentTarget.value)}
              placeholder="Draft your response here..."
              styles={{
                input: {
                  backgroundColor: '#f2f2f2',
                  color: '#111',
                  fontSize: '1.05rem',
                  padding: '12px',
                },
              }}
            />

            <Group mt="md" position="right">
              <Button
                radius="xl"
                color="orange"
                size="md"
                onClick={() => handleSave(response.id)}
              >
                Save
              </Button>
            </Group>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}

export default AISuggestions;