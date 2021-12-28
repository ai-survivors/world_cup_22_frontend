import React from 'react'
import Head from 'next/head'
const Header = () => {
    return (
        <>
            <section>
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                    <title>World Cup 2022</title>
                    <meta name="description" content="" />
                    <meta name="keywords" content="" />
                    <meta name="author" content="" />
                    <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
                    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />
                </head>
                <div class="leading-normal tracking-normal text-white gradient">
                    <nav id="header" class="bg-pink-800 fixed w-full z-30 top-0 text-gray-300">
                        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                            <div class="pl-4 flex items-center">
                                <a class="toggleColour text-gray-300 no-underline hover:text-white font-bold text-2xl lg:text-4xl" href="#">
                                    <svg class="h-9 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
                                        <path class="plane-take-off" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {' '}World Cup
                                </a>
                            </div>
                            <div class="block lg:hidden pr-4">
                                <button id="nav-toggle" class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Menu</title>
                                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                    </svg>
                                </button>
                            </div>
                            <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-gray-300 p-4 lg:p-0 z-20" id="nav-content">
                                <ul class="list-reset lg:flex justify-end flex-1 items-center">
                                    <li class="mr-3">
                                        <a class="inline-block no-underline hover:scale-110 hover:text-white font-bold hover:text-underline py-2 px-4" href="#">Matches</a>
                                    </li>
                                    <li class="mr-3">
                                        <a class="inline-block no-underline hover:scale-110 hover:text-white font-bold hover:text-underline py-2 px-4" href="#">Ticket</a>
                                    </li>
                                    <li class="mr-3">
                                        <a class="inline-block no-underline hover:scale-110 hover:text-white font-bold hover:text-underline py-2 px-4" href="#">History</a>
                                    </li>
                                    <li class="mr-3">
                                        <a class="inline-block no-underline hover:scale-110 hover:text-white font-bold hover:text-underline py-2 px-4" href="#">About us</a>
                                    </li>
                                </ul>
                                <button
                                    id="navAction"
                                    class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                                >Login</button>
                            </div>
                        </div>
                        <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
                    </nav>
                </div>
            </section>
            <section>
                <div class="h-screen w-full m-0 p-0 bg-cover bg-[url('https://sportshub.cbsistatic.com/i/r/2021/10/13/007edf34-6472-437f-b6ef-68bc342475b2/thumbnail/1200x675/cc6e3ad0f6e2b33e8b747f5cb742f081/untitled-design-2021-10-13t161851-200.jpg')]">
                    <div class="container md:pt-32 text-center break-normal">
                        <p class=" float-left pl-10 text-white pt-80 font-bold md:text-6xl">
                            World Cup Qatar 2022™
                        </p>
                        <p class="text-xl md:text-2xl text-gray-500 pt-3"></p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Header
//https://cdn.dmcl.biz/media/image/191396/o/1605968253002.jpg
//https://sportshub.cbsistatic.com/i/r/2021/10/13/007edf34-6472-437f-b6ef-68bc342475b2/thumbnail/1200x675/cc6e3ad0f6e2b33e8b747f5cb742f081/untitled-design-2021-10-13t161851-200.jpg