import React, { useState, useEffect } from 'react';
import Back from '@/components/Back';
import logo from "../.././resorce/logo.png";
import { Button } from '@/components/ui/button';
import "./Welcome.css"
import welcom from "../../resorce/burger.png"
import eating from "../../resorce/eatingman.png"
import eatinfwithfriends from "../../resorce/eatingeithfrineds.png"
import pisa from "../../resorce/pisa.png"
import { useNavigate } from 'react-router';
const Welcome = () => {
  const [count, setCount] = useState<number>(1);
  const history=useNavigate();

  let content: JSX.Element | null;
  useEffect(() => {
    const timer = setTimeout(() => {
     setCount(2)
     // history("/home")
    }, 1000);
// setCount(2);
    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  
  switch (count) {
    case 1:
      content = (
        <div className='homebackdiv'>
          <h1 className='cafaname'>NBC CAFA</h1>
          <img src={logo} id='logo' />

          <Button className='GS' variant="yellow" size="lg" color="yellow" onClick={() => setCount(2)}>
            Get Started
          </Button>
          <h3 className='dd'>by dash dine food service</h3>
        </div>
      );
      break;
    case 2:
      content = (
        <div>
          <div className='iconwithlabe'>
            <img src={logo} className='iconwithlabeimage' />
            <div style={{
              display: "flex", flexDirection: "column", width: "100%", marginTop: "2%"
            }}>
              <h3 className='brandlable' style={{ position: "relative", top: "1px" }} ><b>Dash Dine</b></h3>


              <h3 className='brandlable' style={{ position: "relative", top: "-15px" }}><b>Food Service</b></h3>
            </div>

          </div>
          <img src={welcom} style={{marginTop: "20%"}} className='wellcomeimage' alt="" />
          <h1 style={{ position: "relative", width: "100%", textAlign: "center", fontSize: "30px", fontFamily: 'Popinsbold' }}> <b>Welcome</b> </h1>
          <p style={{ position: "relative", textAlign: "center", fontSize: "15px", margin: "10px", fontFamily: "PopinsRegular" }} >It’s a pleasure to meet you. We are excited that you’re here so let’s get started!</p>
         
          <div style={{ width: "100%", marginTop: "15%", position: "relative" }} >  <Button style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }} variant="yellow" size="lg" color="yellow" onClick={() => setCount(3)}>
            Get Started
          </Button></div>
        </div>
      );
      break;
    case 3:
      content = (
        
      <div>
      <div className='iconwithlabe'>
        <img src={logo} className='iconwithlabeimage' />
        <div style={{
          display: "flex", flexDirection: "column", width: "100%", marginTop: "2%"
        }}>
          <h3 className='brandlable' style={{ position: "relative", top: "1px" }} ><b>Dash Dine</b></h3>


          <h3 className='brandlable' style={{ position: "relative", top: "-15px" }}><b>Food Service</b></h3>
        </div>

      </div>
      <img src={eating} style={{ marginLeft: "15%",marginTop:"15%" }} className='wellcomeimage' alt="" />
      <h1 style={{ position: "relative", width: "100%", textAlign: "center", fontSize: "30px", fontFamily: 'Popinsbold' }}> <b>All your favorites</b> </h1>
      <p style={{ position: "relative", textAlign: "center", fontSize: "15px", margin: "10px", fontFamily: "PopinsRegular" }} >A delicious meal you desire every hour.</p>
      <div className='sliderthumbparent'>
        <div style={{width:"10px",height:"5px",backgroundColor:"#20402A"}}  className='slderthumb'></div>
        <div style={{width:"7px",height:"5px",backgroundColor:"#979797"}} className='slderthumb'></div>
        <div style={{width:"7px",height:"5px",backgroundColor:"#979797"}} className='slderthumb'></div>
      </div>
      <div style={{ width: "100%", marginTop: "15%", position: "relative" }} >  <Button style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }} variant="yellowarrow" size="lg" color="yellow" onClick={() => setCount(4)}>
        →
      </Button></div>
    </div>
      );
      break;
    case 4 :
      content = (
        <div>
        <div className='iconwithlabe'>
          <img src={logo} className='iconwithlabeimage' />
          <div style={{
            display: "flex", flexDirection: "column", width: "100%", marginTop: "2%"
          }}>
            <h3 className='brandlable' style={{ position: "relative", top: "1px" }} ><b>Dash Dine</b></h3>


            <h3 className='brandlable' style={{ position: "relative", top: "-15px" }}><b>Food Service</b></h3>
          </div>

        </div>
        <img src={eatinfwithfriends} style={{ marginLeft: "15%" ,marginTop:"0%"}} className='wellcomeimage' alt="" />
        <h1 style={{ position: "relative", width: "100%", textAlign: "center", fontSize: "30px", fontFamily: 'Popinsbold' }}> <b>contactless experience</b> </h1>
        <p style={{ position: "relative", textAlign: "center", fontSize: "15px", margin: "10px", fontFamily: "PopinsRegular" }} >Minimizes physical contact and ensures a safe and hygienic ordering process for customers and staff.</p>
       
        <div className='sliderthumbparent'>
        <div style={{width:"7px",height:"5px",backgroundColor:"#979797"}}  className='slderthumb'></div>
        <div style={{width:"10px",height:"5px",backgroundColor:"#20402A"}} className='slderthumb'></div>
        <div style={{width:"7px",height:"5px",backgroundColor:"#979797"}} className='slderthumb'></div>
      </div>
        <div style={{ width: "100%", marginTop: "15%", position: "relative" }} >  <Button style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }} variant="yellowarrow" size="lg" color="yellow" onClick={() => setCount(5)}>
          →
        </Button></div>
      </div>
      );
      break;
    case 5:
      content = (
        <div>
        <div className='iconwithlabe'>
          <img src={logo} className='iconwithlabeimage' />
          <div style={{
            display: "flex", flexDirection: "column", width: "100%", marginTop: "2%"
          }}>
            <h3 className='brandlable' style={{ position: "relative", top: "1px" }} ><b>Dash Dine</b></h3>


            <h3 className='brandlable' style={{ position: "relative", top: "-15px" }}><b>Food Service</b></h3>
          </div>

        </div>
        <img src={pisa} style={{ marginLeft: "10%" }} className='wellcomeimage' alt="" />
        <h1 style={{ position: "relative", width: "100%", textAlign: "center", fontSize: "30px", fontFamily: 'Popinsbold' }}> <b>easy payment</b> </h1>
        <p style={{ position: "relative", textAlign: "center", fontSize: "15px", margin: "10px", fontFamily: "PopinsRegular" }} >It’s a pleasure to meet you. We are excited that you’re here so let’s get started!.</p>
        <div className='sliderthumbparent'>
        <div style={{width:"7px",height:"5px",backgroundColor:"#979797"}}  className='slderthumb'></div>
        <div style={{width:"7px",height:"5px",backgroundColor:"#979797"}} className='slderthumb'></div>
        <div style={{width:"10px",height:"5px",backgroundColor:"#20402A"}} className='slderthumb'></div>
      </div>
        <div style={{ width: "100%", marginTop: "10%", position: "relative" }} >  <Button style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }} variant="yellowarrow" size="lg" color="yellow" onClick={() =>  history("/home")}>
          →
        </Button></div>
      </div>
      );
      break;
    default:
      content = null;
      break;
  }
  {content} 
  return (
    <Back>

{content}

    </Back>
  );
};

export default Welcome;
