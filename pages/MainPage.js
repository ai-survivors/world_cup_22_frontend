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
<div class="grid grid-cols-2 gap-4 pt-7 px-10 bg-gray-200" >
                     {
                    news.map((item) => {
return (
<>
    <div class="w-full lg:flex pb-10">
    <img src={item.img} class="h-40 lg:h-auto w-60 flex-none bg-cover rounded-t  text-center overflow-hidden"/>  
      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <p class="text-sm text-gray-600 flex items-center">
          </p>
          <div class="text-gray-900 font-bold text-xl mb-2">{item.title}</div>
        </div>
        <div class="flex items-center">
          <div class="text-sm">
          <p class="text-gray-600">{Math.floor(Math.random() * 700)} VIEWS</p>

            <p class="text-gray-900 leading-none"><a href='' class="text-blue-800 pt-5 underline font-serif text-base mb-5">
See Full Article .....
</a></p>
          </div>
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
//bg-[url{item.img}]
/*
      <img scr={item.img} class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"/>

<>
<img src={item.img} class="h-full w-full rounded-t pb-6"/>  
  <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
    <div class="w-full lg:max-w-full lg:flex">
      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <p class="text-sm text-gray-600 flex items-center">
            <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p>
          <div class="text-gray-900 font-bold text-xl mb-2">title</div>
          <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>
        <div class="flex items-center">
          <img class="w-10 h-10 rounded-full mr-4" src="/rafael.png" alt="Avatar of Writer"/>
          <div class="text-sm">
            <p class="text-gray-900 leading-none"><a href='' class="text-blue-800 pt-5 underline font-serif text-base mb-5">
See Full Article .....
</a></p>
            <p class="text-gray-600">{Math.floor(Math.random() * 700)} VIEWS</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
*/

/*
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
*/
