import React from 'react'
import bgImag from "../../assets/mainBg.png"
import logo from "../../assets/logo.png"
import { Button } from '@/components/ui/button'
import CardComponets from './HomeComponents/CardComponets'

import why1 from "../../assets/why1.png"
import why2 from "../../assets/why2.png"
import why3 from "../../assets/why3.png"
import PlanComponents from './HomeComponents/PlanComponents'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Home = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {owner} = useSelector( (state:any) => state.auth)

   console.log(owner);
   
    const navigate = useNavigate()
  return (
    <main className='relative w-screen h-screen bg-gradient-to-t from-gray-400/62 to-gray-900/62 flex flex-col items-center m-0 overflow-x-hidden'>
    <img src={bgImag} className='w-full h-full'/>
    <div className=" absolute inset-0 bg-gradient-to-t from-black via-transparent-25 to-transparent"></div>
    {/* <div className=" absolute inset-0 bg-gradient-to-r via-transparent to-transparent  to-black"></div> */}

    {/* Navbar */}
    <nav className='absolute w-full flex top-0 p-5 justify-between pl-9 pr-9 bg-gradient-to-bl from-black via-transparent to-transparent border-none'>
    <img src={logo} width={150} height={50} className=''/>
    <Button onClick={()=>{
        navigate("/login")
    }} className='bg-transparent border-2 hover:bg-gradient-to-b from-yellow-300 to-orange-400 hover:border-none hover:text-black'>
        Login
    </Button>
    </nav>

    {/* Navbar */}

    {/* Main Section */}

    <div className="absolute flex flex-col top-[30%] items-center gap-5">
        <h2 className='text-5xl font-semibold text-white'>Welcome To Dash Dine</h2>
        <p className='text-wrap text-center text-white'>Where Ordering Meets Convenience. Discover A Seamless</p>
        <p className='text-wrap text-center text-white'> Dining Experience At Your Fingers</p>
        <Button className='bg-gradient-to-b from-yellow-300 to-orange-400 border border-yellow-600 rounded-md text-black'>Get Started</Button>
        <a className='text-white cursor-pointer'>Try for free</a>
    </div>

    {/* Main Section */}


    {/* WHY us section */}

    <section className='relative w-full bg-[#000000]  flex flex-col'>
        
        <h2 className='text-white text-3xl text-center mt-10'>Why Choose Dash Dine Food Services</h2>

       <div className='flex w-full mt-20 gap-10 justify-center'>
       <CardComponets imageUrl={why1} cardHeading='Enhanced Customer Experience' cardBody='Provide a seamless and convenient way for customers to browse menus and place orders.'/>
        <CardComponets imageUrl={why2} cardHeading='Contactless Ordering' cardBody='Provide a seamless and convenient way for customers to browse menus and place orders.'/>
        <CardComponets imageUrl={why3} cardHeading='Increased Revenue' cardBody='Provide a seamless and convenient way for customers to browse menus and place orders.'/>
       </div>
     
    </section>

    {/* WHY us section */}

    {/* plans */}
    <section className='w-full bg-[#000000] flex flex-col  gap-10'>
    <h2 className='text-white text-3xl text-center mt-10'>OUR PLANS</h2>
        <div className='w-full flex gap-11 justify-center'>
        <PlanComponents planType='REGULAR' planAmount='599' planFeatures={PlanFeatures.regular}/>
        <PlanComponents planType='PLUS' planAmount='1100' planFeatures={PlanFeatures.plus}/>
        <PlanComponents planType='PREMIUM' planAmount='1499' planFeatures={PlanFeatures.premium}/>
        </div>
       
    </section>
    {/* plans */}


    {/* Footer */}

    <footer className='w-full bg-black flex flex-col items-center justify-center p-9'>
        <p className='text-white'>Dash Dine Food Services by Netlest Soft.</p>
        <p className='text-white'>All Rights Reserved</p>
    </footer>
    {/* Footer */}

    </main>

  )
}

export default Home



const PlanFeatures = {
    regular: [
        {
            text: "Basic Ordering System",
            available: true
        },
        {
            text: "Limited Customization Option",
            available: true
        },
        {
            text: "Upto 4 tables",
            available: true
        },
        {
            text: "25% Transaction Fee",
            available: true
        },
        {
            text: "Standard Customer Support",
            available: true
        },
        {
            text: "24/7 Technical Support",
            available: true
        },
        {
            text: "Priority Feature Updates",
            available: false
        },
        
    ],
    plus: [
        {
            text: "Advanced Ordering System",
            available: true
        },
        {
            text: "Customizable Digital Menu",
            available: true
        },
        {
            text: "Upto 20 Tables",
            available: true
        },
        {
            text: "15% Transaction Fee",
            available: true
        },
        {
            text: "Priority Customer Supprot",
            available: true
        },
        {
            text: "24/7 Technical Support",
            available: true
        },
        {
            text: "Priority Feature Updates",
            available: true
        },
        
    ],
    premium: [
        {
            text: "Advanced Ordering System",
            available: true
        },
        {
            text: "Customizable Digital Menu",
            available: true
        },
        {
            text: "Upto 50 Tables",
            available: true
        },
        {
            text: "7% Transaction Fee",
            available: true
        },
        {
            text: "Priority Customer Supprot",
            available: true
        },
        {
            text: "24/7 Technical Support",
            available: true
        },
        {
            text: "Priority Feature Updates",
            available: true
        },
        
    ],
}