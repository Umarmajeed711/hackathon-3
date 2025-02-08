import "../shop/shop.css";
import { HeroSection } from "../components/HeroSection";
import { Properties } from "../components/properties";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { HiViewGrid } from "react-icons/hi";
import { BsViewList } from "react-icons/bs";
import { Image } from "react-bootstrap";
import Link from "next/link";
import { ProductType } from "@/src/types/product";

export default function AllProductComponent({ourProducts}:{ourProducts:ProductType[]}) {

  return (
    
    <div className="container">
    <div className="mt-5 grid-container ">

    {
    ourProducts.map((product) => {
   
        return(

          <div className="mycards p-2" key={product._id}>
         <Link href={`/ProductDetail/${product.id}`} style={{textDecoration:"none",color:"#000"}}>
          <div className="ImageDiv">
            <Image
              src={product.imagePath}
              alt={product.name}
              className="ImageHeight"
            />
          </div>
          <p className="title">{product.name}</p>
          <p className="price">${product.price}</p>
          </Link>
        </div>
        )

  
})
} 




 </div>
 </div>

  
    
      

        
  
  );
}
