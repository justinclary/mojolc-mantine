import { Box } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { HeaderMenu, NavItem } from '../Header/Header';

const navItems: NavItem[] = [
  { label: 'Home', to: '/', pattern: '/' },
  { label: 'About', to: '/about', pattern: '/about' },
  { label: 'Coaches', to: '/coaches', pattern: '/coaches' },
  { label: 'Events', to: '/events', pattern: '/events' },
  { label: 'Contact', to: '/contact', pattern: '/contact' },
];

export function Layout() {
  return (
    <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <HeaderMenu navItems={navItems} />
      <Box
        component="main"
        style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

