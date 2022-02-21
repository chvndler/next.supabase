import { css } from '@stitches/react';
import { styled } from 'stitches.config';

export const DEFAULT_TAG = 'button';

export const button = css({
  // RESET
  inclue: ['box'],
  all: 'unset',
  alignItems: 'center',
  userSelect: 'none',

  '&:disabled': {
    backgroundColor: '$slate2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
    pointerEvents: 'none',
  },

  // BASE STYLE
  position: 'relative',
  paddingLeft: '14px',
  paddingRight: '14px',
  paddingTop: '7px',
  paddingBottom: '7px',
  height: 'auto',
  borderRadius: '6px',
  border: 'none',
  borderColor: '$gray12',
  lineHeight: 'normal',
  // width: 'auto',

  // BUTTON TEXT
  fontSize: '13px',
  fontWeight: '600',
  fontFamily: '$inter',
  color: '$white',

  '&:hover': {
    color: '$white',
    cursor: 'pointer',
  },

  variants: {
    color: {
      // LIME
      lime: {
        backgroundColor: '$lime9',
        color: '$white',

        '&:hover': {
          backgroundColor: '$lime8',
          color: '$white',
        },
      },
      // BLUE
      blue: {
        backgroundColor: '$blue8',
        color: '$white',

        '&:hover': {
          backgroundColor: '$blue9',
          color: '$white',
        },
      },
      // ORANGE
      orange: {
        backgroundColor: '$orange9',
        color: '$white',
      },
      // GHOST
      ghost: {
        backgroundColor: '$translucent',
        color: '$gray11',
        fontWeight: '600',

        '&:hover': {
          backgroundColor: '$slate5',
          color: '$gray11',
        },
      },

      // Social Providers
      twitter: {
        fontFamily: '$untitled',
        height: '30px',
        backgroundColor: '#1DA1F2',
        color: '$white',
        borderRadius: '6px',
        fontSize: '12px',
        paddingLeft: '18px',
        paddingRight: '18px',
        paddingTop: '6px',
        paddingBottom: '6px',
        width: '150px',
        alignSelf: 'stretch',
        lineHeight: 'normal',

        '&:hover': {
          backgroundColor: '#1DA1F2',
          color: '$gray12',
        },
      },
      github: {
        height: '30px',
        backgroundColor: '#6cc644',
        color: '$white',
        borderRadius: '6px',
        fontSize: '12px',
        paddingLeft: '18px',
        paddingRight: '18px',
        paddingTop: '6px',
        paddingBottom: '6px',
        width: '150px',
        alignSelf: 'stretch',
        lineHeight: 'normal',

        '&:hover': {
          backgroundColor: '#6cc644',
          color: '$gray12',
        },
      },
      apple: {
        height: '30px',
        backgroundColor: '#000',
        color: '$white',
        borderRadius: '6px',
        fontSize: '12px',
        paddingLeft: '18px',
        paddingRight: '18px',
        paddingTop: '6px',
        paddingBottom: '6px',
        width: '150px',
        alignSelf: 'stretch',
        lineHeight: 'normal',

        '&:hover': {
          backgroundColor: '#000',
          color: '$white',
        },
      },
      // ATELIER
      atelier: {
        // RESET
        inclue: ['box'],
        all: 'unset',
        alignItems: 'center',
        textAlign: 'center',
        userSelect: 'none',

        backgroundColor: '$translucent',
        color: '$gray12',

        // Base Styles
        fontSize: '14px',
        fontWeight: '700',
        position: 'relative',
        paddingTop: '2px',
        paddingBottom: '2px',
        height: '26px',
        borderRadius: '7px',
        border: 'none',
        borderColor: '$gray12',
        lineHeight: 'normal',
        width: '100%',
        paddingX: 'auto',

        margin: 'auto',
        textAlign: 'center',

        '&:hover': {
          backgroundColor: '$translucent',
          color: '$mauve9',
        },
      },
    },
  },
});

