import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { TextField } from '@system/text-field';
import { Button } from '@components/AtelierButton';
import { Heading } from '@system/heading';
import { Container } from '@system/container';
import { Box } from '@system/box';
import { supabase } from 'client';

import { styled } from 'stitches.config';

const CenterBox = styled('div', {
  minHeight: '100vh',
  padding: '0 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

export default function SignIn() {
  // EMAIL
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // API
  async function signIn() {
    const { error, data } = await supabase.auth.signIn({
      email,
    });

    if (error) {
      console.log({ error });
    } else {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <Container size="3">
        <Heading size="1" css={{ fontFamily: 'Helvetica', paddingBottom: '20px' }}>
          Please check your email to sign in.
        </Heading>
      </Container>
    );
  }

  return (
    <Box css={{ height: '100vh' }}>
      <CenterBox>
        <Heading size="3" css={{ fontFamily: 'Helvetica', paddingBottom: '20px' }}>
          Sign in
        </Heading>

        <Container size="3">
          <TextField size="3" onChange={e => setEmail(e.target.value)} placeholder="Enter email address" />
          <Button onClick={() => signIn()}>Sign in</Button>
        </Container>
      </CenterBox>
    </Box>
  );
}
