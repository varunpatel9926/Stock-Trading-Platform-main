import React from 'react';


function Universe() {

    return ( 

        <div className="container mb-5">

            <div className="row text-center">

                <h1>The Zerodha Universe</h1>

                <p>
                    Extend your trading and investment experience even further with our
                    partner platforms.
                </p>

                <div className="col-4 p-3 mt-3">

                    <img src="media1/smallcaseLogo.png" alt="" style={{width:"55%"}}/>

                    <p className="text-small text-muted mt-3">Thematic investment platform</p>

                </div>

                <div className="col-4 p-3 mt-3">

                    <img src="media1/streakLogo.png" alt=""  style={{width:"45%"}}/>

                    <p className="text-small text-muted mt-3">Algo & strategy platform</p>

                </div>

                <div className="col-4 p-3 mt-3">

                    <img src="media1/sensibullLogo.svg" alt="" style={{width:"55%"}}/>

                    <p className="text-small text-muted mt-3">Options trading platform</p>

                </div>

                <div className="col-4 p-3 mt-5">

                    <img src="media1/zerodhaFundhouse.png" alt="" style={{width:"55%"}}/>

                    <p className="text-small text-muted mt-3">Asset management</p>

                </div>

                <div className="col-4 p-3 mt-5">

                    <img src="media1/goldenpiLogo.png" alt="" style={{width:"55%"}} />

                    <p className="text-small text-muted mt-3">Bonds trading platform</p>

                </div>

                <div className="col-4 p-3 mt-5">

                    <img src="media1/dittoLogo.png" alt="" style={{width:"40%"}}/>

                    <p className="text-small text-muted mt-3">Insurance</p>

                </div>

            </div>

        </div>

     );
}

export default Universe;