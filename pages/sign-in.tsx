import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { TextField } from '@system/text-field';
import { Heading } from '@system/heading';
import { Container } from '@system/container';
import { Box } from '@system/box';
import { SmallButton } from '@components/AtelierButton';
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

const CustomButton = styled('button', {
  // Custom
  fontFamily: '$inter',
  fontSize: '12px',
  fontWeight: 500,
  fontVariantNumeric: 'tabular-nums',

  '&:disabled': {
    backgroundColor: '$slate2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
    pointerEvents: 'none',
  },

  // SIZE
  variants: {
    size: {
      '3': {
        borderRadius: '12px',
        width: '100%',
        height: '34px',
        fontSize: '12px',
        px: '$4',
        backgroundColor: '$blue8',
        '&:hover': {
          curser: 'pointer',
        },
      },
      '4': {
        borderRadius: '12px',
        width: '100%',
        height: '34px',
        fontSize: '13px',
        px: '$3',

        '&:hover': {
          curser: 'pointer',
        },
      },
    },

    // COLOR
    variant: {
      gray: {
        border: '1px solod $slate5',
        backgroundColor: '$loContrast',
        boxShadow: 'inset 0 0 0 1px $colors$slate7',
        color: '$hiContrast',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
          },
        },
        '&:active': {
          backgroundColor: '$slate2',
          boxShadow: 'inset 0 0 0 1px $colors$slate8',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$slate4',
          boxShadow: 'inset 0 0 0 1px $colors$slate8',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: 'inherit',
      },
    },

    // STATE
    state: {
      // ACTIVE
      active: {
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px $colors$slate8',
        color: '$slate11',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate5',
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
          },
        },
        '&:active': {
          backgroundColor: '$slate5',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
        },
      },

      // LOADING
      waiting: {
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px $colors$slate8',
        color: 'transparent',
        pointerEvents: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate5',
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
          },
        },
        '&:active': {
          backgroundColor: '$slate5',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8',
        },
      },
    },
    ghost: {
      true: {
        backgroundColor: 'transparent',
        color: '$slate8',
        boxShadow: 'none',
      },
    },
  },

  defaultVariants: {
    size: '1',
    variant: 'gray',
  },
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
          <CustomButton size="4" onClick={() => signIn()}>
            Sign in
          </CustomButton>
        </Container>

        <SmallSpacer />

        <Container size="3" css={{ alignItems: 'center', textAlign: 'center' }}>
          <CustomButton size="3" onClick={signInWithTwitter}>
            Sign in with Twitter
          </CustomButton>
        </Container>
      </CenterBox>
    </Box>
  );
}
