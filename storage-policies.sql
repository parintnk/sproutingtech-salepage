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