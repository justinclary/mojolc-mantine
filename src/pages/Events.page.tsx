import { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Badge,
  Box,
  Button,
  Center,
  Container,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Table,
  Text,
  Title,
} from '@mantine/core';
import { Calendar } from '@mantine/dates';
import { IconAlertCircle } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { useAuth } from '../contexts/AuthContext';
import { events } from '../data/events';
import type { EventType } from '../data/events';

const eventTypeColors: Record<EventType, string> = {
  game: 'blue',
  practice: 'blue',
  tryout: 'yellow',
  other: 'pink',
};

const eventDates = new Set(events.map((e) => e.date));

function EventsCalendar() {
  const [date, setDate] = useState<string>(events[0]?.date ?? dayjs().format('YYYY-MM-DD'));

  return (
    <Calendar
      date={date}
      onDateChange={setDate}
      renderDay={(dateStr) => {
        const hasEvent = eventDates.has(dateStr);
        const day = dayjs(dateStr).date();
        return (
          <Box pos="relative">
            <Text size="sm">{day}</Text>
            {hasEvent && (
              <Box
                pos="absolute"
                bottom={2}
                left="50%"
                style={{
                  transform: 'translateX(-50%)',
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  backgroundColor: 'var(--mantine-color-blue-6)',
                }}
              />
            )}
          </Box>
        );
      }}
    />
  );
}

function PasscodeForm() {
  const { authenticate } = useAuth();
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === import.meta.env.VITE_EVENTS_PASSCODE) {
      authenticate();
    } else {
      setError(true);
      setPasscode('');
    }
  };

  return (
    <Center py="xl" style={{ minHeight: '100%' }}>
      <Paper
        component="section"
        shadow="md"
        p="xl"
        radius="md"
        withBorder
        w={360}
        style={{ backgroundColor: 'var(--mojo-subtle-bg)' }}
      >
        <Stack>
          <Title order={3} ta="center" c="blue">
            Events Access
          </Title>
          <Text c="dimmed" ta="center" size="sm">
            Enter the team passcode to view the events calendar.
          </Text>
          {error && (
            <Alert icon={<IconAlertCircle size={16} />} color="pink" variant="light">
              Incorrect passcode. Please try again.
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <Stack gap="sm">
              <PasswordInput
                placeholder="Enter passcode"
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.currentTarget.value);
                  setError(false);
                }}
                autoComplete="off"
              />
              <Button type="submit" fullWidth variant="gradient">
                Access Events
              </Button>
              <Text size="xs" c="dimmed" ta="center">
                Passcode is shared with players and families only.
              </Text>
            </Stack>
          </form>
        </Stack>
      </Paper>
    </Center>
  );
}

function EventsView() {
  const { deauthenticate } = useAuth();
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <Container size="lg" py="xl">
      <Paper
        component="section"
        radius="md"
        p="xl"
        style={{ backgroundColor: 'var(--mojo-subtle-bg)', flex: 1 }}
      >
        <Group justify="space-between" mb="xl">
          <Title order={1} c="blue">
            Events Calendar
          </Title>
          <Button variant="subtle" color="pink" size="sm" onClick={deauthenticate}>
            Lock
          </Button>
        </Group>

        <EventsCalendar />

        <Title order={3} mt="xl" mb="md">
          Upcoming Events
        </Title>
        <Table withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Date</Table.Th>
              <Table.Th>Event</Table.Th>
              <Table.Th>Type</Table.Th>
              <Table.Th>Location</Table.Th>
              <Table.Th>Teams</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {sorted.map((event) => (
              <Table.Tr key={event.id}>
                <Table.Td style={{ whiteSpace: 'nowrap' }}>
                  {dayjs(event.date).format('MMM D, YYYY')}
                </Table.Td>
                <Table.Td>
                  <Text fw={500}>{event.title}</Text>
                  {event.description && (
                    <Text size="xs" c="dimmed">
                      {event.description}
                    </Text>
                  )}
                </Table.Td>
                <Table.Td>
                  <Badge color={eventTypeColors[event.type]} variant="light" size="sm">
                    {event.type}
                  </Badge>
                </Table.Td>
                <Table.Td>{event.location ?? '—'}</Table.Td>
                <Table.Td>
                  <Group gap="xs" wrap="wrap">
                    {event.teams?.map((t) => (
                      <Badge key={t} size="xs" variant="outline">
                        {t}
                      </Badge>
                    )) ?? <Text size="xs" c="dimmed">All</Text>}
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Paper>
    </Container>
  );
}

export function EventsPage() {
  const { isAuthenticated } = useAuth();
  const metaRef = useRef<HTMLMetaElement | null>(null);

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    metaRef.current = meta;
    return () => {
      if (metaRef.current) {
        document.head.removeChild(metaRef.current);
      }
    };
  }, []);

  return isAuthenticated ? <EventsView /> : <PasscodeForm />;
}
