import { React, useState ,useEffect} from "react";
import useMatch from "../hooks/useMatch";
import useTickets from "../hooks/useTickets";
import { useAuth } from '../contexts/auth'
import Link from "next/link";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from "next/head";
import { useRouter } from 'next/router';


const TicketForm = () => {
const {user , login , logout} = useAuth()
const { matchesResource, loading } = useMatch();
const {ticketResources,  ticketLoading, createTicket } = useTickets();
const ticketsCat=["Class One", "Class Two" , "Class Three" , "Class Four"]

const router = useRouter()
  function redirect (){
    setTimeout(()=>{
      router.push('./TicketSubmit')
    },500)
  }



  console.log("ticketResources", ticketResources)

  const [matches, setMatches] = useState([]);
  // const [mat]



  useEffect(() => {
    if ( matchesResource) {
      setMatches(matchesResource);
      console.log("hello");
    }
  }, [ matchesResource,matches]);
  console.log("user", user);




  const handleSubmit = async (e) => {

    console.log();
    e.preventDefault();


    const obj = {
      owner: user.id,
      description: "",
      price: 65,
      match:e.target.match.value,
    };
    console.log("user", user);
    createTicket(obj);
  
  };

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
  <li className="">
<a className="inline-block px-4 py-2 font-bold no-underline hover:scale-110 hover:text-gray-500 hover:text-underline" href="#">Matches</a>
</li>
</Link>
<Link href="./TicketForm">
<li className="">
<a className="inline-block px-4 py-2 font-bold no-underline hover:scale-110 hover:text-gray-500 hover:text-underline" href="#">Ticket</a>
</li>
</Link>
<Link href="./WorldCupHistory">
<li className="">
<a className="inline-block px-4 py-2 font-bold no-underline hover:scale-110 hover:text-gray-500 hover:text-underline" href="#">Last World Cup</a>
</li>
</Link> 
</ul>
{ user ?
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
<div> <button onClick={logout}
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
<section>
<div className="h-screen bg-center w-full m-0 p-0 bg-cover bg-[url('https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&dpr=1')]">
<div className="container text-center break-normal md:pt-32">
<p className="float-left pl-10 mt-10 font-bold text-white pt-96 md:text-6xl">
World Cup Qatar 2022™
</p>
<p className="pt-3 text-xl text-white md:text-2xl"></p>
</div>
</div>
</section>


      {/* form section */}
     <div class="min-h-screen flex items-center justify-center bg-grey-500">
        <div class="bg-white p-16 rounded shadow-2xl w-2/3">
          <h2 class="text-3xl font-bold mb-10 text-gray-600 ">
            Book your ticket:
          </h2>

          <form class="space-y-5" onSubmit={handleSubmit} method="post">
        

           
            <div>
              <label
                for="membership"
                class="block mb-1 font-bold text-gray-500"
              >
                Choose the Match:
              </label>

              <select
                name="match"
                id="match"
                class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              >
                {matches.map((match) => {
                  return <option value={match.id} >{match.title}</option>;
                })}
              </select>
            </div>

            <div>
              <label class="block mb-1 font-bold text-gray-500">
                Ticket class:
              </label>
              <select
                name="class"
                id="class"
                class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              >
                {ticketsCat.map((data) => {
                  return <option >{data}</option>;
                })}
              </select>
            </div>

            {/* <div>
              <label
                for="membership"
                class="block mb-1 font-bold text-gray-500"
              >
                Please upload your vaccinated certificate:
              </label>
              <input type="file" accept="image/*" />
            </div> */}
           {/* <Link href="./TicketSubmit"> */}
            <button onClick={redirect}
              class="block w-full bg-pink-800 hover:bg-yellow-300 p-4 rounded text-gray-100  hover:text-gray-300transition duration-300 font-large "
              type="submit"
            >
              Submit
            </button>
            {/* </Link> */}
      
         
        
          </form>
        </div>
      </div> 
      
      
     < Footer/>
    </>
  );
};
export default TicketForm;
