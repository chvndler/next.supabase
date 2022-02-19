import { useState, useEffect } from 'react';
import { supabase } from '@lib/client';
import { useRouter } from 'next/router';
import { Box } from '@system/box';
import { Heading } from '@system/heading';
import { SmallButton } from '@components/AtelierButton';
import { Code } from '@system/code';
import Image from 'next/image';

import { styled } from 'stitches.config';

const Container = styled('div', {
  minHeight: '100vh',
  padding: '0 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: 'auto',
});

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchProfile();
  }, []);

  async function update() {
    const { user, error } = await supabase.auth.update({
      data: {
        city,
      },
    });
    console.log('user:', user);
  }

  async function fetchProfile() {
    const profileData = await supabase.auth.user();
    console.log('profileData:', profileData);

    if (!profileData) {
      router.push('/sign-in');
    } else {
      setProfile(profileData);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
    router.push('/sign-in');
  }
  if (!profile) return null;

  return (
    <Box css={{ height: '100vh' }}>
      <Container>
        <Heading size="1" css={{ fontFamily: 'Helvetica', paddingBottom: '20px' }}>
          Hello, {profile.email}
        </Heading>

        <Code size="4" css={{ color: '$blue8' }}>
          User ID: {profile.id}
          <br />
          <br />
          Name: {profile.name}
        </Code>

        <Box css={{ maxWidth: '300px' }}>
          <SmallButton onClick={signOut}>Sign out</SmallButton>
          <SmallButton onClick={update}>Update</SmallButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Profile;
