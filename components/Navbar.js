 
import React from 'react'
import requests from "../utils/requests"
import { useRouter } from 'next/router'


export default function Navbar() {
   const router = useRouter()
   return (
       <div className='flex justify-center bg-gray-500 text-gray-100 select-none text-xl lg:text-2xl'>
         {Object.entries(requests).map(([key, { title, url }]) => {
           return <h2 onClick={() => {router.push(`?genre=${key}`)}} className='m-6 cursor-pointer hover:text-white active:text-red-600' key={key}> {title} </h2>    
        })
      }
      
     </div>
   
   )}
 