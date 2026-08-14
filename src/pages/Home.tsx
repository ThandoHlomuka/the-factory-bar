import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="space-y-8">
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to The Factory Bar
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Your premier destination for nightlife, live events, and unforgettable experiences.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/events"
            className="px-6 py-3 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 transition-colors"
          >
            View Events
          </Link>
          <Link
            to="/venue"
            className="px-6 py-3 border border-gray-700 text-gray-300 rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            Venue Info
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-2">Live Events</h3>
          <p className="text-gray-400">Catch the hottest acts and performances every weekend.</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-2">Premium Bar</h3>
          <p className="text-gray-400">Craft cocktails and top-shelf liquor served by expert mixologists.</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-2">Dress Code</h3>
          <p className="text-gray-400">Smart casual. No athletic wear or flip-flops.</p>
        </div>
      </section>

      <section className="bg-gray-900 rounded-lg p-8 border border-gray-800">
        <h2 className="text-2xl font-bold text-white mb-4">Hours</h2>
        <div className="space-y-2 text-gray-300">
          <p><span className="text-gray-400">Wednesday - Saturday:</span> 9:00 PM - 2:00 AM</p>
          <p><span className="text-gray-400">Sunday - Monday:</span> Closed</p>
          <p><span className="text-gray-400">Tuesday:</span> 8:00 PM - 1:00 AM</p>
        </div>
      </section>
    </div>
  )
}

export default Home
