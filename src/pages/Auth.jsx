import React, { useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Stack,
  TextInput,
  PasswordInput,
  Title,
  Text,
  Group,
} from '@mantine/core';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box p="xl" maw={400} mx="auto">
      <Paper p="lg" shadow="sm" withBorder>
        <Title order={2} mb="md">
          {isLogin ? 'Welcome back' : 'Create an account'}
        </Title>

        <Stack spacing="md">
          <TextInput
            label="Email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            required
          />

          <PasswordInput
            label="Password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            required
          />

          {error && (
            <Text size="sm" c="red">
              {error}
            </Text>
          )}

          <Button onClick={handleAuth} radius="xl" color="orange" fullWidth>
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>

          <Group position="center">
            <Text size="sm">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
            </Text>
            <Button
              variant="subtle"
              size="xs"
              onClick={() => setIsLogin(!isLogin)}
              style={{ color: 'var(--mantine-color-text)' }}
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </Button>
          </Group>

          <Text size="xs" align="center" mt="sm" c="dimmed">
            By signing up, you agree to our{' '}
            <Link to="/terms">Terms</Link> and{' '}
            <Link to="/privacy">Privacy Policy</Link>.
          </Text>
        </Stack>
      </Paper>
    </Box>
  );
}