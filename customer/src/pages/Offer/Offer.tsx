import React from 'react';
import "./offer.css"
import des from "../../resorce/dis.png"
import bookmark from "../../resorce/bookmark.png"
interface OfferProps {
  data: number;
}

const Offer: React.FC<OfferProps> = ({ data }) => {
  return (
    <div className='offerback'>
        <img className='offerbookmark' src={bookmark} alt="" />
        <img className='offerdiescont' src={des} alt="" />
        <h1 className='offerprice'>RS.{data}</h1>
        </div>
  );
};

export default Offer;
