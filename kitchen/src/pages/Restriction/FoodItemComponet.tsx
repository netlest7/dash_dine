import link from '../../assets/burger.png'
import { Button } from "@/components/ui/button";

type Props = {
    item_name: string;
    item_price: number;
    item_available: boolean;
    item_category: string;
    item_photo: string;
}


export const FoodItemComponent = (props: Props) => {

    return(
      <div className="w-full flex justify-around  mt-4 mb-4 border-b-2 p-2">
          <img src={link} alt="img" className="w-[120px] h-[109px]"/>
          <div className='flex flex-col'>
              <h4>{props.item_name}</h4>
              <p>{props.item_category}</p>
              <h3 className='font-extrabold'>Rs. {props.item_price}</h3>
          </div>

          <Button className={props.item_available ? "bg-[#20402A]" : "bg-red-500"}>{props.item_available ? "Restrict Item" : "Available Now"}</Button>
           
      </div>
    )
}