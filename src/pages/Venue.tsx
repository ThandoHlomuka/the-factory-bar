import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'

interface VenueInfo {
  id: number
  name: string
  description: string
  address: string
  phone: string
  email: string
  website: string
  capacity: number
  established: string
}

const Venue = () => {
  const [venue, setVenue] = useState<VenueInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState<Partial<VenueInfo>>({})

  const fetchVenue = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('venue_info')
      .select('*')
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        // No venue found, create default
        createDefaultVenue()
        return
      }
      console.error('Error fetching venue:', error)
    } else {
      setVenue(data)
      setFormData(data)
    }
    setLoading(false)
  }

  const createDefaultVenue = async () => {
    const defaultVenue = {
      name: 'The Factory Bar',
      description: 'A premier nightlife destination with live music, craft cocktails, and an electric atmosphere.',
      address: '123 Factory Street, Downtown',
      phone: '+1 (555) 123-4567',
      email: 'info@thefactorybar.com',
      website: 'https://thefactorybar.com',
      capacity: 200,
      established: '2018',
    }

    const { data, error } = await supabase
      .from('venue_info')
      .insert([defaultVenue])
      .select()
      .single()

    if (error) {
      console.error('Error creating venue:', error)
    } else {
      setVenue(data)
      setFormData(data)
    }
    setLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase
      .from('venue_info')
      .update(formData)
      .eq('id', venue?.id)

    if (error) {
      alert('Error updating venue: ' + error.message)
    } else {
      alert('Venue info updated successfully!')
      setVenue({ ...venue!, ...formData })
      setEditing(false)
    }
  }

  useEffect(() => {
    fetchVenue()
  }, [])

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400">Loading venue info...</div>
      </div>
    )
  }

  if (!venue) {
    return (
      <div className="text-center py-12 text-gray-400">
        Error loading venue information.
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Venue Information</h1>
        <button
          onClick={() => {
            setEditing(!editing)
            setFormData(venue)
          }}
          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
        >
          {editing ? 'Cancel' : 'Edit'}
        </button>
      </div>

      {editing ? (
        <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg border border-gray-800 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input
                type="text"
                required
                value={formData.name || ''}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                required
                value={formData.email || ''}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
              <input
                type="tel"
                required
                value={formData.phone || ''}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Website</label>
              <input
                type="url"
                required
                value={formData.website || ''}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Address</label>
              <input
                type="text"
                required
                value={formData.address || ''}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Capacity</label>
              <input
                type="number"
                min="0"
                required
                value={formData.capacity || ''}
                onChange={(e) => setFormData({ ...formData, capacity: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Established</label>
              <input
                type="text"
                required
                value={formData.established || ''}
                onChange={(e) => setFormData({ ...formData, established: e.target.value })}
                className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
            <textarea
              required
              rows={4}
              value={formData.description || ''}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
          >
            Save Changes
          </button>
        </form>
      ) : (
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">{venue.name}</h2>
          <p className="text-gray-400">{venue.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-gray-300">
            <p><span className="text-gray-500">Address:</span> {venue.address}</p>
            <p><span className="text-gray-500">Phone:</span> {venue.phone}</p>
            <p><span className="text-gray-500">Email:</span> {venue.email}</p>
            <p><span className="text-gray-500">Website:</span> {venue.website}</p>
            <p><span className="text-gray-500">Capacity:</span> {venue.capacity} people</p>
            <p><span className="text-gray-500">Established:</span> {venue.established}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Venue
