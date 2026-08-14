import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'

interface Event {
  id: number
  title: string
  description: string
  date: string
  time: string
  category: string
  ticket_price: number
  image_url: string
  capacity: number
  created_at: string
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState<Partial<Event>>({})

  const fetchEvents = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('date', { ascending: true })

    if (error) {
      console.error('Error fetching events:', error)
    } else {
      setEvents(data || [])
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchEvents()

    const subscription = supabase
      .channel('events-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'events' }, () => {
        fetchEvents()
      })
      .subscribe()

    return () => {
      supabase.removeChannel(subscription)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.from('events').insert([formData])
    if (error) {
      alert('Error creating event: ' + error.message)
    } else {
      alert('Event created successfully!')
      setShowForm(false)
      setFormData({})
      fetchEvents()
    }
  }

  if (loading && events.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400">Loading events...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Events</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
        >
          {showForm ? 'Cancel' : 'New Event'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg border border-gray-800 space-y-4">
          <h2 className="text-xl font-semibold text-white">Create New Event</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
              <input
                type="text"
                required
                value={formData.title || ''}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Date</label>
              <input
                type="date"
                required
                value={formData.date || ''}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Time</label>
              <input
                type="time"
                required
                value={formData.time || ''}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
              <select
                required
                value={formData.category || ''}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select category</option>
                <option value="live-music">Live Music</option>
                <option value="dj-night">DJ Night</option>
                <option value="comedy">Comedy</option>
                <option value="special-event">Special Event</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Ticket Price</label>
              <input
                type="number"
                step="0.01"
                min="0"
                required
                value={formData.ticket_price || ''}
                onChange={(e) => setFormData({ ...formData, ticket_price: parseFloat(e.target.value) })}
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
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-1">Image URL</label>
              <input
                type="url"
                required
                value={formData.image_url || ''}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
              <textarea
                required
                rows={3}
                value={formData.description || ''}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
          >
            Create Event
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.length === 0 ? (
          <p className="text-gray-500">No events available. Be the first to create one!</p>
        ) : (
          events.map((event) => (
            <div key={event.id} className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
              {event.image_url && (
                <img
                  src={event.image_url}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">{event.title}</h3>
                <p className="text-gray-400 mt-1 text-sm">{event.description}</p>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-300"><span className="text-gray-500">Date:</span> {event.date} {event.time}</p>
                  <p className="text-gray-300"><span className="text-gray-500">Category:</span> {event.category}</p>
                  <p className="text-gray-300"><span className="text-gray-500">Ticket Price:</span> ${event.ticket_price}</p>
                  <p className="text-gray-300"><span className="text-gray-500">Capacity:</span> {event.capacity}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Events
