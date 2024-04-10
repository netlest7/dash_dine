import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Button } from "@/components/ui/button"
  import { Switch } from "@/components/ui/switch"
//   import {
//     HoverCard,
//     HoverCardContent,
//     HoverCardTrigger,
//   } from "@/components/ui/hover-card"
  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  import  circlebg  from "../../assets/circlebg.png";
  import  circleRight  from "../../assets/circleRight.png";
  import  circlebottom  from "../../assets/circleBottom.png";
import { useNavigate } from 'react-router-dom'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { MdOutlineMenuBook } from "react-icons/md";
type Props = {
    numberOfTables: number
}


const ordersList = [
    {
        tableNumber : 1,
        orderedItem : ["mushroom swiss pizza","kitkat shake"],
        totalItem : 2,
        orderType: "Dine In",
        status: "Pending"
    },
    {
        tableNumber : 2,
        orderedItem : ["classic chicken burger","Cold Coffee","Margherita Pizza"],
        totalItem : 3,
        orderType: "Dine In",
        status: "Pending"
    },
    {
        tableNumber : 4,
        orderedItem : ["choco loaded coffee","Truffle Mushroom burger","Cold Coffee","Margherita Pizza"],
        totalItem : 4,
        orderType: "Dine In",
        status: "Pending"
    },
    {
        tableNumber : 7,
        orderedItem : ["choco loaded coffee","Truffle Mushroom burger","Cold Coffee","Margherita Pizza"],
        totalItem : 4,
        orderType: "Dine In",
        status: "Pending"
    },
    {
        tableNumber : 20,
        orderedItem : ["choco loaded coffee","Truffle Mushroom burger","Cold Coffee","Margherita Pizza"],
        totalItem : 4,
        orderType: "Dine In",
        status: "Pending"
    },
    {
        tableNumber : 9,
        orderedItem : ["choco loaded coffee","Truffle Mushroom burger","Cold Coffee","Margherita Pizza"],
        totalItem : 4,
        orderType: "Dine In",
        status: "Pending"
    },
    {
        tableNumber : 9,
        orderedItem : ["choco loaded coffee","Truffle Mushroom burger","Cold Coffee","Margherita Pizza"],
        totalItem : 4,
        orderType: "Dine In",
        status: "Pending"
    },
    {
        tableNumber : 9,
        orderedItem : ["choco loaded coffee","Truffle Mushroom burger","Cold Coffee","Margherita Pizza"],
        totalItem : 4,
        orderType: "Dine In",
        status: "Pending"
    },
    {
        tableNumber : 9,
        orderedItem : ["choco loaded coffee","Truffle Mushroom burger","Cold Coffee","Margherita Pizza"],
        totalItem : 4,
        orderType: "Dine In",
        status: "Pending"
    },
    {
        tableNumber : 9,
        orderedItem : ["choco loaded coffee","Truffle Mushroom burger","Cold Coffee","Margherita Pizza"],
        totalItem : 4,
        orderType: "Dine In",
        status: "Pending"
    },
    {
        tableNumber : 9,
        orderedItem : ["choco loaded coffee","Truffle Mushroom burger","Cold Coffee","Margherita Pizza"],
        totalItem : 4,
        orderType: "Dine In",
        status: "Pending"
    },
    {
        tableNumber : 9,
        orderedItem : ["choco loaded coffee","Truffle Mushroom burger","Cold Coffee","Margherita Pizza"],
        totalItem : 4,
        orderType: "Dine In",
        status: "Pending"
    },
]

// const Orders = (props: Props) => {

//     const renderTooltips = () => {
//         const tooltips = [];
//         for (let i = 0; i < 40; i++) {
//           tooltips.push(
//             <TooltipProvider key={i}>
//               <Tooltip>
//                 <TooltipTrigger>Hover</TooltipTrigger>
//                 <TooltipContent>
//                   <p>Add to library</p>
//                 </TooltipContent>
//               </Tooltip>
//             </TooltipProvider>
//           );
//         }
//         return tooltips;
//       };
       
//   return (
//     <div className='w-screen h-screen'>
//         <h1>CAFE Name</h1>

//         <div className="w-full flex">
//             <div className="w-[70%]">

//             <Table>
//             <TableHeader>
//                 <TableRow>
//                 <TableHead className="w-[100px]">Table Number</TableHead>
//                 <TableHead>Ordered Items</TableHead>
//                 <TableHead >Total Items</TableHead>
//                 <TableHead className="text-center">Order Type</TableHead>
//                 <TableHead className="text-right">Orders Status</TableHead>
//                 </TableRow>
//             </TableHeader>

