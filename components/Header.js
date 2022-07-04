
import React from 'react'
import Image from 'next/image'
import HeaderIcon from './HeaderIcon'
import { HomeIcon, UserIcon, PhoneIcon, InformationCircleIcon } from '@heroicons/react/solid'

export default function Header() {
  return (
      <div className='bg-gray-700 text-gray-200 flex flex-col items-center p-6 select-none sm:flex-row justify-between'>
          <div className='flex'>
              <HeaderIcon Icon={HomeIcon} title="HOME"/>
              <HeaderIcon Icon={UserIcon} title="ACCOUNT"/>
              <HeaderIcon Icon={PhoneIcon} title="CONTACT"/>
              <HeaderIcon Icon={InformationCircleIcon} title="ABOUT"/>
          </div>   
          <Image className='cursor-pointer active:brightness-110' src={"http://assets.stickpng.com/images/613f661716381700041030fc.png"} width={70} height={70}/>
    </div>
  )
}


 