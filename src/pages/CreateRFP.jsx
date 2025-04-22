import React, { useState } from 'react';
import {
  Title,
  TextInput,
  Textarea,
  Select,
  Button,
  Box,
  Stack,
} from '@mantine/core';

export default function CreateRFP() {
  const [form, setForm] = useState({
    title: '',
    summary: '',
    deadline: '',
    submissionMethod: '',
    contactName: '',
    category: '',
  });

  const handleChange = (field) => (event) => {
    setForm((prev) => ({
      ...prev,
      [field]: event.target?.value || event,
    }));
  };

  const handleSubmit = () => {
    console.log('Creating RFP:', form);
    // Future: Add integration with Airtable or Make
  };

  return (
    <Box p="lg">
      <Title order={2} mb="lg" style={{ color: 'var(--mantine-color-text)' }}>
        Create New RFP Response
      </Title>

      <Stack spacing="lg">
        <TextInput
          label="RFP Title"
          placeholder="e.g. Website Redesign for City X"
          value={form.title}
          onChange={handleChange('title')}
          size="lg"
          styles={{ input: { backgroundColor: '#1e1e1e', color: '#e5e5e5' } }}
        />

        <Textarea
          label="Summary"
          placeholder="Short summary of the opportunity"
          value={form.summary}
          onChange={handleChange('summary')}
          autosize
          minRows={4}
          size="lg"
          styles={{ input: { backgroundColor: '#1e1e1e', color: '#e5e5e5' } }}
        />

        <TextInput
          label="Submission Deadline"
          placeholder="e.g. 2025-04-30"
          value={form.deadline}
          onChange={handleChange('deadline')}
          size="lg"
          styles={{ input: { backgroundColor: '#1e1e1e', color: '#e5e5e5' } }}
        />

        <TextInput
          label="Submission Method"
          placeholder="e.g. Email to contact@example.com"
          value={form.submissionMethod}
          onChange={handleChange('submissionMethod')}
          size="lg"
          styles={{ input: { backgroundColor: '#1e1e1e', color: '#e5e5e5' } }}
        />

        <TextInput
          label="Contact Name"
          placeholder="e.g. John Smith"
          value={form.contactName}
          onChange={handleChange('contactName')}
          size="lg"
          styles={{ input: { backgroundColor: '#1e1e1e', color: '#e5e5e5' } }}
        />

        <Select
          label="Category"
          placeholder="Select category"
          value={form.category}
          onChange={handleChange('category')}
          size="lg"
          data={[
            { value: 'web', label: 'Web Design' },
            { value: 'branding', label: 'Branding' },
            { value: 'logo', label: 'Logo Development' },
            { value: 'other', label: 'Other' },
          ]}
          styles={{
            input: {
              backgroundColor: '#1e1e1e',
              color: '#e5e5e5',
            },
            dropdown: {
              backgroundColor: '#1e1e1e',
            },
          }}
        />

        <Button
          onClick={handleSubmit}
          size="lg"
          fullWidth
          color="blue"
          radius="xl"
          style={{ fontWeight: 600 }}
        >
          Save RFP
        </Button>
      </Stack>
    </Box>
  );
}