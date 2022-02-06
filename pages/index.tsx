import { Box } from '@system/box';
import { Heading } from '@system/heading';

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

const Index = () => {
  return (
    <Box>
      <Container>
        <Box>
          <Heading size="3" css={{ fontFamily: 'Helvetica', fontWeight: '800' }}>
            Next.Supabase
          </Heading>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
