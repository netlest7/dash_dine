import { Button } from '@/components/ui/button'
import React from 'react'
import { IoMdArrowBack } from "react-icons/io";


const AutomaticMenu = () => {
  return (
    <div className='w-screen h-screen bg-black flex items-center justify-center flex-col gap-5'>
        <h1 className='text-white'>Automatic Menu Update</h1>
        <h3 className='text-white'>Comming Soon.....</h3>
        <a href='/menu'>
            <Button className='bg-transparent'>
            <IoMdArrowBack size={30}/>  Back 
            </Button>
        </a>
    </div>
  )
}

export default AutomaticMenu