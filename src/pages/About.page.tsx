import { Container, Paper, Stack, Text, Title } from '@mantine/core';

export function AboutPage() {
  return (
    <Paper
      component="section"
      radius={0}
      py="xl"
      style={{ backgroundColor: 'var(--mojo-subtle-bg)', flex: 1 }}
    >
      <Container size="md">
        <Stack gap="lg">
          <Title order={1} c="blue">
            Our Mission
          </Title>
          <Text size="lg">
            At Mojo Lacrosse Club, our mission is to build a powerful team-first culture where players
            grow as athletes, teammates, and young leaders. Rooted in West Side Salt Lake County,
            we believe in higher expectations, hard work, and the strength of a family-style brotherhood.
          </Text>
          <Text size="lg">
            We are committed to developing complete lacrosse players by focusing on fundamentals,
            individual skill growth, and elevating lacrosse IQ — all within a competitive team environment.
            Our players level up by pushing themselves and each other, learning how to compete with discipline,
            confidence, and respect for the game.
          </Text>
          <Text size="lg">
            We provide quality coaching, a player-experience-driven program, and a culture built on accountability,
            trust, and shared success. Our goal is to help players reach their full potential on and off the field
            — becoming great teammates, strong students, and outstanding young men ready for high school, college, and life.
          </Text>
          <Text size="lg" c="blue" fw={600}>
            At Mojo, we work hard, we support one another, and we win as a family.
          </Text>
        </Stack>
      </Container>
    </Paper>
  );
}
