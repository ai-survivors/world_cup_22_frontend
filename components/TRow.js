import React, { useState } from 'react'

export default function TRow(props) {

    const[firstTeamVoting,setFirstTeamVoting]=useState(0)
    const[secondTeamVoting,setSecondTeamVoting]=useState(0) 
    const[totalVoteFirstTeam , setTotalvoteFirstTeam]= useState(0)
    const[totalVoteSecondTeam , setTotalvoteSecondTeam]= useState(0)
    





     function persent(){
        let totalpersent = 100 / (firstTeamVoting+secondTeamVoting)
        
    
        let first = firstTeamVoting * totalpersent
         setTotalvoteFirstTeam(Math.floor(first))
        
        let second = secondTeamVoting * totalpersent
         setTotalvoteSecondTeam(Math.floor(second))
        

    }
    
    

    const vote =()=>{
        setFirstTeamVoting(prev => prev + 1)
        persent()
           
    }

     function vote2 (){
       setSecondTeamVoting(prev => prev + 1)
       persent()
    }




    return (
        <tr>
            <td class="whitespace-nowrap">
                <div class="text-center"> 
                {totalVoteFirstTeam} % 
                </div>

            </td>
            <td class="p-2 whitespace-nowrap m-auto">
                <div class="text-center"> </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <button class=" border-2 bg-white hover:bg-orange-500 text-black font-bold py-2 px-4 rounded-full" onClick={vote} >
                    vote
                </button>

            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-lg text-center">{props.game.fristTeam} 🇺🇸</div>

            </td>
            <td class="p-2 whitespace-nowrap m-auto">
                <div class="text-center"></div>
            </td>
            <td class="p-2 whitespace-nowrap m-auto">
                <div class="text-center"> {props.game.time}</div>
            </td>

            <td class="p-2 whitespace-nowrap">
                <div class="text-lg text-center">{props.game.secondTeam}🇩🇪</div>
            </td>
            <td class="p-2 whitespace-nowrap m-auto">
                <div class="text-center"> </div>
            </td>
            <td class="p-6 whitespace-nowrap">
                <button class=" border-2 bg-white hover:bg-orange-500 text-black font-bold py-2  px-4 rounded-full" onClick={vote2} >
                    vote
                </button>
            </td>
            <td class="whitespace-nowrap">
                <div class="text-center"> 
                {totalVoteSecondTeam} %
                </div>

            </td>
            

        </tr>
    )
}
