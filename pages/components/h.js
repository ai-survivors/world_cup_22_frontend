import Axios from "axios";
const NEWS = process.env.NEXT_PUBLIC_WORLD_NEWS_API;
import { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import React, { useState, useEffect } from "react";

const h = () => {
/*    const [news , setNews] = useState([]);
    useEffect(() => {
    Axios.get('https://yallabike.herokuapp.com/articls').then(res=>{
        
        setNews(res.data.cache.data)
    })
  });

    console.log('NEWS : ',news)
*/
    return (
        <>
           
        </>
    )
}

export default h
/*
const [news , setNews] = useState([]);
    useEffect(() => {
    Axios.get('https://yallabike.herokuapp.com/articls').then(res=>{
        
        setNews(res.data.cache.data)
    })
  });
*/
/*
    useEffect() => {
        Axios.get(NEWS).then((res) => {
            setNews(res.data.cache.data);
        }, []);
*/
/*
                                    <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                                        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                                            <a href={item.sourseUrl} class="flex flex-wrap no-underline hover:no-underline">
                                                <img src="https://source.unsplash.com/collection/1119905/800x600" class="h-full w-full rounded-t pb-6" />
                                            </a>
                                            <p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                                            <div class="w-full font-bold text-xl text-gray-900 px-6">{item.title}</div>
                                            <p class="text-gray-800 font-serif text-base px-6 mb-5">
                                                {item.description}
                                            </p>
                                        </div>
                                        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                                            <div class="flex items-center justify-between">
                                                <p class="text-gray-600 text-xs md:text-sm">{Math.floor(Math.random() * 300)} VIEWS</p>
                                            </div>
                                        </div>
                                    </div>
*/