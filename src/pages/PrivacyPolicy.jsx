import React from 'react';
import { Box, Title, Text, Stack } from '@mantine/core';

export default function PrivacyPolicy() {
  return (
    <Box p="xl" maw={800} mx="auto">
      <Title order={2} mb="md" style={{ color: 'var(--mantine-color-text)' }}>
        Privacy Policy
      </Title>

      <Text size="md" mb="lg" color="dimmed">
        We take your privacy seriously (but not ourselves — that’s no fun). Here’s the scoop on what we collect,
        why we collect it, and how we protect your data.
      </Text>

      <Stack spacing="lg">
        <Box>
          <Title order={4}>What We Collect</Title>
          <Text size="sm" color="dimmed">
            - Your name and email (so we know who you are).<br />
            - Uploaded documents and personal training materials (like resumes or proposals you’ve shared).<br />
            - Usage data (so we can make ProposAI better — not because we’re creepy).
          </Text>
        </Box>

        <Box>
          <Title order={4}>What We Don’t Do</Title>
          <Text size="sm" color="dimmed">
            - We don’t sell your data.<br />
            - We don’t share your content with anyone unless you explicitly tell us to.<br />
            - We don’t let the AI run wild with your stuff (we train responsibly).
          </Text>
        </Box>

        <Box>
          <Title order={4}>How We Use Your Info</Title>
          <Text size="sm" color="dimmed">
            - To personalize your AI experience (like remembering how you write or what you’ve worked on).<br />
            - To improve the app and squash bugs.<br />
            - To send you updates — but only the helpful kind (no spam, promise).
          </Text>
        </Box>

        <Box>
          <Title order={4}>Data Security</Title>
          <Text size="sm" color="dimmed">
            We use industry-standard tools to keep your data safe. Everything is encrypted in transit and behind the
            scenes we’re following best practices like it’s our job. (Because it kind of is.)
          </Text>
        </Box>

        <Box>
          <Title order={4}>Questions?</Title>
          <Text size="sm" color="dimmed">
            If you’ve got any questions or concerns about privacy, shoot us an email at&nbsp;
            <a href="mailto:support@proposai.app">support@proposai.app</a>. We’ll reply like real humans.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}