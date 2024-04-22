import React, { useEffect, useState } from 'react'
import "./CartPage.css"
import back from "../../resorce/back.png"
import { CartMenue } from '../Interface/CartMenueInterFace'
import promocode from "../../resorce/promocode.png"
import { useNavigate } from 'react-router';

interface paerntcart {
  CartList:CartMenue[];
  setCartList:React.Dispatch<React.SetStateAction<CartMenue[]>>;
}
const CartPage: React.FC<paerntcart> = ({ CartList,setCartList }) => {
  console.log(CartList);


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
    setcartnumber(newItem.quantity + 1)
    setTotalPrice(totalPrice+newItem.price)
  
    let index = isavalable(newItem.name)

    if (index !== -1) {
      // Item with the same name already exists, increase its quantity
      const updatedCart = [...CartList];
      updatedCart[index].quantity += 1;
      setCartList(updatedCart);
    } else {
      // Item with the same name doesn't exist, add new item
      setCartList([...CartList, newItem]);
    }


  }
  const handleRemoveFromCart = (newItem: CartMenue) => {
    setTotalPrice(totalPrice-newItem.price)
    
    if (cartnumber >= 1) {
      setcartnumber(newItem.quantity - 1)
   
    }
    let index = isavalable(newItem.name)

    if (index !== -1) {
      // Item with the same name already exists, increase its quantity
      const updatedCart = [...CartList];
      if (updatedCart[index].quantity >= 1) {

        updatedCart[index].quantity -= 1;
        setCartList(updatedCart);
      } else {
        updatedCart.splice(index, 1);
        setCartList(updatedCart);
      }
    }


  }



  const history=useNavigate();
  const [totalPrice, setTotalPrice] = useState<number>(0);



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
    setTotalPrice( tp+amount);
  }, [CartList]); // Ensure the effect runs when CartList changes
  
  return (
    <div className='backcolor' >{/* parent div */}

      <div style={
        {
          display: "flex",
          flexDirection: "column",
          margin: "2%"
        }
      }>
        {// paernt flex
        }

        <div style={{ display: 'flex', flexDirection: 'row', position: 'relative', top: '%', justifyContent: 'center', marginBottom: "5%" }} >
          <img style={{ position: 'relative', left: '-21%', height: '100%', width: '8%', marginTop: '4%' }} onClick={()=>history("/home")} src={back} alt="" />
          <h1 style={{ fontSize: '200%', fontWeight: 'bold' }} >your order</h1>
        </div>
        <div style={
          {
            display: "flex",
            flexDirection: "column",
            maxHeight: "50vh",

            overflowX: "scroll"
          }
        } >
          <div style={{
  display: "flex",
  flexDirection: "column",
  position: "relative" // Set the parent div to relative position
}}>
  {CartList.map((value, index) => (
    <div style={{
      display: "flex",
      flexDirection: "row",
      margin: "10px",
      paddingBottom: "30px",
      position: "relative", // Set the child div to relative position
    }} key={index}>
      <img 
        src={value.image}
        style={{
          maxWidth: '37%',
          height: '105%',
          borderRadius: '10%'
        }}
        alt="" 
      />
      <div style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "2%"
      }}>
        <h3>{value.name}</h3>
        <h1>{value.price}</h1>
      </div>
      {/* Overlapping div */}
      <div style={{
        position: "absolute", // Set to absolute position
        top: "31%", // Adjust as needed
        left: "75%", // Adjust as needed
        // Example background color
        padding: "10px",
        borderRadius: "5px",
        width:"47%",
        zIndex: 1 // Ensure it appears above other content
      }}>
        {/* Your overlapping content */}
        

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
                handleAddToCart({ catagory: value.catagory, name: value.name, price: value.price, image: value.image, quantity: value.quantity })
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
                  color: "black",

                  marginLeft: "5px",
                  marginRight: "5px"
                }}
              >{ value.quantity+1}</h5>
              <div
                style={{
                  width: "50%",
                  height: "30px",
                  backgroundColor: " #FFD607",
                  borderRadius: "5px"
                }}
                onClick={() => {
                  handleRemoveFromCart({ catagory: value.catagory, name: value.name, price: value.price, image: value.image, quantity: value.quantity })
                }}
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
      <hr />
    </div>
  ))}
</div>



        </div>
        {/* add more items div */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }}>
          <h3 style={{ paddingLeft: "6%", width: "89%", fontSize: "180%" }} >Add More Items</h3>
          <img style={{ position: 'relative', height: '100%', width: '8%', marginTop: '4%', rotate: "180deg" }} onClick={()=>history("/home")} src={back} alt="" />
        </div>
        <div
          style={{
            width: "100%",
            height: "20%",

          }}
        >
          <div className="cont">

            <input
              type="text"
              placeholder="Enter your username"
              value=""

              className="input"
            />
            <div className='promocode-img-div' >
              <img
                src={promocode}
                alt="User"
                className="promocode-img"
              />
            </div>
          </div>

        </div>
        <div className='totale-bill' >
          <div className='totale-bill-sublable' >
            <h3
              style={
                {
                  fontSize: "20px",
                  fontWeight: "bold"
                }
              }
            >Total Bill</h3>
            <h3>Include taxes and charges</h3>
          </div>
          <h1>Rs.{totalPrice}</h1>
        </div>
        <div className='billcontinuebutton PopinsRegular' 
        onClick={()=>{
          history("/Payment")
        }}
        >
          <h1>
            continue
          </h1>
        </div>
      </div>
    </div>
  )
}
export default CartPage