import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import Home from './components/Home'
import "./Style.css"
import './shop/shop.css'
import client from "@/sanityClient";


const getRelatedProducts = async ()=>{
  const relatedProducts = await client.fetch(
          `
          *[_type=="product"][15..20]{
          id,
          name,
          description,
          stockLevel,
          price,
          imagePath,
          discountPercentage,
          isFeaturedProduct
      }
          ` // here we are using custom image_url property. 
  )
  return relatedProducts

}


export default async function Page() {

 const relatedProducts = await getRelatedProducts();
    
  return (
    

    <Home relatedProducts={relatedProducts}/>
    
   
  );
}