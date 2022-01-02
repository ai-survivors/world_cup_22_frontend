import { useAuth } from "../contexts/auth";
import Head from "next/head";
import Link from "next/link";
const Header = () => {
  const{user,login,logout}=useAuth();

  return (
    <>
            <Head>
            <title>World Cup 2022</title>
            <link rel="icon" href="./trophy.png" />
        </Head>
      <section>
<div className="leading-normal tracking-normal text-white gradient">
<nav id="header" className="fixed top-0 z-30 w-full text-white bg-black opacity-75">
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
<a className="inline-block px-4 py-2 font-bold no-underline hover:scale-110 hover:text-gray-500 hover:text-underline" href="#">History</a>
</li>
</Link> 
<Link href="./AboutUs">
<li className="mr-3">
<a className="inline-block px-4 py-2 font-bold no-underline hover:scale-110 hover:text-gray-500 hover:text-underline" href="#">About us</a>
</li>
</Link>
</ul>
{ user ? <> <button 
                    id="navAction"
                    className="px-8 py-4 mx-auto mt-4 font-bold text-gray-800 bg-white rounded-full shadow opacity-75 lg:mx-0 hover:underline lg:mt-0 focus:outline-none focus:shadow-outline hover:scale-105"
                  >{user.username}</button>
                  <button onClick={logout}
                  id="navAction"
                  className="px-8 py-4 mx-auto mt-4 font-bold text-gray-800 bg-white rounded-full shadow opacity-75 lg:mx-0 hover:underline lg:mt-0 focus:outline-none focus:shadow-outline hover:scale-105"
                >logout</button>
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





<section>
<div className="h-screen w-full m-0 p-0 bg-cover bg-[url('https://sportshub.cbsistatic.com/i/r/2021/10/13/007edf34-6472-437f-b6ef-68bc342475b2/thumbnail/1200x675/cc6e3ad0f6e2b33e8b747f5cb742f081/untitled-design-2021-10-13t161851-200.jpg')]">
<div className="container text-center break-normal md:pt-32">
<p className="float-left pl-10 font-bold text-white pt-80 md:text-6xl">
World Cup Qatar 2022™
</p>
<p className="pt-3 text-xl text-white md:text-2xl"></p>
</div>
</div>
</section>
</>
    )
}
export default Header

