import React from 'react';


function Hero() {

    return ( 

        <section className="container-fluid" id='supportHero'>

            <div className="p-5" id='supportWrapper'>

                <h4>Support Portal</h4>

                <a href="" >Track Tickets</a>

            </div>

            <div className="row">

                <div className="col-1 p-5"  ></div>

                <div className="col-5 p-5 "  >

                    <h1 className='fs-3' style={{lineHeight:"1.6"}} >Search for an answer or browse help topics to create a ticket</h1>

                    <input type="text" placeholder="Eg. how do I activate F&O" className='mt-2 mb-2'/>

                    <br />

                    <a href="" className='mx-2'>Track account opening</a>
                    <a href="" className='mx-2'>Track segment activation</a>
                    <a href="" className='mx-2'>Intraday margins</a><br />
                    <a href="" className='mx-2'>Kite user manual</a>

                </div>

                <div className="col-1 p-5 "  ></div>

                <div className="col-4 p-5 ">

                    <h1 className='fs-3' >Featured</h1>

                    <ol>

                        <li><a href="" >Current Takeovers and Delisting - January 2024</a></li>

                        <li><a href="" >Latest Intraday leverages - MIS & CO</a></li>

                    </ol>

                </div>

                <div className="col-2 p-5 "  ></div>


            </div>

        </section>

     );
}

export default Hero;