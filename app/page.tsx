'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "./components/ui/button"
import { Home, Info, Calendar, Settings } from 'lucide-react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Page() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className={`min-h-screen bg-black text-white flex flex-col ${montserrat.className}`}>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-full z-10">
        <div className="px-4 py-2">
          <ul className="flex items-center space-x-6">
            <li className="flex-shrink-0 mr-6">
              <span className="text-2xl font-extrabold">STC</span>
            </li>
            {[
              { name: 'Home', icon: Home },
              { name: 'About', icon: Info },
              { name: 'Events', icon: Calendar },
              { name: 'Settings', icon: Settings },
            ].map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => setActiveTab(item.name.toLowerCase())}
                  className={`flex items-center space-x-1 p-2 rounded-full transition-colors ${
                    activeTab === item.name.toLowerCase() ? 'bg-white text-black' : 'text-white hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/app/images/hero.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            Students Technical Council
          </h1>
          <h2 className="text-2xl sm:text-3xl mb-12">IIT Patna</h2>
          <div className="space-y-4 sm:space-y-0 sm:space-x-6">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg">
              Learn More
            </Button>
            <Button className="bg-transparent hover:bg-white/10 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg border-2 border-white">
              Contact Us
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}