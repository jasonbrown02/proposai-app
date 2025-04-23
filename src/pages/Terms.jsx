// src/pages/Terms.jsx
import React from 'react';
import { Box, Title, Text, Stack } from '@mantine/core';

export default function Terms() {
  return (
    <Box p="xl" maw={800} mx="auto">
      <Title order={2} mb="md" style={{ color: 'var(--mantine-color-text)' }}>
        Terms of Service
      </Title>

      <Stack spacing="lg">
        <Text>
          Hey there! Welcome to ProposAI — the tiny but mighty tool helping freelancers tackle those big, boring RFPs. By using this app, you agree to play by the following simple ground rules. Nothing wild. No fine print shenanigans.
        </Text>

        <Title order={4}>1. You own your stuff</Title>
        <Text>
          Anything you upload — proposals, resumes, client info — belongs to you. We don't snoop. We don’t sell. We just help you work with it better (and faster).
        </Text>

        <Title order={4}>2. We own the tool</Title>
        <Text>
          The magic behind ProposAI (the code, the design, the late-night snacks that powered it) belongs to us. Please don’t copy, reverse-engineer, or try to resell it — we’re a small team and we notice that stuff.
        </Text>

        <Title order={4}>3. Don’t be shady</Title>
        <Text>
          Don’t use ProposAI for anything illegal, misleading, or spammy. It makes the vibe weird for everyone, and we’ll have to hit the eject button on your account.
        </Text>

        <Title order={4}>4. Beta means beta</Title>
        <Text>
          This app is still growing. Things might break. We’ll fix them fast. If something weird happens, tell us — we actually care and will probably thank you profusely.
        </Text>

        <Title order={4}>5. Privacy? Big yes.</Title>
        <Text>
          We take your data seriously. Everything is encrypted. No creepy tracking. If you're curious, check out our <strong>Privacy Policy</strong> for the nitty-gritty.
        </Text>

        <Title order={4}>6. We can update this</Title>
        <Text>
          If we ever need to change these terms, we’ll update this page. If the change is big, we’ll let you know. If it’s minor, we’ll just update the timestamp and move on.
        </Text>

        <Text size="sm" c="dimmed" mt="lg">
          Last updated: April 22, 2025
        </Text>
      </Stack>
    </Box>
  );
}