// Graphic Design Portfolio — Single-file React component
// Instructions:
// 1) This file is a complete React component (default export). Drop it into a Create React App / Vite React project as src/App.jsx.
// 2) Tailwind CSS is used for styling. If you don't have Tailwind set up, follow Tailwind + Create React App or Vite Tailwind quickstart (official docs).
// 3) To deploy and get a single shareable link quickly: push the project to GitHub and connect to Vercel or Netlify — both will give you a live link within minutes.
// 4) Replace placeholder images and text below with your own designs and assets.

import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Brand Identity — CoffeeCo',
    desc: 'Logo, stationery and social templates.',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=80'
  },
  {
    id: 2,
    title: 'Poster Series — Urban Beats',
    desc: 'Event posters and promotional art.',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80'
  },
  {
    id: 3,
    title: 'Packaging — Olive Box',
    desc: 'Minimal and sustainable packaging art.',
    img: 'https://images.unsplash.com/photo-1524594154903-3a3a6f676b2a?w=1200&q=80'
  },
  {
    id: 4,
    title: 'Social Campaign — Save Water',
    desc: 'Infographics and ad creatives.',
    img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&q=80'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900 font-[Inter]">
      <header className="bg-white/70 backdrop-blur shadow sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-sky-400 flex items-center justify-center text-white font-bold">GD</div>
            <div>
              <h1 className="text-lg font-semibold">Mohamed Aweiz — Graphic Designer</h1>
              <p className="text-sm text-gray-500">Branding • Poster • Packaging • Digital</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#portfolio" className="hover:underline">Portfolio</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="#" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-sm">Hire me</a>
          </nav>
          <div className="md:hidden">
            {/* Mobile simple menu link */}
            <a href="#portfolio" className="text-sm">Portfolio</a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">I craft bold visual identities that people remember.</h2>
            <p className="mt-4 text-gray-600">Hi — I&apos;m a graphic designer specialised in branding, posters and packaging. I help small businesses and creatives stand out with clean, memorable design.</p>
            <div className="mt-6 flex gap-4">
              <a href="#portfolio" className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow">View portfolio</a>
              <a href="#contact" className="inline-block px-6 py-3 border border-gray-300 rounded-lg">Contact me</a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-sm text-gray-600">
              <div className="p-3 bg-white rounded-lg shadow-sm">
                <strong className="block text-xl">8+</strong>
                Years experience
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm">
                <strong className="block text-xl">120+</strong>
                Projects
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm">
                <strong className="block text-xl">35</strong>
                Happy clients
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=80" alt="workspace" className="w-full h-80 object-cover" />
            </div>
            <div className="absolute -right-6 -bottom-6 w-56 h-36 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
              <img src="https://images.unsplash.com/photo-1526318472351-c75fcf070fbb?w=800&q=80" alt="sample" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold">Selected works</h3>
            <a href="#" className="text-sm text-purple-600">See all projects</a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((p) => (
              <article key={p.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                <div className="h-48 w-full overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transform hover:scale-105 transition duration-300" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">{p.desc}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-gray-400">Branding</span>
                    <a href="#" className="text-xs text-purple-600">View</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mb-12 bg-white p-6 rounded-xl shadow-sm">
          <div className="md:flex gap-6 items-center">
            <div className="md:w-1/3">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80" alt="portrait" className="rounded-xl w-full object-cover h-64" />
            </div>
            <div className="md:flex-1">
              <h3 className="text-2xl font-semibold">About me</h3>
              <p className="mt-3 text-gray-600">I’m Mohamed — a graphic designer focused on creating clear brand stories through typography, colour and layout. I enjoy working on identity systems, posters and packaging for conscious brands.</p>

              <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-gray-600">
                <li>• Logo design</li>
                <li>• Packaging</li>
                <li>• Posters & editorial</li>
                <li>• Social media creatives</li>
              </ul>

              <div className="mt-5 flex gap-3">
                <a href="#contact" className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg">Work with me</a>
                <a href="#" className="px-4 py-2 border rounded-lg">Download CV</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-24">
          <div className="bg-gradient-to-r from-sky-50 to-white p-6 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold">Contact</h3>
            <p className="mt-2 text-gray-600">Want to work together? Send a message and I’ll reply within 48 hours.</p>

            <form className="mt-6 grid sm:grid-cols-2 gap-4">
              <input className="p-3 rounded-lg border" placeholder="Your name" />
              <input className="p-3 rounded-lg border" placeholder="Your email" />
              <input className="p-3 rounded-lg border sm:col-span-2" placeholder="Subject" />
              <textarea className="p-3 rounded-lg border sm:col-span-2 h-32" placeholder="Message"></textarea>
              <div className="sm:col-span-2 flex items-center justify-between">
                <small className="text-xs text-gray-500">Or email me directly: <strong>youremail@example.com</strong></small>
                <button type="button" className="px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg">Send message</button>
              </div>
            </form>
          </div>
        </section>

      </main>

      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div>© {new Date().getFullYear()} Mohamed Aweiz — All rights reserved.</div>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#">Behance</a>
            <a href="#">Dribbble</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
