import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Table from '../components/Table'

export default function Mstches() {

    let data = [
        {
            day: 'THURSDAY, NOVEMBER 24, 2022',
            games: [
                {
                    fristTeam: "USA",
                    time: " 21 : 00 ",
                    secondTeam: "Grmain"

                }, {
                    fristTeam: "USA",
                    time: " 21 : 00 ",
                    secondTeam: "Grmain"

                }, {
                    fristTeam: "USA",
                    time: " 21 : 00 ",
                    secondTeam: "Grmain"

                }
            ]
        },
        
        {
            day: "'SUNDAY, NOVEMBER 27, 2022'",
            games: [
                {
                    fristTeam: "USA",
                    time: " 21 : 00 ",
                    secondTeam: "Grmain"

                }, {
                    fristTeam: "USA",
                    time: " 21 : 00 ",
                    secondTeam: "Grmain"

                }, {
                    fristTeam: "USA",
                    time: " 21 : 00 ",
                    secondTeam: "Grmain"

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
