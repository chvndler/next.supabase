import { styled } from 'stitches.config';
import { Text } from './text';

export const NormalLink = styled('a', {
  alignItems: 'center',
  fontWeight: '600',
  gap: '$1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  lineHeight: 'inherit',
  '@hover': {
    '&:hover': {
      textDecorationLine: 'none',
    },
  },
  variants: {
    variant: {
      normal: {
        fontSize: '32px',
        color: '$slate1',
        '&:focus': {
          outlineColor: '$slate8',
        },
        '&:hover': {
          color: '$slate8',
          textDecorationLine: '1px solid',
          textUnderlineOffset: '3px',
          textDecorationColor: '$slate4',
        },
      },
      dark: {
        fontSize: '32px',
        color: '#000',
        '&:focus': {
          outlineColor: '$slate8',
        },
        '&:hover': {
          color: '$slate8',
          cursor: 'pointer',
        },
      },
      defaultVariants: {
        variant: 'normal',
      },
    },
  },
});
