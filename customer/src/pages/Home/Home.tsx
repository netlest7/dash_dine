import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

import logo from '../../assets/g12.png'
type Props = {


}

const Home = (props: Props) => {
  return (
    <div className='w-screen h-screen bg-[#FFFFFF] flex flex-col'>
        <div className="w-full flex justify-around mt-6">
            <div className='flex'>
            <img src={logo}></img>

            <span className='ml-5'>
            <h5>Hello, Smita</h5>
            <p>Let's get your order</p>
            </span>
            </div>
            
          

            <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>

        </div>

        <Input className='w-[80%]' />

        .w-
        
    </div>
  )
}

export default Home