//             {
//                 ordersList.map((order)=> (
//                 <TableBody>
//                 <TableRow>
//                 <TableCell className="font-medium">{order.tableNumber}</TableCell>
//                 <TableCell >{order.orderedItem.map((item)=>(<p>{item}<br/></p>))}</TableCell>
//                 <TableCell>{order.totalItem}</TableCell>
//                 <TableCell className='text-center'>{order.orderType}</TableCell>
//                 <TableCell className="text-right">
//                 <Button variant="outline">{order.status === 'Pending' ? "Pending" : "Fullfilled"}</Button>
//                 </TableCell>
//                 </TableRow>
//                 <hr/>

//                 </TableBody>
//                 ))
//             }

//             </Table>

//             </div>
//             <div className="w-[30%] flex flex-col items-center">

//                 <div className="w-[70%] flex border-2 justify-between p-5 rounded-lg border-black">
//                     <h5>Accepting orders</h5>
//                     <Switch />
//                 </div>

//                 <Button className='w-[70%] mt-10 p-6 bg-[#20402A]'>Restrict Menu</Button>


//                 <div className='w-[70%]'>
//                 <h5>Accepting orders</h5>
                 
//                  <div className="flex text-wrap">
                
//                     {
//                     renderTooltips()
//                     }
//                  </div>

//                 </div>


//             </div>

//         </div>
//     </div>
//   )
// }

// export default Orders;

const Orders = (props: Props) => {


    const renderTooltips = () => {
        const order = "fullfilled"
        const tooltips = [];
        for (let i = 0; i < props.numberOfTables; i++) {
          tooltips.push(
            <TooltipProvider key={i}>
              <Tooltip>
                <TooltipTrigger>
                <input key={i} className={`w-[30px] h-[30px] ${order === 'fullfilled' ? "border-2" : "bg-green-400"} rounded-lg m-1 text-center placeholder-black`} placeholder={String(i+1)} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Table No: {i+1}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        }
        return <div className="tooltips-container">{tooltips}</div>;
    };
       

    const navigate = useNavigate();

    return (
        <div className='w-screen h-screen  bg-[#FFFFF] relative p-10'>
            <img src={circlebg} className='w-[300px] h-[300px] absolute left-0 top-0 '/>
            <h1 className='text-4xl text-center'>CODE CAFE</h1>
            <div className="w-full flex mt-10 ">
                <div className="w-[70%] h-[80vh] overflow-y-scroll border-2  rounded-xl border-[#A5A5A5] p-5">
                    <Table className=''>
                        <TableHeader className='sticky'>
                            <TableRow>
                                <TableHead className="w-[100px]">Table Number</TableHead>
                                <TableHead>Ordered Items</TableHead>
                                <TableHead>Total Items</TableHead>
                                <TableHead className="text-center">Order Type</TableHead>
                                <TableHead className="text-right">Orders Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        {ordersList.map((order, index) => (
                            <TableBody key={index}>
                                <TableRow>
                                    <TableCell className="font-medium">{order.tableNumber}</TableCell>
                                    <TableCell>{order.orderedItem.map((item, index) => (<p key={index}>{item}<br /></p>))}</TableCell>
                                    <TableCell>{order.totalItem}</TableCell>
                                    <TableCell className='text-center'>{order.orderType}</TableCell>
                                    <TableCell className="text-right">
                                        <Button className='bg-gradient-to-b from-yellow-300 to-orange-400 border border-yellow-600 rounded-md' variant="outline">{order.status === 'Pending' ? "Pending" : "Fullfilled"}</Button>
                                    </TableCell>
                                </TableRow>
                                <hr/>
                            </TableBody>
                        ))}
                    </Table>
                </div>

                <div className="w-[30%] flex flex-col items-center ml-[70%] absolute ">
                    <div className="w-[70%] flex border-2 justify-between p-5 rounded-lg border-black">
                        <h5>Accepting orders</h5>
                        <Switch />
                    </div>
                    <Button className='w-[70%] mt-10 p-6 bg-[#20402A] text-lg' onClick={()=> navigate('/restrict_menu')}>Restrict Menu {" "} <MdOutlineMenuBook size={30} className='ml-2'/> </Button>
                    <h2 className='text-2xl text-center mb-1 mt-2'>Live Order Status</h2>

                    <div className='w-[300px] h-[481px]'>
                        <div className="flex  flex-col border-2 rounded-lg mt-8 p-8">
                            {

                                renderTooltips()
                            }
                        
                        </div>
                    </div>
                </div>
            </div>
            <img src={circleRight} className='w-[300px] h-[300px] absolute z-21 top-[-150px] right-[-150px]'/>
            <img src={circlebottom} className='w-[300px] h-[300px] absolute z-21 bottom-[-200px] right-[500px] '/>

        </div>
    )
}

export default Orders;
