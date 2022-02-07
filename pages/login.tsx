import React from 'react';
import { useState, useEffect } from 'react';
import { supabase } from 'client';

import { Box } from '@system/box';
import { Heading } from '@system/heading';
import { SmallButton } from '@components/AtelierButton';

import { styled } from 'stitches.config';

const Container = styled('div', {
  minHeight: '100vh',
  padding: '0 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

export default function Login() {
  const [profile, setProfile] = useState(null);
  const [session, setSession] = useState(null);

  async function signInWithTwitter() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'twitter',
    });
  }

  async function signout() {
    const { error } = await supabase.auth.signOut();
  }

  return (
    <Box css={{ height: '100vh' }}>
      {session ? (
        <>
          <Container>
            <Heading size="1" css={{ fontFamily: 'Helvetica', paddingBottom: '20px' }}>
              Sign in with Twitter
            </Heading>

            <Heading size="2">Welcome {session?.user.user_metadata.full_name}</Heading>

            <Heading size="1" css={{ paddingBottom: '20px' }}>
              You are signed in as {session?.user.email}
            </Heading>

            <SmallButton onClick={() => supabase.auth.signOut()}>Sign out</SmallButton>
          </Container>
        </>
      ) : (
        <>
          <Container>
            <Heading size="1" css={{ fontFamily: 'Helvetica', paddingBottom: '20px' }}>
              Sign in with Twitter
            </Heading>

            <SmallButton onClick={signInWithTwitter}>Sign in</SmallButton>
          </Container>
        </>
      )}
    </Box>
  );
}
