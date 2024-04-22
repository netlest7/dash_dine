import React, { useEffect, useState } from 'react'
import logo from "../../resorce/logo.png"
import "./Bill.css"
import { CartMenue } from '../Interface/CartMenueInterFace';

interface parentcart{
    CartList:CartMenue[];
    setCartList:React.Dispatch<React.SetStateAction<CartMenue[]>>;
  }


const  Bill :React.FC<parentcart>=({CartList,setCartList})=> {

    const [totalPrice, setTotalPrice] = useState<number>(0);
    const  [GST, setGST] = useState<number>(0);

   // p=g/tot*100
   // p*totle/100
    // Calculate total price before rendering JSX
    useEffect(() => {
      let tp = 0;
      CartList.forEach((value) => {
        if(value.quantity>0){
            tp += value.price*value.quantity
          } else {
            tp += value.price
          }
      });
var amount=(18*tp)/100
      setGST(amount)
      
      setTotalPrice( tp);
    }, [CartList]); // Ensure the effect runs when CartList changes
    

    return (

        <div className='backcolor '>
            <div className='dbpage' >
                <img src={logo} alt="" />
                <h1 style={{ fontSize: "150%", fontWeight: "bold" }}>NBC Cafe</h1>
                <h4 style={{
                    marginTop: "4%",
                }} >Beside Wakodkar Nursing Home, Nehru Nagar West, Vidya Vihar Colony, Bhilai, Chhattisgarh 490020</h4>
                <hr style={{ marginTop: "4%" }} />
                <div style={{ marginTop: "4%" }} className='billgrnratewithcaganame'>

                    <div></div>
                    <div>
                        <h1 style={{ marginTop: "3%", fontSize: "110%", fontWeight: "bold" }}  >order id</h1>
                        <h5 style={{ marginTop: "3%", fontSize: "110%", fontWeight: "bold" }}  >21/04/2024</h5>
                    </div>
                </div>
                <hr style={{ marginTop: "4%" }} />
                <div style={{ marginTop: "4%" }} className='tabledb'>
                    <table >
                        <tr>
                            <td>decrepitation</td>
                            <td>Rat</td>
                            <td>amount</td>
                        </tr>
                        {CartList.map((value,index)=>{
                            return(
                                <tr>
                                <td>
    
                                    <div className='tabledbdes'>
                                        <h1>{value.name}</h1>
                                        <h4>{value.quantity}</h4>
                                    </div>
    
                                </td>
                                <td>{value.price}</td>
                                <td>{value.price*value.quantity}</td>
                            </tr>
                            )
                        })}
                       
                        <tr>
                            <td>‎ </td>
                            <td>‎  </td>
                            <td>‎  </td>
                        </tr>

                        <tr style={{ borderTop: '1px solid black', marginTop: "4%" }} >
                            <td>Total with tax</td>
                            <td><div style={{ display: "flex", flexDirection: "column" }}><h1>item totle</h1> <h2>CGST</h2> <h3>SGST</h3></div></td>
                            <td><div style={{ display: "flex", flexDirection: "column" }}><h1>{totalPrice}</h1> <h2>8.69</h2> <h3>8.69</h3></div></td>
                        </tr>

                    </table>
                    <hr />
                </div>

                <div style={{
                    marginTop:"4%"
                }} className='billgrnratewithcaganame' >
                    <div></div>
                    <div>
                   
                        <h5 style={{ marginTop: "3%", fontSize: "110%", fontWeight: "bold" }}  >Totle amount</h5>

                    </div>
                    <div>
                   
                   <h5 style={{ marginTop: "3%", fontSize: "110%", fontWeight: "bold" }}  >{totalPrice+GST}</h5>

               </div>
                </div>






            </div>


        </div>
    )
}

export default Bill