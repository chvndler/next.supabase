import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ngjsgznlbwxjwddotoft.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTcxNzA0MiwiZXhwIjoxOTU3MjkzMDQyfQ.qPc3BcoDKZv1W6qdvyPpHhp3WrHhRvm1KMHUy6OP9Zg';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export { supabase };
