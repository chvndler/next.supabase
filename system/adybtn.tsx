import { css } from '@stitches/react';
import { styled } from 'stitches.config';

export const DEFAULT_TAG = 'button';

export const styledGradientButton = css({
  // RESET
  inclue: ['box'],
  all: 'unset',
  alignItems: 'center',
  userSelect: 'none',

  backgroundColor: '#231F20',

  // BASE STYLES
  position: 'relative',
  paddingLeft: '14px',
  paddingRight: '14px',
  paddingTop: '2px',
  paddingBottom: '2px',
  height: '26px',
  borderRadius: '6px',
  border: 'none',
  borderColor: '$gray12',
  lineHeight: 'normal',
  width: 'auto',

  // MARGINS
  marginRight: '6px',
  marginLeft: '6px',
  marginTop: '6px',
  marginBottom: '6px',

  // BUTTON TEXT
  fontSize: '12px',
  fontWeight: '600',
  fontFamily: '$inter',
  color: '$white',

  '&::before': {
    content: `''`,
    display: 'block',
    // backgroundImage: 'linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)',
    backgroundImage: 'linear-gradient(to right, #1ed900, #00d4ff)',
    position: 'absolute',
    top: '-3px',
    left: '-3px',
    width: 'calc(100% + 6px)',
    height: 'calc(100% + 6px)',
    borderRadius: '9px',
    zIndex: -1,
  },

  '&:hover': {
    color: '$white',
    cursor: 'pointer',
  },
});

export const GradientButton = styled(DEFAULT_TAG, styledGradientButton);
