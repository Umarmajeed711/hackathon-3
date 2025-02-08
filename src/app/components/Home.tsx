'use client'
// import "./home.css"
import '../Style.css'
import { Image } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import { FaRegClock } from "react-icons/fa";
import { RiCalendarTodoFill } from "react-icons/ri";
import TopPics from './TopPics';
import Link from 'next/link';
import { ProductType } from '@/src/types/product';
 const Home = ({relatedProducts}:{relatedProducts:ProductType[]}) => {
  return ( 
    <div className="main">
      


        {/* Hero Section */}
        <div className=" heroSection  row">

          <div className="d-flex flex-wrap heroTitle col-4" >
             <p className="h1">Rocket single seater</p>
             <p className="underButton">Shop Now</p>
          </div>

          {/* Hero image */}
          <div  className="col-7">
            <Image src="/SingleSeater.png" alt="" className="heroImage"  />
          </div>
        </div>




         {/* main menu */}
        <div className="d-flex p-5  sideTableDiv row" >


          {/* side div 1 */}
          <div className="d-flex flex-column sideDiv col-sm-6 col-10">
            <Image  src="/SideTable/Mask group.png" alt="mask group"  style={{height:"100%"}} />

            <div className="side">
            <p className='sideTable'>Side Table</p>
            <span className="underButton"><Link href='/shop' style={{textDecoration:"none",color:"#000"}}>View More</Link></span>
            </div>
          </div>

           {/* side div 2 */}
          <div className="d-flex flex-column sideDiv col-sm-6 col-10">
             <Image  src="/SideTable/cloudSofa.png" alt="cloud sofa" style={{height:"100%"}}/>
            <div className="side">
            <p className='sideTable'>Side Table</p><span className="underButton"><Link href='/shop' style={{textDecoration:"none",color:"#000"}}>View More</Link></span>
            </div> 
          </div>


        </div>


        {/* Top Picks for You */}

       <div className="p-3 pt-5" >
        <div style={{textAlign:"center"}}>
          <h3> Top Picks FOr You</h3>
          <p className="toppicspara">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        </div>

          {/* Top pics posts */}
          <div className="container">

          
        
        <TopPics relatedProducts={relatedProducts}/>

         <div className="mt-5" style={{textAlign:'center'}}>
         <span className="underButton"><Link href='/shop' style={{textDecoration:"none",color:"#000"}}>View More</Link></span>
         </div>

         </div>

        </div>



        {/* Asgard Sofa */}

        <div className="d-flex align-items-center px-2 asgardSofa row">

          <div className="col-sm-8 col-12 asgardHeight">
            <Image src="/Asgaard sofa 1.png" alt="" style={{width:"100%",height:"100%"}} />
          </div>

          <div className="p-5 newArrivals col-sm-4 col-12" >
             <p className="newArrivalHeading">New Arrivals</p>
             <p className="asgardHeading" >Asgaard Sofa</p>
             <br />
             <span className=" orderButton">Order Now</span>
          </div>
        </div>



        {/* Our Blogs */}
        
        <div className="ourBlogs pt-5 p-3 mt-3">
        <div style={{textAlign:"center"}}>
          <h3>Our Blogs</h3>
          <p className="toppicspara" >Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        </div>


         {/* Top pics div */}
        <div  className="mt-5 topPics">

        {/* // Post */}
        <div className="container   article" >


         <div className="row">

          {/* post 1 div */}
          <div style={{textAlign:"center"}} className="col-12 col-sm-4" >
            <div className="blogImage">
            <Image src="/OurBlogs/Rectangle 13.png" alt="rectangle.13" style={{height:"100%",width:"100%"}}  />
            </div>
            


            <div className="p-3 mt-3 blogData">
               <p>Going all-in with millenail design</p>
               <span className="underButton">Read More</span>

               <div className="d-flex gap-2 justify-content-center mt-3">
                <p><FaRegClock className='time'/> 5 min</p>
                <p><RiCalendarTodoFill className='time'/> 2 Feb 2025</p>
               </div>
            </div>

            
    
          </div>

           {/* post 2 div */}
          <div  style={{textAlign:"center"}} className="col-12 col-sm-4">
            <div className="blogImage">
            <Image src="/OurBlogs/Rectangle 14.png" alt="Rectangle.14"  style={{height:"100%",width:"100%"}} />
            </div>
          

           <div className="p-3 mt-3 blogData" >
           <p>Going all-in with millenail design</p>
           <span className="underButton">Read More</span>

               <div className="d-flex gap-2 justify-content-center mt-3">
               <p><FaRegClock className='time'/> 5 min</p>
               <p><RiCalendarTodoFill className='time'/> 2 Feb 2025</p>
               </div>
            </div>


          </div>

           {/* post 3 div */}
          <div  style={{textAlign:"center"}} className="col-12 col-sm-4">
            <div className="blogImage">
            <Image src="/OurBlogs/Rectangle 15.png" alt="Rectangle.15"  style={{height:"100%",width:"100%"}} />
            </div>
           

            <div className="p-3 mt-3 blogData">
            <p>Going all-in with millenail design</p>
            <span className="underButton">Read More</span>

               <div className="d-flex gap-2 justify-content-center mt-3">
               <p><FaRegClock className='time'/> 5 min</p>
               <p><RiCalendarTodoFill className='time'/> 2 Feb 2025</p>
               </div>
            </div>

    
          </div>

          </div>

        </div>


         {/* Its a crousel which only shows in the mobile screens */}
        <Carousel className="hideOnPC">
      {/* carousal 1 */}
      <Carousel.Item interval={1000} className='crouselItem'>
      <Image src="/OurBlogs/Rectangle 13.png" alt=""  style={{width:"100vw", height:"100%"}}/>
        <Carousel.Caption>
        <p className="crousalText">Going all-in with millenail design</p>
        <span className="underButton">Read More</span>
        </Carousel.Caption>
      </Carousel.Item>

       {/* carousal 2 */}
      <Carousel.Item interval={500} className='crouselItem'>
      <Image src="/OurBlogs/Rectangle 14.png" alt=""  style={{width:"100vw",height:"100%" }}/>
        <Carousel.Caption>
        <p className="crousalText">Going all-in with millenail design</p>
        <span className="underButton">Read More</span>
        </Carousel.Caption>
      </Carousel.Item>



       {/* carousal 3 */}
      <Carousel.Item className='crouselItem'>
      <Image src="/OurBlogs/Rectangle 15.png" alt=""  style={{width:"100vw",height:"100%"}}/>
        <Carousel.Caption>
        <p className="crousalText">Going all-in with millenail design</p>
        <span className="underButton">Read More</span>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>

        {/* // View all post button */}

        <div className="mt-5" style={{textAlign:'center'}}>
         <span className="underButton">View All post</span>
         </div>

         </div>



        </div>
       


       {/* Our Instagram  */}

       <div>
        <div className="d-flex justify-content-center align-items-center  ourInstagram">

          <div className="d-flex justify-content-center align-items-center flex-column" >
          <p className="instaHeading">Our Instagram</p>
          <p className="instaFollow">Follow our store on Instagram</p> 
          <p  className="d-flex justify-content-center align-items-center followUs" >Follow Us</p>
          </div>

        </div>
       </div>
        
    </div>
  ) 
}
export default Home;