import React, { useEffect, useState } from 'react'
import { Sidebar } from '../PageComponents/Sidebar'
import { Card, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ScrollArea } from "@/components/ui/scroll-area"
import { useSelector } from 'react-redux'
// import { useLoadStoreMutation } from '../../../redux/feature/cafe/cafeApi'


type props = {
  store: []
}

const Profile =({store}: props) => {


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {owner} = useSelector( (state:any) => state.auth)
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //  const {store} = useSelector((state:any) => state.cafe)
  const [fullName,setFullName] = useState<string>(owner.owner_email)
  const [MobileNumber,setMobileNumber] = useState(owner.
    owner_phoneNumber)
  const [AadharCard,setAadharCard] = useState("")


  const [storeName,setStoreName] = useState("")
  const [store_NoOfTables,setStoreNoOfTables] = useState( "")


  

  
  useEffect (() => {
    setFullName(owner.owner_email)
    setMobileNumber(owner.owner_phoneNumber)

      
      

    
  }, [owner,store])
  
  return (
    <div className='w-screen h-screen flex bg-black '>
        {/* side bar */}
        <Sidebar route={3}/>
        {/* side bar */}

        <div className="w-[80%] flex">
        <ScrollArea className='flex flex-col items-center justify-center w-full p-11'> 
        <header className='w-full flex justify-between'>
            <h2 className='text-white text-xl hover:text-amber-300 cursor-pointer '>Owner Details</h2>
            <Button className='bg-gradient-to-b from-yellow-300 to-orange-400 border border-yellow-600 rounded-md text-black '>Save</Button>
        </header>

        <Card className='bg-transparent w-[90%] mt-9 flex justify-center gap-11 p-10 flex-wrap'>


        <div className='w-[40%]'>
        <h3 className='text-white'>Full Name</h3>
        <CardDescription>
        <Input className='text-amber-400 placeholder:text-slate-500 border '  placeholder='Enter the name of the owner ...' value={fullName} onChange={(e)=> setFullName(e.target.value)}/>
        </CardDescription>
        </div>


        <div className='w-[40%]'>
        <h3 className='text-white'>Mobile Number</h3>
        <CardDescription>
        <Input className='text-amber-400 placeholder:text-slate-500' placeholder='+91 XXXXXXXXXX' value={MobileNumber} onChange={(e)=> setMobileNumber(e.target.value)}/>
        </CardDescription>
        </div>



        <div className='w-[40%]'>
        <h3 className='text-white'>Aadharcard Number</h3>
        <CardDescription>
        <Input className='text-amber-400 placeholder:text-slate-500'   placeholder='23284343050338984' value={AadharCard} onChange={(e)=> setAadharCard(e.target.value)}/>
        </CardDescription>
        </div>


        </Card>

       <header className='w-full mb-2 p-5'>
       <h2 className='text-white text-xl hover:text-amber-300 cursor-pointer ml-4 '>Restaurant Details</h2>
       </header>
        {/* Restaurant */}
        <Card className='bg-transparent w-[90%] flex justify-center gap-11 p-10 flex-wrap mb-4'>

        <div className='w-[40%]'>
        <h3 className='text-white'>Restaurant Name</h3>
        <CardDescription>
        <Input className='text-amber-400 placeholder:text-slate-500' value={storeName} placeholder='Enter the name of the restaurant ...'/>
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
        <Input className='text-amber-400 placeholder:text-slate-500' value={store_NoOfTables}   placeholder='Enter the number of tables in the restaurant ...'/>

        </CardDescription>
        </div>

        <div className='w-[40%]'>
        <h3 className='text-white'>GST Number</h3>
        <CardDescription>
        <Input className='text-amber-400 placeholder:text-slate-500'    placeholder='Enter the GST number of the restaurant'/>
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
        <Input className='text-amber-400 w-[30%] bg-gradient-to-b cursor-pointer from-yellow-300 placeholder:text-slate-500 to-orange-400 border border-yellow-600' placeholder='choose file' type='file'/>
        </CardDescription>
        </div>
        </Card>

    {/* subscription */}
        <Card className='bg-transparent w-[90%] flex justify-between gap-11 p-10 flex-wrap mb-11'>


        <div className='w-[40%]'>
        <h3 className='text-white text-2xl'>Change Subscription</h3>
       
        </div>

        <Button className='rounded-md text-white bg-none border '>Choose Another Plan</Button>
        </Card>

        </ScrollArea>
        </div>
    </div>
  )
}

export default Profile