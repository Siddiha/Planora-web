import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function TourismWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const touristImages = [
    'https://images.unsplash.com/photo-1599579810694-b5ac1795ce86?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=300&h=300&fit=crop',
  ];
  return (
    <div className="text-gray-900 font-sans" style={{ backgroundColor: '#F2F2F2' }}>
      {/* Navigation */}
      <nav className="flex justify-between items-center px-4 md:px-8 py-4 border-b border-gray-300" style={{ backgroundColor: '#F2F2F2' }}>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded" style={{ backgroundColor: '#102550' }}></div>
          <span className="font-bold text-base" style={{ color: '#102550' }}>Planora</span>
        </div>
        
        <div className="hidden md:flex gap-10 text-xs font-medium">
          <a href="#" style={{ color: '#102550' }} className="hover:opacity-70">PRODUCTS</a>
          <a href="#" style={{ color: '#102550' }} className="hover:opacity-70">FOR BUSINESS</a>
          <a href="#" style={{ color: '#102550' }} className="hover:opacity-70">DEVELOPERS</a>
          <a href="#" style={{ color: '#102550' }} className="hover:opacity-70">RESEARCH</a>
          <a href="#" style={{ color: '#102550' }} className="hover:opacity-70">COMPANY</a>
        </div>

        <button className="hidden md:block bg-white border-2 text-xs font-semibold rounded-lg hover:bg-gray-50 px-6 py-2" style={{ borderColor: '#102550', color: '#102550' }}>
          TRY NOW
        </button>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#F2F2F2' }}>
        {/* Background Blobs - Layer 1 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 right-1/3 w-96 h-96 bg-gradient-to-br from-yellow-300 via-orange-300 to-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{ background: 'linear-gradient(to top left, #102550, #6366f1)' }}></div>
        </div>

        {/* Foreground Blobs - Layer 2 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-1/4 w-80 h-80 bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-45"></div>
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
          <div className="absolute bottom-20 right-1/3 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30" style={{ background: 'linear-gradient(to top left, #102550, #4f46e5)' }}></div>
        </div>

        {/* Tourist Images - Clustered on Right - Fully Responsive */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Image 1 - Top Right */}
          <div className="absolute top-30 right-20 sm:right-8 md:right-12 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300 hover:z-20">
            <img src={touristImages[0]} alt="Tourist destination" className="w-full h-full object-cover" />
          </div>

          {/* Image 2 - Middle Right */}
          <div className="absolute top-1/3 right-3 sm:right-6 md:right-8 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 hover:z-20">
            <img src={touristImages[1]} alt="Travel adventure" className="w-full h-full object-cover" />
          </div>

          {/* Image 3 - Center Right - Largest */}
          <div className="absolute top-1/2 right-6 sm:right-10 md:right-16 lg:right-20 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300 hover:z-20">
            <img src={touristImages[2]} alt="Sri Lanka experience" className="w-full h-full object-cover" />
          </div>

          {/* Image 4 - Bottom Right */}
          <div className="absolute bottom-24 right-4 sm:right-8 md:right-12 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 hover:z-20">
            <img src={touristImages[3]} alt="Cultural experience" className="w-full h-full object-cover" />
          </div>

          {/* Image 5 - Bottom Right Lower */}
          <div className="absolute bottom-4 right-12 sm:right-16 md:right-24 lg:right-32 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 hover:z-20">
            <img src={touristImages[4]} alt="Travel memories" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="relative flex items-center px-8 md:px-16 py-32 max-w-7xl mx-auto h-screen z-10">
          <div className="w-full md:w-1/2">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-8">
              The Leading<br />Sri Lankan Travel<br />Companion
            </h1>
            
            <p className="text-base text-gray-700 mb-8">
              Intelligent Travel Planning for Sri Lanka
            </p>

            <p className="text-gray-600 mb-12 text-sm leading-relaxed max-w-md">
              Planora uses AI to create personalized itineraries, real-time alerts,<br />and immersive experiences tailored to Sri Lanka's unique culture and climate.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="text-white px-8 py-3 text-sm font-semibold rounded-lg flex items-center justify-center hover:opacity-90 transition w-fit" style={{ backgroundColor: '#102550' }}>
                CONTACT SALES
                <ArrowRight size={16} className="ml-2" />
              </button>
              <button className="bg-white border-2 px-8 py-3 text-sm font-semibold rounded-lg hover:bg-gray-50 transition" style={{ borderColor: '#102550', color: '#102550' }}>
                TRY THE PLAYGROUND
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-40 px-8 md:px-16 relative overflow-hidden min-h-screen flex items-center" style={{ backgroundColor: '#F2F2F2' }}>
        {/* Background Blobs - Layer 1 (Behind) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-yellow-300 via-orange-300 to-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-gray-400 to-stone-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        </div>

        {/* Foreground Blobs - Layer 2 (In Front) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-20 w-80 h-80 bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
          <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-35"></div>
          <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-gradient-to-tr from-gray-500 to-stone-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
               Travel<br />Experiences in Sri Lanka
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Planora combines AI-powered planning with real-time Sri Lankan insights to create unforgettable journeys.
            </p>
          </div>

          <div className="relative h-96">
            {/* Chat UI Card */}
            <div className="absolute right-9 top-0 bg-white rounded-xl shadow-2xl p-4 w-72">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b">
                <div className="w-5 h-5 bg-orange-400 rounded"></div>
                <span className="text-xs font-semibold text-gray-900">Knowledge agent</span>
              </div>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-gray-300 rounded"></div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-900">Courtney 3:10 AM</p>
                    <p className="text-xs text-gray-600">What were Q4 2023 operating margins in Asia?</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-orange-400 rounded flex items-center justify-center">
                    <span className="text-xs text-white">K</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-900">Knowledge agent 3:10 AM</p>
                    <p className="text-xs text-gray-600">Typing...</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Icons */}
            <div className="absolute right-3 top-96 space-y-8">
              <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-lg shadow-lg flex items-center justify-center border border-white/40 hover:bg-white/40 transition">
                <span className="text-2xl">👤</span>
              </div>
              <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-lg shadow-lg flex items-center justify-center border border-white/40 hover:bg-white/40 transition">
                <span className="text-2xl">🎨</span>
              </div>
              <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-lg shadow-lg flex items-center justify-center border border-white/40 hover:bg-white/40 transition">
                <span className="text-2xl">📁</span>
              </div>
            </div>
          </div>
        </div>

        {/* Command Section Below */}
        <div className="max-w-7xl mx-auto relative z-10 w-full mt-48 bg-white/80 backdrop-blur-md rounded-3xl p-12 shadow-lg border border-white/60">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="mb-8">
                <div className="bg-gray-300 rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-5 h-5 bg-gray-400 rounded flex items-center justify-center text-white text-xs font-bold">P</div>
                    <p className="text-xs font-semibold text-gray-900">Planora AI Assistant</p>
                    <p className="text-xs text-gray-500">Live</p>
                  </div>
                  
                  <div className="bg-white rounded p-2 mb-2">
                    <p className="text-xs font-semibold text-gray-900">You 3:10 AM</p>
                    <p className="text-xs text-gray-700">Help me plan my Sri Lanka trip</p>
                  </div>
                  
                  <div className="bg-gray-100 rounded p-3">
                    <p className="text-xs font-semibold text-gray-900 mb-2">Planora AI Assistant 3:10 AM</p>
                    <p className="text-xs text-gray-700 leading-relaxed mb-2">I'll help you create the perfect Sri Lankan adventure! Here's what I can do:</p>
                    
                    <p className="text-xs font-bold text-gray-900 mt-2 mb-1">🎯 Plan Your Journey:</p>
                    <p className="text-xs text-gray-700">• Trip Planning Wizard - Custom itineraries</p>
                    <p className="text-xs text-gray-700">• AI-Generated Itineraries - Day-by-day plans</p>
                    <p className="text-xs text-gray-700">• Daily View - Real-time schedules</p>
                    <p className="text-xs text-gray-700">• Local Living Feed - Authentic experiences</p>
                    <p className="text-xs text-gray-700">• Memory Journal - Auto-organized photos</p>
                    
                    <p className="text-xs font-bold text-gray-900 mt-2 mb-1">🌏 Sri Lanka Smart Features:</p>
                    <p className="text-xs text-gray-700">• Voice Navigation - No screens needed</p>
                    <p className="text-xs text-gray-700">• Energy Tracking - Adjust for tropical heat</p>
                    <p className="text-xs text-gray-700">• Offline Maps - Remote area access</p>
                    <p className="text-xs text-gray-700">• Climate & Monsoon Alerts - Best timing</p>
                    <p className="text-xs text-gray-700">• Poya Day Calendar - Cultural events</p>
                    <p className="text-xs text-gray-700">• Safety & Eco Alerts - Real-time updates</p>
                    <p className="text-xs text-gray-700">• AR Memory Anchors - Location memories</p>
                    
                    <p className="text-xs text-gray-700 mt-2">What interests you most?</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-blue-950-600 text-xs font-bold mb-4 tracking-widest">PLANORA FEATURES</p>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                Sri Lanka Travel<br />Intelligence System
              </h3>
              <p className="text-gray-600 text-sm mb-8">
                Planora combines must-have travel features with unique capabilities designed specifically for Sri Lankan exploration and safety.
              </p>
              
              <div className="space-y-3 text-xs text-gray-700 mb-8">
                <p className="font-bold text-sm mb-4">🌏 Unique Sri Lanka Features:</p>
                <p>🗣️ Voice-Only Hands-Free Navigation - Navigate without phone screens</p>
                <p>⚡ Biometric Energy Forecasting - Track fatigue in tropical heat</p>
                <p>📱 Offline Mode Manager - Travel to remote areas without connectivity</p>
                <p>🌡️ Seasonal Climate-Shift Planner - Avoid monsoons intelligently</p>
                <p>🎊 Poya Day Alerts - Know cultural observance dates</p>
                <p>🗺️ AR Spatial Memory Anchors - Immersive location-based memories</p>
                <p>🚨 Real-Time Risk & Sustainability Alerts - Safety & eco-impact updates</p>
              </div>
              
              <button className="text-white px-8 py-3 text-sm font-semibold rounded-full flex items-center hover:opacity-90 transition w-fit" style={{ backgroundColor: '#102550' }}>
                EXPLORE PLANORA
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Embed Section */}
      <section className="py-40 px-8 md:px-16 relative overflow-hidden min-h-screen flex items-center" style={{ backgroundColor: '#F2F2F2' }}>
        {/* Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-purple-300 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-tr from-orange-300 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        {/* Foreground Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-gradient-to-bl from-purple-400 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-tr from-orange-400 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-35"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
              AR Spatial Memory<br />Anchors
            </h2>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              Planora uses augmented reality to anchor your memories at physical locations. Revisit moments through immersive 3D recreations, location-tagged photos, and personal narratives tied to exact GPS coordinates across Sri Lanka's most beautiful destinations.
            </p>
            <button className="bg-gray-900 text-white px-8 py-3 text-sm font-semibold rounded-full flex items-center hover:bg-gray-800 transition w-fit">
              LEARN MORE
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>

          <div className="relative h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-pink-300 to-orange-200 rounded-3xl opacity-35"></div>
            
            {/* Chat card */}
            <div className="absolute right-8 top-8 bg-white rounded-lg shadow-xl p-3 w-48">
              <p className="text-xs font-semibold text-gray-900">Courtney 3:10 AM</p>
              <p className="text-xs text-gray-600">What were Q4 2023 operating margins in Asia?</p>
            </div>

            {/* Data visualization */}
            <div className="absolute left-8 bottom-12 bg-white rounded-lg shadow-xl p-4 w-56">
              <p className="text-xs font-semibold text-gray-900 mb-3">Data Hub</p>
              <div className="grid grid-cols-4 gap-2 mb-3">
                <div className="w-8 h-8 bg-gray-200 rounded border border-gray-300"></div>
                <div className="w-8 h-8 bg-gray-200 rounded border border-gray-300"></div>
                <div className="w-8 h-8 bg-gray-200 rounded border border-gray-300"></div>
                <div className="w-8 h-8 bg-gray-200 rounded border border-gray-300"></div>
              </div>
              <div className="border-t pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  <span className="text-xs text-gray-700">Data Integration</span>
                </div>
              </div>
            </div>

            {/* Right icons */}
            <div className="absolute right-0 top-32 space-y-3">
              <div className="w-10 h-10 bg-white rounded shadow-lg flex items-center justify-center text-sm">👥</div>
              <div className="w-10 h-10 bg-white rounded shadow-lg flex items-center justify-center text-sm">🌐</div>
            </div>
          </div>
        </div>
      </section>

      {/* Retrieval Section */}
      <section className="py-40 px-8 md:px-16 relative overflow-hidden min-h-screen flex items-center" style={{ backgroundColor: '#F2F2F2' }}>
        {/* Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-orange-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        {/* Foreground Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
          <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-gradient-to-tl from-orange-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-35"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center w-full">
          <div className="relative h-96 order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-purple-300 to-orange-200 rounded-3xl opacity-35"></div>

            {/* File list card */}
            <div className="absolute left-6 top-8 bg-white rounded-lg shadow-xl p-4 w-52">
              <p className="text-xs font-semibold text-gray-900 mb-3">My Files</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs">📄</span>
                  <p className="text-xs text-gray-700">Growth Report 2023.pdf</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs">📊</span>
                  <p className="text-xs text-gray-700">Markets in Asia.xlsx</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs">🎯</span>
                  <p className="text-xs text-gray-700">Operations.pptx</p>
                </div>
              </div>
            </div>

            {/* Purple icon */}
            <div className="absolute right-8 bottom-8 bg-white rounded-lg shadow-xl p-4 w-14 h-14 flex items-center justify-center">
              <div className="w-6 h-6 bg-purple-500 rounded"></div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
              Real-Time Destination<br />Risk & Sustainability<br />Alerts
            </h2>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              Stay informed with real-time updates on weather conditions, natural disasters, safety alerts, and eco-impact scores for attractions across Sri Lanka. Planora ensures your travel plans adapt dynamically to environmental and safety conditions.
            </p>
            <button className="bg-gray-900 text-white px-8 py-3 text-sm font-semibold rounded-full flex items-center hover:bg-gray-800 transition w-fit">
              LEARN MORE
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Advanced Retrieval Section */}
      <section className="py-32 px-8 md:px-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Build with Advanced<br />Retrieval
            </h2>
            <p className="text-gray-300 mb-12 leading-relaxed text-base">
              Our Generative AI and Advanced Retrieval models work seamlessly together for applications requiring RAG. It's easy to connect and retrieve information from documents and enterprise data sources to build more powerful AI applications.
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 text-sm font-semibold rounded-full flex items-center hover:bg-gray-100 transition w-fit">
              TRY THE PLAYGROUND
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 text-gray-900 h-96 shadow-2xl">
            <div className="text-xs text-gray-500 mb-4 font-semibold">cohere playground</div>
            <div className="space-y-2 text-xs mb-4 flex gap-2">
              <span className="px-2 py-1 bg-gray-200 rounded">Chats</span>
              <span className="px-2 py-1 bg-gray-200 rounded">Classify</span>
              <span className="px-2 py-1 bg-gray-200 rounded">Embed</span>
            </div>
            <div className="bg-gray-50 rounded p-4 h-48 text-xs text-gray-400 flex items-center justify-center">Playground interface preview</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-16 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs text-gray-500 mb-6 font-semibold uppercase">Sign up for our newsletters</p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6 max-w-md">
              <input 
                type="email" 
                placeholder="Enter Email*" 
                className="flex-1 bg-gray-800 text-white px-4 py-3 rounded border border-gray-700 text-sm placeholder-gray-500"
              />
              <button className="bg-white text-gray-900 px-4 py-3 rounded hover:bg-gray-100 flex items-center justify-center font-semibold">
                <ArrowRight size={18} />
              </button>
            </div>
            
            <label className="flex items-center gap-2 text-xs mb-4">
              <input type="checkbox" className="w-4 h-4 rounded" />
              <span className="text-gray-500">I CONSENT TO RECEIVING EMAIL COMMUNICATIONS FROM PLANORA</span>
            </label>
            
            <p className="text-xs text-gray-600">
              BY SUBMITTING THIS FORM, YOU AGREE TO OUR <a href="#" className="underline">TERMS OF USE</a> AND <a href="#" className="underline">PRIVACY POLICY</a>
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
              <div>
                <p className="font-semibold text-white mb-6 text-xs uppercase tracking-wider">Products</p>
                <ul className="space-y-3 text-xs">
                  <li><a href="#" className="hover:text-white">Trip Planning</a></li>
                  <li><a href="#" className="hover:text-white">AI Itineraries</a></li>
                  <li><a href="#" className="hover:text-white">Daily View</a></li>
                  <li><a href="#" className="hover:text-white">Local Feed</a></li>
                  <li><a href="#" className="hover:text-white">Memory Journal</a></li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white mb-6 text-xs uppercase tracking-wider">Sri Lanka Features</p>
                <ul className="space-y-3 text-xs">
                  <li><a href="#" className="hover:text-white">Voice Navigation</a></li>
                  <li><a href="#" className="hover:text-white">Energy Tracking</a></li>
                  <li><a href="#" className="hover:text-white">Offline Mode</a></li>
                  <li><a href="#" className="hover:text-white">Climate Alerts</a></li>
                  <li><a href="#" className="hover:text-white">Poya Calendar</a></li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white mb-6 text-xs uppercase tracking-wider">Company</p>
                <ul className="space-y-3 text-xs">
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Blog</a></li>
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                  <li><a href="#" className="hover:text-white">Press</a></li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white mb-6 text-xs uppercase tracking-wider">Support</p>
                <ul className="space-y-3 text-xs">
                  <li><a href="#" className="hover:text-white">Help Center</a></li>
                  <li><a href="#" className="hover:text-white">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white">FAQ</a></li>
                  <li><a href="#" className="hover:text-white">Community</a></li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white mb-6 text-xs uppercase tracking-wider">Legal</p>
                <ul className="space-y-3 text-xs">
                  <li><a href="#" className="hover:text-white">Privacy</a></li>
                  <li><a href="#" className="hover:text-white">Terms of Use</a></li>
                  <li><a href="#" className="hover:text-white">Cookies</a></li>
                  <li><a href="#" className="hover:text-white">Disclaimer</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="text-5xl font-bold text-white">Planora</div>
              <div className="flex gap-8 text-xs text-gray-500">
                <a href="#" className="hover:text-white">Facebook</a>
                <a href="#" className="hover:text-white">Instagram</a>
                <a href="#" className="hover:text-white">Twitter</a>
                <a href="#" className="hover:text-white">Contact</a>
              </div>
              <p className="text-xs text-gray-600">Privacy • Terms of Use • @Planora 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}