export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          Hello World
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Welcome to your Next.js application!
        </p>
        <div className="inline-block px-8 py-3 bg-white rounded-lg shadow-md border border-gray-200">
          <p className="text-gray-700 font-medium">
            🎉 Your app is running successfully
          </p>
        </div>
      </div>
    </main>
  )
}