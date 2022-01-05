import React from 'react';
import Link from "next/link";
import { useAuth } from "../contexts/auth";

import { useRouter } from 'next/router';


const Nav = () => {

    
const router = useRouter()
function redirect(){
    router.push("/")
    setTimeout(()=>{
      
        logout()
      
    },1000)
   
    //router.push('/')
    //router.go(-1)
}
    const { user, login, logout } = useAuth();
    return (
        < >
            <section >
                <div className="leading-normal tracking-normal text-white gradient">
                    <nav id="header" className="fixed top-0 z-30 w-full text-white bg-black opacity-75  font-sans">
                        <div className="container flex flex-wrap items-center justify-between w-full py-2 mx-auto mt-0">
                            <div className="flex items-center pl-4">
                                <Link href="/">
                                    <img className='hover:scale-110 cursor-grab' src='https://github.com/ai-survivors/world_cup_22_frontend/raw/main/assest/logo.png' width='120' />
                                </Link>
                            </div>
                           {/*  <div className="block pr-4 lg:hidden">
                                <button id="nav-toggle" className="flex items-center p-1 text-white transition duration-300 ease-in-out transform hover:text-gray-900 focus:outline-none focus:shadow-outline hover:scale-105">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Menu</title>
                                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                    </svg>
                                </button>
                            </div> */}
                            <div className="z-20 flex-grow hidden w-full p-4 mt-2 text-white bg-white lg:flex lg:items-center lg:w-auto lg:mt-0 lg:bg-transparent lg:p-0" id="nav-content">
                                <ul className="items-center justify-end flex-1 list-reset lg:flex">
                                    <Link href="./Matches">
                                        <li className="">
                                            <a className="inline-block px-4 py-2 font-bold no-underline hover:scale-110 hover:text-gray-500 hover:text-underline" href="#">Matches</a>
                                        </li>
                                    </Link>
                                    {user &&
                                    <Link href="./TicketForm">
                                        <li className="">
                                            <a className="inline-block px-4 py-2 font-bold no-underline hover:scale-110 hover:text-gray-500 hover:text-underline" href="#">Ticket</a>
                                        </li>
                                    </Link>
                                        }    
                                    <Link href="./WorldCupHistory">
                                        <li className="">
                                            <a className="inline-block px-4 py-2 font-bold no-underline hover:scale-110 hover:text-gray-500 hover:text-underline" href="#">Last World Cup</a>
                                        </li>
                                    </Link>
                                </ul>
                                {user ?
                                    <>
                                        <div>
                                            <Link href="./Profile">
                                                <a className="inline-block px-4 font-bold no-underline hover:scale-110 hover:text-gray-500 hover:text-underline" href="#">Profile</a>
                                            </Link>
                                        </div>
                                        <div className='pr-2'>
                                            <p
                                                id="navAction"
                                                className="px-5 py-4 mx-auto mt-4 font-bold text-gray-800 bg-white rounded-full shadow opacity-75 lg:mx-0 lg:mt-0 focus:outline-none focus:shadow-outline hover:scale-105"
                                            >
                                                {user.username}
                                            </p>
                                        </div>
                                        <div> <button onClick={redirect}
                                            id="navAction"
                                            className="px-5 py-4 mx-auto mt-4 font-bold text-gray-800 bg-white rounded-full shadow opacity-75 lg:mx-0 hover:underline lg:mt-0 focus:outline-none focus:shadow-outline hover:scale-105"
                                        >Logout</button></div>
                                    </>
                                    :
                                    <Link href="./Login">
                                        <button
                                            id="navAction"
                                            className="px-8 py-4 mx-auto mt-4 font-bold text-gray-800 bg-white rounded-full shadow opacity-75 lg:mx-0 hover:underline lg:mt-0 focus:outline-none focus:shadow-outline hover:scale-105"
                                        >Login</button>
                                    </Link>
                                }
                            </div>
                        </div>
                        <hr className="py-0 my-0 border-b border-gray-100 opacity-25" />
                    </nav>
                </div>
            </section>
        </>
    )
}
export default Nav