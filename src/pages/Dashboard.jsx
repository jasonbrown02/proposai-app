import React from 'react';
import {
  Title,
  Button,
  Card,
  Group,
  Text,
  Badge,
  SimpleGrid,
  ActionIcon,
} from '@mantine/core';
import { IconPlus, IconCheck } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { rem } from '@mantine/styles';

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
    <>
      <Group justify="space-between" mb="lg">
        <Title order={3}>Active RFPs</Title>
        <Button leftSection={<IconPlus style={{ width: rem(18), height: rem(18) }} />}>
          New RFP Response
        </Button>
      </Group>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {rfps.map((rfp) => (
          <Card shadow="sm" padding="lg" radius="md" withBorder key={rfp.id}>
            <Group justify="space-between" align="center">
              <Text fw={500}>{rfp.name}</Text>
              <Badge color={statusColor[rfp.status]}>{rfp.status.toUpperCase()}</Badge>
            </Group>
            <Text size="sm" c="dimmed" mt="sm">
              ID: {rfp.id} · {rfp.questions} Questions · Due {rfp.due}
            </Text>
            <Text size="xs" c="dimmed" mt={4}>
              Last Processed: {rfp.lastProcessed}
            </Text>

            <Group mt="md">
              <Button
                component={Link}
                to={`/rfp-edit/${rfp.id}`}
                size="xs"
                variant="light"
                leftSection={<IconCheck style={{ width: rem(14), height: rem(14) }} />}
              >
                Edit
              </Button>
              <Button size="xs" variant="light" color="gray" disabled>
                Archive
              </Button>
              <Button size="xs" variant="subtle" color="green">
                Mark as Won
              </Button>
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}

export default Dashboard;