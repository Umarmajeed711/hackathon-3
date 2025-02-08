"use client";

import "./checkOut.css";
import { HeroSection } from "../components/HeroSection";
import { useFormik } from "formik";
import * as yup from "yup";

 const CheckOut = () => {
  // billing Validation
  const billingValidation = yup.object({
    firstName: yup.string().required("first name is required"),
    lastName: yup.string().required("last name is required"),
    email: yup
      .string()
      .email("enter a valid email")
      .required("Email is required"),
    street: yup.string().required("street address is required"),
    city: yup.string().required("city name is required"),
    zipcode: yup.string().required("zipcode is required"),
    number: yup.number().required("number is required"),
  });

  
  // initailizes the billingFormik
  const billingFormik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      street: "",
      city: "",
      zipcode: "",
      number: "",
      email: "",
      subject: "",
    },
    validationSchema: billingValidation,

    onSubmit: (values) => {
      console.log(values);
      billingFormik.resetForm();
    },
  });
  return (
    <div>
     
      {/* Hero Section */}
      <HeroSection pageHeading={'Check Out'} navigate={'check Out'}/>

      <div className="container d-flex justify-content-center p-5">
      <form onSubmit={billingFormik.handleSubmit}>
        <div className="row ">

          
          {/* Billing Details */}
          <div className="col-md-6 col-12">
            <p className="billingHeading">Billing Details</p>

            {/* name div */}
            <div className="row">
              {/* first name div */}
              <div className="my-3 col-6 ">
                <label htmlFor="firstname">
                  <p className="username">first name</p>
                  <input
                    type="text"
                    id="firstname"
                    className="inputField "
                    name="firstName"
                    value={billingFormik.values.firstName}
                    onChange={billingFormik.handleChange}
                  />
                </label>
                {billingFormik.touched.firstName &&
                Boolean(billingFormik.errors.firstName) ? (
                  <p className="requiredError">
                    {billingFormik.touched.firstName &&
                      billingFormik.errors.firstName}
                  </p>
                ) : null}
              </div>

              {/* last name div */}
              <div className="my-3 col-6 ">
                <label htmlFor="lastname">
                  <p className="username">last name</p>
                  <input
                    type="text"
                    id="lastname"
                    className="inputField "
                    name="lastName"
                    value={billingFormik.values.lastName}
                    onChange={billingFormik.handleChange}
                  />
                </label>
                {billingFormik.touched.lastName &&
                Boolean(billingFormik.errors.lastName) ? (
                  <p className="requiredError">
                    {billingFormik.touched.lastName &&
                      billingFormik.errors.lastName}
                  </p>
                ) : null}
              </div>
            </div>

            {/* Company name div */}
            <div className="my-3 row ">
              <label htmlFor="companyName">
                <p className="username">Company name (Optional)</p>
                <input type="text" id="companyName" className="inputField " />
              </label>
            </div>

            {/* Country name div */}
            <div className="my-3  row">
              <label htmlFor="CountryName">
                <p className="username">Country / Region </p>
                <select
                  name="countries"
                  id="CountryName"
                  className="inputField "
                >
                  <option value="Pak">Pakistan</option>
                  <option value="Pak">India</option>
                  <option value="Pak">China</option>
                  <option value="Pak">Srilanka</option>
                  <option value="Pak">Bangladesh</option>
                </select>
              </label>
            </div>

            {/* street address div */}
            <div className="my-3  row">
              <label htmlFor="streetAddress">
                <p className="username">Street address</p>
                <input type="text" id="streetAddress" className="inputField "
                name="street"
                value={billingFormik.values.street}
                onChange={billingFormik.handleChange}
              />
            </label>
            {billingFormik.touched.street &&
            Boolean(billingFormik.errors.street) ? (
              <p className="requiredError">
                {billingFormik.touched.street &&
                  billingFormik.errors.street}
              </p>
            ) : null}
            </div>

            {/* town city div */}
            <div className="my-3  row">
              <label htmlFor="townCity">
                <p className="username">Town / City</p>
                <input type="text" id="townCity" className="inputField "
                name="city"
                value={billingFormik.values.city}
                onChange={billingFormik.handleChange}
              />
            </label>
            {billingFormik.touched.city &&
            Boolean(billingFormik.errors.city) ? (
              <p className="requiredError">
                {billingFormik.touched.city &&
                  billingFormik.errors.city}
              </p>
            ) : null}
            </div>

            {/* Province div */}
            <div className="my-3  row">
              <label htmlFor="Province">
                <p className="username">Province</p>
                <select name="countries" id="Province" className="inputField ">
                  <option value="west">Western province</option>
                  <option value="east">Eastern province</option>
                  <option value="north">Northern province</option>
                  <option value="south">Southern province</option>
                </select>
              </label>
            </div>

            {/* zipcode */}
            <div className="my-3  row">
              <label htmlFor="Zipcode">
                <p className="username">Zipcode</p>
                <input
                  type="text"
                  id="Zipcode"
                  className="inputField"
                  maxLength={5}
                 name="zipcode"
                    value={billingFormik.values.zipcode}
                    onChange={billingFormik.handleChange}
                  />
                </label>
                {billingFormik.touched.zipcode &&
                Boolean(billingFormik.errors.zipcode) ? (
                  <p className="requiredError">
                    {billingFormik.touched.zipcode &&
                      billingFormik.errors.zipcode}
                  </p>
                ) : null}
            </div>

            {/* phone number */}
            <div className="my-3  row">
              <label htmlFor="phoneNumber">
                <p className="username">Phone</p>
                <input
                  type="number"
                  id="phoneNumber"
                  className="inputField"
                  maxLength={12}
                  
                  name="number"
                  value={billingFormik.values.number}
                  onChange={billingFormik.handleChange}
                />
              </label>
              {billingFormik.touched.number &&
              Boolean(billingFormik.errors.number) ? (
                <p className="requiredError">
                  {billingFormik.touched.number &&
                    billingFormik.errors.number}
                </p>
              ) : null}
            </div>

            {/* Email address */}
            <div className="my-3  row">
              <label htmlFor="emailAddress">
                <p className="username">Email address</p>
                <input type="email" id="emailAddress" className="inputField" 
                 name="email"
                 value={billingFormik.values.email}
                 onChange={billingFormik.handleChange}
               />
             </label>
             {billingFormik.touched.email &&
             Boolean(billingFormik.errors.email) ? (
               <p className="requiredError">
                 {billingFormik.touched.email &&
                   billingFormik.errors.email}
               </p>
             ) : null}
            </div>

            {/* Additional Information*/}
            <div className="my-5  row">
              <label htmlFor="additional Information">
                <input
                  type="text"
                  placeholder="Additional Information"
                  id="additional Information"
                  className="inputField"
                />
              </label>
            </div>
          </div>


          {/* products Detail */}

          <div className="col-md-6 col-12 py-5 px-sm-4 px-2 ">
            {/* product details */}
            <div className="">
              <div className="p-3 orderDetail">
                <div className="d-flex justify-content-between">
                  <p className="totalHeading">Product</p>
                  <p className="totalHeading">Sub total</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="productName">
                    Asgaard sofa <span style={{ color: "black" }}>x 1</span>
                  </p>
                  <p className="subTotal">Rs. 250,000.00</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="username">Sub total</p>
                  <p className="subTotal">Rs. 250,000.00</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="username">Total</p>
                  <p className="totalPrice">Rs. 250,000.00</p>
                </div>

                <hr />

                {/* Radio Button for Payment */}

                <div style={{ color: "#000" }}>
                  <p className="d-flex gap-2 subTotal">
                    <input type="radio"  name="transfer"  /> Direct BankTransfer
                  </p>

                  {/* bank Desciption */}
                  <p className="bankDescription">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>

                  {/* Direct trandfer radio button */}
                  <p
                    className="d-flex gap-2 bankDescription"
                    style={{ fontWeight: "500" }}
                  >
                    <input type="radio" name="transfer" /> Direct Bank Transfer
                  </p>

                  {/* Cash on Delivery radio button */}
                  <p
                    className="d-flex gap-2 bankDescription"
                    style={{ fontWeight: "500" }}
                  >
                    <input type="radio" name="transfer" /> Cash On Delivery
                  </p>

                  {/* policy div */}
                  <p className="policyDetails">
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our{" "}
                    <span className="privacyPolicy">privacy policy</span>.
                  </p>
                </div>

                {/* place order button */}
                <div className="d-flex justify-content-center my-4">
                  <button type="submit" className="PlaceOrderButton ">
                    Place order
                  </button>
                </div>
              </div>
            </div>
          </div>

          

          {/* // */}
        </div>

        </form>
      </div>
    </div>
  );
};

export default CheckOut

