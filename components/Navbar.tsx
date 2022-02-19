import React from 'react';
import Router from 'next/router';
import NextLink from 'next/link';
import { supabase } from '@lib/client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// ATELIER® DESIGN SYSTEM
import { Box } from '@system/box';
import { Flex } from '@system/flex';
import { Text } from '@system/text';
import { Link } from '@system/link';
import { ThemeSwitch } from '@components/ThemeSwitch';
import { CaretRightIcon } from '@radix-ui/react-icons';

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

export const Navbar = () => {
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
    <>
      <Flex
        as="header"
        css={{
          py: '0px',
          px: '5px',
          height: '48px',
          jc: 'space-between',
          position: 'fixed',
          margin: '0',
          backgroundColor: '$light100',
          width: '100vw',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          saturate: '300%',

          zIndex: '9999',
        }}>
        {/* <!-- LOGO SECTION --> */}
        <NextLink href="/" passHref>
          <Box
            as="a"
            css={{
              ml: '$2',
              display: 'inline-flex',
              textDecoration: 'none',
              '&:focus': {
                boxShadow: 'none',
              },
              '@bp2': { ml: '$5' },
            }}>
            <Text
              css={{
                zIndex: '999',
                fontFamily: '$neuewide',
                fontWeight: '800',
                fontSize: '14px',
                color: '$gray12',
                lineHeight: '48px',
                letterSpacing: '-0.03rem',
              }}>
              NEXT.SUPABASE
            </Text>
          </Box>
        </NextLink>

        {/* NAVIGATION SECTION */}
        <Flex
          as="nav"
          css={{
            ai: 'center',
            px: '0px',
            fontFamily: '$inter',
            fontSize: '12px',
            '@sm': {
              display: 'none',
            },
          }}>
          <NextLink href="/profile" passHref>
            <Link variant="subtle" css={{ marginRight: '$4', color: '$gray12', '@sm': { marginRight: '$2' } }}>
              Profile
            </Link>
          </NextLink>

          <NextLink href="/protected" passHref>
            <Link variant="subtle" css={{ marginRight: '$4', color: '$gray12', '@sm': { marginRight: '$2' } }}>
              Protected
            </Link>
          </NextLink>

          {authenticatedState === 'not-authenticated' && (
            <NextLink href="/sign-in" passHref>
              <Link variant="subtle" css={{ marginRight: '$4', color: '$gray12', '@sm': { marginRight: '$2' } }}>
                Get Started
              </Link>
            </NextLink>
          )}
        </Flex>
        {/* <!-- JSX ELEMENT --> */}

        <Flex as="nav" css={{ ai: 'center', px: '0px', fontFamily: '$inter', fontSize: '12px' }}>
          {/* <!-- JSX ELEMENT --> */}
          <Link
            href="/sign-in"
            // target="_blank"
            // rel="norefferer"
            css={{
              fontSize: '13px',
              color: '$gray12',
              border: '0px solid $crimson9',
              borderRadius: '6px',
              paddingTop: '6px',
              paddingBottom: '6px',
              paddingLeft: '2px',
              paddingRight: '2px',
              mr: '$3',
              '@sm': { display: 'none', mr: '$2' },
              '&:hover': { cursor: 'pointer' },
            }}>
            Log in
          </Link>

          {/* <!-- THEME SWITCH --> */}
          <ThemeSwitch />
          {/* <!--
          <PopoverPanel />
          -->*/}
        </Flex>
      </Flex>
    </>
  );
};
