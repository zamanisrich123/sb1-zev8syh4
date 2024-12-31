/*
  # Update profiles table for username-based auth
  
  1. Changes
    - Replace email with username column
    - Add trigger to create profile on user signup
  
  2. Security
    - Maintain existing RLS policies
*/

-- Modify profiles table
ALTER TABLE profiles 
DROP COLUMN email,
ADD COLUMN username text NOT NULL;

-- Create function to handle profile creation
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username)
  VALUES (
    new.id,
    COALESCE(
      new.raw_user_meta_data->>'username',
      split_part(new.email, '@', 1)
    )
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for automatic profile creation
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();