import React from 'react'
import Link from "next/link";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useAuth } from "../contexts/auth";
const Profile = () => {
    const{user,login,logout}=useAuth();

    return (
        <>
            <head>
    <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
</head>
<section>
<div className="leading-normal tracking-normal text-white gradient">
<nav id="header" className="fixed top-0 z-30 w-full py-1 text-white bg-black opacity-70">
<div className="container flex flex-wrap items-center justify-between w-full py-2 mx-auto mt-0">
<div className="flex items-center pl-4">
<Link href="/">
<img className='hover:scale-110 cursor-grab' src='https://github.com/ai-survivors/world_cup_22_frontend/raw/main/assest/logo.png' width='120'/>

</Link>
</div>
<div className="block pr-4 lg:hidden">
<button id="nav-toggle" className="flex items-center p-1 text-white transition duration-300 ease-in-out transform hover:text-gray-900 focus:outline-none focus:shadow-outline hover:scale-105">
<svg className="w-6 h-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<title>Menu</title>
<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
</svg>
</button>
</div>
<div className="z-20 flex-grow hidden w-full p-4 mt-2 text-white bg-white lg:flex lg:items-center lg:w-auto lg:mt-0 lg:bg-transparent lg:p-0" id="nav-content">
<ul className="items-center justify-end flex-1 list-reset lg:flex">
<Link href="./Matches">
  <li className="mr-3">
<a className="inline-block px-4 py-2 font-bold no-underline hover:scale-110 hover:text-gray-500 hover:text-underline" href="#">Matches</a>
</li>
</Link>
<Link href="./TicketForm">
<li className="mr-3">
<a className="inline-block px-4 py-2 font-bold no-underline hover:scale-110 hover:text-gray-500 hover:text-underline" href="#">Ticket</a>
</li>
</Link>
<Link href="./WorldCupHistory">
<li className="mr-3">
<a className="inline-block px-4 py-2 font-bold no-underline hover:scale-110 hover:text-gray-500 hover:text-underline" href="#">Last World Cup</a>
</li>
</Link>
<>
<div>
<Link href="./Profile">
<a className="inline-block px-4 font-bold no-underline hover:scale-110 hover:text-gray-500 hover:text-underline" href="#">Profile</a>
</Link>
</div>
  <div>
<p
                    id="navAction"
                    className="px-8 py-4 mx-auto mt-4 font-bold text-gray-800 bg-white rounded-full shadow opacity-75 lg:mx-0 lg:mt-0 focus:outline-none focus:shadow-outline hover:scale-105"
                  >
                   {user.username}
                    </p>
                    </div></>
</ul>
</div>
</div>
</nav>
</div>
</section>
















<body class="pt-16 pl-96 bg-[url('https://i.ytimg.com/vi/MG9_skWiNfs/maxresdefault.jpg')] font-awesome antialiased text-gray-900 leading-normal tracking-wider bg-cover"
    >
    <div class="max-w-7xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <div id="profile"
            class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
            <div class="p-4 md:p-12 text-center lg:text-left">

<section className='grid grid-cols-2 gap-40'>
<h1 class="text-3xl font-bold pt-8 lg:pt-0">{user.username}</h1>
<p class="pt-5 pr-5 font-bold text-white-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
<svg class="h-4  fill-current text-red-900 pr-4" xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 20 20">
<path
d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
</svg>
{user.email}
</p>
</section>
                <div class="mx-auto lg:mx-0 w-5/5 pt-3 border-b-2 border-red-900 opacity-50"></div>
                <p class="pt-8 text-sm">
                <h1 class="text-3xl font-bold pt-8 lg:pt-0">
Tickets


</h1>                    </p>


<section className='grid grid-cols-3 gap-4 pt-7'>
<div className='pl-7'>
    Ticket 1
</div>
<div className='pl-10'>
Ticket 2
</div>
<div className='pl-14'>
Ticket 3
</div>
</section>







<div class="mx-auto lg:mx-0 w-5/5 pt-3 border-b-2 border-red-900 opacity-50"></div>

<p class="pt-8 text-sm">
                <h1 class="text-3xl font-bold pt-8 lg:pt-0">
Votes


</h1>                    </p>

<section className='grid grid-cols-2 gap-4 pt-7'>
<div className='pl-20'>
    Vote 1
</div>
<div className='pl-24'>
Vote 2
</div>
<div className='pt-5 pl-20'>
Vote 3
</div>
<div className='pt-5 pl-24'>
Vote 4
</div>
</section>
                <div class="mt-6 pr-10 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                    <a><svg
                            class="h-6 fill-current text-blue-600" role="img" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>Twitter</title>
                            <path />
                        </svg></a>
                </div>
            </div>
        </div>

    </div>
    

</body>
<Footer/>
        </>
    )
}

export default Profile
