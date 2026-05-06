import { createClient } from '@supabase/supabase-js'

const supabaseUrl =
  'https://jhgasxmetnmutmkjgeoz.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoZ2FzeG1ldG5tdXRta2pnZW96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwODYxNTUsImV4cCI6MjA5MzY2MjE1NX0.Y90699RQ-DVT9mLzvLFnEi1AbG7u2HdRo1plCdp1Nx0'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)