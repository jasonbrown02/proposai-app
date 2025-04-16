import React from 'react';
import {
  Title,
  Button,
  Card,
  Group,
  Text,
  Badge,
  SimpleGrid,
} from '@mantine/core';
import { IconPlus, IconCheck } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const rfps = [
    {
      id: '0411-0357',
      name: 'Website Redesign for City X',
      questions: 12,
      due: '2025-04-30',
      lastProcessed: '2025-04-11',
      status: 'in progress',
    },
    {
      id: '0411-0352',
      name: 'Logo Design for Green Co-op',
      questions: 8,
      due: '2025-04-15',
      lastProcessed: '2025-04-10',
      status: 'submitted',
    },
  ];

  const statusColor = {
    'in progress': 'orange',
    submitted: 'green',
  };

  return (
    <div style={{ padding: '32px' }}>
      <Group justify="space-between" mb="xl">
        <Title order={1} style={{ fontSize: '2.25rem' }}>Active RFPs</Title>
        <Button
          component={Link}
          to="/rfp-edit/new"
          size="lg"
          radius="xl"
          color="blue"
          leftSection={<IconPlus size={20} />}
        >
          New RFP Response
        </Button>
      </Group>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
        {rfps.map((rfp) => (
          <Card
            key={rfp.id}
            withBorder
            shadow="sm"
            radius="md"
            p="xl"
            style={{ fontSize: '1.125rem' }}
          >
            <Group justify="space-between" align="center" mb="sm">
              <Text fw={600} style={{ fontSize: '1.25rem' }}>
                {rfp.name}
              </Text>
              <Badge size="lg" color={statusColor[rfp.status]} variant="filled">
                {rfp.status.toUpperCase()}
              </Badge>
            </Group>

            <Text size="md" c="dimmed">
              ID: {rfp.id} · {rfp.questions} Questions · Due {rfp.due}
            </Text>
            <Text size="sm" c="dimmed" mt={4}>
              Last Processed: {rfp.lastProcessed}
            </Text>

            <Group mt="xl" spacing="md">
              <Button
                component={Link}
                to={`/rfp-edit/${rfp.id}`}
                size="md"
                radius="xl"
                color="blue"
                leftSection={<IconCheck size={16} />}
              >
                Edit
              </Button>
              <Button size="md" radius="xl" color="gray" variant="light" disabled>
                Archive
              </Button>
              <Button size="md" radius="xl" color="green" variant="light">
                Mark as Won
              </Button>
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default Dashboard;