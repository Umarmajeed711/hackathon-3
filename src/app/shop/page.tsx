import { Image } from "react-bootstrap";
import "./shop.css";
import { HeroSection } from "../components/HeroSection";
import { Properties } from "../components/properties";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { HiViewGrid } from "react-icons/hi";
import { BsViewList } from "react-icons/bs";
import client from "@/sanityClient";
import { ProductType } from "@/src/types/product";
import AllProductComponent from "../components/getAllProducts";


const getProducts = async ()=>{
  const products = await client.fetch(
          `
          *[_type=="product"]{
          _id,
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
  return products
}


export default async function Shop() {


    const products = await getProducts()
    console.log(products);
    
  
  return (
    
    <div>
      {/* Hero Section */}
      <HeroSection pageHeading={"Shop"} navigate={"Shop"} />

      {/* filter div */}
      <div className="filter mt-5 d-flex justify-content-center align-items-center">
        <div className="container row ">
          {/* filter icons div */}
          <div className="d-flex align-items-center justify-content-evenly col-12 col-md-6 gap-4">
            <div className="d-flex gap-3">
              <p className="filterIcons">
                <HiAdjustmentsHorizontal />
              </p>
              <p className="whiteDiv">Filter</p>
              <p className="filterIcons">
                <HiViewGrid />
              </p>
              <p className="filterIcons">
                <BsViewList />
              </p>
            </div>

            <div>
              <p className="showing ">Showing 1-16 of 32 results </p>
            </div>
          </div>

          {/* show & sort div */}
          <div className="d-flex align-items-center justify-content-evenly col-12 col-md-6 gap-5">
            <div className="d-flex column-gap-3 align-items-center">
              <p>Show</p>
              <p className="whiteDiv">{products.length}</p>
            </div>
            <div className="d-flex  column-gap-3 align-items-center">
              <p>Sort By</p>
              <p className="whiteDiv">Default</p>
            </div>
          </div>
        </div>
      </div>


      
        
      <AllProductComponent ourProducts={products} />
      
        
    
      

       {/* pages Button */}
       <div className="d-flex gap-4 justify-content-center m-3">
            <p className="page">1</p>
            <p className="otherPages">2</p>
            <p className="otherPages">3</p>
            <p className="otherPages">Next</p>
          </div>

      {/* Properties div */}

      <Properties />
    </div>
  );
}
