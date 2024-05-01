import React from 'react'
import {
    Card,
    CardDescription,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"

import logo from "../../assets/logo.png"
import { Button } from '@/components/ui/button'
const OwnerDetails = () => {
  return (
    <div className="w-screen h-screen bg-black flex items-center flex-col overflow-y-auto">
        <div className="w-full p-4">
            <img src={logo} height={150} width={150}/>
        </div>

        <h2 className='text-white text-3xl mb-6'>Owner Details</h2>
        <Card className='bg-transparent w-[90%] flex justify-center gap-11 p-10 flex-wrap'>


               <div className='w-[40%]'>
               <h3 className='text-white'>Full Name</h3>
                <CardDescription>
                <Input className='text-amber-400 placeholder:text-slate-500 '  placeholder='Enter the name of the owner ...'/>
                </CardDescription>
               </div>


               <div className='w-[40%]'>
               <h3 className='text-white'>Mobile Number</h3>
                <CardDescription>
                <Input className='text-amber-400 placeholder:text-slate-500' placeholder='+91 XXXXXXXXXX'/>
                </CardDescription>
               </div>



              <div className='w-[40%]'>
              <h3 className='text-white'>Aadharcard Number</h3>
                <CardDescription>
                <Input className='text-amber-400 placeholder:text-slate-500'   placeholder='23284343050338984'/>

                </CardDescription>
              </div>

    
        </Card>

        <h2 className='text-white mb-6  mt-6 text-3xl'>Restaurant Details</h2>

        <Card className='bg-transparent w-[90%] flex justify-center gap-11 p-10 flex-wrap'>

        <div className='w-[40%]'>
        <h3 className='text-white'>Restaurant Name</h3>
        <CardDescription>
        <Input className='text-amber-400 placeholder:text-slate-500'  placeholder='Enter the name of the restaurant ...'/>
        </CardDescription>
        </div>


        <div className='w-[40%]'>
        <h3 className='text-white'>Restaurant Address</h3>
        <CardDescription>
        <Input className='text-amber-400 placeholder:text-slate-500' placeholder='Enter the address of the restaurant ...'/>
        </CardDescription>
        </div>



        <div className='w-[40%]'>
        <h3 className='text-white'>Number of Tables</h3>
        <CardDescription>
        <Input className='text-amber-400 placeholder:text-slate-500'   placeholder='Enter the number of tables in the restaurant ...'/>

        </CardDescription>
        </div>

        <div className='w-[40%]'>
        <h3 className='text-white'>GST Number</h3>
        <CardDescription>
        <Input className='text-amber-400 placeholder:text-slate-500'   placeholder='Enter the GST number of the restaurant'/>
        </CardDescription>
        </div>

        <div className='w-[40%]'>
        <h3 className='text-white'>Restaurant Licence Number</h3>
        <CardDescription>
        <Input className='text-amber-400 placeholder:text-slate-500' placeholder='Enter the licence number of the restaurant'/>
        </CardDescription>
        </div>

        <div className='w-[40%]'>
        <h3 className='text-white'>Logo</h3>
        <CardDescription>
        <Input className='text-amber-400 w-[30%] bg-gradient-to-b cursor-pointer from-yellow-300 placeholder:text-slate-500 to-orange-400 border border-yellow-600' type='file'/>
        </CardDescription>
        </div>
        </Card>

<Button className='bg-gradient-to-b from-yellow-300 to-orange-400 border border-yellow-600 
rounded-md text-black mt-7 mb-8'>Register</Button>

    </div>
  )
}

export default OwnerDetails