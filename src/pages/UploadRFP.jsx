// src/pages/UploadRFP.jsx

import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Title,
  Text,
  Stack,
  Paper,
  Group,
} from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';

export default function UploadRFP() {
  const GOOGLE_CLIENT_ID = '925240729794-l72hossqjl2khvle5tedb7qeoqpto0gg.apps.googleusercontent.com';
  const DRIVE_FOLDER_ID = '17B9cYDaR45Ls7365EcpAqAEGdj4Nljh8';

  // Load Google Picker API
  useEffect(() => {
    const loadPicker = () => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/api.js';
      script.onload = () => {
        window.gapi.load('client:auth2', initClient);
      };
      document.body.appendChild(script);
    };

    const initClient = () => {
      window.gapi.client
        .init({
          apiKey: '', // Optional if using OAuth only
          clientId: GOOGLE_CLIENT_ID,
          scope: 'https://www.googleapis.com/auth/drive.file',
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
        })
        .then(() => {
          console.log('Google API initialized');
        });
    };

    loadPicker();
  }, []);

  const handleFileUpload = async () => {
    const authInstance = window.gapi.auth2.getAuthInstance();
    await authInstance.signIn();

    const user = authInstance.currentUser.get();
    const accessToken = user.getAuthResponse().access_token;

    const picker = new window.google.picker.PickerBuilder()
      .addView(window.google.picker.ViewId.DOCS)
      .setOAuthToken(accessToken)
      .setDeveloperKey('') // Optional for OAuth-only flows
      .enableFeature(window.google.picker.Feature.MULTISELECT_ENABLED)
      .setCallback((data) => {
        if (data.action === window.google.picker.Action.PICKED) {
          console.log('Selected file:', data.docs[0]);
        }
      })
      .build();

    picker.setVisible(true);
  };

  return (
    <Box p="lg">
      <Title order={2} mb="lg" style={{ color: 'var(--mantine-color-text)' }}>
        Upload & Process RFP
      </Title>

      <Paper p="xl" radius="md" withBorder style={{ backgroundColor: 'var(--mantine-color-body)' }}>
        <Stack spacing="lg">
          <Text size="md">
            Click below to upload your RFP PDF file. It will be automatically converted and processed.
          </Text>

          <Group position="left">
            <Button
              leftSection={<IconUpload size={18} />}
              radius="xl"
              size="md"
              variant="filled"
              onClick={handleFileUpload}
              color="gray"
            >
              Upload RFP
            </Button>
          </Group>
        </Stack>
      </Paper>
    </Box>
  );
}