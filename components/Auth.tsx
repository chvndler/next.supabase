import { useState } from 'react';
import { TextField } from '@system/text-field';
import { Section } from '@system/section';
import { Box } from '@system/box';
import { Container } from '@system/container';
import { AtelierButton } from '@components/AtelierButton';
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

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = async email => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box css={{ height: '100vh' }}>
      <CenterBox>
        <Box>
          <TextField
            size="2"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Box>
        <Box>
          <AtelierButton
            color="lime"
            onClick={e => {
              e.preventDefault();
              handleLogin(email);
            }}
            className="button block"
            disabled={loading}>
            <span>{loading ? 'Loading' : 'Send magic link'}</span>
          </AtelierButton>
        </Box>
      </CenterBox>
    </Box>
  );
}
