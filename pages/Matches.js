import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Table from '../components/Table'



import useResource from '../hooks/useResource'

export default function Matches() {
    
    const {resources,loading,createResource,deleteResource,updateResource,} = useResource()


    console.log(resources)

    let data = [
        {
            day: 'THURSDAY, NOVEMBER 24, 2022',
            games: [
                {
                    title : "",
                    stadium:"",
                    number_of_tickets: 20,
                    team1: "USA",
                    team2: "Grmain",
                    votes_team1: 2, 
                    votes_team2: 3,
                    created_date:"",
                    description:"",
                    time: " 16 : 00 "

                }, {
                    title : "",
                    stadium:"",
                    number_of_tickets: 20,
                    team1: "USA",
                    team2: "Grmain",
                    votes_team1: 2, 
                    votes_team2: 3,
                    created_date:"",
                    description:"",
                    time: " 20 : 00 "

                }, {
                    title : "",
                    stadium:"",
                    number_of_tickets: 20,
                    team1: "USA",
                    team2: "Grmain",
                    votes_team1: 2, 
                    votes_team2: 3,
                    created_date:"",
                    description:"",
                    time: " 21 : 00 "

                }
            ]
        },

        {
            day: "'SUNDAY, NOVEMBER 27, 2022'",
            games: [
                {
                    title : "",
                    stadium:"",
                    number_of_tickets: 20,
                    team1: "USA",
                    team2: "Grmain",
                    votes_team1: 2, 
                    votes_team2: 3,
                    created_date:"",
                    description:"",
                    time: " 20 : 00 "

                }
            ]
        }


    ]
    return (

        <>
            <Header></Header>
            <section>

                <section class="antialiased bg-white text-gray-600 h-screen px-4 ">

                    {
                        data.map(item => {
                            return <div class="flex flex-col  h-2/1 ">
                                <div class=" w-3/6 mx-auto bg-white shadow-lg rounded-sm border border-green-200 m-5">
                                    <header class="px-5 py-4 border-b border-green-100">
                                        <h2 class="font-semibold text-gray-800">{item.day}</h2>
                                    </header>
                                    <div class="p-3">
                                        <div class="overflow-x-auto">
                                            <Table item={item}></Table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        })
                    }

                </section>
            </section>
            <Footer></Footer>


        </>
    )
}
