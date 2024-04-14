import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
  
type Props = {
    planType : string
    planAmount : string
    planFeatures : {
        text : string,
        available: boolean
    }[]
}

const PlanComponents = (props: Props) => {
  return (
<Card className={`bg-transparent w-[300px] flex flex-col items-center justify-center  bg-gradient-to-b ${props.planType === 'PLUS' ? "from-green-900":"from-[#1E1E1E]"} to-black-800 mb-9 text-white`}>
  <CardHeader>
    <div className='flex flex-col text-center gap-1'>
    <CardTitle className='text-xl'>{props.planType}</CardTitle>
    <CardDescription className='text-2xl w-full text-center text-white '>₹ {props.planAmount} / month</CardDescription>
    </div>
  </CardHeader>
  <CardContent>
  <RadioGroup>
  {
    props.planFeatures.map((feature,index)=>(

      <div className="flex items-center space-x-2 mb-8" key={index}>
    <RadioGroupItem value="option-one" id="option-one" checked={feature.available} className='text-white border-white ' />
    <Label htmlFor="option-one" className={feature.available ?"text-white": "text-[#6B7280]" }>{feature.text}</Label>

    </div>  
    ))
  }
 
  
</RadioGroup>

  </CardContent>
  <Button className='bg-gradient-to-b from-yellow-300 to-orange-400 border border-yellow-600 rounded-md text-black mb-9'>Choose Plan</Button>
</Card>

  )
}
export default PlanComponents;
