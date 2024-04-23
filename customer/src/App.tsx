import React, { useState } from 'react'
import Welcome from './pages/Welcome/Welcome'
import Home from './pages/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FZF from './pages/404/FZF';
import CartPage from './pages/CartPage/CartPage';
import { CartMenue } from './pages/Interface/CartMenueInterFace';
import Payment from './pages/Payment/Payment';
import Bill from './pages/Bill/Bill';

function App() {
  const  [CartList, setCartList] = useState<CartMenue[]>([]);
  const [cartquantity, setcartquantity] = useState<number>(0);
  console.log(CartList);
  
  const router = createBrowserRouter([
    {
      path: "/:Table",
      element:<Welcome />,
      errorElement: <FZF />
    },
    {
      path: "/Bill",
      element:<Bill  CartList={CartList} setCartList={setCartList} />,
      errorElement: <FZF />
    },
    {
      path: "/Payment",
      element:<Payment  CartList={CartList} setCartList={setCartList} />,
      errorElement: <FZF />
    },
    {
      path: "/home",
      element:<Home CartList={CartList} setCartList={setCartList}
      cartquantity={cartquantity} setcartquantity={setcartquantity} />,
      errorElement: <FZF />
    },{
      path: "/Cart",
      element:<CartPage  CartList={CartList} setCartList={setCartList}/>,
      errorElement: <FZF />
    },
    {
      path: "/",
      element:<FZF/>,
      errorElement: <FZF />
    },
  ]);
  
  return (
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  )
}

export default App
