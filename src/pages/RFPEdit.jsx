import {
  Title,
  Button,
  Card,
  Group,
  Text,
  Badge,
  Textarea,
  Tabs,
  ScrollArea,
  Stack,
  Box,
} from "@mantine/core";
import { IconCheck, IconArchive } from "@tabler/icons-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function RFPEdit() {
  const [activeTab, setActiveTab] = useState("questions");
  const { id } = useParams();

  const questions = [
    {
      id: 1,
      text: "Describe your technical capabilities",
      answer: "",
    },
    {
      id: 2,
      text: "Provide examples of similar projects",
      answer: "",
    },
    {
      id: 3,
      text: "List your proposed timeline and milestones",
      answer: "",
    },
  ];

  return (
    <Box p="lg">
      <Stack spacing="xs" mb="lg">
        <Badge
          color="orange"
          size="lg"
          radius="sm"
          style={{ alignSelf: "flex-start", fontWeight: 600 }}
        >
          IN PROGRESS
        </Badge>

        <Title order={2} style={{ fontSize: "2rem", color: "var(--mantine-color-text)" }}>
          Website Redesign for City X
        </Title>

        <Group>
          <Button
            size="md"
            radius="xl"
            color="gray"
            variant="filled"
            leftSection={<IconCheck size={16} />}
          >
            Mark as Submitted
          </Button>
          <Button
            variant="outline"
            color="gray"
            size="md"
            radius="xl"
            leftSection={<IconArchive size={16} />}
          >
            Archive
          </Button>
        </Group>
      </Stack>

      <Tabs value={activeTab} onChange={setActiveTab} mb="lg" variant="outline">
        <Tabs.List>
          <Tabs.Tab value="questions" style={{ fontSize: "1.1rem" }}>Questions</Tabs.Tab>
          <Tabs.Tab value="notes" style={{ fontSize: "1.1rem" }}>Notes</Tabs.Tab>
          <Tabs.Tab value="history" style={{ fontSize: "1.1rem" }}>History</Tabs.Tab>
        </Tabs.List>
      </Tabs>

      {activeTab === "questions" && (
        <ScrollArea style={{ maxHeight: 'calc(100vh - 300px)' }}>
          <Stack spacing="lg">
            {questions.map((q, i) => (
              <Card key={q.id} withBorder p="xl" radius="md" style={{ backgroundColor: "var(--mantine-color-body)" }}>
                <Text fw={600} style={{ fontSize: "1.3rem", marginBottom: "12px", color: "var(--mantine-color-text)" }}>
                  {i + 1}. {q.text}
                </Text>
                <Textarea
                  placeholder="Draft your response here..."
                  autosize
                  minRows={5}
                  size="md"
                  styles={{
                    input: {
                      backgroundColor: "#f2f2f2",
                      color: "#111",
                      fontSize: "1.1rem",
                      padding: "14px"
                    },
                  }}
                  style={{ marginBottom: "16px" }}
                />
                <Button
                  variant="filled"
                  color="orange"
                  size="md"
                  radius="xl"
                  styles={{
                    label: { fontSize: "1rem", fontWeight: 600 }
                  }}
                >
                  Save
                </Button>
              </Card>
            ))}
          </Stack>
        </ScrollArea>
      )}

      {activeTab === "notes" && (
        <Card withBorder p="xl" radius="md" style={{ backgroundColor: "var(--mantine-color-body)", marginTop: "24px" }}>
          <Textarea
            placeholder="Add internal notes here..."
            minRows={6}
            size="md"
            styles={{
              input: {
                backgroundColor: "#f2f2f2",
                color: "#111",
                fontSize: "1.1rem",
                padding: "14px"
              },
            }}
          />
        </Card>
      )}

      {activeTab === "history" && (
        <Card withBorder p="xl" radius="md" style={{ backgroundColor: "var(--mantine-color-body)", marginTop: "24px" }}>
          <Text size="md" c="dimmed">
            View changes, submission logs, and activity history for this RFP.
          </Text>
        </Card>
      )}
    </Box>
  );
}