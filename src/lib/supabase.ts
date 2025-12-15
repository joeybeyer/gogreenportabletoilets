import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Database features will be disabled.');
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);

export type Database = {
  public: {
    Tables: {
      states: {
        Row: {
          id: string;
          name: string;
          code: string;
          description: string;
          cities_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          code: string;
          description?: string;
          cities_count?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          code?: string;
          description?: string;
          cities_count?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      cities: {
        Row: {
          id: string;
          name: string;
          slug: string;
          state_id: string;
          state_code: string;
          population: number;
          description: string;
          meta_title: string;
          meta_description: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          state_id: string;
          state_code: string;
          population?: number;
          description?: string;
          meta_title?: string;
          meta_description?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          state_id?: string;
          state_code?: string;
          population?: number;
          description?: string;
          meta_title?: string;
          meta_description?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};
