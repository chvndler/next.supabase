import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { supabase } from '@lib/client';

// FUNCTIONS
import { Navbar } from '@components/Navbar';
import { ThemeProvider } from 'next-themes';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { css, globalCss, darkTheme } from 'stitches.config';
import { reset } from '@styles/reset';
// MAIN STYLE IMPORTS
import '@styles/inter.css';
import '@styles/jetbrains.css';
import '@styles/neue-plak.css';
import '@styles/neue-wide.css';
import '@styles/globals.css';

const appWrapper = css({
  include: ['box', 'minHeightScreen'],
});

const App = ({ Component, pageProps }: AppProps) => {
  // Initialize Router & Theme
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  // Set User
  const [authenticatedState, setAuthenticatedState] = useState('not-authenticated');
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

  // Global Reset Css
  globalCss(reset, {
    html: {
      overflowX: 'hidden',
      backgroundColor: '$slate1',

      // iOS MOBILE VIEWPORT FIX
      minHeight: '-webkit-fill-available',
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      fontFamily: '$inter',
      backgroundColor: '$slate1',
      height: '100vh',

      // iOS MOBILE VIEWPORT FIX
      minHeight: '-webkit-fill-available',
    },
  });

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: 'light-theme', dark: darkTheme.className }}
      defaultTheme="system">
      {/* <!-- Next/Head --> */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
      </Head>

      {/* <!-- AppWrapper --> */}
      <div
        className={appWrapper({
          display: 'flex',
          flexDirection: 'column',
        })}>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default App;
