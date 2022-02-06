import { styled } from 'stitches.config';
import { Text } from './text';

export const Link = styled('a', {
  alignItems: 'center',
  fontSize: '14px',
  fontWeight: '600',
  gap: '$1',
  flexShrink: 0,
  outline: 'none',
  textDecorationLine: 'none',
  textUnderlineOffset: '3px',
  textDecorationColor: '$slate4',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  lineHeight: 'inherit',
  '@hover': {
    '&:hover': {
      textDecorationLine: 'underline',
    },
  },
  '&:focus': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    textDecorationLine: 'none',
  },
  [`& ${Text}`]: {
    color: '$slate10',
    fontSize: '14px',
    fontWeight: '600',
  },
  variants: {
    variant: {
      subtle: {
        color: '$slate10',
        textDecorationColor: '$slate11',
        '&:focus': {
          outlineColor: '$slate8',
        },
      },
      contrast: {
        color: '$hiContrast',
        textDecoration: 'underline',
        textDecorationColor: '$slate8',
        '@hover': {
          '&:hover': {
            textDecorationColor: '$slate8',
          },
        },
        '&:focus': {
          outlineColor: '$slate8',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'subtle',
  },
});
