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
    <div style={{ padding: "32px", fontSize: "1.25rem", color: "#f1f1f1" }}>
      <Group justify="space-between" align="center" mb="lg">
        <Group>
          <Button
            component={Link}
            to="/"
            variant="subtle"
            size="md"
            leftSection={<IconArrowLeft size={20} />}
            styles={{
              label: { fontSize: "1.1rem", fontWeight: 500 }
            }}
          >
            Back to Dashboard
          </Button>
          <Title order={2} style={{ fontSize: "2rem" }}>
            Website Redesign for City X
          </Title>
          <Badge color="orange" size="lg" radius="sm">
            IN PROGRESS
          </Badge>
        </Group>
        <Group>
          <Button
            color="green"
            size="md"
            radius="xl"
            leftSection={<IconCheck size={18} />}
            styles={{
              label: { fontSize: "1.1rem", fontWeight: 500 }
            }}
          >
            Mark as Submitted
          </Button>
          <Button
            variant="outline"
            color="gray"
            size="md"
            radius="xl"
            leftSection={<IconArchive size={18} />}
            styles={{
              label: { fontSize: "1.1rem", fontWeight: 500 }
            }}
          >
            Archive
          </Button>
        </Group>
      </Group>

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
              <Card key={q.id} withBorder p="xl" radius="md" shadow="sm" style={{ backgroundColor: "#1e1e1e" }}>
                <Text fw={600} style={{ fontSize: "1.3rem", marginBottom: "12px" }}>
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
                  color="blue"
                  size="md"
                  radius="xl"
                  leftSection={<IconCheck size={16} />}
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
        <Card withBorder p="xl" radius="md" style={{ backgroundColor: "#1e1e1e", marginTop: "24px" }}>
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
        <Card withBorder p="xl" radius="md" style={{ backgroundColor: "#1e1e1e", marginTop: "24px" }}>
          <Text size="md" c="dimmed">
            View changes, submission logs, and activity history for this RFP.
          </Text>
        </Card>
      )}
    </div>
  );
}