import React from 'react'
import { Fragment } from 'react';
import icoFb from '../image/icoFb.png';
import icoTw from '../image/icoTw.png';
import icoIg from '../image/icoIg.png';


const Footer = () => {
    return (
        <Fragment>
            <footer className="bg-primary bg-opacity-25 shadow-lg bg-gradient" 
                style={{position:"absolute", right:"0", left:"0", bottom: "0", minWidth: '620px'}}>
               <div className="container-fluid" >
                    <div className="row align-items-center">
                        <h6 className="col"> Proyecto final - Damian Takashima -&nbsp;

                            <a href="https://www.themealdb.com/api.php"
                            >API utilizada </a>
                        </h6>

                        <div className="col-3 ">
                            <a href="https://www.facebook.com" >
                                <img src={icoFb} height="40px" alt="logo de facebook">
                                </img>
                            </a>
                            <a href="https://twitter.com" >
                                <img src={icoTw} height="40px" alt="logo de twitter">
                                </img>
                            </a>
                            <a href="https://www.instagram.com" >
                                <img src={icoIg} height="40px" alt="logo de instagram">
                                </img>
                            </a>
                        </div>    
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}
 
export default Footer;