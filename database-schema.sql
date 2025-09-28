-- Create enrollments table
CREATE TABLE IF NOT EXISTS enrollments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  course_id INTEGER NOT NULL,
  course_title VARCHAR(255) NOT NULL,
  payment_slip_url TEXT,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_enrollments_email ON enrollments(email);

-- Create an index on status for admin filtering
CREATE INDEX IF NOT EXISTS idx_enrollments_status ON enrollments(status);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_enrollments_created_at ON enrollments(created_at DESC);

-- Enable Row Level Security (optional, for future use)
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations (since no login system)
CREATE POLICY "Allow all operations on enrollments" ON enrollments
FOR ALL USING (true) WITH CHECK (true);