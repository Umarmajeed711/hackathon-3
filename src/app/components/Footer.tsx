
import Link from "next/link"
import "./footer.css"
export const Footer = () => {
  return (
    <div className='footer p-4 '>

        <div className='container  p-3' > 
        {/* p-5 d-flex justify-content-evenly gap-3 */}

          <div className="row">
            <div className='d-flex  align-items-center footerText col-lg-4 col-md-3 col-sm-12' >
                <p>400 University Drive Suite 200 Coral Gables,
                FL 33134 USA</p>
            </div>

            <div className='footerLinks  gap-sm-5 gap-4 col-lg-8 col-md-9 col-sm-12 '>

                <div className="d-flex gap-5">
                <div className='d-flex flex-column row-gap-3  '>
                    <h6>Links</h6>
                    <Link href={"/"} className='link'>Home</Link>
                    <Link href={"/products"} className='link'>About</Link>
                    <Link href={"/contact"} className='link'>Contact</Link>
                     <Link href={"/shop"} className='link'>Login</Link>
                </div>


                <div className='d-flex flex-column row-gap-3 '>
                    <h6>Help</h6>
                    <Link href={"/"} className='link'>Payment Options</Link>
                    <Link href={"/"} className='link'>Return</Link>
                    <Link href={"/"} className='link'>Privacy Policy</Link>
                </div>
                </div>

                <div className='d-flex flex-column  '>
                    <h6>News letter</h6>
                    <form className='d-flex gap-2 flex-wrap'>
                        <input type="email" placeholder='Enter Your Email Address'required />
                        <input type="submit" value="SUBSCRIBE" className='subscribe '/>
                    </form>
                </div>
            </div>

            </div>
        </div>

        <hr />
        <p style={{color:"black",}}>2025 Meubel House. All rights reserved</p>
    </div>
  )
}
