import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/Home.page';
import { AboutPage } from './pages/About.page';
import { CoachesPage } from './pages/Coaches.page';
import { EventsPage } from './pages/Events.page';
import { ContactPage } from './pages/Contact.page';

const basename = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '') || '/';

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/coaches', element: <CoachesPage /> },
      { path: '/events', element: <EventsPage /> },
      { path: '/contact', element: <ContactPage /> },
    ],
  },
  ],
  { basename },
);

export function Router() {
  return <RouterProvider router={router} />;
}
