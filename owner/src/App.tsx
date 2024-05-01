import React, { useEffect } from 'react'
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import OwnerDetails from './Pages/ownerDetails/OwnerDetails'
// import User from './Pages/UserDashboard/User'
import Profile from './Pages/Profile/Profile'
import Menu from './Pages/Menu/Menu'
import ManualMenu from './Pages/Menu/ManualMenu'
import AutomaticMenu from './Pages/Menu/AutomaticMenu'
import { useLoadStoreMutation} from '../redux/feature/cafe/cafeApi';
import { useSelector } from 'react-redux'


const App = () => {


  const [loadStore] = useLoadStoreMutation()

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const {store} = useSelector((state:any) => state.cafe)

  const data2= {
    url : "6627e97ca4651d5fe9bf6651"
   }

   useEffect(() => {
   loadStore(data2.url)
   }, [])
   
  
 

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/ownerRegisteration' element={<OwnerDetails/>}/>
        <Route path='/profile' element={<Profile store={store}/>}/>

        {/*  menu */}
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/menu/manual' element={<ManualMenu/>}/>
        <Route path='/menu/automatic' element={<AutomaticMenu/>}/>

      </Routes>
    </Router>
  )
}

export default App