export const styledButton = css({
  // RESET
  inclue: ['box'],
  all: 'unset',
  alignItems: 'center',
  userSelect: 'none',

  '&:disabled': {
    backgroundColor: '$slate2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
    pointerEvents: 'none',
  },

  // BASE STYLE
  position: 'relative',
  paddingLeft: '14px',
  paddingRight: '14px',
  paddingTop: '7px',
  paddingBottom: '7px',
  height: 'auto',
  borderRadius: '5px',
  border: 'none',
  borderColor: '$gray12',
  lineHeight: 'normal',
  width: 'auto',

  // MARGINS
  marginRight: '6px',
  marginLeft: '1px',
  marginTop: '0px',
  marginBottom: '0px',

  // BUTTON TEXT
  fontSize: '13px',
  fontWeight: '600',
  fontFamily: '$inter',
  color: '$white',

  '&:hover': {
    color: '$white',
    cursor: 'pointer',
  },

  variants: {
    color: {
      lime: {
        backgroundColor: '$lime9',
        color: '$white',

        '&:hover': {
          backgroundColor: '$lime8',
          color: '$white',
        },
      },
      orange: {
        backgroundColor: '$orange9',
        color: '$white',
      },
      ghost: {
        backgroundColor: '$translucent',
        color: '$gray11',
        fontWeight: '600',

        '&:hover': {
          backgroundColor: '$slate5',
          color: '$gray11',
        },
      },
    },
  },
});

export const styledSmallButton = css({
  // RESET
  inclue: ['box'],
  all: 'unset',
  alignItems: 'center',
  userSelect: 'none',

  // BASE STYLES
  position: 'relative',
  paddingLeft: '10px',
  paddingRight: '10px',
  paddingTop: '4px',
  paddingBottom: '4px',
  height: 'auto',
  borderRadius: '6px',
  border: '2px solid',
  borderColor: '$slate10',
  lineHeight: '1.2',
  width: 'auto',

  // MARGINS
  marginRight: '6px',
  marginLeft: '0px',
  marginTop: '6px',
  marginBottom: '6px',

  // BUTTON TEXT
  fontSize: '11px',
  fontWeight: '500',
  fontFamily: '$inter',
  color: '$white',

  '&:hover': {
    color: '$white',
    cursor: 'pointer',
  },

  variants: {
    color: {
      light_gray: {
        backgroundColor: '$gray5',
        color: '$gray12',
        borderColor: '$gray11',

        '&:hover': {
          backgroundColor: '$gray6',
          color: '$gray12',
        },
      },
      lime: {
        backgroundColor: '$lime9',
        color: '$white',
        fontWeight: '600',
      },
      orange: {
        backgroundColor: '$gray9',
        color: '$white',
      },
    },
  },

  defaultVariants: {
    color: 'light_gray',
  },
});

export const styledGradientButton = css({
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
    zIndex: '-1',
  },

  '&::after': {
    content: `''`,
    zIndex: '1',
  },

  // RESET
  inclue: ['box'],
  all: 'unset',
  alignItems: 'center',
  textAlign: 'center',
  userSelect: 'none',
  // zIndex: '5',

  backgroundColor: '#231F20',

  // BASE STYLES
  position: 'relative',
  paddingTop: '2px',
  paddingBottom: '2px',
  height: '26px',
  borderRadius: '6px',
  border: 'none',
  borderColor: '$gray12',
  lineHeight: 'normal',
  width: '100%',

  // BUTTON TEXT
  fontSize: '12px',
  fontWeight: '600',
  fontFamily: '$inter',
  color: '$white',

  '&:hover': {
    color: '$white',
    cursor: 'pointer',
  },
});

export const AtelierButton = styled(DEFAULT_TAG, button);
export const Button = styled(DEFAULT_TAG, styledButton);
export const SmallButton = styled(DEFAULT_TAG, styledSmallButton);
export const GradientButton = styled(DEFAULT_TAG, styledGradientButton);
