import { Link, useMatch } from 'react-router-dom';
import {
  Anchor,
  ActionIcon,
  Burger,
  Drawer,
  Group,
  Image,
  Stack,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandInstagram } from '@tabler/icons-react';
import classes from './Header.module.css';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import mojoLogo from '../../assets/MojoLogo.png';

export interface NavItem {
  label: string;
  to: string;
  pattern: string;
  icon?: string;
}

function HeaderLinksByNavItems({ item }: { item: NavItem }) {
  const active = !!useMatch(item.pattern);
  return (
    <Anchor component={Link} to={item.to} fw={active ? 700 : 500} c={active ? 'blue' : 'inherit'} underline="never">
      {item.label}
    </Anchor>
  );
}

export function HeaderMenu({ navItems }: { navItems: NavItem[] }) {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <Group className={classes.Header}>
      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="sm"
        size="sm"
        aria-label="Toggle navigation"
        aria-expanded={opened}
        aria-controls="mobile-navigation"
      />
      
      <Group className={classes.headerLogo}>
        <Anchor
          component={Link}
          to="/"
          underline="never"
          className={classes.logoLink}
          aria-label="Mojo Lacrosse Club home"
        >
          <Image
            src={mojoLogo}
            alt="MOJO Lacrosse Club Logo"
            className={classes.logoImage}
          />
          <Text fw={800} size="xl" c="blue">
            MOJO LC
          </Text>
        </Anchor>
      </Group>

      <Group className={classes.headerLinks} visibleFrom="sm" gap="lg">
        {navItems.map((item) => (
          <HeaderLinksByNavItems key={item.to} item={item} />
        ))}
      </Group>

      <Group className={classes.headerRight}>
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
        <ColorSchemeToggle />
      </Group>

      <Drawer
        id="mobile-navigation"
        opened={opened}
        onClose={close}
        padding="md"
        size="xs"
        title="Navigation"
        hiddenFrom="sm"
        aria-label="Main navigation"
      >
        <Stack gap="sm">
          {navItems.map((item) => {
            const active = !!useMatch(item.pattern);
            return (
              <Anchor
                key={item.to}
                component={Link}
                to={item.to}
                fw={active ? 700 : 500}
                c={active ? 'blue' : 'inherit'}
                underline="never"
                onClick={close}
              >
                {item.label}
              </Anchor>
            );
          })}
        </Stack>
      </Drawer>
    </Group>
  );
}