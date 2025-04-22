import React from 'react';
import {
  AppShell,
  Group,
  Text,
  Title,
  UnstyledButton,
  ActionIcon,
  Header as MantineHeader,
  Navbar as MantineNavbar,
  TextInput,
  Box,
  NavLink,
} from '@mantine/core';
import {
  IconLogout,
  IconSun,
  IconMoon,
  IconFileText,
  IconDashboard,
  IconBrain,
  IconSettings,
  IconPlus,
  IconSearch,
} from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';

function MainLayout({ children, colorScheme, toggleColorScheme }) {
  const location = useLocation();
  const dark = colorScheme === 'dark';

  const isActive = (path) => location.pathname === path;

  const navLinkStyles = (active) => ({
    fontSize: 22,
    fontWeight: 600,
    padding: '12px 18px',
    borderRadius: 999,
    backgroundColor: active ? 'white' : 'transparent',
    color: active ? '#ff6600' : dark ? '#e5e5e5' : '#424242',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: 'white',
      color: '#ff6600',
    },
  });

  const navLinks = [
    { label: 'Create RFP', to: '/create-rfp', icon: <IconPlus size={20} /> },
    { label: 'Dashboard', to: '/', icon: <IconDashboard size={20} /> },
    { label: 'RFP Responses', to: '/rfp-responses', icon: <IconFileText size={20} /> },
    { label: 'AI Suggestions', to: '/ai-suggestions', icon: <IconBrain size={20} /> },
    { label: 'Train My AI', to: '/train-my-ai', icon: <IconBrain size={20} /> },
    { label: 'Settings', to: '/settings', icon: <IconSettings size={20} /> },
  ];

  const navbar = (
    <MantineNavbar width={{ base: 300 }} p="md">
      <Box mb="md">
        <TextInput
          placeholder="Search projects..."
          icon={<IconSearch size={18} />}
          radius="xl"
          size="sm"
          styles={{
            input: {
              backgroundColor: dark ? '#1a1a1a' : '#f3f3f3',
              color: dark ? '#e5e5e5' : '#424242',
              borderColor: dark ? '#666' : '#ccc',
            },
          }}
        />
      </Box>

      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          component={Link}
          to={link.to}
          style={navLinkStyles(isActive(link.to))}
          label={
            <Group spacing="sm">
              {link.icon}
              <span>{link.label}</span>
            </Group>
          }
        />
      ))}

      <Box mt="xl" style={{ borderTop: '1px solid #2c2c2c', paddingTop: 20 }}>
        <UnstyledButton>
          <Group>
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
              JB
            </div>
            <div>
              <Text size="sm" fw={500}>
                Jason Brown
              </Text>
              <Text size="xs" c="dimmed">
                jason@example.com
              </Text>
            </div>
          </Group>
        </UnstyledButton>

        <NavLink
          label={
            <Group spacing="sm">
              <IconLogout size={20} />
              <span>Logout</span>
            </Group>
          }
          style={{
            fontWeight: 600,
            fontSize: 18,
            marginTop: 20,
            color: '#ff4d4d',
            '&:hover': {
              backgroundColor: dark ? '#2c2c2c' : '#f0f0f0',
            },
          }}
        />
      </Box>
    </MantineNavbar>
  );

  const header = (
    <MantineHeader height={60} p="md">
      <Group h="100%" position="apart">
        <Title
          order={3}
          style={{ cursor: 'pointer' }}
          component={Link}
          to="/"
          c={dark ? 'white' : 'black'}
        >
          ProposAI
        </Title>
        <ActionIcon
          variant="subtle"
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? <IconSun size={18} /> : <IconMoon size={18} />}
        </ActionIcon>
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