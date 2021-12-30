import React from 'react'
import Footer from '../components/Footer'
import Link from 'next/link'
const AboutUs = () => {
  return (
        <>
<section>
<div className="leading-normal tracking-normal text-white gradient">
<nav id="header" className="fixed top-0 z-30 w-full text-gray-300 bg-pink-800">
<div className="container flex flex-wrap items-center justify-between w-full py-2 mx-auto mt-0">
<div className="flex items-center pl-4">
<Link href="/">
<a className="text-2xl font-bold text-gray-300 no-underline toggleColour hover:text-white lg:text-4xl" href="#">
<svg className="inline h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
<path className="plane-take-off" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
{' '}World Cup
</a>
</Link>
</div>
<div className="block pr-4 lg:hidden">
<button id="nav-toggle" className="flex items-center p-1 text-black transition duration-300 ease-in-out transform hover:text-gray-900 focus:outline-none focus:shadow-outline hover:scale-105">
<svg className="w-6 h-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<title>Menu</title>
<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
</svg>
</button>
</div>
<div className="z-20 flex-grow hidden w-full p-4 mt-2 text-gray-300 bg-white lg:flex lg:items-center lg:w-auto lg:mt-0 lg:bg-transparent lg:p-0" id="nav-content">
<ul className="items-center justify-end flex-1 list-reset lg:flex">
<li className="mr-3">
<a className="inline-block px-4 py-2 font-bold no-underline hover:scale-110 hover:text-white hover:text-underline" href="#">Matches</a>
</li>
<li className="mr-3">
<a className="inline-block px-4 py-2 font-bold no-underline hover:scale-110 hover:text-white hover:text-underline" href="#">Ticket</a>
</li>
<Link href="./WorldCupHistory">
<li className="mr-3">
<a className="inline-block px-4 py-2 font-bold no-underline hover:scale-110 hover:text-white hover:text-underline" href="#">History</a>
</li>
</Link> 
<li className="mr-3">
<a className="inline-block px-4 py-2 font-bold no-underline hover:scale-110 hover:text-white hover:text-underline" href="#">About us</a>
</li>
</ul>
<button
id="navAction"
className="px-8 py-4 mx-auto mt-4 font-bold text-gray-800 transition duration-300 ease-in-out transform bg-white rounded-full shadow opacity-75 lg:mx-0 hover:underline lg:mt-0 focus:outline-none focus:shadow-outline hover:scale-105"
>Login</button>
</div>
</div>
<hr className="py-0 my-0 border-b border-gray-100 opacity-25" />
</nav>
</div>
</section>
 <section className='bg-gray-100 pt-28'>
        <div className="relative flex items-center content-center justify-center pt-16 pb-32 min-h-screen-75">
          <div
            className="bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')] absolute w-full h-screen	 bg-center bg-cover "
          >
            <span
              id="blackOverlay"
              className="absolute w-full h-full bg-black opacity-75"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-full px-4 ml-auto mr-auto text-center lg:w-12/12">
                <div className="pr-12">
                  <h1 className="text-6xl font-semibold text-white pt-28 ">
                    Your story starts with us !
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* TITLE TEAM MEMBER*/}
<section className="pt-44">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center mb-16 text-center">
              <div className="w-full px-4 lg:w-6/12">
                <h2 className="text-4xl font-semibold">Here are our Heroes</h2>
              </div>
            </div>
            <div className="flex flex-wrap">
{/* FIRST TEAM MEMBER */}
              <div className="w-full px-5 mb-12 lg:w-4/12 lg:mb-0">
                <div    >
                  <img
                    alt="..."
                    src="https://source.unsplash.com/collection/1119905"
                    className="mx-auto rounded-full shadow-lg w-60 h-60"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold text-gray-800">Mhmad Wrekat</h5>
                    <p className="mt-1 text-sm font-semibold text-gray-400 uppercase">
                      Full Stack Web Developer
                    </p>
{/* BUTTONS */}
                    <div className="mt-6">
                    <a href="https://github.com/ai-survivors">
                            <button className = "pr-4 rounded-full hover:scale-125">
                                <svg xmlns="http://www.w3.org/2000/svg" className = "text-black fill-current " width="29" height="29" viewBox="0 0 24 24">
                                <title>Github</title>
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </button>
                        </a>
                        <a href="https://github.com/ai-survivors">
                            <button className = "pr-4 rounded-full hover:scale-125">
                            <svg xmlns="http://www.w3.org/2000/svg" className = "text-blue-700 fill-current " width="29" height="29" viewBox="0 0 24 24">
                            <title>LinkedIn</title>
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </button>
                        </a>
                        <a href="https://github.com/ai-survivors">
                            <button className = "pr-4 rounded-full hover:scale-125">
                            <svg xmlns="http://www.w3.org/2000/svg" className = "text-red-700 fill-current" width="29" height="29" viewBox="0 0 24 24">
                            <title>Gmail</title>
                            <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>
                            </button>
                        </a>
                        </div>
                  </div>
                </div>
              </div>

{/* SECOND TEAM MEMBER*/}
<div className="w-full px-5 mb-12 lg:w-4/12 lg:mb-0">
                <div >
<img
                    alt="..."
                    src="https://source.unsplash.com/collection/1119905"
                    className="mx-auto rounded-full shadow-lg w-60 h-60"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold text-gray-800">Mhmad Wrekat</h5>
                    <p className="mt-1 text-sm font-semibold text-gray-400 uppercase">
                      Full Stack Web Developer
                    </p>
{/* BUTTONS */}
                    <div className="mt-6">
                    <a href="https://github.com/ai-survivors">
                            <button className = "pr-4 rounded-full hover:scale-125">
                                <svg xmlns="http://www.w3.org/2000/svg" className = "text-black fill-current " width="29" height="29" viewBox="0 0 24 24">
                                <title>Github</title>
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </button>
                        </a>
                        <a href="https://github.com/ai-survivors">
                            <button className = "pr-4 rounded-full hover:scale-125">
                            <svg xmlns="http://www.w3.org/2000/svg" className = "text-blue-700 fill-current " width="29" height="29" viewBox="0 0 24 24">
                            <title>LinkedIn</title>
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </button>
                        </a>
                        <a href="https://github.com/ai-survivors">
                            <button className = "pr-4 rounded-full hover:scale-125">
                            <svg xmlns="http://www.w3.org/2000/svg" className = "text-red-700 fill-current" width="29" height="29" viewBox="0 0 24 24">
                            <title>Gmail</title>
                            <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>
                            </button>
                        </a>
</div></div></div></div>
{/* THIRD TEAM MEMBER*/}
<div className="w-full px-5 mb-12 lg:w-4/12 lg:mb-0">
                <div >
                  <img
                    alt="..."
                    src="https://source.unsplash.com/collection/1119905"
                    className="mx-auto rounded-full shadow-lg w-60 h-60"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold text-gray-800">Mhmad Wrekat</h5>
                    <p className="mt-1 text-sm font-semibold text-gray-400 uppercase">
                      Full Stack Web Developer
                    </p>
{/* BUTTONS */}
                    <div className="mt-6">
                    <a href="https://github.com/ai-survivors">
                            <button className = "pr-4 rounded-full hover:scale-125">
                                <svg xmlns="http://www.w3.org/2000/svg" className = "text-black fill-current " width="29" height="29" viewBox="0 0 24 24">
                                <title>Github</title>
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </button>
                        </a>
                        <a href="https://github.com/ai-survivors">
                            <button className = "pr-4 rounded-full hover:scale-125">
                            <svg xmlns="http://www.w3.org/2000/svg" className = "text-blue-700 fill-current " width="29" height="29" viewBox="0 0 24 24">
                            <title>LinkedIn</title>
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </button>
                        </a>
                        <a href="https://github.com/ai-survivors">
                            <button className = "pr-4 rounded-full hover:scale-125">
                            <svg xmlns="http://www.w3.org/2000/svg" className = "text-red-700 fill-current" width="29" height="29" viewBox="0 0 24 24">
                            <title>Gmail</title>
                            <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>
                            </button>
                        </a>
                        </div>
                  </div>
                </div>
              </div>
{/* FORTH TEAM MEMBER*/}
<p className='lg:w-1/12'></p>
<div className="w-full px-5 pt-8 mb-12 lg:w-4/12 lg:mb-0">
                <div >
<img
                    alt="..."
                    src="https://source.unsplash.com/collection/1119905"
                    className="mx-auto rounded-full shadow-lg w-60 h-60"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold text-gray-800">Mhmad Wrekat</h5>
                    <p className="mt-1 text-sm font-semibold text-gray-400 uppercase">
                      Full Stack Web Developer
                    </p>
{/* BUTTONS */}
                    <div className="mt-6">
                    <a href="https://github.com/ai-survivors">
                            <button className = "pr-4 rounded-full hover:scale-125">
                                <svg xmlns="http://www.w3.org/2000/svg" className = "text-black fill-current " width="29" height="29" viewBox="0 0 24 24">
                                <title>Github</title>
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </button>
                        </a>
                        <a href="https://github.com/ai-survivors">
                            <button className = "pr-4 rounded-full hover:scale-125">
                            <svg xmlns="http://www.w3.org/2000/svg" className = "text-blue-700 fill-current " width="29" height="29" viewBox="0 0 24 24">
                            <title>LinkedIn</title>
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </button>
                        </a>
                        <a href="https://github.com/ai-survivors">
                            <button className = "pr-4 rounded-full hover:scale-125">
                            <svg xmlns="http://www.w3.org/2000/svg" className = "text-red-700 fill-current" width="29" height="29" viewBox="0 0 24 24">
                            <title>Gmail</title>
                            <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>
                            </button>
                        </a>
</div></div></div></div>
<p className='lg:w-1/12'></p>
{/* FIFTH TEAM MEMBER*/}
<div className="w-full px-5 pt-8 mb-12 lg:w-4/12 lg:mb-0">
                <div >
<img
                    alt="..."
                    src="https://source.unsplash.com/collection/1119905"
                    className="mx-auto rounded-full shadow-lg w-60 h-60"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold text-gray-800">Mhmad Wrekat</h5>
                    <p className="mt-1 text-sm font-semibold text-gray-400 uppercase">
                      Full Stack Web Developer
                    </p>
{/* BUTTONS */}
                    <div className="mt-6">
                    <a href="https://github.com/ai-survivors">
                            <button className = "pr-4 rounded-full hover:scale-125">
                                <svg xmlns="http://www.w3.org/2000/svg" className = "text-black fill-current " width="29" height="29" viewBox="0 0 24 24">
                                <title>Github</title>
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </button>
                        </a>
                        <a href="https://github.com/ai-survivors">
                            <button className = "pr-4 rounded-full hover:scale-125">
                            <svg xmlns="http://www.w3.org/2000/svg" className = "text-blue-700 fill-current " width="29" height="29" viewBox="0 0 24 24">
                            <title>LinkedIn</title>
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </button>
                        </a>
                        <a href="https://github.com/ai-survivors">
                            <button className = "pr-4 rounded-full hover:scale-125">
                            <svg xmlns="http://www.w3.org/2000/svg" className = "text-red-700 fill-current" width="29" height="29" viewBox="0 0 24 24">
                            <title>Gmail</title>
                            <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>
                            </button>
                        </a>
</div></div></div></div>
                  </div>
                </div>
        </section>
{/* END TEAM MEMBER */}
{/* FORM */}
<section className='pt-80'>
        <section className="relative block py-8 lg:pt-0 bg-blueGray-800">
          <div className="container px-4 mx-auto ">
            <div className="flex flex-wrap justify-center -mt-48 lg:-mt-64">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-gray-300 rounded-lg shadow-lg bg-blueGray-200">
                  <div className="flex-auto lg:p-10">
                    <h4 className="text-2xl font-semibold text-center">
                    Want To Give Us Any Suggestion ?                    </h4>
                    <p className="mt-1 mb-4 leading-relaxed text-center text-gray-500 text-s">
                      Complete this form and we will get back to you .
                    </p>
                    <div className="relative w-full mt-8 mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="w-full px-3 py-3 text-sm bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="mt-6 text-center">
                      <button
                        className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-gray-600 rounded shadow outline-none hover:bg-green-700 hover:scale-105 bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
</section>
{/* END FORM */}

      </section>
<Footer/>
        </>
    )
}
export default AboutUs
