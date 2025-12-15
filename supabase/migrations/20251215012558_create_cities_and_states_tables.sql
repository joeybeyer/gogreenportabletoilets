/*
  # Create Cities and States Tables for Local SEO

  1. New Tables
    - `states`
      - `id` (uuid, primary key)
      - `name` (text) - Full state name (e.g., "California")
      - `code` (text, unique) - Two-letter state code (e.g., "CA")
      - `description` (text) - SEO-optimized state description
      - `cities_count` (integer) - Number of cities served in this state
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `cities`
      - `id` (uuid, primary key)
      - `name` (text) - City name (e.g., "San Francisco")
      - `slug` (text, unique) - URL-friendly slug (e.g., "san-francisco")
      - `state_id` (uuid, foreign key) - Reference to states table
      - `state_code` (text) - Denormalized state code for quick access
      - `population` (integer) - City population for sorting/display
      - `description` (text) - SEO-optimized city description
      - `meta_title` (text) - SEO meta title
      - `meta_description` (text) - SEO meta description
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
  
  2. Security
    - Enable RLS on both tables
    - Allow public read access (cities and states are public information)
    - Restrict write access to authenticated users only
  
  3. Indexes
    - Index on cities.slug for fast lookup by URL
    - Index on cities.state_id for state-based queries
    - Index on states.code for quick state lookups
*/

-- Create states table
CREATE TABLE IF NOT EXISTS states (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  code text UNIQUE NOT NULL,
  description text DEFAULT '',
  cities_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create cities table
CREATE TABLE IF NOT EXISTS cities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  state_id uuid REFERENCES states(id) ON DELETE CASCADE,
  state_code text NOT NULL,
  population integer DEFAULT 0,
  description text DEFAULT '',
  meta_title text DEFAULT '',
  meta_description text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS cities_slug_idx ON cities(slug);
CREATE INDEX IF NOT EXISTS cities_state_id_idx ON cities(state_id);
CREATE INDEX IF NOT EXISTS cities_state_code_idx ON cities(state_code);
CREATE INDEX IF NOT EXISTS states_code_idx ON states(code);

-- Enable Row Level Security
ALTER TABLE states ENABLE ROW LEVEL SECURITY;
ALTER TABLE cities ENABLE ROW LEVEL SECURITY;

-- RLS Policies for states table
CREATE POLICY "Anyone can view states"
  ON states FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert states"
  ON states FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update states"
  ON states FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete states"
  ON states FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for cities table
CREATE POLICY "Anyone can view cities"
  ON cities FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert cities"
  ON cities FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update cities"
  ON cities FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete cities"
  ON cities FOR DELETE
  TO authenticated
  USING (true);