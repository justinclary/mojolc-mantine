import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme, cssVariablesResolver } from './theme';
import { AuthProvider } from './contexts/AuthContext';

export default function App() {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </MantineProvider>
  );
}
