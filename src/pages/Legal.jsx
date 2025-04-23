import React from 'react';
import { Box, Title, Text, Anchor, Stack, Divider } from '@mantine/core';

export default function Legal() {
  return (
    <Box p="xl" maw={800} mx="auto">
      <Title order={2} mb="md" style={{ color: 'var(--mantine-color-text)' }}>
        Legal Stuff (The Boring but Important Bits)
      </Title>

      <Text size="md" mb="lg" color="dimmed">
        We like to keep things friendly and transparent. Here’s where you’ll find the nitty-gritty details.
      </Text>

      <Stack spacing="xl">
        <Box id="terms">
          <Title order={3} mb="sm">
            Terms of Service
          </Title>
          <Divider mb="sm" />
          <Text size="sm" color="dimmed">
            Welcome to ProposAI! By using our app, you're agreeing to follow our rules — no funny business, okay?
            These terms are here to protect you, us, and the digital universe we live in. TL;DR: Use ProposAI responsibly,
            don’t copy or resell our app, and please don't feed the AI junk data.
          </Text>
          <Anchor href="/terms" mt="sm" size="sm">
            Read full Terms of Service →
          </Anchor>
        </Box>

        <Box id="privacy">
          <Title order={3} mb="sm">
            Privacy Policy
          </Title>
          <Divider mb="sm" />
          <Text size="sm" color="dimmed">
            Your privacy is a big deal. We collect only the stuff needed to make ProposAI awesome. No creepy tracking,
            no shady data selling. Your uploaded documents and training data stay yours — we just borrow them to help the AI help you.
          </Text>
          <Anchor href="/privacy" mt="sm" size="sm">
            Read full Privacy Policy →
          </Anchor>
        </Box>
      </Stack>
    </Box>
  );
}