import { useState } from 'react';
import {
  Button,
  Container,
  Paper,
  Stack,
  Text,
  TextInput,
  Textarea,
  Title,
} from '@mantine/core';

const MAX_MESSAGE_LENGTH = 500;

export function ContactPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);

  const remaining = MAX_MESSAGE_LENGTH - message.length;

  const validate = () => {
    let hasError = false;

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Please enter a valid email address.');
      hasError = true;
    } else {
      setEmailError(null);
    }

    if (!message.trim()) {
      setMessageError('Please enter a message.');
      hasError = true;
    } else {
      setMessageError(null);
    }

    return !hasError;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    const subject = 'Mojo LC Website Contact';
    const body = `From: ${email}\n\n${message}`;

    window.location.href = `mailto:mojolacrosseclub@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Paper
      component="section"
      radius={0}
      py="xl"
      style={{ backgroundColor: 'var(--mojo-subtle-bg)', flex: 1 }}
    >
      <Container size="sm">
        <Stack gap="lg">
          <Title order={1} c="blue">
            Contact Mojo LC
          </Title>
          <Text size="sm" c="dimmed">
            Have questions about teams, schedules, or getting involved? Send us a note and we&apos;ll
            follow up at the email you provide.
          </Text>

          <form onSubmit={handleSubmit}>
            <Stack gap="md">
              <TextInput
                required
                type="email"
                label="Your email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.currentTarget.value)}
                error={emailError}
              />

              <Textarea
                required
                label="Message"
                placeholder="How can we help?"
                value={message}
                onChange={(event) => {
                  const next = event.currentTarget.value.slice(0, MAX_MESSAGE_LENGTH);
                  setMessage(next);
                }}
                minRows={4}
                maxRows={8}
                maxLength={MAX_MESSAGE_LENGTH}
                error={messageError}
              />
              <Text size="xs" c={remaining < 50 ? 'pink' : 'dimmed'}>
                {remaining} characters remaining (max {MAX_MESSAGE_LENGTH})
              </Text>

              <Button type="submit" size="md" variant="gradient">
                Send message
              </Button>
            </Stack>
          </form>
        </Stack>
      </Container>
    </Paper>
  );
}

