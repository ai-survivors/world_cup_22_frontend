import React from 'react'
import Link from 'next/link'
const Footer = () => {
    return (
        <section class=''>
        <div class='bg-black opacity-90'>
            <div class="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12">
                <div class="flex flex-col items-center justify-center">
                <Link href="/">
<img className='hover:scale-110 cursor-grab' src='https://github.com/ai-survivors/world_cup_22_frontend/raw/main/assest/logo.png' width='150'/>
          
                    </Link>
                    <div class="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8 font-bold">
                    <Link href="./AboutUs">
                        <a href="" class="hover:scale-110 focus:underline focus:outline-none text-lg cursor-pointer leading-4  text-gray-500 dark:text-gray-400 dark:hover:text-white">About Us</a>
                    </Link>
                        <a href="https://github.com/ai-survivors" class="hover:scale-110 focus:underline focus:outline-none text-lg cursor-pointer leading-4 text-gray-500 dark:text-gray-400 dark:hover:text-white">Contact us</a>
                        <Link href="./PrivacyPolicy">
                        <a href="#" class="hover:scale-110 focus:underline focus:outline-none text-lg cursor-pointer leading-4 text-gray-500 dark:text-gray-400 dark:hover:text-white">Terms of Service</a>
                        </Link>
                        <Link href="./PrivacyPolicy">
                        <a href="#" class="hover:scale-110 focus:underline focus:outline-none text-lg cursor-pointer leading-4 text-gray-500 dark:text-gray-400 dark:hover:text-white">Privacy Policy</a>
                        </Link>
                    </div>                                       
                    <div class="flex items-center gap-x-8 mt-6">
                        <a>
                            <button aria-label="" class="hover:scale-110 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-700 fill-current " width="24" height="24" viewBox="0 0 24 24">
                            <title>LinkedIn</title>
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
 
                            </button>
                        </a>
                        <a href="https://github.com/ai-survivors">
                            <button aria-label="pinterest" class="hover:scale-110 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white dark:text-white " width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </button>
                        </a>
                    </div>
                    <div class="flex items-center mt-6">
                        <p class="text-base hover:scale-105 leading-4 text-gray-500 dark:text-gray-400 dark:hover:text-white">2022 <span class="font-semibold">AI SURVIVORS</span></p>
                        <div class="border-l border-gray-800 pl-2 ml-2">
                            <p class="hover:scale-105 leading-4 text-gray-500 dark:text-gray-400 dark:hover:text-white">Inc. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
export default Footer