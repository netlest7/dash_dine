import autoMenu from "../../assets/autoMenu.png"
import manualMenu from "../../assets/manualMenu.png"
import {
    Card,
} from "@/components/ui/card"
import { Sidebar } from '../PageComponents/Sidebar'



const Menu = () => {
    const featureAvailable = true

  return (
    <div className='w-screen h-screen bg-black flex'>
        <Sidebar route={1}/>
        <div className='w-[80%] p-8'>
        <h2 className="text-white text-4xl">Add Items to Virtual Menu</h2>
        <p className="text-white mb-7">You can either add the food items manually or drop an image of your existing menu. Choose one option here.</p>

       <div className={featureAvailable ? 'w-full flex justify-around': "flex justify-center"}>
       {/* <Card className='w-[40%] bg-transparent flex flex-col items-center cursor-pointer hover:scale-105 bg-gradient-to-b from-yellow-300 to-orange-400 border border-yellow-600'> */}
       <a className=' w-[40%] p-0' href='/menu/manual'>
       <Card className='w-full bg-transparent flex flex-col items-center cursor-pointer hover:scale-105 bg-gradient-to-bl from-slate-600 to-black border'>
            <img src={manualMenu} width={300} height={300}/>
            <h3 className='text-white text-2xl mb-4 hover:text-amber-300'>Add Food Items Manually</h3>
      </Card>
       </a>

      {
        featureAvailable ? (
            <a className=' w-[40%] p-0' href='/menu/automatic'>
            <Card className='w-full bg-transparent flex flex-col items-center cursor-pointer hover:scale-105 bg-gradient-to-bl from-slate-600 to-black border'>
                 <img src={autoMenu} width={300} height={300}/>
                 <h3 className='text-white text-2xl mb-4 hover:text-amber-300'>Add Menu By Droping An Image</h3>
           </Card>
            </a>
        ) : (<></>)
      }
       </div>
        </div>
    </div>
  )
}

export default Menu