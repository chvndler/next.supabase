import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { TextField } from '@system/text-field';
import { Heading } from '@system/heading';
import { Container } from '@system/container';
import { Box } from '@system/box';
import { Button } from '@system/Button';
import { GradientButton, AtelierButton } from '@components/AtelierButton';
import { SmallSpacer } from '@components/SmallSpacer';
import { Card } from '@components/Card';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { TwitterLogoIcon } from '@radix-ui/react-icons';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { BsApple } from 'react-icons/bs';

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
  const [phone, setPhone] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [session, setSession] = useState(null);

  // AUTH HANDLERS
  // Magic Link
  async function signIn() {
    const { user, session, error } = await supabase.auth.signIn({
      email,
    });

    if (error) {
      console.log({ error });
    } else {
      setSubmitted(true);
    }
  }

  // Continue with Twitter
  async function signInWithTwitter() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'twitter',
    });
  }

  // Continue with GitHub
  async function signInWithGithub() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'github',
    });
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }

  if (submitted) {
    return (
      <Box css={{ height: '100vh' }}>
        <CenterBox>
          <Container size="3">
            <Heading
              size="1"
              css={{
                fontFamily: 'Helvetica',
                fontSize: '13px',
                fontWeight: '700',
                paddingBottom: '20px',
                color: '$gray12',
              }}>
              HEAD TO YOUR INBOX TO SECURELY SIGN IN.
            </Heading>
          </Container>
        </CenterBox>
      </Box>
    );
  }

  return (
    <Box css={{ height: '100vh' }}>
      <CenterBox>
        <Heading size="3" css={{ fontFamily: '$inter', paddingBottom: '20px' }}>
          Sign in
        </Heading>

        <Container size="3" css={{ color: '$gray12' }}>
          <TextField size="2" onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email address" />
          <AtelierButton color="atelier" onClick={() => signIn()}>
            Submit <ChevronRightIcon />
          </AtelierButton>
        </Container>

        <SmallSpacer />

        <Container size="3" css={{ alignItems: 'center', textAlign: 'center' }}>
          <AtelierButton color="twitter" size="3" onClick={signInWithTwitter}>
            <TwitterLogoIcon /> Continue with Twitter
          </AtelierButton>
        </Container>

        <Container size="3" css={{ alignItems: 'center', textAlign: 'center', paddingTop: '6px' }}>
          <AtelierButton color="github" size="3" onClick={signInWithGithub}>
            <GitHubLogoIcon /> Continue with GitHub
          </AtelierButton>
        </Container>
      </CenterBox>
    </Box>
  );
}
