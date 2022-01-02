import { React, useState ,useEffect} from "react";
import useMatch from "../hooks/useMatch";
import useTickets from "../hooks/useTickets";
import { useAuth } from '../contexts/auth'
import Link from "next/link";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from "next/head";

const TicketForm = () => {
const {user , login , logout} = useAuth()
const { matchesResource, loading } = useMatch();
const {ticketResources,  ticketLoading, createTicket } = useTickets();
const ticketsCat=["Class One", "Class Two" , "Class Three" , "Class Four"]


  console.log("ticketResources", ticketResources)

  const [matches, setMatches] = useState([]);



  useEffect(() => {
    if ( matchesResource) {
      setMatches(matchesResource);
      console.log("hello");
    }
  }, [ matchesResource,matches]);
  console.log("user", user);




  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    const obj = {
      owner: user.id,
      description: "",
      price: 65,
      match:5,
    };
    console.log("user", user);
    createTicket(obj);
  
  };

  return (

    <>
       <section>
        <Head>
          <title>World Cup 2022</title>
          <link rel="icon" href="./trophy.png" />
        </Head>
        <div className="leading-normal tracking-normal text-white gradient">
          <nav id="header" className="fixed top-0 z-30 w-full text-white bg-black opacity-75">
            <div className="container flex flex-wrap items-center justify-between w-full py-2 mx-auto mt-0">
              <div className="flex items-center pl-4">
                <Link href="/">
                  <a className="text-2xl font-bold text-white no-underline toggleColour hover:text-gray-500 lg:text-4xl" href="#">
                    <svg className="inline h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
                      <path className="plane-take-off" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <title>Main Page</title>
                    </svg>
                    {' '}World Cup
                  </a>
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
                { user ? <h1>{user.username}</h1>
                  : <Link href="./Login">
                  
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
        <div className="h-screen w-full m-0 p-0 bg-cover bg-[url('https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&dpr=1')]">
          <div className="container text-center break-normal md:pt-32">
            <p className="float-left pl-10 font-bold text-white pt-80 md:text-6xl">
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
                {matches.map((data) => {
                  return <option value="free">{data.title}</option>;
                })}
              </select>
            </div>

            <div>
              <label class="block mb-1 font-bold text-gray-500">
                Ticket class:
              </label>
              <select
                name="class"
                id="match"
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
           <Link href="./TicketSubmit">
            <button
              class="block w-full bg-pink-800 hover:bg-yellow-300 p-4 rounded text-gray-100  hover:text-gray-300transition duration-300 font-large "
              type="submit"
            >
              Submit
            </button>
            </Link>
      
         
        
          </form>
        </div>
      </div> 
      
      
     < Footer/>
    </>
  );
};
export default TicketForm;
