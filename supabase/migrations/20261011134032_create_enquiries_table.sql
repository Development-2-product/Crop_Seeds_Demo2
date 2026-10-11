/*
# Create enquiries table for AgriVanta Seeds

1. New Tables
- `enquiries`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — name of the enquiring person
  - `email` (text, not null) — contact email
  - `phone` (text, nullable) — optional phone number
  - `crop_interest` (text, nullable) — which crop the enquiry is about
  - `message` (text, nullable) — free-text enquiry message
  - `status` (text, not null, default 'new') — enquiry status for internal tracking
  - `created_at` (timestamptz, default now()) — when enquiry was submitted

2. Security
- Enable RLS on `enquiries`.
- This is a no-auth public enquiry form. Use `TO anon, authenticated` so the
  anon-key frontend can INSERT new enquiries. SELECT/UPDATE/DELETE are not
  needed by the frontend — the public should not be able to read or modify
  other people's enquiries. Only INSERT is granted to anon + authenticated.

3. Notes
- The enquiry form is the only write path. No user accounts or sign-in.
- Status column is included for future admin review workflows but is not
  user-editable from the frontend.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  crop_interest text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries"
ON enquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);
