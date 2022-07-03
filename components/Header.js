
import React from 'react'
import Image from 'next/image'
import HeaderIcon from './HeaderIcon'
import { HomeIcon, UserIcon, PhoneIcon, InformationCircleIcon } from '@heroicons/react/solid'

export default function Header() {
  return (
      <div>
          <div className=''>
              <HeaderIcon Icon={HomeIcon} title="HOME"/>
              <HeaderIcon Icon={UserIcon} title="ACCOUNT"/>
              <HeaderIcon Icon={PhoneIcon} title="CONTACT"/>
              <HeaderIcon Icon={InformationCircleIcon} title="ABOUT"/>
          </div>   
          <Image src={"http://assets.stickpng.com/images/613f661716381700041030fc.png"} width={70} height={70}/>
    </div>
  )
}
