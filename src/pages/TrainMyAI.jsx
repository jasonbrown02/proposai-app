import React from 'react';
import {
  Title,
  Container,
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
    <Container size="sm">
      <Box mt="xl" mb="md">
        <Title order={2}>Train My AI</Title>
      </Box>

      <Stack spacing="md">
        <TextInput label="Full Name" placeholder="Jane Doe" />
        <Textarea label="Short Bio" placeholder="Tell us about yourself..." minRows={3} />
        <TextInput label="LinkedIn URL" placeholder="https://linkedin.com/in/you" />
        <TextInput label="Website / Portfolio" placeholder="https://yourportfolio.com" />

        <Checkbox.Group label="Preferred Tone" description="How should the AI sound?">
          <Group mt="xs">
            <Checkbox value="professional" label="Professional" />
            <Checkbox value="friendly" label="Friendly" />
            <Checkbox value="confident" label="Confident" />
            <Checkbox value="approachable" label="Approachable" />
          </Group>
        </Checkbox.Group>

        <Button fullWidth color="blue">Save My Profile</Button>
      </Stack>
    </Container>
  );
}

export default TrainMyAI;