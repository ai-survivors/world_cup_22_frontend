import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/auth'

import useTeams from '../hooks/useTeams';
import useVotes from '../hooks/useVotes';
export default function TRow(props) {
    const { user, login, logout } = useAuth();
    const [firstTeamVoting, setFirstTeamVoting] = useState(props.match.votes_team1)
    const [secondTeamVoting, setSecondTeamVoting] = useState(props.match.votes_team2)
    const [Teams, setTeams] = useState([])
    const [Votes, setVotes] = useState([])
    const { teamResources, teamLoading, createTeam, deleteTeam, updateTeam, } = useTeams();
    const { VoteResources, voteLoading, createVote, deletevote, updateVote, } = useVotes();
    const [voted,setVoted] = useState(false)


    useEffect(() => {
        if (teamResources) {
            setTeams(teamResources)
        }
    }, [teamResources, Teams])

    useEffect(() => {
        if (VoteResources) {
            setVotes(VoteResources)
        }
    }, [VoteResources, Votes])



    const vote = (e, match) => {
        let flag = false; 
        
        
        Votes.forEach(vote => {
            
                   
            if ((vote.owner == user.username) && (vote.match.matchid == match.id)) {
                console.log("you are voted for  " + match.title)
                 flag = true;
                 setVoted(true);

            }  }) 

             
            if(flag){
               return
            }
                setFirstTeamVoting(prev => prev + 1)
                const addVote = {
                    owner: user.id,
                    match: match.id,
                    team: match.team1.team1_id
                }
                createVote(addVote)
    }

    function vote2(e, match) {
        let flag = false; 
        
        
        Votes.forEach(vote => {
            
                   
            if ((vote.owner == user.username) && (vote.match.matchid == match.id)) {
                console.log("you are voted for  " + match.title)
                 flag = true;
                 setVoted(true);

            }  }) 

             
            if(flag){
               return
            }
                setSecondTeamVoting(prev => prev + 1)
                        const addVote = {
                            owner: user.id,
                            match: match.id,
                            team: match.team2.team2_id
                        }
                        createVote(addVote)            
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
            <button disabled={!voted} className={`px-4 py-2 font-bold ${voted &&  'hover:bg-orange-500' } text-black bg-white border-2 rounded-full  `} onClick={(e) => { vote(e, props.match) }} >
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
                <button disabled={!voted} className= {`px-4 py-2 font-bold ${voted &&  'hover:bg-orange-500' } text-black bg-white border-2 rounded-full `} onClick={(e) => { vote2(e, props.match) }} >
                vote
            </button>
                 /* Votes.map(vote => {
                   
                    if (!(vote.owner == user.username) && !(vote.match.matchid == match.id)) {
                        console.log("you are voted for  " + match.title)
                        return <button class=" border-2 bg-white hover:bg-orange-500 text-black font-bold py-2  px-4 rounded-full" onClick={(e) => { vote2(e, props.match) }} >
                            vote
                        </button>

                    }

                    
                })  */
        
                  
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
