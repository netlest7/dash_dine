import React, { ReactElement, useState, useEffect } from 'react';
import CustomSlider from '../CustomSlider/CustomSlider';
import "./Home.css"
import logo from "../../resorce/logo.png"
import serch from "../../resorce/serch.png"
import filter from "../../resorce/filter.png"
import cart from "../../resorce/cart.png"
import MostPopuler from '../MostPopuleFood/MostPopuler';
import FoodListItem from '../FoodListItem/FoodListItem';
import { CartMenue } from '../Interface/CartMenueInterFace';
import { useNavigate } from 'react-router';

interface Menue {
  image: string;
  price: number;
  isfavrot: boolean;
  foodname: string;
  starerating: number;
  quentity: number;
}
interface parentcart{
  CartList:CartMenue[];
  setCartList:React.Dispatch<React.SetStateAction<CartMenue[]>>;
  cartquantity:number;
  setcartquantity:React.Dispatch<React.SetStateAction<number>>
}
const Home: React.FC<parentcart> = ({CartList,setCartList,cartquantity,setcartquantity}) => {
  // Define your data for the slider
  const sliderData = [
    { title: "First Item",  catagory:"sanwitch1", description: "Description of first item", image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "First Item",  catagory:"sanwitch2", description: "Description of first item", image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "First Item",  catagory:"sanwitch3", description: "Description of first item", image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "First Item",  catagory:"sanwitch4", description: "Description of first item", image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "First Item",  catagory:"sanwitch5", description: "Description of first item", image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "First Item",  catagory:"sanwitch6", description: "Description of first item", image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "First Item",  catagory:"sanwitch7", description: "Description of first item", image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "First Item",  catagory:"sanwitch8", description: "Description of first item", image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600" },
  ];
  const [Takeaway, setTakeaway] = useState(false);
  const [foodlist, setfoodlist] = useState<string[]>([]);
  const [buttonposition, setbuttonposition] = useState<number>(0);
 

  const history=useNavigate();
  
 
  //const [MFPlist, setMFPlist] = useState<MFPDetile[]>([]);

  const handleClick = () => {
    setTakeaway(!Takeaway)
    console.log(Takeaway);

  } // Ensure animation duration matches the delay in the CSS animation

  const initialData: Menue[][] = [
    [

      {
        image: "https://img.freepik.com/free-photo/grilled-cheeseburger-with-tomato-sesame-bun-generative-ai_188544-12302.jpg?w=1380&t=st=1713435285~exp=1713435885~hmac=f51e28c160fc72d59d32571681c4186eaf8d4b0f70f252c5fd181b016e63a067"
        , price: 200,
        isfavrot: true,
        foodname: "burger1",
        starerating: 4,
        quentity: 4


      },
      {
        image: "https://img.freepik.com/free-photo/grilled-cheeseburger-with-tomato-sesame-bun-generative-ai_188544-12302.jpg?w=1380&t=st=1713435285~exp=1713435885~hmac=f51e28c160fc72d59d32571681c4186eaf8d4b0f70f252c5fd181b016e63a067"
        , price: 200,
        isfavrot: true,
        foodname: "burger",
        starerating: 4,
        quentity: 4


      },
      {
        image: "https://img.freepik.com/free-photo/grilled-cheeseburger-with-tomato-sesame-bun-generative-ai_188544-12302.jpg?w=1380&t=st=1713435285~exp=1713435885~hmac=f51e28c160fc72d59d32571681c4186eaf8d4b0f70f252c5fd181b016e63a067"
        , price: 200,
        isfavrot: true,
        foodname: "burger2",
        starerating: 4,
        quentity: 4


      },
      {
        image: "https://img.freepik.com/free-photo/grilled-cheeseburger-with-tomato-sesame-bun-generative-ai_188544-12302.jpg?w=1380&t=st=1713435285~exp=1713435885~hmac=f51e28c160fc72d59d32571681c4186eaf8d4b0f70f252c5fd181b016e63a067"
        , price: 200,
        isfavrot: true,
        foodname: "burger3",
        starerating: 4,
        quentity: 4


      },
      {
        image: "https://img.freepik.com/free-photo/grilled-cheeseburger-with-tomato-sesame-bun-generative-ai_188544-12302.jpg?w=1380&t=st=1713435285~exp=1713435885~hmac=f51e28c160fc72d59d32571681c4186eaf8d4b0f70f252c5fd181b016e63a067"
        , price: 200,
        isfavrot: true,
        foodname: "burger4",
        starerating: 4,
        quentity: 4


      },
      {
        image: "https://img.freepik.com/free-photo/grilled-cheeseburger-with-tomato-sesame-bun-generative-ai_188544-12302.jpg?w=1380&t=st=1713435285~exp=1713435885~hmac=f51e28c160fc72d59d32571681c4186eaf8d4b0f70f252c5fd181b016e63a067"
        , price: 200,
        isfavrot: true,
        foodname: "burger5",
        starerating: 4,
        quentity: 4


      },
      {
        image: "https://img.freepik.com/free-photo/grilled-cheeseburger-with-tomato-sesame-bun-generative-ai_188544-12302.jpg?w=1380&t=st=1713435285~exp=1713435885~hmac=f51e28c160fc72d59d32571681c4186eaf8d4b0f70f252c5fd181b016e63a067"
        , price: 200,
        isfavrot: true,
        foodname: "burger",
        starerating: 4,
        quentity: 4


      },
      {
        image: "https://img.freepik.com/free-photo/grilled-cheeseburger-with-tomato-sesame-bun-generative-ai_188544-12302.jpg?w=1380&t=st=1713435285~exp=1713435885~hmac=f51e28c160fc72d59d32571681c4186eaf8d4b0f70f252c5fd181b016e63a067"
        , price: 200,
        isfavrot: true,
        foodname: "burger",
        starerating: 4,
        quentity: 4


      },


    ],
    [{
      image: "https://www.simplyrecipes.com/thmb/X2B0QCVdGJWGO1gW6GR7cz1rhe0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg"
      , price: 200,
      isfavrot: true,
      foodname: "pizza",
      starerating: 4,
      quentity: 4


    },
    {
      image: "https://www.simplyrecipes.com/thmb/X2B0QCVdGJWGO1gW6GR7cz1rhe0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg"
      , price: 200,
      isfavrot: true,
      foodname: "pizza",
      starerating: 4,
      quentity: 4


    },
    {
      image: "https://www.simplyrecipes.com/thmb/X2B0QCVdGJWGO1gW6GR7cz1rhe0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg"
      , price: 200,
      isfavrot: true,
      foodname: "pizza",
      starerating: 4,
      quentity: 4


    },
    {
      image: "https://www.simplyrecipes.com/thmb/X2B0QCVdGJWGO1gW6GR7cz1rhe0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg"
      , price: 200,
      isfavrot: true,
      foodname: "pizza",
      starerating: 4,
      quentity: 4


    },
    {
      image: "https://www.simplyrecipes.com/thmb/X2B0QCVdGJWGO1gW6GR7cz1rhe0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg"
      , price: 200,
      isfavrot: true,
      foodname: "pizza",
      starerating: 4,
      quentity: 4


    },
    {
      image: "https://www.simplyrecipes.com/thmb/X2B0QCVdGJWGO1gW6GR7cz1rhe0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg"
      , price: 200,
      isfavrot: true,
      foodname: "pizza",
      starerating: 4,
      quentity: 4


    },
    {
      image: "https://www.simplyrecipes.com/thmb/X2B0QCVdGJWGO1gW6GR7cz1rhe0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg"
      , price: 200,
      isfavrot: true,
      foodname: "pizza",
      starerating: 4,
      quentity: 4


    },
    ]

  ];

  const [data, setData] = useState<Menue[][]>(initialData)
  useEffect(() => {


    var list: string[] = []

    for (let i = 0; i < 10; i++) {

      list.push(`foodlist ${i}`)
    }

    setfoodlist(list)



  }, []); //


const gotocart=()=>{
  history("/Cart")
}
  



  return (
    <div className='backcolor'>
      <div className='cafenamewithlogocontaner' >

        <div className='cafenamewithlogo'>
          <img src={logo} alt="" style={{ width: "12%", position: "relative", marginTop: "3%" }} />
          <div style={{
            display: "flex", flexDirection: "column", width: "100%", marginTop: "2%", marginLeft: "2%"
          }}>
            <h3 style={{ position: "relative", fontSize: "20px" }} ><b>NBC Cafe</b></h3>


            <h3 className='Popinsbold' style={{ position: "relative",  fontSize: "17px", letterSpacing: "-0.24px ", color: "#303030",fontWeight: "bold" }}>Let’s get your order</h3>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column-reverse", right: " 10%", }}  onClick={gotocart} >
          <img className='cart' src={cart} alt="" />
          <div className='cartcircle' ><h3>{cartquantity}</h3></div>
        </div>

      </div>

      <div className='softinsizeshadow' >
        <img src={serch} style={{

          position: "relative",
          width: "10%",
          height: "60%",
          top: "20%",
          marginLeft: "3%",

        }} alt="" />
        <input className='serchinput' type="text" name="" id="" />
        <img src={filter} style={{

          position: "relative",
          width: "15px",
          height: "15px",
          top: "36%",
          marginRight: "5%",

        }}
          alt="" />
      </div>
      <div className='swipswitch'>
        <div className={Takeaway ? 'swipswitchbackground play-animation' : 'swipswitchbackground play-back'} onClick={handleClick}></div>
        <div className='swipswitchbuttoncontainer'>
          <input style={Takeaway ? { color: "#20402A" } : { color: "white" }} type="button" onClick={() => setTakeaway(false)} value="Dine-in" />
          <input style={Takeaway ? { color: "white" } : { color: "#20402A" }} type="button" onClick={() => setTakeaway(true)} value="Take away" />
        </div>
      </div>
      <div className='customsilder'>
        <CustomSlider data={sliderData} />

      </div>


      <div className='fooditemlist' >

        {foodlist.map((value, index) => (<div key={index} >
          <input className='fooditemlistbutton' style={buttonposition == index ? { backgroundColor: "#20402A", color: "white" } : { backgroundColor: "white", color: "black" }} onClick={() => (setbuttonposition(index))} type="button" value={value} />
        </div>))}
      </div>
      <h2 style={{ fontSize: "150%", color: "#20402A", margin: "20px" }}><b>Most Popular</b></h2>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap", width: "100%", height: "auto" }} >

        {foodlist.map((value,index)=>(
          <MostPopuler image={"https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600"}
          
          offer={34}
          starRating={4.9}
          isFavorite={true}
          foodName={`sandwitch${index}`}
          price={299}
          Setcartlist={setCartList}
          CartList={CartList}
          catagory={foodlist[buttonposition]}
          buttonposition={buttonposition}
          setcartquantity={setcartquantity}
          cartquantity={cartquantity}
        />
        ))}


      </div>
      <h1 style={{ fontSize: "150%", color: "#20402A", margin: "20px" }} ><b>{foodlist[buttonposition]}</b></h1>
      <div className='' style={{
   display: "grid",
   gridTemplateColumns: "repeat(2, 1fr)",
   columnGap: "10px",
   rowGap: "15px",
   
   
   marginRight:"20px"
  
}} >

{data[buttonposition].map((value, index) => (
  <div key={index}>
     <FoodListItem
     image={value.image}
     offer={34}
     starRating={value.starerating}
     isFavorite={value.isfavrot}
     foodName={value.foodname}
     price={value.price}
     Setcartlist={setCartList}
     CartList={CartList}
     catagory={foodlist[buttonposition]}
     buttonposition={buttonposition}
     setcartquantity={setcartquantity}
     cartquantity={cartquantity}
    />
  </div>
 
))}

      </div>

    </div>
  );
};

export default Home;
