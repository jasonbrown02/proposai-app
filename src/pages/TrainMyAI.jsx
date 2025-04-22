import React from 'react';
import {
  Title,
  TextInput,
  Textarea,
  Checkbox,
  Group,
  Button,
  Stack,
  Box,
} from '@mantine/core';

function TrainMyAI() {
  return (
    <Box p="lg">
      <Box mb="lg">
        <Title order={2} style={{ color: 'var(--mantine-color-text)' }}>
          Train My AI
        </Title>
      </Box>

      <Stack spacing="lg">
        <TextInput
          label="Full Name"
          placeholder="Jane Doe"
          size="md"
        />

        <Textarea
          label="Short Bio"
          placeholder="Tell us about yourself..."
          minRows={4}
          size="md"
        />

        <TextInput
          label="LinkedIn URL"
          placeholder="https://linkedin.com/in/you"
          size="md"
        />

        <TextInput
          label="Website / Portfolio"
          placeholder="https://yourportfolio.com"
          size="md"
        />

        <Checkbox.Group
          label="Preferred Tone"
          description="How should the AI sound?"
        >
          <Group mt="xs" spacing="md">
            <Checkbox value="professional" label="Professional" />
            <Checkbox value="friendly" label="Friendly" />
            <Checkbox value="confident" label="Confident" />
            <Checkbox value="approachable" label="Approachable" />
          </Group>
        </Checkbox.Group>

        <Group position="right">
          <Button
            color="orange"
            radius="xl"
            size="md"
          >
            Save My Profile
          </Button>
        </Group>
      </Stack>
    </Box>
  );
}

export default TrainMyAI;