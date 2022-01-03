import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/auth'

import useTeams from '../hooks/useTeams';

import useVotes from '../hooks/useVotes';

export default function TRow(props) {
    const { user, login, logout } = useAuth();
    const [firstTeamVoting, setFirstTeamVoting] = useState(props.match.votes_team1)
    const [secondTeamVoting, setSecondTeamVoting] = useState(props.match.votes_team2)
    const [teams, setTeams] = useState([])
    const {
        teamResources,
        teamLoading,
        createTeam,
        deleteTeam,
        updateTeam,
    } = useTeams();

    const {
        VoteResources,
        voteLoading,
        createVote,
        deletevote,
        updateVote,
    } = useVotes();


    useEffect(() => {
        if (teamResources) {
            setTeams(teamResources)
        }
    }, [teamResources, teams])


    const vote = (e, firstTeam) => {
    
        setFirstTeamVoting(prev => prev + 1)
       
        teams.forEach(team => {
            
            if (firstTeam == team.country) {
                const addVote = {
                    owner: user.id,
                    match: props.match.id,
                    team: team.id
                }
                createVote(addVote)

            }

        });

    }

    function vote2(e, secondTeam) {
        setSecondTeamVoting(prev => prev + 1)

        teams.forEach(team => {

            if (secondTeam == team.country) {
                const addVote = {
                    owner: user.id,
                    match: props.match.id,
                    team: team.id
                }
                createVote(addVote)

            }

       });
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
                    <button class=" border-2 bg-white hover:bg-orange-500 text-black font-bold py-2 px-4 rounded-full" onClick={(e) => { vote(e, props.match.team1.country) }} >
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
                    <button class=" border-2 bg-white hover:bg-orange-500 text-black font-bold py-2  px-4 rounded-full" onClick={(e) => { vote2(e, props.match.team2.country) }} >
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
