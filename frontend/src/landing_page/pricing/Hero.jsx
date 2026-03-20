import React from 'react';


function Hero() {

    return ( 

        <div className='container' >

            <div className="row text-center border-bottom p-5">

                <h1>Pricing</h1>

                <h4 className='text-muted mt-3 mb-3 fs-5'>Free equity investments and flat ₹20 traday and F&O trades</h4>

            </div>

            <div className="row mt-5">

                <div className="col-4 text-center p-5">

                    <img src="media1/pricingEquity.svg" alt="" />

                    <h1 className='fs-3'>Free equity delivery</h1>

                    <p className='text-muted' >All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.</p>

                </div>

                <div className="col-4 text-center p-5">

                    <img src="media1/intradayTrades.svg" alt="" />

                    <h1 className='fs-3' >Intraday and F&O trades</h1>

                    <p className='text-muted' >Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>

                </div>

                <div className="col-4 text-center p-5">

                    <img src="media1/pricingEquity.svg" alt="" />

                    <h1 className='fs-3' >Free direct MF</h1>

                    <p className='text-muted' >All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>

                </div>

            </div>

        </div>
     );
}

export default Hero;