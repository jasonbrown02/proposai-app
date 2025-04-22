import React from 'react';
import {
  Stack,
  Box,
  Flex,
  Title,
  Group,
  Text,
  Button,
  Paper,
  Badge,
  useMantineTheme,
} from '@mantine/core';

const mockResponses = [
  {
    id: '0401-0020',
    title: 'Brand Refresh for Sunshine Bakery',
    questions: 10,
    submitted: '2025-04-01',
    status: 'WON',
  },
  {
    id: '0328-0113',
    title: 'Logo and Identity for TechRoots',
    questions: 7,
    submitted: '2025-03-28',
    status: 'ARCHIVED',
  },
];

export default function RFPResponses() {
  const theme = useMantineTheme();
  const isDark = theme.colorScheme === 'dark';

  const statusColors = {
    WON: theme.colors.accent?.green || 'green',
    ARCHIVED: theme.colors.gray?.[6] || 'gray',
  };

  return (
    <Box p="lg">
      <Title order={2} mb="lg" style={{ color: theme.colors.text?.default || (isDark ? '#f1f1f1' : '#1a1a1a') }}>
        Completed RFPs
      </Title>

      <Stack spacing="md">
        {mockResponses.map((rfp) => (
          <Paper
            key={rfp.id}
            p="lg"
            radius="md"
            withBorder
            style={{
              backgroundColor: theme.colors.dark?.[7] || '#1e1e1e',
              position: 'relative',
            }}
          >
            <Flex justify="space-between" align="flex-start" wrap="wrap">
              <Box>
                <Title order={4} style={{ color: theme.colors.text?.default || (isDark ? '#f1f1f1' : '#1a1a1a') }}>
                  {rfp.title}
                </Title>
                <Text size="sm" mt={4} style={{ color: theme.colors.text?.subtle || (isDark ? '#888' : '#444') }}>
                  ID: {rfp.id} • {rfp.questions} Questions • Submitted: {rfp.submitted}
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
                  backgroundColor: statusColors[rfp.status],
                  color: 'white',
                }}
              >
                {rfp.status}
              </Badge>
            </Flex>

            <Group mt="md">
              <Button
                component="a"
                href={`/rfp-edit/${rfp.id}`}
                radius="xl"
                size="sm"
                color="orange"
                variant="filled"
              >
                Edit
              </Button>
            </Group>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}