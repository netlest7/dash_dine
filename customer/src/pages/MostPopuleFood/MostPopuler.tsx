import React, { useEffect, useState } from 'react';
import "./MostPopuler.css"
import heart from "../../resorce/heart.png"
import heartclecked from "../../resorce/heartclicked.png"
import Quentaty from '../Quantaty/Quentaty';
import Offer from '../Offer/Offer';
import { CartMenue } from '../Interface/CartMenueInterFace';
interface FoodListItemProps {
  image: string;
  offer: number;
  starRating: number;
  isFavorite: boolean;
  foodName: string;
  price: number;
  Setcartlist: React.Dispatch<React.SetStateAction<CartMenue[]>>
  CartList: CartMenue[],
  catagory:string;
  buttonposition:number;
  setcartquantity:React.Dispatch<React.SetStateAction<number>>;
  cartquantity:number

}

const MostPopuler: React.FC<FoodListItemProps> = ({image,
  offer,
  starRating,
  isFavorite,
  foodName,
  price,
  Setcartlist,
  CartList,
  catagory,buttonposition,
  setcartquantity,
  cartquantity}) => {
  


  const  [cartnumber, setcartnumber] = useState<number>(0 );

const isavalable=(foodname:string):number=>{
  const existingItemIndex = CartList.findIndex(item => item.name === foodname);
  
  return existingItemIndex;
}

const findeQuantity = (foodName: string) => {
  let quantity: number = 0; // Initialize quantity to 0

  // Assuming `isavalable` is defined elsewhere and returns the index of the item in the CartList if available, otherwise -1
  let index = isavalable(foodName);

  if (index !== -1) {
    // If the item is available in the CartList
    const cart = [...CartList];
    quantity = cart[index].quantity;
    setcartnumber(quantity)
  }else{
    setcartnumber(0)
  }
};



  const handleAddToCart = (newItem:CartMenue) => {
    setcartnumber(cartnumber+1)
    setcartquantity(cartquantity+1)
let index=isavalable(foodName)

    if (index !== -1) {
      // Item with the same name already exists, increase its quantity
      const updatedCart = [...CartList];
      updatedCart[index].quantity += 1;
      Setcartlist(updatedCart);
    } else {
      // Item with the same name doesn't exist, add new item
      Setcartlist([...CartList, newItem]);
    }


  }
  const handleRemoveFromCart = (newItem:CartMenue) => {
    if(cartnumber>=1)
    {
      setcartnumber(cartnumber-1)
    setcartquantity(cartquantity-1)
    }
    let index=isavalable(foodName)
    
        if (index !== -1) {
          // Item with the same name already exists, increase its quantity
          const updatedCart = [...CartList];
          if(updatedCart[index].quantity>=1)
         {

          updatedCart[index].quantity -= 1;
          Setcartlist(updatedCart);
         }else{
          updatedCart.splice(index, 1);
          Setcartlist(updatedCart);
         }
        } 
    
    
      }
      useEffect(() => {
        let index = isavalable(foodName);
let quantity
  if (index !== -1) {
    // If the item is available in the CartList
    const cart = [...CartList];
    quantity = cart[index].quantity;
    setcartnumber(quantity)
  }else{
    setcartnumber(0)
  } // Reset cartValue to 0 when buttonposition changes
      }, [buttonposition]);

  return (
    <div style={{ display: "inline-block", margin: "8%", verticalAlign: "top" }}>
      <div style={{ position: "relative" }}>
        <img style={{ width: "300px", height: "auto" }} src={image} alt="" sizes="100%" />
        <div className='subdiv' style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", marginLeft: "5%", marginTop: "6%", flexDirection: "column" }}>
              <h3 style={{ padding: "10px", backgroundColor: "black", width: "150%", fontSize: "100%", paddingLeft: "30%", borderRadius: "16px 16px 16px 0px", color: "orange" }} >{offer}%off</h3>
              <h3 style={{
                paddingTop: "2%", marginTop: "8%", paddingBottom: "2%", paddingRight: "2%", backgroundColor: "#FFD607", width: "100%", fontSize: "100%", paddingLeft: "2%", borderRadius: "16px 16px 16px 16px", color: "white", border: "solid", borderColor: "#FAAF36"
                , borderWidth: "2px"
              }} >★{starRating}</h3>
            </div>
            <div style={{
              width: "40px",
              height: "40px",
              backgroundColor: "black",
              display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "40px",
              marginRight: "10px"
            }}>
              <img style={isFavorite ? {
                filter: "invert(0)",
                maxWidth: "100%", maxHeight: "100%", width: "50%"
              } : {
                filter: "invert(1)",
                maxWidth: "100%", maxHeight: "100%", width: "50%"
              }} src={isFavorite ? heartclecked : heart} alt="" />
            </div>

          </div>
          <div style={{
            width: "100%",
            height: "20%",
            marginTop: "18%",
            background: "linear-gradient(to top, rgba(0, 0, 0),rgba(0, 0, 0, 0))"
          }}>
            <h1
              style={{
                position: "relative",
                top: "20%",
                left: "6%",
                fontSize: "20px",
                color: "white"
              }}
            ><b>{foodName}</b></h1>
          </div>
        </div>

        <div style={{ width: "100%", padding: "4%", backgroundColor: "white" }}>
          <div style={{ position: "absolute" }}>
            <Offer data={45} />
          </div>
          <div style={{
            display: "flex", flexDirection: "row", width: "auto", maxWidth: " 30%",
            alignContent: "center",
            paddingLeft: "3px",
            paddingRight: "3px",
            paddingTop: "3px",
            paddingBottom: "3px",
            backgroundColor: "rgba(255, 255, 255, 0)",
            borderRadius: "5px",
            border: "solid",
            borderColor: "#B5B5B5",
            borderWidth: "1px",
            justifyContent: "center",
            marginLeft: "70%"


          }}>
            <div style={{
              width: "50%",
              height: "30px",
              backgroundColor: " #FFD607",
              borderRadius: "5px"
            }} 
            onClick={()=>{
              handleAddToCart({ catagory: catagory, name: foodName, price: price, image: image, quantity: cartnumber})
            }}
            ><h2
              style={{

                position: "relative",
                top: "3px",
                left: "35%"

              }}
            >+</h2></div>
            <h5
              style={{
                fontSize: "100%",
                color: "black",

                marginLeft: "5px",
                marginRight: "5px"
              }}
            >{cartnumber}</h5>
            <div
              style={{
                width: "50%",
                height: "30px",
                backgroundColor: " #FFD607",
                borderRadius: "5px"
              }}
            onClick={()=>{handleRemoveFromCart({ catagory: catagory, name: foodName, price: price, image: image, quantity: cartnumber})}}
            >
              <h2
                style={{

                  position: "relative",
                  top: "3px",
                  left: "35%"

                }}
              >-</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopuler;
