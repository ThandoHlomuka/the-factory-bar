import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from './utils/supabase'
import type { Session, User } from '@supabase/supabase-js'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Venue from './pages/Venue'
import Events from './pages/Events'
import Layout from './components/Layout'
import AuthContext from './context/AuthContext'

function App() {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    }

    fetchSession()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-dark">
        <div className="text-center">
          <div className="mb-4 text-4xl font-bold text-primary-500">The Factory Bar</div>
          <div className="text-gray-400">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <AuthContext.Provider value={{ user, session, loading }}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/" element={<Layout user={user} />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={
              user ? <Dashboard /> : <Navigate to="/login" replace />
            } />
            <Route path="venue" element={
              user ? <Venue /> : <Navigate to="/login" replace />
            } />
            <Route path="events" element={
              user ? <Events /> : <Navigate to="/login" replace />
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
