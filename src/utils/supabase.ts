import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 
  import.meta.env.VITE_SUPABASE_URL ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_URL ||
  import.meta.env.SUPABASE_URL ||
  ''

const supabaseAnonKey = 
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.SUPABASE_PUBLISHABLE_KEY ||
  ''

const isConfigured = supabaseUrl && supabaseAnonKey

export const supabase = createClient(
  supabaseUrl || 'http://placeholder.invalid',
  supabaseAnonKey || 'placeholder',
  {
    fetch,
  }
)

export const isSupabaseConfigured = isConfigured

export type { User, Session } from '@supabase/supabase-js'
