import { Button, Container, Group, Paper, Stack, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <Paper
      component="section"
      radius={0}
      py="xl"
      style={{ backgroundColor: 'var(--mojo-subtle-bg)', flex: 1 }}
    >
      <Container size="md">
        <Stack align="center" gap="xl" mt="xl">
          <Title order={1} size="3rem" fw={900} ta="center" c="blue">
            MOJO LC
          </Title>
          <Title order={2} size="2rem" fw={400} ta="center">
          Mojo Lacrosse Club develops high-character athletes through elite coaching, a family-driven culture, and a commitment to hard work, higher expectations, and team-first success. We build smarter, stronger lacrosse players — and even better young men.
          </Title>
          
          <Title order={3} fw={400} ta="center" c="dimmed">
            Better players. Better teammates. Better humans. Better Player Experience.
          </Title>
          <Group mt="md">
            <Button component={Link} to="/about" size="lg" variant="gradient">
              About Us
            </Button>
            <Button component={Link} to="/coaches" size="lg" variant="gradient">
              Meet the Coaches
            </Button>
          </Group>

        </Stack>
      </Container>
    </Paper>
  );
}
