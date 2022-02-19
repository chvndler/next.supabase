import React from 'react';
import { Box } from '@system/box';

import { styled } from 'stitches.config';

const CardParent = styled('div', {
  width: '400px',
  minWidth: '400px',
  height: 'auto',
  backgroundColor: '$translucent',
  display: 'block',
  position: 'relative',

  borderRadius: '32px',
  margin: 'auto',
  padding: '20px',
  alignItems: 'center',
  textAlign: 'center',
  webkitScrollbar: 'none',
});

export const Card = ({ children }) => {
  return (
    <Box css={{ padding: '0px' }}>
      <CardParent>
        {/* INSERT CARD COMPONENT WITH CHILDREN */}
        {/* <Card> .. children .. </Card> */}

        {children}
      </CardParent>
    </Box>
  );
};
