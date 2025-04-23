// src/layouts/MainLayout.jsx
import React from 'react';
import {
  AppShell,
  Group,
  Title,
  ActionIcon,
  TextInput,
  Box,
  NavLink,
  Menu,
  UnstyledButton,
  Text,
  useMantineTheme,
  Stack,
} from '@mantine/core';
import {
  IconLogout,
  IconSun,
  IconMoon,
  IconFileText,
  IconDashboard,
  IconBrain,
  IconPlus,
  IconSearch,
  IconChevronDown,
  IconGavel,
  IconShieldLock,
} from '@tabler/icons-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

function MainLayout({ children, colorScheme, toggleColorScheme }) {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useMantineTheme();
  const dark = theme.colorScheme === 'dark';

  const isActive = (path) => location.pathname === path;

  const navLinkStyles = (active, isCTA = false) => ({
    fontSize: 18,
    fontWeight: 600,
    padding: '12px 20px',
    borderRadius: 999,
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    backgroundColor: isCTA
      ? theme.colors.orange[6]
      : active
      ? dark
        ? '#ffffff'
        : '#000000'
      : 'transparent',
    color: isCTA
      ? '#ffffff'
      : active
      ? dark
        ? theme.colors.gray[8]
        : '#ffffff'
      : dark
      ? '#e5e5e5'
      : '#424242',
    '& svg': {
      color: isCTA
        ? '#ffffff'
        : active
        ? dark
          ? theme.colors.gray[8]
          : '#ffffff'
        : dark
        ? '#e5e5e5'
        : '#424242',
    },
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: isCTA
        ? theme.colors.orange[5]
        : dark
        ? theme.colors.dark[5]
        : theme.colors.gray[1],
      color: isCTA ? '#ffffff' : theme.colors.orange[6],
      '& svg': {
        color: theme.colors.orange[6],
      },
    },
  });

  const navLinks = [
    { label: 'Create RFP', to: '/create-rfp', icon: <IconPlus size={20} />, cta: true },
    { label: 'Dashboard', to: '/', icon: <IconDashboard size={20} /> },
    { label: 'RFP Responses', to: '/rfp-responses', icon: <IconFileText size={20} /> },
    { label: 'Train My AI', to: '/train-my-ai', icon: <IconBrain size={20} /> },
  ];

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/auth');
  };

  return (
    <AppShell
      padding="md"
      navbar={
        <Box
          style={{
            width: 300,
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            justifyContent: 'space-between',
            backgroundColor: dark ? '#121212' : '#ffffff',
            borderRight: `1px solid ${dark ? '#2c2c2c' : '#e0e0e0'}`,
          }}
        >
          <Box p="md">
            <Box mb="md">
              <TextInput
                placeholder="Search projects..."
                icon={<IconSearch size={18} />}
                radius="xl"
                size="sm"
                styles={{
                  input: {
                    backgroundColor: dark ? theme.colors.dark[5] : theme.colors.gray[0],
                    color: dark ? '#e5e5e5' : '#424242',
                    borderColor: dark ? theme.colors.dark[6] : theme.colors.gray[3],
                  },
                }}
              />
            </Box>

            <Stack spacing="xs" mt="sm">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  component={Link}
                  to={link.to}
                  sx={navLinkStyles(isActive(link.to), link.cta)}
                  label={
                    <Group spacing="sm">
                      {link.icon}
                      <span>{link.label}</span>
                    </Group>
                  }
                />
              ))}
            </Stack>
          </Box>

          <Box p="md" pb="lg">
            <Menu position="top-start" shadow="md" width={220} withArrow withinPortal>
              <Menu.Target>
                <UnstyledButton style={{ width: '100%' }}>
                  <Group position="apart">
                    <Group spacing="sm">
                      <Box
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          backgroundColor: theme.colors.blue[6],
                          color: '#fff',
                          fontSize: 14,
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        JB
                      </Box>
                      <Box>
                        <Text size="sm" fw={500}>
                          Jason Brown
                        </Text>
                        <Text size="xs" c="dimmed">
                          jason@example.com
                        </Text>
                      </Box>
                    </Group>
                    <IconChevronDown size={16} />
                  </Group>
                </UnstyledButton>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item icon={<IconGavel size={16} />} component={Link} to="/terms">
                  Terms of Service
                </Menu.Item>
                <Menu.Item icon={<IconShieldLock size={16} />} component={Link} to="/privacy">
                  Privacy Policy
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item icon={<IconLogout size={16} />} onClick={handleLogout} color="red">
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Box>
        </Box>
      }
      header={
        <Box
          style={{
            height: 60,
            padding: '0 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: `1px solid ${dark ? theme.colors.gray[8] : theme.colors.gray[2]}`,
          }}
        >
          <Title
            order={3}
            style={{ cursor: 'pointer' }}
            component={Link}
            to="/"
            c={dark ? 'white' : 'black'}
          >
            ProposAI
          </Title>
          <ActionIcon variant="subtle" onClick={toggleColorScheme} title="Toggle color scheme">
            {dark ? <IconSun size={18} /> : <IconMoon size={18} />}
          </ActionIcon>
        </Box>
      }
    >
      {children}
    </AppShell>
  );
}

export default MainLayout;