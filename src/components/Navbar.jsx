export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-green-600">
          Chikitsa
        </h1>

        <ul className="flex gap-8 text-gray-600 font-medium">
          <li className="hover:text-green-600 cursor-pointer">Home</li>
          <li className="hover:text-green-600 cursor-pointer">Doctors</li>
          <li className="hover:text-green-600 cursor-pointer">Articles</li>
          <li className="hover:text-green-600 cursor-pointer">Contact</li>
        </ul>

        <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
          Ask Doctor
        </button>

      </div>
    </nav>
  )
}