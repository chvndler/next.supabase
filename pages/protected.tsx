import { supabase } from '@lib/client';

import { Container } from '@system/container';
import { Heading } from '@system/heading';
import { Code } from '@system/code';
import { SmallSpacer } from '@components/SmallSpacer';
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

export default function Protected({ user }) {
  console.log({ user });
  return (
    <CenterBox>
      <Container size="2" css={{}}>
        <Heading size="2">
          Hello,
          <br />
          <br />
          You can see this text because you are signed in as:
        </Heading>
        <SmallSpacer />
        <Code size="4" css={{ color: '$blue8' }}>
          {user.email}
        </Code>
        <Code size="4" css={{ color: '$blue8' }}>
          {user.name}
        </Code>
      </Container>
    </CenterBox>
  );
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    return { props: {}, redirect: { destination: '/sign-in' } };
  }

  return { props: { user } };
}
