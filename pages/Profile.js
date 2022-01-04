
import {useRef} from 'react'
import '@progress/kendo-theme-material/dist/all.css';
// import kendoka from 'react-kendo'
import {PDFExport,savePDF} from '@progress/kendo-react-pdf'
import React from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useAuth } from "../contexts/auth";
import useTickets from "../hooks/useTickets";
import { useEffect,useState } from "react";
import QRCode from "qrcode.react";
import useVotes from "../hooks/useVotes";

const Profile = () => {
  const pdfExport = useRef(null)
  const contentArea = useRef(null)

  const download = ()=>{
    savePDF(contentArea.current,{paperSize:"A4"})
    // pdfExport.current.save();
  }
  const { user, login, logout,tokens } = useAuth();
  const {ticketResources,  ticketLoading, createTicket } = useTickets();
  const { VoteResources,createVote,deletevote, updateVote, } = useVotes();
  const [tickets,setTickets ] = useState([])
  const [votes,setVotes ] = useState([])

  useEffect(()=>{
     if (ticketResources != undefined){
       setTickets(ticketResources)
     }
  },[ticketResources])
  useEffect(()=>{
    if (VoteResources != undefined){
      setVotes(VoteResources)
    }
 },[VoteResources])
  console.log("votes ", votes);



return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
        />
      </head>
<Nav/>
      <body class="pt-28 bg-[url('https://i.ytimg.com/vi/MG9_skWiNfs/maxresdefault.jpg')] font-awesome antialiased text-gray-900 leading-normal tracking-wider bg-cover">
        <div class="mx-10 max-w-full flex items-center h-auto flex-wrap  lg:my-0">
          <div
            id="profile"
            class="w-screen  lg:w-12/12 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white  mx-6 lg:mx-0"
          >
            <div class="p-4 md:p-12 text-center lg:text-left">
              <section className="grid grid-cols-2">
                <h1 class="text-3xl  font-bold pt-8 lg:pt-0">{user ?
                       user.username:<></>} </h1>
                <p class="pt-5 pr-5 font-bold text-white-600 text-xs lg:text-sm flex items-center text-center justify-center lg:justify-start ml-20">
                  <svg
                    class="h-4  fill-current text-red-900 pr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                  </svg>
{
  user ?<p>{user.email}</p>:<></>
}        
                </p>
              </section>
              <div class="mx-auto lg:mx-0 w-5/5 pt-3 border-b-2 border-red-900 opacity-50"></div>  
              <section className="grid grid-cols-2 gap-40 mt-10">
                <h1 class="text-3xl font-bold pt-8 lg:pt-0 ">Your Tickets </h1>
                <h1 class="text-3xl font-bold pt-8 lg:pt-0 ">Your Votes </h1>
              </section>
              <div class="mx-auto lg:mx-0 w-5/5 pt-3 border-b-2 border-red-900 opacity-50"></div>
<section className='grid grid-cols-2 gap-10 divide-x'>
<section id='1'  >
{/* LOOP INTO TICKETS */}
{/* LOOP INTO TICKETS */}
{/* LOOP INTO TICKETS */}
              { tickets.map((data) => {

        if (data.owner == user.id){

          const value=`{Owner:${user.username}Match Id :${data.id}}`
          return (
             
           <div className="" id="divToPrint"  >
            <div className="w-11/12 font-semibold" >
            <PDFExport ref={pdfExport} paperSize='A4'> 
            <div ref={contentArea} className=" bg-[url('/bg.jpg')]  mt-10  h-80  rounded-3xl bg-cover "   >
              <div >
                <div className="pt-5 pl-10 pr-20 rounded-3xl ">
                <img className='hover:scale-110 cursor-grab' src='https://github.com/ai-survivors/world_cup_22_frontend/raw/main/assest/logo.png' width='100'/>
                  <h2 className="font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl mt-50">
                    World Cup Ticket{" "}
                  </h2>
                  <div className="pt-2 font-bold text-white "> Match between: {data.match.title}  </div>
                </div>
                <div className="float-right pr-4 pt-7">
                  <QRCode id="abc" value={value} />
                </div>
                <div className="flex flex-row w-auto pt-2 ml-10 font-mono text-white ">
                  {data.ticket_class=="A" &&    <div className="basis-1/2"> Price:{data.price+45}  $ </div>}
                  {data.ticket_class=="B" &&    <div className="basis-1/2"> Price:{data.price+30} $ </div>}
                  {data.ticket_class=="C" &&    <div className="basis-1/2"> Price:{data.price+20} $ </div>}
                  {data.ticket_class=="D" &&    <div className="basis-1/2"> Price:{data.price} $ </div>}
                 
                </div>
                <div className="pt-2 ml-10 text-white">Seat:{data.id+101}  Zone:{data.ticket_class}</div>
                <div className="flex flex-row w-auto mt-2 ml-10 font-mono text-white ">
                <div className="" > Date : {data.match.match_date}</div>
                
                 </div>

              </div>
            </div>
            </PDFExport>
            <button  class="mt-5 ml-10 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center " onClick={download}>
                  <svg
                    class="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Download</span>
                </button>
          </div>
          </div>
         
          )
        }
            })}

</section>
<section id='2' className='pt-5 pl-5'><div>
              <div class="flex flex-col justify-center h-full">
        <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
              <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Match</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">First Team</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-center">Second Team</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
          {votes.map((vote,idx)=>{
                          if (vote.owner == user.username){
                      return <> <tr>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="font-medium text-gray-800">{vote.match.title}</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap ">
                                    <div class="text-left">{vote.team} ✔ </div>
                                </td>
                                <td class="pl-3 whitespace-nowrap">
                                    <div class="pl-10 text-left font-medium text-gray-800">{vote.match.team1 == vote.team ? vote.match.team2:vote.match.team1}</div>
                                </td>
                            </tr> </>
                          }
                  })}
                        </tbody>
                      </table>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
</section>
            </div>
          </div>
        </div>
      </body>
       <Footer />
    </>
  );
};
export default Profile;
