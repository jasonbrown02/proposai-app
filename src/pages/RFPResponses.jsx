// src/pages/RFPResponses.jsx
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
    WON: theme.other.colors.accent.green,
    ARCHIVED: theme.colors.gray[6],
  };

  return (
    <Box p="lg">
      <Title order={2} mb="lg" style={{ color: isDark ? theme.other.colors.text.default : theme.other.colors.text.dark }}>
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
              backgroundColor: isDark ? theme.other.colors.background.dark : theme.other.colors.background.light,
            }}
          >
            <Flex justify="space-between" align="flex-start" wrap="wrap">
              <Box>
                <Title order={4} style={{ color: isDark ? theme.other.colors.text.default : theme.other.colors.text.dark }}>
                  {rfp.title}
                </Title>
                <Text size="sm" mt={4} style={{ color: isDark ? theme.colors.gray[5] : theme.colors.gray[7] }}>
                  ID: {rfp.id} • {rfp.questions} Questions • Submitted: {rfp.submitted}
                </Text>
              </Box>

              <Badge
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