import React from 'react'
import Link from 'next/link'
import * as Icons from '../components/Icons'

function Index() {
  return (
    <>
      <header className="sticky top-0 left-0 z-50 p-4 shadow-md bg-white">
        <div className="flex items-center justify-end">
          <a href="#">
            <Icons.Github className="w-6 h-6" />
          </a>
          <a className="relative ml-6 p-1" href="#">
            <Icons.Spectrum className="w-4 h-4" />
            <span className="absolute right-0 bottom-0 w-2 h-2 bg-green-500 rounded-full" />
          </a>
        </div>
        <nav className="flex justify-between items-center mt-8">
          <a className="px-2 text-sm text-gray-700" href="#">
            Features
          </a>
          <a className="px-2 text-sm text-gray-700" href="#">
            Learn
          </a>
          <a className="px-2 text-sm text-gray-700" href="#">
            Docs
          </a>
          <a className="px-2 text-sm text-gray-700" href="#">
            Showcase
          </a>
          <a className="px-2 text-sm text-gray-700" href="#">
            Blog
          </a>
        </nav>
      </header>

      <div className="flex items-center justify-center bg-gray-200 py-3">
        <span className="text-sm text-gray-700">Next 9.2 is out!</span>
      </div>

      <div
        className="w-full px-8 pb-8 text-center"
        style={{
          backgroundImage:
            'radial-gradient(#d7d7d7 1px, transparent 1px), radial-gradient(#d7d7d7 1px, transparent 1px)',
          backgroundPosition: '0 0, 25px 25px',
          backgroundSize: '50px 50px'
        }}
      >
        <a className="inline-block" href="#">
          <Icons.Logo className="w-32 h-auto" />
        </a>

        <p className="mt-24 text-2xl font-semibold leading-none">
          The React Framework for
        </p>
        <div className="mt-2 text-3xl font-bold leading-none">
          Lightweight Apps
        </div>
        <button className="mt-16 bg-blue-600 rounded-lg shadow-lg text-white py-3 px-16 hover:bg-blue-500">
          See Showcase
        </button>
        <div className="mt-16">
          <a className="text-gray-700 p-2" href="#">
            License: MIT
          </a>
          <a
            className="text-blue-600 p-2 hover:bg-blue-100 rounded-lg"
            href="#"
          >
            View Docs
          </a>
          <a
            className="text-blue-600 p-2 hover:bg-blue-100 rounded-lg"
            href="#"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="text-center px-8">
        <h3 className="mt-16 text-3xl font-bold tracking-tight">Why Next.js</h3>
        <p className="mt-4 text-gray-700">
          The world’s leading companies use and love Next.js
        </p>
      </div>

      <div className="mt-20 px-8 text-center">
        <h4 className="text-blue-600 text-xl">Server Rendering</h4>
        <p className="mt-6">
          With Next.js, server rendering React applications has never been
          easier, no matter where your data is coming from.
        </p>
      </div>

      <div className="mt-20 px-8 text-center">
        <h4 className="text-blue-600 text-xl">Static Exporting</h4>
        <p className="mt-6">
          No need to learn a new framework. Exporting a static site with Next.js
          is as easy as a single command.
        </p>
      </div>

      <div className="mt-20 px-8 text-center">
        <h4 className="text-blue-600 text-xl">CSS-in-JS</h4>
        <p className="mt-6">
          Next.js comes with styled-jsx included, but it also works with every
          CSS-in-JS solution you know and love.
        </p>
      </div>

      <div className="pb-32">
        <div className="mt-16 px-8 text-center">
          <h4 className="text-xl font-semibold">Zero Setup</h4>
          <p className="mt-6">Automatic code splitting, filesystem based routing, hot code reloading and universal rendering.</p>
          <a className="inline-block mt-2 text-blue-600 hover:bg-blue-200 pt-2" href="#">Learn Next.js</a>
        </div>

        <div className="mt-16 px-8 text-center">
          <h4 className="text-xl font-semibold">Fully Extensible</h4>
          <p className="mt-6">Complete control over Babel and Webpack. Customizable server, routing and next-plugins.</p>
          <a className="inline-block mt-2 text-blue-600 hover:bg-blue-200 pt-2" href="#">View Full Documentation</a>
        </div>

        <div className="mt-16 px-8 text-center">
          <h4 className="text-xl font-semibold">Ready for Production</h4>
          <p className="mt-6">Optimized for a smaller build size, faster dev compilation and dozens of other improvements.</p>
          <a className="inline-block mt-2 text-blue-600 hover:bg-blue-200 pt-2" href="#">View Showcase</a>
        </div>
      </div>

      <div className="relative z-30 bg-white rounded-lg shadow-2xl m-4 p-4 -mt-16">
        <div><Icons.Hulu className="w-24 h-auto m-auto" /></div>
        <button className="mt-6 w-full bg-blue-600 text-white p-3 block rounded-lg">Read Case Study</button>
      </div>

      <div className="bg-gray-200 -mt-16 pt-32 pb-16 text-center">
        <h3 className="text-3xl font-bold">Who's Using Next.js</h3>
        <p className="mb-32 text-gray-700">We’re honored some of the most talented creatives out there build with Next.js</p>

        <img style={{width: 330}} className="mt-4 mx-auto h-48 object-cover rounded-lg shadow-xl" src="https://nextjs.org/static/images/showcase-thumbnails/tencentnews.jpg" alt="user" />
        <img style={{width: 330}} className="mt-4 mx-auto h-48 object-cover rounded-lg shadow-xl" src="https://nextjs.org/static/images/showcase-thumbnails/showcases-02.jpg" alt="user" />
        <img style={{width: 330}} className="mt-4 mx-auto h-48 object-cover rounded-lg shadow-xl" src="https://nextjs.org/static/images/showcase-thumbnails/twitch.jpg" alt="user" />
        <img style={{width: 330}} className="mt-4 mx-auto h-48 object-cover rounded-lg shadow-xl" src="https://nextjs.org/static/images/showcase-thumbnails/showcases-17.jpg" alt="user" />
        <img style={{width: 330}} className="mt-4 mx-auto h-48 object-cover rounded-lg shadow-xl" src="https://nextjs.org/static/images/showcase-thumbnails/nike.jpg" alt="user" />
        <img style={{width: 330}} className="mt-4 mx-auto h-48 object-cover rounded-lg shadow-xl" src="https://nextjs.org/static/images/showcase-thumbnails/att.jpg" alt="user" />

        <button className="mt-16 bg-blue-600 text-white hover:bg-blue-500 py-3 px-16 rounded-lg shadow-lg">View Gallery</button>
      </div>

      <div className="bg-white py-16 text-center px-8">
        <h3 className="text-3xl font-bold">Learn Next.js</h3>
        <p className="mb-32 mt-4 text-gray-700">Tutorials, examples and quizzes. Learn Next.js step-by-step and earn points ✨.</p>

        <img style={{width: 330}} className="mt-4 mx-auto h-48 object-cover rounded-lg shadow-xl" src="https://nextjs.org/static/images/learn.png" alt="user" />

        <button className="mt-8 bg-blue-600 text-white hover:bg-blue-500 py-3 px-16 rounded-lg shadow-lg">Get Started</button>
      </div>

      <div className="bg-gray-200 px-8 py-24 text-center">
        <h3 className="text-3xl font-bold leading-tight">Next.js is getting better every day — don’t miss out on all the action.</h3>
        <p className="mt-4 text-gray-700">Join the Next.js newsletter and stay updated on new releases and features, guides, and case studies.</p>

        <form className="mt-16">
          <div className="relative flex justify-center items-center px-4 py-2 border border-gray-500 rounded-lg ">
            <Icons.Mail className="w-4 h-4" />
            <input className="bg-transparent px-2 block w-full" placeholder="you@domain.com" />
          </div>
          <button className="mt-2 bg-black text-white p-2 block w-full rounded-lg">Subscribe</button>
        </form>
      </div>

      <footer className="p-4 pb-16 bg-black">
        <div className="flex">
        </div>
        <a href="#">
          <Icons.Zeit className="w-20 h-auto" />
        </a>
        <p className="text-gray-700 mt-8">Copyright &copy; 2020 ZEIT, Inc. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Index
