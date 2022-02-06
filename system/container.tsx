import { styled } from 'stitches.config';

// Container
export const Container = styled('div', {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,

  // Custom
  ml: 'auto',
  mr: 'auto',
  px: '$5',
  mt: '0',

  variants: {
    size: {
      '1': {
        maxWidth: '430px',
        padding: '0px',
        margin: 'auto',
      },
      '2': {
        maxWidth: '800px',
        padding: '8px',
        margin: 'auto',
      },
      '3': {
        maxWidth: '1145px',
        px: '18px',
      },
      '4': {
        maxWidth: 'none',
        padding: '8px',
      },
    },
  },
  defaultVariants: {
    size: '4',
  },
});
