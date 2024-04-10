import React from 'react'
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'

import Orders from './pages/Orders/Orders'
import Restriction from './pages/Restriction/Restriction'

import link from '../src/assets/burger.png'

import "./App.css";

const demoItemsOfCafe = [
  {
    item_name: "MC Aloo Tikki Burger",
        item_price: 200,
        item_description: "Cheese Slice , Cabbage , Red Sauce",
        item_available: true,
        item_category: "burger",
        item_photo: {
            public_id: "usrldsfklf",
            url: {link}
                    },
        item_type: "veg"
  },
  {
    item_name: "MC Maharaja Burger",
        item_price: 400,
        item_description: "Cheese Slice , Cabbage , Red Sauce , Double Patty , 6 sauces",
        item_available: true,
        item_category: "burger",
        item_photo: {
            public_id: "usrldsfklf",
            url: {link}
                    },
        item_type: "veg"
  },
  {
    item_name: "White Sauce Pasta",
        item_price: 300,
        item_description: "Cheese, Olives , Spices",
        item_available: true,
        item_category: "pasta",
        item_photo: {
            public_id: "usrldsfklf",
            url: "llsdjfsf"
                    },
        item_type: "veg"
  },
  {
    item_name: "Mix Sauce Pasta",
        item_price: 300,
        item_description: "Cheese, Olives, White and Red Sauce , Spices",
        item_available: false,
        item_category: "pasta",
        item_photo: {
            public_id: "usrldsfklf",
            url: "llsdjfsf"
                    },
        item_type: "veg"
  },
  {
    item_name: "Mix Sauce Pasta",
        item_price: 300,
        item_description: "Cheese, Olives, White and Red Sauce , Spices",
        item_available: false,
        item_category: "pasta",
        item_photo: {
            public_id: "usrldsfklf",
            url: "llsdjfsf"
                    },
        item_type: "veg"
  },
  {
    item_name: "Mix Sauce Pasta",
        item_price: 300,
        item_description: "Cheese, Olives, White and Red Sauce , Spices",
        item_available: false,
        item_category: "pasta",
        item_photo: {
            public_id: "usrldsfklf",
            url: "llsdjfsf"
                    },
        item_type: "veg"
  },
  {
    item_name: "Mix Sauce Pasta",
        item_price: 300,
        item_description: "Cheese, Olives, White and Red Sauce , Spices",
        item_available: false,
        item_category: "pasta",
        item_photo: {
            public_id: "usrldsfklf",
            url: "llsdjfsf"
                    },
        item_type: "veg"
  },
]



const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/orders' element= {<Orders numberOfTables={40}/>}/>
        <Route path='/restrict_menu' element= {<Restriction items={demoItemsOfCafe}/>}/>

       
      </Routes>
    </Router>
  )
}

export default App
