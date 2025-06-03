-- Create a new storage bucket for portfolio images
insert into storage.buckets (id, name, public)
values ('portfolio-images', 'portfolio-images', true);

-- Set up storage policies for the portfolio-images bucket
create policy "Public Access"
on storage.objects for select
using ( bucket_id = 'portfolio-images' );

create policy "Authenticated users can upload portfolio images"
on storage.objects for insert
with check (
  bucket_id = 'portfolio-images'
  and auth.role() = 'authenticated'
);

create policy "Authenticated users can update portfolio images"
on storage.objects for update
using (
  bucket_id = 'portfolio-images'
  and auth.role() = 'authenticated'
);

create policy "Authenticated users can delete portfolio images"
on storage.objects for delete
using (
  bucket_id = 'portfolio-images'
  and auth.role() = 'authenticated'
); 