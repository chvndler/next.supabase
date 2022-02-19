import { Box } from '@system/box';

export const SmallSpacer = () => {
  return (
    <Box css={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <Box
        css={{ bc: '$translucent', height: '1px', alignItems: 'center', width: '100%', padding: '0px', margin: 'auto' }}
      />
    </Box>
  );
};
