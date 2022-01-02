import React, { useEffect , useState }  from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Table from '../components/Table'




import useMatch from '../hooks/useMatch'

export default function Matches() {

  const {
    matchesResource,
    loading,
    createMatch,
    deleteMatch,
    updateMatch,
} = useMatch()

  const [Matches, setMatches]=useState([]) 





  useEffect(() => {
    if(matchesResource){
      setMatches(matchesResource)
    }
  }, [matchesResource,Matches])


  let data = [ 'THURSDAY, NOVEMBER 24, 2022','THURSDAY, NOVEMBER 24, 2022','THURSDAY, NOVEMBER 24, 2022']
  return (




    <>
    <Header></Header>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <section class="py-48 bg-white flex flex-col justify-center">
            <div class="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
              <div class="-mt-20 flex justify-end">
                <img class="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden" src="https://images.unsplash.com/photo-1616486788371-62d930495c44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" />
              </div>
              <div class="flex justify-start">
                <img class="rounded-lg object-cover overflow-hidden" src="https://images.unsplash.com/photo-1640020580603-e7beafd75d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" />
              </div>
              <div class="-mt-64 flex justify-start">
                <img class="rounded-lg object-cover overflow-hidden" src="https://images.unsplash.com/photo-1533557950217-8768f2ee7491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
              </div>
              <div class="flex justify-start -mr-28 ml-28">
                <img class="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden" src="https://images.unsplash.com/photo-1620371350502-999e9a7d80a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80" />
              </div>
             
            </div>
          </section>


        </div>
        <div>
          <section class="py-48 bg-white flex flex-col justify-center">
            <div class="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
              <div class="-mt-20 flex justify-end">
                <img class="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden" src="https://images.unsplash.com/photo-1616486788371-62d930495c44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" />
              </div>
              <div class="flex justify-start">
                <img class="rounded-lg object-cover overflow-hidden" src="https://images.unsplash.com/photo-1640020580603-e7beafd75d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" />
              </div>
              <div class="-mt-64 flex justify-start">
                <img class="rounded-lg object-cover overflow-hidden" src="https://images.unsplash.com/photo-1533557950217-8768f2ee7491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
              </div>
              <div class="flex justify-start -mr-28 ml-28">
                <img class="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden" src="https://images.unsplash.com/photo-1620371350502-999e9a7d80a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80" />
              </div>
             
            </div>
          </section>


        </div>
      </div>


  <div class="grid grid-cols-3 gap-4">

{
    Matches.map(match => {
        return <div class="flex flex-col  h-2/1 ">
            <div class=" mx-auto bg-white shadow-lg rounded-sm border border-green-200 m-5">
                <header class="px-5 py-4 border-b border-green-100">
                    <h2 class="font-semibold text-gray-800">day</h2>
                </header>
                <div class="p-3">
                    <div class="overflow-x-auto">
                        <Table match={match} Matches={Matches} updateMatch={updateMatch} ></Table>
                    </div>
                </div>
            </div>
        </div>

    })
}

</div>


      
             <Footer></Footer>


    </>
  )
}
