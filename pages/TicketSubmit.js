import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from '../contexts/auth'
import useTickets from "../hooks/useTickets";
import QRCode from "qrcode.react";



const TicketSubmit = () => {
const {user , login , logout} = useAuth()
const {ticketResources,  ticketLoading, createTicket } = useTickets();

  return (
    <>
      <Header />
      
      { !ticketLoading &&  ticketResources.map((data) => {
        
            if (data.owner==user.id){
              return (

                <div className="ml-80"  >
                
                <div className="bg-[url('https://images.assetsdelivery.com/compings_v2/gavrby/gavrby2104/gavrby210400021.jpg')]  mt-10 w-2/3 mr-50 h-80  rounded-3xl bg-cover " >
                  <div>
                    <div className=" pt-5 pb-5 pl-20 pr-20 rounded-3xl">
                    <img className='hover:scale-110 cursor-grab' src='https://github.com/ai-survivors/world_cup_22_frontend/raw/main/assest/logo.png' width='150'/> 
                      <h2 className=" font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl mt-50">
                        World Cup Ticket{" "}
                      </h2>
                    </div>
                    <div className="float-right pr-6">
                      <QRCode id="abc" value="rr" />
                    </div>
                    <div className=" font-mono  ml-20 flex flex-row  text-white w-auto">
                   
                     <div className="basis-1/2"> Match between: {data.match}</div>
                     <div className="basis-1/2"> Price:{data.price} </div>
                     <div className="basis-1/2">Class: Gold one</div>
                   

                   
                    </div>
                    
                    <div className=" font-mono  ml-20 mt-2 flex flex-row  text-white w-auto">
                    <div className="basis-1/2" >Date:{data.created_date}</div>
                     <div className="basis-1/2">Seat:19-Zone: A</div>
                  
                  
                     </div>
                    <button class="mt-1 ml-20 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ">
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
              </div>

              )
            }


                })}
    

      <Footer />
    </>
  );
};
export default TicketSubmit;
