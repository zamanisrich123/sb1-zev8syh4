/*
  # Initial Schema Setup

  1. Tables
    - profiles
      - id (uuid, references auth.users)
      - email (text)
      - rdp_info (jsonb, stores encrypted RDP credentials)
      - plan_id (text)
      - created_at (timestamp)
    
    - plans
      - id (text, primary key)
      - name (text)
      - price (numeric)
      - specs (jsonb)
      - features (text[])
      - active (boolean)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for secure access
*/

-- Create profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users,
  email text NOT NULL,
  rdp_info jsonb,
  plan_id text,
  created_at timestamptz DEFAULT now()
);

-- Create plans table
CREATE TABLE plans (
  id text PRIMARY KEY,
  name text NOT NULL,
  price numeric NOT NULL,
  specs jsonb NOT NULL,
  features text[] NOT NULL,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE plans ENABLE ROW LEVEL SECURITY;

-- Policies for profiles
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Policies for plans
CREATE POLICY "Anyone can view active plans"
  ON plans FOR SELECT
  TO authenticated
  USING (active = true);

-- Insert default plans
INSERT INTO plans (id, name, price, specs, features, active) VALUES
  ('basic', 'Basic RDP', 29.99, 
    '{"cpu": "2 vCPU", "ram": "4GB RAM", "storage": "60GB SSD", "bandwidth": "1TB"}'::jsonb,
    ARRAY['24/7 Support', 'Windows Server 2019', 'Anti-DDoS Protection', 'Automated Backups'],
    true
  ),
  ('pro', 'Professional RDP', 49.99,
    '{"cpu": "4 vCPU", "ram": "8GB RAM", "storage": "120GB SSD", "bandwidth": "2TB"}'::jsonb,
    ARRAY['24/7 Priority Support', 'Windows Server 2019', 'Anti-DDoS Protection', 'Daily Backups', 'Dedicated IP'],
    true
  ),
  ('enterprise', 'Enterprise RDP', 99.99,
    '{"cpu": "8 vCPU", "ram": "16GB RAM", "storage": "250GB SSD", "bandwidth": "5TB"}'::jsonb,
    ARRAY['24/7 VIP Support', 'Windows Server 2019', 'Advanced DDoS Protection', 'Hourly Backups', 'Dedicated IP', 'Load Balancing', 'High Availability'],
    true
  );