import React, { useState } from 'react';
import {
  AppShell,
  Burger,
  Group,
  NavLink,
  Text,
  Title,
  UnstyledButton,
  ActionIcon,
  Header as MantineHeader,
  Navbar as MantineNavbar,
} from '@mantine/core';
import {
  IconLogout,
  IconSun,
  IconMoon,
  IconFileText,
  IconDashboard,
  IconBrain,
  IconSettings,
} from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';

function MainLayout({ children, colorScheme, toggleColorScheme }) {
  const [opened, setOpened] = useState(false);
  const location = useLocation();
  const dark = colorScheme === 'dark';

  const navbar = (
    <MantineNavbar width={{ base: 300 }} hidden={!opened} hiddenFrom="sm" p="md">
      <NavLink
        component={Link}
        to="/"
        label="Dashboard"
        leftSection={<IconDashboard size={18} />}
        active={location.pathname === '/'}
      />
      <NavLink
        component={Link}
        to="/ai-suggestions"
        label="AI Suggestions"
        leftSection={<IconBrain size={18} />}
        active={location.pathname === '/ai-suggestions'}
      />
      <NavLink
        label="RFP Responses"
        leftSection={<IconFileText size={18} />}
      />
      <NavLink
        component={Link}
        to="/settings"
        label="Settings"
        leftSection={<IconSettings size={18} />}
        active={location.pathname === '/settings'}
      />
      <div style={{ marginTop: 'auto' }}>
        <NavLink
          label="Logout"
          leftSection={<IconLogout size={18} />}
        />
      </div>
    </MantineNavbar>
  );

  const header = (
    <MantineHeader height={60} p="md">
      <Group h="100%" position="apart">
        <Group>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            hiddenFrom="sm"
          />
          <Title order={3}>ProposAI</Title>
        </Group>
        <Group>
          <ActionIcon
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title={`Switch to ${dark ? 'light' : 'dark'} mode`}
          >
            {dark ? <IconSun size={16} /> : <IconMoon size={16} />}
          </ActionIcon>
          <UnstyledButton>
            <Group>
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                JB
              </div>
              <div>
                <Text size="sm" fw={500}>Jason Brown</Text>
                <Text size="xs" c="dimmed">jason@example.com</Text>
              </div>
            </Group>
          </UnstyledButton>
        </Group>
      </Group>
    </MantineHeader>
  );

  return (
    <AppShell padding="md" navbar={navbar} header={header}>
      {children}
    </AppShell>
  );
}

export default MainLayout;