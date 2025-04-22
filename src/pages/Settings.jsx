import React from 'react';
import {
  Title,
  Text,
  Switch,
  TextInput,
  Select,
  Button,
  Paper,
  Divider,
  Stack,
  Group,
  Box,
} from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';

function Settings() {
  return (
    <Box p="lg">
      <Box mb="lg">
        <Title order={2} style={{ color: 'var(--mantine-color-text)' }}>
          Settings
        </Title>
        <Text size="sm" c="dimmed">
          Customize your ProposAI experience
        </Text>
      </Box>

      <Stack spacing="lg">
        <Paper
          shadow="xs"
          p="lg"
          radius="md"
          withBorder
          style={{ backgroundColor: 'var(--mantine-color-body)' }}
        >
          <Title
            order={4}
            mb="sm"
            style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--mantine-color-text)' }}
          >
            <IconSettings size={20} />
            Account Settings
          </Title>

          <Divider mb="md" />

          <Stack spacing="md">
            <TextInput
              label="Full Name"
              placeholder="Jason Brown"
              size="md"
            />
            <TextInput
              label="Email Address"
              placeholder="jason@example.com"
              size="md"
            />
            <TextInput
              label="Company"
              placeholder="Your Company"
              size="md"
            />
            <Group position="right" mt="sm">
              <Button radius="xl" color="orange">
                Save Changes
              </Button>
            </Group>
          </Stack>
        </Paper>

        <Paper
          shadow="xs"
          p="lg"
          radius="md"
          withBorder
          style={{ backgroundColor: 'var(--mantine-color-body)' }}
        >
          <Title
            order={4}
            mb="sm"
            style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--mantine-color-text)' }}
          >
            <IconSettings size={20} />
            Preferences
          </Title>

          <Divider mb="md" />

          <Stack spacing="md">
            <Group position="apart">
              <Box>
                <Text fw={600} style={{ color: 'var(--mantine-color-text)' }}>
                  Dark Mode
                </Text>
                <Text size="xs" c="dimmed">
                  Switch between light and dark themes
                </Text>
              </Box>
              <Switch />
            </Group>

            <Select
              label="Default Language"
              placeholder="Select language"
              size="md"
              data={[
                { value: 'en', label: 'English' },
                { value: 'es', label: 'Spanish' },
                { value: 'fr', label: 'French' },
              ]}
            />

            <Group position="apart">
              <Box>
                <Text fw={600} style={{ color: 'var(--mantine-color-text)' }}>
                  Email Notifications
                </Text>
                <Text size="xs" c="dimmed">
                  Receive updates and suggestions
                </Text>
              </Box>
              <Switch defaultChecked />
            </Group>

            <Group position="right" mt="sm">
              <Button radius="xl" color="orange">
                Save Preferences
              </Button>
            </Group>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
}

export default Settings;