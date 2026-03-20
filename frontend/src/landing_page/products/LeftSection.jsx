import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) {
  return (

        <div className="container mb-5">

            <div className="row">

                <div className="col-6 py-5">

                    <img src={ imageURL } alt="" />

                </div>

                <div className="col-6 p-5 mt-5">

                    <h1>{productName}</h1>

                    <p className="mt-3 text-muted" >{productDescription}</p>

                    <div >

                        <a href={tryDemo} style={{marginRight:"50px" ,textDecoration:"none"}} >Try Demo &nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                        <a href={learnMore}style={{textDecoration:"none"}} >Learn More &nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    </div>

                    <div  className="mt-3" >

                        <a href={googlePlay} style={{marginRight:"20px" }}><img src="media1/googlePlayBadge.svg" alt="" /></a>

                        <a href={appStore}><img src="media1/appstoreBadge.svg" alt="" /></a>
                        
                    </div>  


                </div>

            </div>

        </div>
    
    )
}

export default LeftSection;
