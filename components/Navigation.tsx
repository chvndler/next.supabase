import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@lib/client';
import { useRouter } from 'next/router';

import { styled } from 'stitches.config';

const Nav = styled('div', {
  position: 'fixed',
  top: '0',
  minWidth: '100vw',
  margin: 'auto',
  alignItems: 'left',
  padding: '10px',
  paddingTop: '20px',
  zIndex: '9999',

  height: '160px',
});

const LinkStyle = styled('div', {
  display: 'inline',
  margin: '12px',
  lineHeight: '1',
  paddingTop: '6px',
  paddingBottom: '6px',
  paddingLeft: '0px',
  paddingRight: '0px',

  '&:hover': {
    cursor: 'pointer',
  },
});

export const Navigation = () => {
  // Set Authenticated
  const router = useRouter();
  const [authenticatedState, setAuthenticatedState] = useState('not-authenticated');

  // Supa
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      handleAuthChange(event, session);
      if (event === 'SIGNED_IN') {
        setAuthenticatedState('authenticated');
        router.push('/profile');
      }
      if (event === 'SIGNED_OUT') {
        setAuthenticatedState('not-authenticated');
      }
    });
    checkUser();
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  async function checkUser() {
    const user = await supabase.auth.user();
    if (user) {
      setAuthenticatedState('authenticated');
    }
  }

  async function handleAuthChange(event, session) {
    await fetch('/api/auth', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify({ event, session }),
    });
  }

  return (
    <div>
      <Nav>
        <Link href="/" passHref>
          <LinkStyle>
            <a>Home</a>
          </LinkStyle>
        </Link>

        <Link href="/profile" passHref>
          <LinkStyle>
            <a>Profile</a>
          </LinkStyle>
        </Link>

        <Link href="/login" passHref>
          <LinkStyle>
            <a>Twitter</a>
          </LinkStyle>
        </Link>

        {authenticatedState === 'not-authenticated' && (
          <Link href="/sign-in" passHref>
            <LinkStyle>
              <a>Sign In</a>
            </LinkStyle>
          </Link>
        )}
        <Link href="/protected" passHref>
          <LinkStyle>
            <a>Protected</a>
          </LinkStyle>
        </Link>
      </Nav>
    </div>
  );
};
