import { Leaf, Building2, Battery, TreePine } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-green-500" />,
      title: 'Carbon Tracking',
      description: 'Real-time monitoring of your company\'s carbon emissions across all operations.'
    },
    {
      icon: <Building2 className="w-6 h-6 text-blue-500" />,
      title: 'Facility Management',
      description: 'Track and optimize energy usage across all your facilities.'
    },
    {
      icon: <Battery className="w-6 h-6 text-yellow-500" />,
      title: 'Energy Efficiency',
      description: 'Smart recommendations for reducing energy consumption.'
    },
    {
      icon: <TreePine className="w-6 h-6 text-emerald-500" />,
      title: 'Offset Programs',
      description: 'Connect with verified carbon offset programs and track your impact.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Dashboard />
      <Features features={features} />
      <Footer />
    </div>
  );
}