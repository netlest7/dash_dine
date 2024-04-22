import { CartMenue } from "./CartMenueInterFace";

export interface FoodListItemProps {
    image: string;
    offer: number;
    starRating: number;
    isFavorite: boolean;
    foodName: string;
    price: number;
    Setcartlist: React.Dispatch<React.SetStateAction<CartMenue[]>>
    SetcartQuantity: React.Dispatch<React.SetStateAction<number>>;
    CartList: CartMenue[],
    catagory:string;
    buttonposition:number;
    CartQuantity:number
  }
  