-- The Factory Bar - Supabase Database Schema

-- Enable necessary extensions
create extension if not exists "uuid-ossp";

-- Venue information table
create table if not exists venue_info (
  id uuid default uuid_generate_uuid() primary key,
  name text not null,
  description text,
  address text,
  phone text,
  email text,
  website text,
  capacity integer,
  established text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Events table
create table if not exists events (
  id uuid default uuid_generate_uuid() primary key,
  title text not null,
  description text,
  date date not null,
  time time not null,
  category text,
  ticket_price numeric(10,2) default 0,
  image_url text,
  capacity integer,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Bookings table
create table if not exists bookings (
  id uuid default uuid_generate_uuid() primary key,
  customer_name text not null,
  email text not null,
  phone text,
  date date not null,
  time time not null,
  party_size integer not null,
  status text check (status in ('pending', 'confirmed', 'cancelled')) default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Row Level Security policies
alter table venue_info enable row level security;
alter table events enable row level security;
alter table bookings enable row level security;

-- Policy: Everyone can read venue info
create policy "Public venue info is viewable by everyone"
  on venue_info for select using (true);

-- Policy: Authenticated users can create/update venue info
create policy "Authenticated users can create venue info"
  on venue_info for insert with check (auth.uid() is not null);

create policy "Authenticated users can update venue info"
  on venue_info for update using (true);

-- Policy: Everyone can read events
create policy "Events are viewable by everyone"
  on events for select using (true);

-- Policy: Authenticated users can create/update events
create policy "Authenticated users can create events"
  on events for insert with check (auth.uid() is not null);

create policy "Authenticated users can update events"
  on events for update using (auth.uid() is not null);

-- Policy: Authenticated users can read all bookings
create policy "Authenticated users can view bookings"
  on bookings for select using (auth.uid() is not null);

-- Policy: Everyone can create bookings
create policy "Public can create bookings"
  on bookings for insert with check (true);

-- Policy: Authenticated users can update bookings
create policy "Authenticated users can update bookings"
  on bookings for update using (auth.uid() is not null);
