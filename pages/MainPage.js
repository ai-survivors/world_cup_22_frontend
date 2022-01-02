import Axios from "axios" ;  
const NEWS = process.env.NEXT_PUBLIC_WORLD_NEWS_API ;
import Header from '../components/Header'
import Footer from '../components/Footer'
import React, { useState, useEffect } from "react" ;
const MainPage = () => {
  const [news , setNews] = useState([]);

  useEffect(() => {
      Axios.get(NEWS).then(res=>{
          setNews(res.data)
      })
    },[]);  

  return (
    <>
    <Header/>
<div class="flex flex-wrap justify-between pt-12 ">
                     {
                    news.map((item) => {
return (
          <>
<div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
<div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
<a href={item.sourseUrl} class="flex flex-wrap no-underline hover:no-underline">
<img src={item.img} class="h-full w-full rounded-t pb-6"/>
</a>
<div class="w-full font-bold text-xl text-gray-900 px-6">{item.title}</div>
</div>
<div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
  
<div class="flex items-center justify-between">
<a href={item.link} class="text-blue-800 pt-5 underline font-serif text-base mb-5">
See Full Article .....
</a>
<p class="text-gray-600 text-xs md:text-sm">{Math.floor(Math.random() * 700)} VIEWS</p>
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
