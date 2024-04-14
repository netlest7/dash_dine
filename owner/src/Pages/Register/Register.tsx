import { useNavigate } from 'react-router-dom'
import loginBgImg from '../../assets/loginBG.png'
import logo from "../../assets/logo.png"

import {
    Card,
    CardContent,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"

const Register = () => {
    const navigation = useNavigate()
    const [showPassword,setShowPassword] = useState(false);
  return (
    <main className='relative w-screen h-screen flex gap-0 bg-black'>
        <section className='relative w-[50%] m-0 p-0'>
            <img src={loginBgImg} className='absolute w-full h-full object-fill '/>
            <img onClick={() => navigation('/')} src={logo} width={150} height={50} className='absolute top-5 left-5 cursor-pointer'/>

        </section>

        {/* User Input section  */}

        <section className='flex w-[50%] bg-black m-0 flex-col items-center '>
        <h2 className='text-white text-3xl text-center mt-10'>Signup</h2>

        <Card className='w-[400px] h-[550px] bg-transparent flex flex-col items-center justify-center  bg-gradient-to-b from-[#1E1E1E] to-black-100 mb-9 mt-[20px] '>
        <CardContent className='flex flex-col gap-6 w-full'>

        <div className='text-white w-full flex flex-col gap-3'>
        <label htmlFor="name">Full Name</label>
        <Input placeholder='Yash Sharma...' />
       </div>

        <div className='text-white w-full flex flex-col gap-3'>
        <label htmlFor="email">Email Id</label>
        <Input placeholder='example@gmail.com' />
       </div>

       <div className='w-full text-white flex flex-col gap-3'>
       <label htmlFor="password">Password</label>
        <Input placeholder='password@#$..' type={showPassword ? "text": "password"}/>

        <div className='flex gap-2'>
        <Checkbox className='border-white text-white'  onCheckedChange={() => setShowPassword((prev)=> !prev)}/>
        <label
          htmlFor="password"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Show Password
        </label>
        </div>
       </div>

        <Button className='bg-gradient-to-b from-yellow-300 to-orange-400 border border-yellow-600 rounded-md text-black'>Get Started</Button>

        <div className='flex text-white items-center gap-4'>
        <hr className='w-[45%]'/> 
        <p>Or</p>
        <hr className='w-[45%]'/> 
        </div>

        <p className='text-white text-center'>Already have an account? <a href='/login' className='text-[#FFBF46]'>Login</a></p>
        </CardContent>

       
        </Card>

        </section>
    </main>
  )
}

export default Register