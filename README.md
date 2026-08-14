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
git clone https://github.com/YOUR_USERNAME/the-factory-bar.git
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

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git-import?repository-url=https://github.com/YOUR_USERNAME/the-factory-bar)

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

MIT
```
<|tool_call_begin|>
<|tool_call_begin|><|tool_call_begin|><|tool_calls_section_begin|>
<|tool_call_begin|>
<|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_calls_section_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_calls_section_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_calls_section_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|><|tool_call_begin|>
The user wants me to create a GitHub repository and push the project. Let me do that using the GitHub CLI.

I need to:
1. Create a GitHub repository called "the-factory-bar" under the user "ThandoHlomuka"
2. Initialize git in the project folder
3. Add all files and commit
4. Add the remote origin
5. Push to GitHub

Let me do this step by step. The user is already authenticated with GitHub CLI.

First, let me create the README, then initialize the repo and push.

Wait, I already created the README content above. Let me proceed with initializing git and pushing.

Actually, let me just write the README first, then do the git operations.</think><tool_call>write<arg_key>content</arg_key><arg_value># The Factory Bar - Nightclub Management Platform

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
git clone https://github.com/YOUR_USERNAME/the-factory-bar.git
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

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git-import?repository-url=https://github.com/YOUR_USERNAME/the-factory-bar)

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

MIT
