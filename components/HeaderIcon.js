
import React from 'react'

export default function HeaderIcon({Icon, title}) {
  return (
      <div className='mx-4 flex flex-col hover:text-white cursor-pointer lg:mx-6 active:text-red-400'>
          <Icon className="h-6" />
          <p className='text-sm font-bold my-2'>{title}</p>
    </div> 
  )
}
