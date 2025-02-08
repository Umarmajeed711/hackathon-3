"use client";
import { Image } from "react-bootstrap";
import "./product.css";
import { useState } from "react";
// import { TopPics } from "../components/TopPics";
import Link from "next/link";
import TopPics from "../components/TopPics";


import client from "@/sanityClient";
import product from '@/src/sanity/schemaTypes/product';


const getSingleProducts = async ()=>{
  const SingleProducts = await client.fetch(
          `
          *[_type=="product"]{
          _id,
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
  return SingleProducts
}

const Products = async () => {

  const SingleProducts = await getSingleProducts()

  const [counter,setCounter] = useState(1)

  const handleIncreaseCounter = () => {
    setCounter(counter+1)
  }

  const handleDecreaseCounter = () => {
    if(counter > 1){
      setCounter(counter - 1 );
    }
  }
  return (
    <div className="container">
      {/* Breadcrums */}
      <div className="otherdetails my-4 d-flex gap-3">
       <Link href='/' style={{textDecoration:"none"}}> Home  </Link>  <span style={{ color: "#000" }}>&gt;</span>
       <Link href='/shop' style={{textDecoration:"none"}}> Shop  </Link>
        <span style={{ color: "#000" }}>&gt;</span>{" "}
        <b className="productId">Asgaard sofa</b>
      </div>

      {/* Product details */}
      <div className=" row  ">

        <div className="row">
          
           {/* Images */}
        <div className="row col-md-7 col-12 ">
        {/* side images */}
        <div className="col-md-2 col-sm-3 col-12 d-flex flex-column row-gap-3">
          <div className="sideImage">
            <Image
              src="/Asgaard sofa 1.png"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <div className="sideImage">
            <Image
              src="/Asgaard sofa 1.png"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <div className="sideImage">
            <Image
              src="/Asgaard sofa 1.png"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <div className="sideImage">
            <Image
              src="/Asgaard sofa 1.png"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        {/* main image */}
        <div className="col-md-6 col-sm-9 col-12 ">
          <div className="mainImage">
            <Image
              src="/Asgaard sofa 1.png"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
         </div>


          {/* product Details */}
        <div className="col-md-5 col-12">
          {/* heading */}
          <p className="heading">{SingleProduct.name}</p>
          {/* price */}
          <p className="Detailprice">Rs. {SingleProduct.price}</p>

          {/* Reviews */}
          <div className="d-flex gap-2">
            <p>*****</p>
            <p className="reviews">5 customer reviews</p>
          </div>
          {/* description */}
          <p className="description">
          {SingleProduct.description}
          </p>

          {/* size */}
          <div className="d-flex flex-column">
            <div>
              <p className="size">size</p>
            </div>
            <div className="d-flex gap-3">
              <p className="sizeSelected">L</p>
              <p className="sizeOptions">XL</p>
              <p className="sizeOptions">XLL</p>
            </div>
          </div>

          {/* color */}
          <div className="d-flex flex-column">
            <div>
              <p className="size">color</p>
            </div>
            <div className="d-flex gap-3">
              <p className="purple color"></p>
              <p className="black color"></p>
              <p className="peach color"></p>
            </div>
          </div>

          {/* counter and ADD to cart */}
          <div className="d-flex gap-3">
            {/* counter */}
           
              <div className="counter ">
                <p onClick={handleDecreaseCounter} className="counterButton">-</p>
                <p className="counterButton">{counter}</p>
                <p onClick={handleIncreaseCounter} className="counterButton">+</p>
              </div>
          

            {/* Add to cart */}
            <div className=" d-flex justify-content-around align-items-center">
              <p className="AddtocartButton">Add to Cart</p>
            </div>
          </div>

          <hr className="my-3" />

          {/* other Details */}
          <div>
            <p className="otherdetails">SKU : S5001 </p>
            <p className="otherdetails">Category : Sofas </p>
            <p className="otherdetails">Tags : Sofa,Chair,Home,Shop </p>
            <p className="otherdetails">Share : S5001 </p>
          </div>
        </div>

      </div>
        
       

       
      </div>

      <hr />

      {/* description */}

      <div>
        <div className="d-flex justify-content-center gap-sm-5 gap-3 my-4">
          <p className="descriptionHeading" style={{ color: "#000" }}>
            Description
          </p>
          <p className="descriptionHeading">Additonal Information</p>
          <p className="descriptionHeading">Reviews [5]</p>
        </div>

        <div>
          <p className="otherdetails">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>

          <p className="otherdetails">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>

        {/* Images */}

        <div className="d-flex flex-wrap justify-content-center gap-3">

        <div className="sofaImages">
        <Image src="/SingleProduct/Mask group (6).png" alt="" style={{height:'100%',width:"100%"}} />
        </div>

        <div className="sofaImages">
          <Image src="/SingleProduct/Mask group (7).png" alt="" style={{height:'100%',width:"100%"}}  />
        </div>
        

      </div>
      </div>

      {/*Related Products */}

      <div className="p-3 pt-5">
        <div style={{ textAlign: "center" }}>
          <h3>Related Products</h3>
        </div>

        {/* Top pics posts */}
        <TopPics />

        <div className="mt-5" style={{ textAlign: "center" }}>
          <span className="underButton"><Link href='/shop' style={{textDecoration:"none"}}>View More</Link></span>
        </div>
      </div>
    </div>
  );
};
export default Products
