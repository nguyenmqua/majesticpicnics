import React from 'react'
import image1 from "../../assets/img/sample/IMG_0181.jpg";

const AdCard = () =>{

    return (
        <div className="adCard">
        <div className = "adImage">
        <img src={image1} />
          <div className="adTitle">
            <h3> Customer's Review</h3>
    
            <p>Thank you so much ❤️I loved it ! - Grecia Torres</p>
         
          </div>
          
          </div>
      </div>
    )
}

export default AdCard