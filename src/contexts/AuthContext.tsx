import { createContext, useContext, ReactNode } from 'react';
import { useSessionStorage } from '@mantine/hooks';

interface AuthContextValue {
  isAuthenticated: boolean;
  authenticate: () => void;
  deauthenticate: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useSessionStorage({
    key: 'mojo-events-auth',
    defaultValue: false,
  });

  const authenticate = () => setIsAuthenticated(true);
  const deauthenticate = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, authenticate, deauthenticate }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
