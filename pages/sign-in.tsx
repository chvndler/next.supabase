import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { TextField } from '@system/text-field';
import { Heading } from '@system/heading';
import { Container } from '@system/container';
import { Box } from '@system/box';
import { SmallButton } from '@components/AtelierButton';
import { GradientButton, AtelierButton } from '@components/AtelierButton';
import { SmallSpacer } from '@components/SmallSpacer';

import { supabase } from '@lib/client';

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
  const [email, setEmail] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [session, setSession] = useState(null);

  // API
  async function signIn() {
    /*
    const { error, data } = await supabase.auth.signIn({
      email,
    });
    */
    const { user, session, error } = await supabase.auth.signIn({
      email,
    });

    if (error) {
      console.log({ error });
    } else {
      setSubmitted(true);
    }
  }

  async function signInWithTwitter() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'twitter',
    });
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }

  if (submitted) {
    return (
      <Container size="3">
        <Heading size="1" css={{ fontFamily: 'Helvetica', paddingBottom: '20px', color: '$gray12' }}>
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

        <Container size="3" css={{ color: '$gray12' }}>
          <TextField size="3" onChange={e => setEmail(e.target.value)} placeholder="Enter email address" />
          <GradientButton onClick={() => signIn()}>Sign in</GradientButton>
        </Container>

        <SmallSpacer />

        <Container size="3" css={{ alignItems: 'center', textAlign: 'center' }}>
          <AtelierButton color="blue" size="3" onClick={signInWithTwitter}>
            Sign in with Twitter
          </AtelierButton>
        </Container>
      </CenterBox>
    </Box>
  );
}
