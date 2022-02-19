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
import appleLogoIcon from '@public/Apple.svg';

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
        <Card>
          <Heading size="3" css={{ fontFamily: '$inter', paddingBottom: '20px' }}>
            Sign in
          </Heading>

          <Container size="3" css={{ color: '$gray12' }}>
            <TextField size="2" onChange={e => setEmail(e.target.value)} placeholder="Enter email address" />
            <AtelierButton color="atelier" onClick={() => signIn()}>
              Submit <ChevronRightIcon />
            </AtelierButton>
          </Container>
        </Card>

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

        <Container size="3" css={{ alignItems: 'center', textAlign: 'center', paddingTop: '6px' }}>
          <AtelierButton color="apple" size="3" css={{}} onClick={signInWithGithub}>
            <span>
              {/* <!--
              <Image src={appleLogoIcon} height={15} width={15} alt="Apple" />
              --> */}
              <svg
                width="15"
                height="15"
                id="Layer_1"
                viewBox="0 0 15 15"
                fill="#f2f2f2"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.3,7.9c0,2.1,1.8,2.8,1.9,2.8c0,0-0.3,1-1,2c-0.6,0.8-1.2,1.7-2.1,1.7c-0.9,0-1.2-0.6-2.3-0.6
              		c-1.1,0-1.4,0.5-2.3,0.6c-0.9,0-1.6-0.9-2.2-1.8c-1.2-1.7-2.1-4.9-0.9-7C3,4.6,4.1,4,5.3,4c0.9,0,1.7,0.6,2.3,0.6
              		c0.5,0,1.6-0.7,2.7-0.6c0.5,0,1.7,0.2,2.5,1.4C12.7,5.3,11.3,6.2,11.3,7.9 M9.5,2.8c0.5-0.6,0.8-1.4,0.7-2.2c-0.7,0-1.5,0.5-2,1.1
              		C7.8,2.1,7.4,3,7.5,3.8C8.3,3.8,9.1,3.4,9.5,2.8"
                  fill="#f2f2f2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                />
              </svg>
            </span>{' '}
            Continue with Apple
          </AtelierButton>
        </Container>
      </CenterBox>
    </Box>
  );
}
