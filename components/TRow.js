import React, { useState } from 'react'
import { useAuth } from '../contexts/auth'


export default function TRow(props) {
    const {user,login,logout} =useAuth();
    const[firstTeamVoting,setFirstTeamVoting]=useState(props.match.votes_team1)
    const[secondTeamVoting,setSecondTeamVoting]=useState(props.match.votes_team2) 
    

    const vote =()=>{
        setFirstTeamVoting(prev => prev + 1)
        const vote = firstTeamVoting + 1
        const voteupdate = { votes_team1: vote };
        props.updateResource(props.match,voteupdate)
       
    }

     function vote2 (){
       setSecondTeamVoting(prev => prev + 1)
        const vote = secondTeamVoting + 1
        const voteupdate = { votes_team2: vote };
        props.updateResource(props.match,voteupdate)
      
    }




    return (
        <tr>
            <td class="whitespace-nowrap">
                <div class="text-center"> 
                {firstTeamVoting} 
                </div>

            </td>
            <td class="p-2 whitespace-nowrap m-auto">
                <div class="text-center"> </div>
            </td>
            <td class="p-2 whitespace-nowrap">
            {user &&  
                 <button class=" border-2 bg-white hover:bg-orange-500 text-black font-bold py-2 px-4 rounded-full" onClick={vote} >
                 vote
             </button>
                }
               

            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-lg text-center">{props.match.team1.country} 🇺🇸</div>

            </td>
            <td class="p-2 whitespace-nowrap m-auto">
                <div class="text-center"></div>
            </td>
            <td class="p-2 whitespace-nowrap m-auto">
                <div class="text-center"> {props.match.time}</div>
            </td>

            <td class="p-2 whitespace-nowrap">
                <div class="text-lg text-center">{props.match.team2.country}🇩🇪</div>
            </td>
            <td class="p-2 whitespace-nowrap m-auto">
                <div class="text-center"> </div>
            </td>
            <td class="p-6 whitespace-nowrap">
                {user && 
                <button class=" border-2 bg-white hover:bg-orange-500 text-black font-bold py-2  px-4 rounded-full" onClick={vote2} >
                vote
               </button>
                }
                
            </td>
            <td class="whitespace-nowrap">
                <div class="text-center"> 
                {secondTeamVoting} 
                </div>

            </td>
            

        </tr>
    )
}
