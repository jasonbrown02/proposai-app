// src/pages/Privacy.jsx
import React from 'react';
import { Box, Title, Text, Stack } from '@mantine/core';

export default function Privacy() {
  return (
    <Box p="xl" maw={800} mx="auto">
      <Title order={2} mb="md">
        Privacy Policy
      </Title>

      <Stack spacing="md">
        <Text>
          Hey there! We know privacy policies are nobody’s idea of a good time, but it’s important to us that you know exactly how your data is used and protected when you use ProposAI.
        </Text>

        <Title order={4}>1. What we collect</Title>
        <Text>
          When you sign up, we collect your email and (optionally) your name. When you upload RFPs, resumes, or bios, we store them securely to help generate awesome proposals.
        </Text>

        <Title order={4}>2. How we use your info</Title>
        <Text>
          Your data powers your workspace. We use it to train AI suggestions tailored to your tone, and to help streamline your proposal writing process. We do not—and will not—sell your data or use it to show you ads.
        </Text>

        <Title order={4}>3. Who sees your data</Title>
        <Text>
          Just you (and any teammates you invite, if that becomes a thing later). We don’t share your documents or responses with anyone outside of the AI that helps you build them.
        </Text>

        <Title order={4}>4. Third-party services</Title>
        <Text>
          We use some third-party tools (like Firebase, Airtable, and OpenAI) to make things run smoothly. They’re solid and secure, but check out their policies if you’re curious.
        </Text>

        <Title order={4}>5. Your rights</Title>
        <Text>
          You can update or delete your data anytime. Just log in and head to your settings. Need help? Shoot us a message.
        </Text>

        <Title order={4}>6. Cookies & tracking</Title>
        <Text>
          We only use cookies for login/session stuff. No creepy ad tracking here.
        </Text>

        <Title order={4}>7. Questions?</Title>
        <Text>
          We’re real humans building this thing, and we care about doing it right. If you have any questions or concerns, email us at support@proposai.app and we’ll sort it out.
        </Text>

        <Text size="sm" c="dimmed">
          Last updated: April 22, 2025
        </Text>
      </Stack>
    </Box>
  );
}