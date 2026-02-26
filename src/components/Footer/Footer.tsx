import { ActionIcon, Container, Group, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconBrandInstagram } from '@tabler/icons-react';
import classes from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <Container size="md" className={classes.inner}>
        <Group gap="xs">
          <Text size="sm" c="dimmed">
            © {year} Mojo Lacrosse Club
          </Text>
          <Text size="xs" c="dimmed">
            •
          </Text>
          <Text
            size="sm"
            component={Link}
            to="/contact"
            c="blue"
            style={{ textDecoration: 'none' }}
          >
            Contact
          </Text>
          <Text size="xs" c="dimmed">
            •
          </Text>
          <ActionIcon
            component="a"
            href="https://www.instagram.com/mojolacrosseclub"
            target="_blank"
            rel="noreferrer"
            variant="subtle"
            color="blue"
            aria-label="Mojo Lacrosse Club on Instagram"
          >
            <IconBrandInstagram size={18} />
          </ActionIcon>
        </Group>
        <Text size="xs" c="blue">
          Better players. Better teammates. Better humans. Better Player Experience.
        </Text>
      </Container>
    </footer>
  );
}

