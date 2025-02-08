import { Image } from 'react-bootstrap'
import './component.css'
// import client from "@/sanityClient";
import product from '@/src/sanity/schemaTypes/product';
import Link from 'next/link';
import { ProductType } from '@/src/types/product';



export default function TopPics({relatedProducts}:{relatedProducts:ProductType[]}) {

  return (
    <div>
         <div className="mt-5 topPics-grid-container ">
          {
            relatedProducts.map((relatedProduct,i) => (
                <div className="mycards p-2" key={i}>
                <Link href={`/ProductDetail/${relatedProduct.id}`} style={{textDecoration:"none",color:"#000"}}>
                <div className="ImageDiv">
                <Image src={relatedProduct.imagePath} alt={product.name} className="ImageHeight" />
                </div>
                <p className="title">{relatedProduct.name}</p>
                <p className="price">{relatedProduct.price}</p>
                </Link>
              </div>
            
              
            )
            )
            }
         

          

         

        
        </div>
    </div>
  )
}
