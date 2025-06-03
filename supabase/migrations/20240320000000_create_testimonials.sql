create table public.testimonials (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  role text not null,
  content text not null,
  rating integer not null check (rating >= 1 and rating <= 5),
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.testimonials enable row level security;

-- Create policies
create policy "Enable read access for all users" on public.testimonials
  for select using (true);

create policy "Enable insert for authenticated users only" on public.testimonials
  for insert with check (auth.role() = 'authenticated');

create policy "Enable update for authenticated users only" on public.testimonials
  for update using (auth.role() = 'authenticated');

create policy "Enable delete for authenticated users only" on public.testimonials
  for delete using (auth.role() = 'authenticated');

-- Create function to automatically update updated_at
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Create trigger for updated_at
create trigger handle_updated_at
  before update on public.testimonials
  for each row
  execute function public.handle_updated_at(); 