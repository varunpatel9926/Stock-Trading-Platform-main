import React from 'react';


function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (

        <div className="container mb-5">

            <div className="row">

                <div className="col-6 p-5  " style={{ marginTop:"140px" }} > 

                    <h1>{productName}</h1>

                    <p className="mt-3 text-muted" >{productDescription}</p>

                    <div >

                        <a href={learnMore}style={{textDecoration:"none"}} >Learn More &nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    </div>

                </div>

                <div className="col-6 py-5">

                    <img src={ imageURL } alt="" />

                </div>

            </div>

        </div>
    
    )
}

export default RightSection;