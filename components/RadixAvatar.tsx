import React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { useEffect, useState } from 'react';
import { Flex } from '@system/flex';
import Label from '@components/Label';
import { Box } from '@system/box';
import { supabase } from '@lib/client';

import { styled } from 'stitches.config';

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: '50px',
  height: '50px',
  borderRadius: '12px',
  border: '1px solid $slate5',
  backgroundColor: '$blackA3',
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$white',
  color: '$violet11',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

// Exports
export const Avatar = StyledAvatar;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;

const RadixAvatar = ({ url, size, onUpload }) => {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage.from('avatars').download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error) {
      console.log('Error downloading image: ', error.message);
    }
  }

  async function uploadAvatar(event) {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.');
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <>
      <Flex css={{ gap: 20 }}>
        <Box>
          <Avatar>
            {avatarUrl ? (
              <AvatarImage src={avatarUrl} alt="Avatar" className="avatar image" />
            ) : (
              <AvatarFallback delayMs={600}>?</AvatarFallback>
            )}
          </Avatar>
        </Box>

        <Box>
          <Label>{uploading ? 'Uploading ...' : 'Upload'}</Label>
        </Box>

        <Box>
          <input
            style={{
              visibility: 'hidden',
              position: 'absolute',
            }}
            type="file"
            id="single"
            accept="image/*"
            onChange={uploadAvatar}
            disabled={uploading}
          />
        </Box>
      </Flex>
    </>
  );
};

export default RadixAvatar;
