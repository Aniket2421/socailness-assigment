"use client";


import { useState } from 'react';

const themes = {
  solid: ['#000000', '#C0C0C0', '#FFFF00', '#00FF00', '#00FFFF', '#FFA500', '#800080', '#FFC0CB', '#FFFFE0', '#ADD8E6', '#FFA07A'],
  linearGradients: ['linear-gradient(to right, #ff7e5f, #feb47b)', 'linear-gradient(to right, #ff6a00, #ee0979)', 'linear-gradient(to right, #00c6ff, #0072ff)', 'linear-gradient(to right, #a8c0ff, #3f2b96)'],
  radialGradients: ['radial-gradient(circle, #ff7e5f, #feb47b)', 'radial-gradient(circle, #ff6a00, #ee0979)', 'radial-gradient(circle, #00c6ff, #0072ff)', 'radial-gradient(circle, #a8c0ff, #3f2b96)'],
};

export default function ThemeSelector() {
  const [selectedTheme, setSelectedTheme] = useState<string>('');

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <aside className="w-28 md:w-32 bg-gray-100 flex flex-col justify-between p-5 border-r border-gray-300 fixed md:h-full h-28 md:relative bottom-0 left-0 right-0 z-10">
        <div className="text-xl font-bold mb-10 text-black">Logo</div>
        <nav className="space-y-4">
          <a href="#" className="block py-2 text-black hover:bg-gray-300">Home</a>
          <a href="#" className="block py-2 text-black hover:bg-gray-300">Schedule</a>
          <a href="#" className="block py-2 text-black hover:bg-gray-300">Recommendation</a>
          <a href="#" className="block py-2 text-black hover:bg-gray-300">Analytics</a>
          <a href="#" className="block py-2 text-black hover:bg-gray-300">Profile</a>
          <a href="#" className="block py-2 text-black hover:bg-gray-300">Inbox</a>
          <a href="#" className="block py-2 text-black hover:bg-gray-300">Themes</a>
        </nav>
        <div className="mt-10">
          <a href="#" className="block py-2 text-black hover:bg-gray-300">Settings</a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-28 md:ml-32 w-full flex flex-col p-5 overflow-y-auto">
        {/* Navbar */}
        <header className="fixed top-0 left-28 md:left-32 right-0 bg-white z-10 p-5 flex justify-between items-center border-b border-gray-300">
          <span className="text-xl text-black">Themes</span>
          <div className="flex items-center">
            <span className="mr-3 text-black">Kushagra Singh</span>
            <div className="w-10 h-10 rounded-full bg-gray-400"></div>
          </div>
        </header>

        {/* Content */}
        <div className="flex flex-grow pt-20">
          {/* Color Palette */}
          <aside className="w-1/4 md:w-1/5 p-5 border-r border-gray-300">
            <h2 className="text-2xl mb-5 text-black">Apply a skin</h2>
            <div className="mb-5">
              <h3 className="text-xl mb-3 text-black">Solids</h3>
              <div className="grid grid-cols-4 gap-2">
                {themes.solid.map((color) => (
                  <div
                    key={color}
                    onClick={() => setSelectedTheme(color)}
                    className="w-8 h-8 md:w-10 md:h-10 cursor-pointer border border-gray-300"
                    style={{ background: color }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="mb-5">
              <h3 className="text-xl mb-3 text-black">Linear Gradients</h3>
              <div className="grid grid-cols-4 gap-2">
                {themes.linearGradients.map((gradient) => (
                  <div
                    key={gradient}
                    onClick={() => setSelectedTheme(gradient)}
                    className="w-8 h-8 md:w-10 md:h-10 cursor-pointer border border-gray-300"
                    style={{ background: gradient }}
                  ></div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl mb-3 text-black">Radial Gradients</h3>
              <div className="grid grid-cols-4 gap-2">
                {themes.radialGradients.map((gradient) => (
                  <div
                    key={gradient}
                    onClick={() => setSelectedTheme(gradient)}
                    className="w-8 h-8 md:w-10 md:h-10 cursor-pointer border border-gray-300"
                    style={{ background: gradient }}
                  ></div>
                ))}
              </div>
            </div>
            <button className="mt-5 px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Save</button>
          </aside>

          {/* Profile Preview */}
          <section className="flex-grow flex justify-center items-center p-5" style={{ background: selectedTheme }}>
            <div className="bg-white rounded-lg overflow-hidden w-full max-w-sm shadow-lg">
              <div className="h-40 flex justify-center items-center" style={{ background: selectedTheme }}>
                <img src="https://via.placeholder.com/150" alt="Profile" className="w-24 h-24 rounded-full border-4 border-white" />
              </div>
              <div className="p-5 text-center">
                <h2 className="text-2xl font-bold mt-5 text-black">Mason Parker</h2>
                <p className="mt-2 text-black">Graphics & UI/UX Designer</p>
                <p className="mt-2 text-black">Denver, United States</p>
                <p className="mt-4 text-gray-700">
                  I am a visionary Graphics and UI/UX Designer, seamlessly blending artistic flair with technical expertise. With a degree in Graphic Design, I consistently deliver visually stunning and user-centric solutions, leaving an indelible mark on the digital landscape. As a trusted collaborator, I am dedicated to crafting pixel-perfect UIs and captivating graphics that elevate user experiences.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
