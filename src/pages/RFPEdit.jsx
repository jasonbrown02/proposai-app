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
} from "@mantine/core";
import { IconArrowLeft, IconCheck, IconArchive } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

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
    <div style={{ padding: "24px" }}>
      <Group justify="space-between" align="center" style={{ marginBottom: "16px" }}>
        <Group>
          <Button
            component={Link}
            to="/"
            variant="subtle"
            leftSection={<IconArrowLeft style={{ width: 18, height: 18 }} />}
          >
            Back to Dashboard
          </Button>
          <Title order={3}>Website Redesign for City X</Title>
          <Badge color="orange">In Progress</Badge>
        </Group>
        <Group>
          <Button
            color="green"
            leftSection={<IconCheck style={{ width: 16, height: 16 }} />}
          >
            Mark as Submitted
          </Button>
          <Button
            variant="outline"
            color="gray"
            leftSection={<IconArchive style={{ width: 16, height: 16 }} />}
          >
            Archive
          </Button>
        </Group>
      </Group>

      <Tabs value={activeTab} onChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Tab value="questions">Questions</Tabs.Tab>
          <Tabs.Tab value="notes">Notes</Tabs.Tab>
          <Tabs.Tab value="history">History</Tabs.Tab>
        </Tabs.List>
      </Tabs>

      {activeTab === "questions" && (
        <ScrollArea style={{ marginTop: "24px" }}>
          <Stack spacing="md">
            {questions.map((q, i) => (
              <Card key={q.id} withBorder padding="md" radius="md" shadow="sm">
                <Text fw={600} mb="xs">
                  {i + 1}. {q.text}
                </Text>
                <Textarea
                  placeholder="Draft your response here..."
                  autosize
                  minRows={4}
                  style={{ marginBottom: "12px" }}
                />
                <Button
                  variant="filled"
                  color="blue"
                  leftSection={<IconCheck style={{ width: 14, height: 14 }} />}
                >
                  Save
                </Button>
              </Card>
            ))}
          </Stack>
        </ScrollArea>
      )}

      {activeTab === "notes" && (
        <Card withBorder padding="md" style={{ marginTop: "24px" }}>
          <Textarea placeholder="Add internal notes here..." minRows={6} autosize />
        </Card>
      )}

      {activeTab === "history" && (
        <Card withBorder padding="md" style={{ marginTop: "24px" }}>
          <Text size="sm" c="dimmed">
            View changes, submission logs, and activity history for this RFP.
          </Text>
        </Card>
      )}
    </div>
  );
}