import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database Types
export interface Enrollment {
  id?: string;
  full_name: string;
  phone: string;
  email: string;
  course_id: number;
  course_title: string;
  payment_slip_url?: string;
  status: 'pending' | 'confirmed' | 'rejected';
  created_at?: string;
  updated_at?: string;
}

// Course data type
export interface CourseOption {
  id: number;
  title: string;
  price: number;
  start_date: string;
}