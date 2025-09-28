# AI Automation Academy - Setup Instructions

## Database Setup (Supabase)

1. **Create Database Table**
   - Go to your Supabase dashboard
   - Navigate to SQL Editor
   - Run the SQL script from `database-schema.sql`:

```sql
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

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_enrollments_email ON enrollments(email);
CREATE INDEX IF NOT EXISTS idx_enrollments_status ON enrollments(status);
CREATE INDEX IF NOT EXISTS idx_enrollments_created_at ON enrollments(created_at DESC);

-- Enable Row Level Security
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

-- Create policy for public access (no authentication system)
CREATE POLICY "Allow all operations on enrollments" ON enrollments
FOR ALL USING (true) WITH CHECK (true);
```

2. **Create Storage Bucket**
   - Go to Storage in Supabase dashboard
   - Create a new bucket named: `receipt`
   - Set bucket to **Public** (so payment slips can be viewed)

3. **Configure Storage Policies**
   - Go to SQL Editor in Supabase
   - Run the storage policies from `storage-policies.sql`:

```sql
-- Storage policies for 'receipt' bucket

-- Allow public uploads to receipt bucket
CREATE POLICY "Allow public uploads to receipt bucket" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'receipt');

-- Allow public access to view receipt files
CREATE POLICY "Allow public access to receipt files" ON storage.objects
FOR SELECT USING (bucket_id = 'receipt');

-- Allow public delete for cleanup (optional)
CREATE POLICY "Allow public delete from receipt bucket" ON storage.objects
FOR DELETE USING (bucket_id = 'receipt');

-- Allow public update on receipt files (optional)
CREATE POLICY "Allow public update on receipt files" ON storage.objects
FOR UPDATE USING (bucket_id = 'receipt');
```

## Environment Variables

Your `.env.local` file is already configured with:
```
NEXT_PUBLIC_SUPABASE_URL=https://qnvfjskiidjylklsqdld.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Features Implemented

### 1. Purchase Page (`/purchase`)
- **Form fields:**
  - ชื่อ-นามสกุล (Full Name) - Required
  - เบอร์โทรศัพท์ (Phone) - Required, validated format
  - อีเมล (Email) - Required, validated format
  - เลือกคอร์ส (Course Selection) - Required dropdown
  - อัพโลดสลิปการโอน (Payment Slip) - Required file upload

- **Payment Information:**
  - Bank Transfer: กสิกรไทย 123-4-56789-0
  - PromptPay: 0812345678
  - Both under name: "AI Automation Academy"

- **File Upload:**
  - Accepts: JPG, PNG images
  - Max size: 5MB
  - Stores in Supabase `receipt` bucket
  - Auto-generates unique filenames

- **Form Validation:**
  - Real-time validation
  - Thai language error messages
  - Prevents submission without required fields

### 2. Admin Dashboard (`/admin`)
- **View all enrollments** with filtering:
  - All enrollments
  - Pending (รอดำเนินการ)
  - Confirmed (อนุมัติแล้ว)
  - Rejected (ปฏิเสธ)

- **Features:**
  - View payment slips in modal
  - Approve/Reject enrollments
  - Statistics dashboard
  - Export to CSV
  - Real-time status updates

- **Table columns:**
  - ผู้สมัคร (Applicant name)
  - ติดต่อ (Contact info - phone & email)
  - คอร์ส (Course selected)
  - สลิป (Payment slip with view button)
  - สถานะ (Status with color coding)
  - วันที่สมัคร (Registration date)
  - การดำเนินการ (Actions - approve/reject)

### 3. Updated CTA Buttons
- All "Enroll Now" buttons redirect to `/purchase`
- Consistent user flow from landing page to purchase

## Pages Structure

```
/                    - Main landing page
/purchase           - Course enrollment form
/admin              - Admin dashboard (no login required)
```

## Course Data

3 courses available:
1. **AI for Sale** - ฿6,900 (Nov 3, 2568)
2. **AI for Marketing** - ฿6,900 (Nov 4, 2568)
3. **AI for HR** - ฿6,900 (Nov 5, 2568)

Each course limited to 15 participants.

## Success Flow

1. User clicks "Enroll Now" → `/purchase`
2. User fills form and uploads payment slip
3. Data saved to `enrollments` table with status "pending"
4. Payment slip uploaded to `receipt` bucket
5. Success message shown
6. Admin can view in dashboard at `/admin`
7. Admin approves/rejects enrollment
8. Status updated in database

## Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
```

## Database Schema

The `enrollments` table includes:
- User information (name, phone, email)
- Course selection (course_id, course_title)
- Payment slip URL
- Status tracking (pending/confirmed/rejected)
- Timestamps (created_at, updated_at)

## Security Notes

- No authentication system as requested
- RLS enabled but with public policy
- File uploads restricted to images only
- File size limits enforced
- Input validation on both client and server side