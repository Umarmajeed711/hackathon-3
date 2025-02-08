import './component.css'

export const Properties = () => {
  return (
    <div>
    {/* Properties div */}
    <div className="property d-flex justify-content-center ">
    <div className="row container ">
      <div className="col-12 col-sm-4">
        <p className="propertyHeading">Free Delivery</p>
        <p className="propertypara">
          For all oders over $50, consectetur adipim scing elit.
        </p>
      </div>

      <div className="col-12 col-sm-4">
        <p className="propertyHeading">90 Days Return</p>
        <p className="propertypara">
          If goods have problems, consectetur adipim scing elit.
        </p>
      </div>

      <div className="col-12 col-sm-4">
        <p className="propertyHeading">Secure Payment</p>
        <p className="propertypara">
          If goods have problems, consectetur adipim scing elit.
        </p>
      </div>
    </div>
  </div>
  </div>
  )
}
