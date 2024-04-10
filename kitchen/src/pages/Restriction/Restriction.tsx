import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MdArrowBack } from "react-icons/md";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import  circlebg  from "../../assets/circlebg.png";
import  circleRight  from "../../assets/circleRight.png";
import  circlebottom  from "../../assets/circleBottom.png";
import { FoodItemComponent } from './FoodItemComponet';

type Props = {
        item_name: string;
        item_price: number;
        item_description: string;
        item_available: boolean;
        item_category: string;
        item_photo: {
            public_id: string;
            url: string
                    },
        item_type: string,
}

const storeFoodCategory = [
    "All",
    "Burgers",
    "Pizza",
    "Shakes",
    "Pastas",
    "Mocktails",
    "Wraps",
    "Chinese",
    "Indian",
    "Combos"
  ]

const Restriction = (props: {items: Props[]}) => {
    const navigate = useNavigate()
  return (
    <div className='w-screen h-screen  bg-[#FFFFF] relative p-10 pb-32'>
        <img src={circlebg} className='w-[300px] h-[300px] absolute left-0 top-0 z-1 '/>

        <div className='flex justify-between z-30 items-center z-20'>

            <button onClick={()=> navigate('/orders')} className='cursor-pointer z-20 '>
            <MdArrowBack size={30}/>
            </button>

            <h2 className='text-4xl'>RESTRICT MENU</h2>

            <Button className='bg-[#20402A] z-30' onClick={()=> navigate('/orders')}> Save</Button>

        </div>


        {/* Filter */}

        <div className='w-full p-0 z-[99999] flex mb-3 justify-center py-2'>
        <Select >
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
            {storeFoodCategory.map((category)=>(
            <SelectItem value={category}>{category}</SelectItem>

            ))}
        </SelectContent>
        </Select>

        </div>

        <Separator/>

        {/* food items display */}
            <div className="w-full h-full flex">
                

                {/* Veg Setion */}
                <div className="w-[50%] h-full p-3">
                <ScrollArea className="h-full w-full rounded-md border p-4 ">
                 
                    {
                        props.items.map((item)=>(
                            <FoodItemComponent item_name={item.item_name} item_photo={item.item_photo.url} item_available={item.item_available} item_category={item.item_category}
                                    item_price={item.item_price}
                                />
                        ))
                    }

                </ScrollArea>

                </div>
                {/* Veg Setion */}

                {/* Non Veg Setion */}
                <div className="w-[50%] p-3">
                <ScrollArea className="h-full w-full rounded-md border p-4">
                {
                        props.items.map((item)=>(
                            <FoodItemComponent item_name={item.item_name} item_photo={item.item_photo.url} item_available={item.item_available} item_category={item.item_category}
                                    item_price={item.item_price}
                                />
                        ))
                    }


                </ScrollArea>

                </div>
                {/* Non Veg Setion */}
            </div>


        {/* food items display */}



        <img src={circleRight} className='w-[300px] h-[300px] absolute z-21 top-[-150px] right-[-150px]'/>
        <img src={circlebottom} className='w-[300px] h-[300px] absolute z-21 bottom-[-200px] right-[500px] '/>
    </div>
  )
}

export default Restriction