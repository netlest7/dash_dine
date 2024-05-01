import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button';
import { Sidebar } from '../PageComponents/Sidebar';
import { ScrollArea } from "@/components/ui/scroll-area"
import { GoPlus } from "react-icons/go";



const ManualMenu = () => {
    const [category,setCategory] = useState("");


    interface Item {
        itemName: string;
        itemPrice: string;
        itemDescription: string;
        itemPhoto: string;
    }
    const [item,setItem] = useState<Item[]>([
        {
            itemName: "",
            itemPrice: "",
            itemDescription: "",
            itemPhoto: ""
        }
    ]);
    const addItem = () => {
        setItem(prevItems => [
          ...prevItems,
          {
            itemName: "New Item",
            itemPrice: "New Price",
            itemDescription: "New Description",
            itemPhoto: "New Photo URL"
          }
        ]);

       
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const handleItemChange = (index:number, field:keyof Item, value:any) => {
        const updatedItems = [...item];
        updatedItems[index][field] = value;
        setItem(updatedItems);
        console.log(item,"kldfslkdsflks");
        
    };
  return (
    <div className='w-screen h-screen bg-black flex overflow-y-hidden '>

    <Sidebar route={1}/>
    <div className='w-full p-8 gap-3'>
    <header className='flex w-full justify-between '>
       <h1 className='text-white text-2xl'>Add Food Items Manualy</h1>
       <Button className='bg-gradient-to-b from-yellow-300 to-orange-400 border border-yellow-600 
rounded-md text-black '>Save </Button>
       </header>

        <div className='mb-9 border-b mt-9 p-2 w-[50%] px-0'>
        <h3 className='text-white text-xl mb-2'>Category</h3>
        <Input className='border-none text-amber-300 placeholder:text-red-50' value={category} onChange={(e)=> setCategory(e.target.value)}  required placeholder='Enter Category Ex - Burger'/>
        </div>


        <Button className=' bg-transparent border mb-9' onClick={addItem}>
            Add Item <GoPlus />
        </Button>

        <ScrollArea className='w-full h-full flex'>

       {

        item.map((_,index)=> (
            <Card className='bg-transparent p-4 flex w-[80%] text-white mb-5 gap-3'>
            <div className='w-[70%]'>
            <CardTitle className='mb-4'>
                Item Name
            </CardTitle>

            <CardDescription>
                <Input  placeholder='Enter the name of your items' className='text-amber-300' onChange={(e)=> handleItemChange(index, 'itemName', e.target.value)}/>
            </CardDescription>

            <CardTitle className='mb-4 mt-3'>
                Item Price
            </CardTitle>

            <CardDescription>
                <Input placeholder='Enter the price of your items'  className='text-amber-300' onChange={(e)=> handleItemChange(index, 'itemPrice', e.target.value)}/>
            </CardDescription>

            <CardTitle className='mb-4 mt-3'>
                Item Description
            </CardTitle>

            <CardDescription>
            <Textarea  className='text-amber-300' onChange={(e)=> handleItemChange(index, 'itemDescription', e.target.value)} />

            </CardDescription>
            </div>

            <div draggable = "true" className='text-white  border border-dashed rounded-3xl w-[30%] flex items-center justify-center'>
               <p>Drop your images here</p>
            </div>
        </Card>
        ))

       }
       <div className='h-[30vh]'>

       </div>
        </ScrollArea>
    </div>



    </div>
  )
}

export default ManualMenu