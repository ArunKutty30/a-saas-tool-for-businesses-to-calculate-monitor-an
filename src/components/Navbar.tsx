import { Leaf } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-green-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">CarbonTrack</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2">About</a>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}