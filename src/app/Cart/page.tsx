
import { Image } from 'react-bootstrap'
import './cart.css'
import { HeroSection } from '../components/HeroSection'
import { Properties } from '../components/properties'
import { AiFillDelete } from "react-icons/ai";
 const  Cart  =  () => {
  return (
    <div>



       {/* Hero Section */}
        <HeroSection pageHeading={'Cart'} navigate={'cart'}/>


      <div className='container  p-3 mt-ms-5 mt-3'>

        <div className='row gap-5'>

         {/* add to cart items */}
        <div className='col-md-8   col-12 '>

            <div className='cartForPc'>

                 {/* cart header */}
                <div className='row  cartHeader p-3'>
                    <div className='col-2'></div>
                    <div className='col-3'>Product</div>
                    <div className='col-2'>Price</div>
                    <div className='col-2'>Quantity</div>
                    <div className='col-2'>Subtotal</div>
                    <div className='col-1'></div>
                    </div>

                  {/* cart items details */}
                    <div className='row  border d-flex align-items-center'>
                    <div className='col-2 cartImage'>
                        <Image src="/Asgaard sofa 1.png" alt="" style={{width:"100%"}} />
                    </div>
                    <div className='col-3 productInfo'>Asgaard Sofa</div>
                    <div className='col-2 productInfo'> Rs.250,000.00</div>
                    <div className='col-2  d-flex justify-content-center'>
                        <div className='border px-2 py-1 title'>1</div></div>
                    <div className='col-2 productInfo'>250,000.00</div>
                    <div className='col-1'><AiFillDelete className='remove'/></div>

                    </div>
            </div>

             {/* Cart details which show only on  mobiles */}
            <div className='cartForMobile'>
               {/* cart header */}
               <div className='cartHeader'>
                {/* image div */}
               <div className='d-flex justify-content-center p-2 cartImage'>
             
                        <Image src="/Asgaard sofa 1.png" alt="" style={{width:"70%",height:"150px"}} />
                
                </div>
                 
                <div className='px-2 pt-2 mobileFields '>
                  <p>Product</p>
                  <p>Asgaard sofa</p>
                </div>
                <div className='px-2 pt-2 mobileFields '>
                  <p>Price</p>
                  <p>Rs.250,000.00</p>
                </div>
                <div className='px-2 pt-2 mobileFields '>
                  <p>Quantity</p>
                  <p>1</p>
                </div>
                <div className='d-flex justify-content-center  px-2 '>
                   <p >remove cart<AiFillDelete className='remove' /></p>
                </div>
               </div>

            </div>

        </div>

        {/* Cart Total */}
        <div className='col-md-3  col-12 px-5 py-3 cartHeader d-flex justify-content-center'>


        <div className='d-flex flex-column align-items-center  p-2 border' style={{backgroundColor:"#f4f4f4"}}>

            {/* heading cart total */}
            <p className='cartTotal'>Cart Totals</p>

            {/* Sub total of each product */}
            <div className='d-flex column-gap-5'>
                <p className='productInfo'>Subtotal</p>
                <p className='productInfo'>Rs.250,000.00</p>
            </div>

            {/* total amount div */}
            <div className='d-flex column-gap-5'>
                <p className='productInfo'>Total</p>
                <p className='shoppingTotal'>Rs.250,000.00</p>
            </div>

            {/* cheack out button */}
            <div className='my-3'>
                <button type='submit' className='checkOutButton'>
                    check out
                </button>
            </div>
         </div>

        </div>

        
        </div>
        
      </div>




       {/* Properties div */}
        <Properties />

        
    </div>
  )
}
export default Cart

