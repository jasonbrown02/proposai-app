// src/pages/Dashboard.jsx
import React from 'react';
import {
  Title,
  Button,
  Badge,
  Stack,
  Group,
  Text,
  Box,
  Paper,
  Flex,
} from '@mantine/core';

const mockRFPs = [
  {
    id: '0411-0357',
    title: 'Website Redesign for City X',
    questions: 12,
    dueDate: '2025-04-30',
    lastProcessed: '2025-04-11',
    status: 'IN PROGRESS',
  },
  {
    id: '0411-0352',
    title: 'Logo Design for Green Co-op',
    questions: 8,
    dueDate: '2025-04-15',
    lastProcessed: '2025-04-10',
    status: 'SUBMITTED',
  },
];

const statusColors = {
  'IN PROGRESS': 'orange',
  SUBMITTED: 'green',
};

export default function Dashboard() {
  return (
    <Box p="lg">
      <Group justify="space-between" align="center" mb="lg">
        <Title order={2} style={{ color: 'var(--mantine-color-text)' }}>
          Active RFPs
        </Title>
      </Group>

      <Stack spacing="lg">
        {mockRFPs.map((rfp) => (
          <Paper
            key={rfp.id}
            p="lg"
            radius="md"
            withBorder
            style={{
              backgroundColor: 'var(--mantine-color-body)',
              position: 'relative',
            }}
          >
            <Flex justify="space-between" align="flex-start" wrap="wrap">
              <Box>
                <Title order={4} style={{ color: 'var(--mantine-color-text)' }}>
                  {rfp.title}
                </Title>
                <Text size="sm" mt={4} style={{ color: 'var(--mantine-color-text)' }}>
                  ID: {rfp.id} • {rfp.questions} Questions • Due {rfp.dueDate}
                </Text>
                <Text size="xs" mt={2} style={{ color: 'var(--mantine-color-text)' }}>
                  Last Processed: {rfp.lastProcessed}
                </Text>
              </Box>

              <Badge
                color={statusColors[rfp.status]}
                size="lg"
                radius="xl"
                style={{
                  alignSelf: 'flex-start',
                  fontWeight: 600,
                  marginTop: 4,
                }}
              >
                {rfp.status}
              </Badge>
            </Flex>

            <Group mt="md">
              <Button variant="filled" color="orange" radius="xl">
                Edit
              </Button>
              <Button variant="filled" color="gray" radius="xl">
                Archive
              </Button>
              <Button variant="filled" color="gray" radius="xl">
                Mark as Won
              </Button>
            </Group>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}