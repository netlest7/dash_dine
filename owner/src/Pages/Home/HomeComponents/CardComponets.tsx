import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card"
  
type Props = {
    imageUrl: string
    cardHeading: string
    cardBody: string
}

const CardComponets = (props: Props) => {
  return (
    <Card className='bg-transparent w-[300px] flex flex-col items-center justify-center  bg-gradient-to-b from-[#1E1E1E] to-black-800 mb-9 mt-[20px] '>
    <CardHeader>
      <img src={props.imageUrl} className='w-[200px] h-[200px]'/>
    </CardHeader>
    <CardContent className='text-white'>
      <p>{props.cardHeading}</p>
    </CardContent>
    <CardFooter>
      <p className='text-white text-wrap text-center'>{props.cardBody}</p>
    </CardFooter>
  </Card>
  )
}

export default CardComponets