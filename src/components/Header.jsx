import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import naruto from '../image/naruto.png';
import naruto1 from '../image/naruto1.png';

const Header = () => {
    return (
        <Fragment>
        <div className= "navbar bg-primary bg-gradient text-align:center text-white shadow-sm"
            style={{minWidth: '620px'}}
            >
            <img src={naruto} alt="imagen de naruto" height="80px"/>
            <h1 className="display-1 "> ¿ QUE COMEMOS ? </h1><br/>
            <img src={naruto1} alt="otra imagen de naruto" height = "80px"/>
        </div>
        <div className="bg-warning bg-opacity-50 p-1  bg-gradient"></div>
        <br/>
        <h3 className="mx-4 pb-4"> El sitio que te ayuda a decidir </h3>
        </Fragment>

        
    );
}
 
export default Header;

