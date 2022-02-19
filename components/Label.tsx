import React from 'react';
import { styled } from 'stitches.config';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Flex } from '@system/flex';

const StyledLabel = styled(LabelPrimitive.Root, {
  fontSize: '13px',
  fontWeight: '500',
  color: '$gray12',
  userSelect: 'none',
  fontFamily: '$inter',
  fontWeight: '700',
});

// Exports
const LabelDemo = StyledLabel;

const Label = ({ children }) => (
  <Flex css={{ padding: '0 20px', flexWrap: 'wrap', alignItems: 'center' }}>
    <LabelDemo
      htmlFor="firstName"
      css={{
        lineHeight: '35px',
        marginRight: '0px',
        '&:hover': {
          cursor: 'pointer',
        },
      }}>
      {children}
    </LabelDemo>
  </Flex>
);

export default Label;
