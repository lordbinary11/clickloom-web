/*
  # Create website analyses table

  1. New Tables
    - `website_analyses`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `url` (text)
      - `verdict` (text)
      - `risk_score` (numeric)
      - `summary` (text)
      - `recommendations` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `website_analyses` table
    - Add policies for authenticated users to:
      - Read their own analyses
      - Create new analyses
*/

CREATE TABLE IF NOT EXISTS website_analyses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  url text NOT NULL,
  verdict text NOT NULL,
  risk_score numeric NOT NULL,
  summary text,
  recommendations text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE website_analyses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own analyses"
  ON website_analyses
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create analyses"
  ON website_analyses
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);