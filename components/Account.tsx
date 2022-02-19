import { useState, useEffect } from 'react';
import { supabase } from '@lib/client';
import { TextField } from '@system/text-field';
import { Section } from '@system/section';
import { Container } from '@system/container';
import { AtelierButton } from '@components/AtelierButton';
import Label from '@components/Label';
import RadixAvatar from '@components/RadixAvatar';

const Account = ({ session }) => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      };

      let { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-widget">
      <Section size="1" css={{ alignItems: 'center', textAlign: 'center' }}>
        <Container size="3" css={{ alignItems: 'center', textAlign: 'center', position: 'relative', margin: 'auto' }}>
          <RadixAvatar
            url={avatar_url}
            size={150}
            onUpload={url => {
              setAvatarUrl(url);
              updateProfile({ username, website, avatar_url: url });
            }}
          />
        </Container>
      </Section>

      <Section size="1">
        <Container size="3" css={{ maxWidth: '400px' }}>
          <div>
            <Label>Email</Label>
            <TextField size="2" id="email" type="text" value={session.user.email} disabled />
          </div>
          <div>
            <Label>Name</Label>
            <TextField
              size="2"
              id="username"
              type="text"
              value={username || ''}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div>
            <Label>Website</Label>
            <TextField
              size="2"
              id="website"
              type="website"
              value={website || ''}
              onChange={e => setWebsite(e.target.value)}
            />
          </div>

          <Container size="3">
            <AtelierButton
              color="lime"
              css={{ margin: '3px' }}
              onClick={() => updateProfile({ username, website, avatar_url })}
              disabled={loading}>
              {loading ? 'Loading ...' : 'Update'}
            </AtelierButton>

            <AtelierButton color="lime" css={{ margin: '3px' }} onClick={() => supabase.auth.signOut()}>
              Sign Out
            </AtelierButton>
          </Container>
        </Container>
      </Section>
    </div>
  );
};

export default Account;
