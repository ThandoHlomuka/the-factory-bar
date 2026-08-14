import { useLocation, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { supabase } from '../utils/supabase'
import type { User } from '@supabase/supabase-js'

interface LayoutProps {
  user: User | null
}

const Layout: React.FC<LayoutProps> = ({ user }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/venue', label: 'Venue Info' },
    { path: '/events', label: 'Events' },
  ]

  return (
    <div className="min-h-screen bg-dark">
      <header className="border-b border-gray-800 bg-gray-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-primary-500">The Factory Bar</div>
            <nav className="flex items-center gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive || pathname === item.path
                        ? 'bg-primary-600 text-white'
                        : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              {user ? (
                <button
                  onClick={handleLogout}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-gray-300 hover:bg-gray-800 transition-colors"
                >
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-gray-300 hover:bg-gray-800 transition-colors"
                >
                  Login
                </NavLink>
              )}
            </nav>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t border-gray-800 bg-gray-900 py-6">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} The Factory Bar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
