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
    <Box style={{ padding: '24px' }}>
      <Box style={{ marginBottom: '24px' }}>
        <Title order={2} style={{ marginBottom: '12px' }}>
          Settings
        </Title>
        <Text color="dimmed">Customize your ProposAI experience</Text>
      </Box>

      <Group align="flex-start" spacing="xl" grow>
        <Paper shadow="xs" padding="md" withBorder>
          <Title order={4} style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <IconSettings size={20} color="purple" />
            Account Settings
          </Title>
          <Divider style={{ marginBottom: '16px' }} />

          <Stack spacing="md">
            <TextInput label="Full Name" placeholder="Jason Brown" />
            <TextInput label="Email Address" placeholder="jason@example.com" />
            <TextInput label="Company" placeholder="Your Company" />
            <Button mt="sm">Save Changes</Button>
          </Stack>
        </Paper>

        <Paper shadow="xs" padding="md" withBorder>
          <Title order={4} style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <IconSettings size={20} color="purple" />
            Preferences
          </Title>
          <Divider style={{ marginBottom: '16px' }} />

          <Stack spacing="md">
            <Group position="apart">
              <Box>
                <Text fw={500}>Dark Mode</Text>
                <Text size="xs" color="dimmed">
                  Switch between light and dark themes
                </Text>
              </Box>
              <Switch />
            </Group>

            <Select
              label="Default Language"
              placeholder="Select language"
              data={[
                { value: 'en', label: 'English' },
                { value: 'es', label: 'Spanish' },
                { value: 'fr', label: 'French' },
              ]}
            />

            <Group position="apart">
              <Box>
                <Text fw={500}>Email Notifications</Text>
                <Text size="xs" color="dimmed">
                  Receive updates and suggestions
                </Text>
              </Box>
              <Switch defaultChecked />
            </Group>

            <Button mt="sm">Save Preferences</Button>
          </Stack>
        </Paper>
      </Group>
    </Box>
  );
}

export default Settings;