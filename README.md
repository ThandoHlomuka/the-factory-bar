# The Factory Bar - Nightclub Management Platform

A full-stack platform for managing a nightclub/entertainment venue with event listings, booking system, and venue information management.

## Features

- **User Authentication**: Secure login and signup via Supabase Auth
- **Venue Management**: Configure venue details, capacity, and contact info
- **Event Management**: Create, view, and manage events with categories
- **Booking System**: Customer bookings with status management
- **Responsive Design**: Mobile-first UI with Tailwind CSS

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase (Database, Auth, Realtime)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- Supabase account

### Setup

1. Create a [Supabase project](https://app.supabase.com) and run the schema from `supabase-schema.sql`

2. Clone this repository:
```bash
git clone https://github.com/ThandoHlomuka/the-factory-bar.git
cd the-factory-bar
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env.local` file with your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Run the development server:
```bash
npm run dev
```

## Deployment

Connect your GitHub repository to Vercel for automatic deployments on every push.

Remember to add your environment variables in Vercel's project settings.

## Project Structure

```
src/
├── components/
│   └── Layout.tsx        # Main layout component
├── context/
│   └── AuthContext.tsx   # Auth context provider
├── pages/
│   ├── Home.tsx          # Landing page
│   ├── Login.tsx         # Authentication page
│   ├── Dashboard.tsx     # Main dashboard with bookings
│   ├── Venue.tsx         # Venue info management
│   └── Events.tsx        # Event management
├── utils/
│   └── supabase.ts       # Supabase client setup
├── App.tsx               # Main app component with routing
├── index.css             # Tailwind CSS styles
└── main.tsx              # App entry point
```

## License

Copyright (c) 2026 Tando Hlomuka and Mera Innovations

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
