import { Avatar, Badge, Card, Container, Group, Paper, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { coaches } from '../data/coaches';
import type { TeamLabel } from '../data/coaches';

const teamColors: Record<TeamLabel, string> = {
  Varsity: 'blue',
  JV: 'yellow',
  'Class of 2032': 'blue',
  'Class of 2031': 'blue',
  'Class of 2030': 'blue',
  'Class of 2029': 'yellow',
  'Class of 2028': 'pink',
  'Class of 2027': 'pink',
};

export function CoachesPage() {
  return (
    <Paper
      component="section"
      radius={0}
      py="xl"
      style={{ backgroundColor: 'var(--mojo-subtle-bg)', flex: 1 }}
    >
      <Container size="lg">
        <Title order={1} c="blue" mb="xl">
          Meet the Coaches
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {coaches.map((coach) => (
            <Card key={coach.id} shadow="sm" padding="lg" radius="md" withBorder>
              <Stack gap="sm">
                <Group>
                  <Avatar
                    src={coach.avatarUrl}
                    name={coach.name}
                    color="initials"
                    size="lg"
                    radius="xl"
                  />
                  <Text fw={600} size="lg">
                    {coach.name}
                  </Text>
                </Group>
                <Group gap="xs" wrap="wrap">
                  {coach.teams.map((team) => (
                    <Badge key={team} color={teamColors[team]} variant="light" size="sm">
                      {team}
                    </Badge>
                  ))}
                </Group>
                <Text size="sm" c="dimmed">
                  {coach.bio}
                </Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Paper>
  );
}
