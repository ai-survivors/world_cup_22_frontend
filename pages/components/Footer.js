import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <section class=''>
        <div class='bg-green-800'>
            <div class="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 px-4 py-12">
                <div class="flex flex-col items-center justify-center">
                <Link href="/">
                    <svg class="toggleColour hover:scale-125 text-yellow-500 no-underline hover:text-white font-bold text-2xl lg:text-4xl h-9 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
                        <path class="plane-take-off" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </Link>
                    <div class="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8 font-bold">
                        <a href="https://github.com/ai-survivors" class="hover:scale-110 focus:underline focus:outline-none text-base cursor-pointer leading-4 text-gray-500 dark:text-gray-400 dark:hover:text-white">About</a>
                        <a href="https://github.com/ai-survivors" class="hover:scale-110 focus:underline focus:outline-none text-base cursor-pointer leading-4 text-gray-500 dark:text-gray-400 dark:hover:text-white">Contact us</a>
                        <Link href="/components/PrivacyPolicy">
                        <a href="#" class="hover:scale-110 focus:underline focus:outline-none text-base cursor-pointer leading-4 text-gray-500 dark:text-gray-400 dark:hover:text-white">Terms of Service</a>
                        </Link>
                        <Link href="/components/PrivacyPolicy">
                        <a href="#" class="hover:scale-110 focus:underline focus:outline-none text-base cursor-pointer leading-4 text-gray-500 dark:text-gray-400 dark:hover:text-white">Privacy Policy</a>
                        </Link>
                    </div>                                       
                    <div class="flex items-center gap-x-8 mt-6">
                        <a href="https://app.slack.com/client/TNGRRLUMA/C02NARWPXQE">
                            <button aria-label="facebook" class="hover:scale-110 rounded-full">
                                <svg class="fill-current text-black dark:text-white" width="22" height="22"
                                    enable-background="new 0 0 2447.6 2452.5" viewBox="0 0 2447.6 2452.5" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-rule="evenodd" fill-rule="evenodd">
                                        <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0" /><path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d" /><path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e" /><path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a" />
                                    </g></svg>
                            </button>
                        </a>
                        <a href="https://github.com/ai-survivors">
                            <button aria-label="pinterest" class="hover:scale-110 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white dark:text-white " width="24" height="25" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </button>
                        </a>
                    </div>
                    <div class="flex items-center mt-6">
                        <p class="text-base hover:scale-105 leading-4 text-gray-500 dark:text-gray-400 dark:hover:text-white">2021 <span class="font-semibold">AI SURVIVORS</span></p>
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