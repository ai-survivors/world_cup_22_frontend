const NEWS = process.env.NEXT_PUBLIC_WORLD_NEWS_API ;
import Header from '../components/Header'
import axios from 'axios'
import Footer from '../components/Footer'
import React, { useState, useEffect } from "react" ;
const MainPage = () => {
  const [news , setNews] = useState([]);
  useEffect(() => {
      axios.get(NEWS).then(res=>{
          setNews(res.data)
      })
    },[]);  

  return (
<>
    <Header/>
<div class="grid grid-cols-3 gap-1 pt-7 px-10 bg-gray-200" >
                     {
                    news.map((item) => {
return (
<>
<div class="max-w-sm rounded-sm overflow-hidden shadow-2xl m-10">
   <img src={item.img} className='w-full h-60'/>
  <div class="pl-2 pt-2 mx-3 max-w-sm border-b border-gray-light">{item.title}
  </div>
  <div class="mx-5 my-3 flex">
    <div class="flex-grow">
    <p class="text-gray-600">{Math.floor(Math.random() * 700)} VIEWS</p>
    <a href="#" class="no-underline ">
      <p class="text-gray-900 pt-2 leading-none"><a href={item.link} class="text-blue-800 pt-5 underline font-serif text-base mb-5">
See Full Article .....
</a></p>
</a>     
    </div>
  </div>
</div>
</>
        );
}
      )}      
  </div>

<Footer/>
    </>
  )
}
export default MainPage