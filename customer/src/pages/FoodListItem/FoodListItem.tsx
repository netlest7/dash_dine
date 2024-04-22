import React, { useState, useEffect, useReducer } from 'react';
import "./FoodListItem.css"
import Quentaty from '../Quantaty/Quentaty';
import Offer from '../Offer/Offer';
import heart from "../../resorce/heart.png"
import heartclicked from "../../resorce/heartclicked.png"
import des from "../../resorce/dis.png"
import bookmark from "../../resorce/bookmark.png"
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
  catagory: string;
  buttonposition: number;
  setcartquantity: React.Dispatch<React.SetStateAction<number>>;
  cartquantity: number

}




const FoodListItem: React.FC<FoodListItemProps> = ({
  image,
  offer,
  starRating,
  isFavorite,
  foodName,
  price,
  Setcartlist,
  CartList,
  catagory, buttonposition,
  setcartquantity,
  cartquantity
}) => {

  const [cartnumber, setcartnumber] = useState<number>(0);

  const isavalable = (foodname: string): number => {
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
    } else {
      setcartnumber(0)
    }
  };



  const handleAddToCart = (newItem: CartMenue) => {
    setcartnumber(cartnumber + 1)
    setcartquantity(cartquantity + 1)
    let index = isavalable(foodName)

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
  const handleRemoveFromCart = (newItem: CartMenue) => {
    if (cartnumber >= 1) {
      setcartnumber(cartnumber - 1)
      setcartquantity(cartquantity - 1)
    }
    let index = isavalable(foodName)

    if (index !== -1) {
      // Item with the same name already exists, increase its quantity
      const updatedCart = [...CartList];
      if (updatedCart[index].quantity >= 1) {

        updatedCart[index].quantity -= 1;
        Setcartlist(updatedCart);
      } else {
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
    } else {
      setcartnumber(0)
    } // Reset cartValue to 0 when buttonposition changes
  }, [buttonposition]);

  return (
    <div>
      <div style={{ position: "relative", width: "100%", height: "200px", marginLeft: "10px", marginRight: "10px" }}>
        <img src={image} alt="" style={{ width: "100%", height: "100%", borderRadius: "10px" }}

        />
        <div style={{ position: "absolute", top: "1px", left: "1px", color: "white", width: "100%", height: "88%" }}>

          <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "70%", justifyContent: "space-between" }}>
            <div style={{
              display: "flex"
              , flexDirection: "row"
              , width: "100%", height: "auto"
            }} >

              <div style={{
                display: "flex",
                flexDirection: "column"
                , justifyContent: "space-between"
                , width: "100%", height: "auto"
              }} >
                <h3 style={{
                  padding: "10px 10px 8px 10%",
                  backgroundColor: "black",
                  width: "50%",
                  fontSize: "100%",
                  borderRadius: "16px 16px 16px 0px",
                  color: "orange",
                  position: "relative",
                  marginLeft: "10%",
                  marginTop: "5%"
                }} >{offer}%off</h3>
                <h3 style={{
                  marginTop: "8%",
                  backgroundColor: "rgb(255, 214, 7)",
                  width: "38%",
                  fontSize: "100%",
                  borderRadius: "16px",
                  color: "white",
                  border: "2px solid rgb(250, 175, 54)",
                  paddingTop: "2%",
                  paddingLeft: "7%",
                  paddingRight: "2%",
                  paddingBottom: "2%",
                  marginLeft: "10%"
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
                }} src={isFavorite ? heartclicked : heart} alt="" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignSelf: "flex-end",
                width: "48%",

                border: "solid",
                padding: "2px",
                marginRight: "7%",
                borderRadius: "10px",
                borderWidth: "1px",
                borderColor: "gray"
              }}
            >
              <div style={{
                width: "50%",
                height: "30px",
                backgroundColor: " #FFD607",
                borderRadius: "5px"
              }}
                onClick={() => {
                  handleAddToCart({ catagory: catagory, name: foodName, price: price, image: image, quantity: cartnumber })
                }}
              ><h2
                style={{

                  position: "relative",
                  top: "3px",
                  left: "35%"

                }}
              >+</h2>
              </div>
              <h5
                style={{
                  fontSize: "100%",
                  color: "white",

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
                onClick={() => { handleRemoveFromCart({ catagory: catagory, name: foodName, price: price, image: image, quantity: cartnumber }) }}
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
        <div style={{ position: "absolute", bottom: "0", left: "0", width: "100%", backgroundColor: "white", color: "black", display: "flex", flexDirection: "column", borderRadius: "0px 0px 10px 10px" }}>
          <h1 className='interMediate' style={{ fontSize: "20px", fontWeight: "bold" }}>{foodName}</h1>
          <div style={{
            display: "flex",
            flexDirection: "row"
          }}

          >
            <img style={
              {
                width: "20%",
                height: "20%",
                rotate: "-90deg"
              }
            } src={bookmark} alt="" />
            <img style={
              {
                width: "20%",
                height: "20%",
                rotate: "-90deg"
              }} src={des} alt="" />
            <h1
              style={{
                position: "relative",
                top: "1%",
                left: "4%",
                fontSize: "150%"
              }}
            ><b>Rs{price}</b></h1>
          </div>
        </div>
      </div>
    </div>


  );
};

export default FoodListItem;
