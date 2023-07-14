import React from 'react';
import './../../styles/padStyle.css';
import ChannelB from './../../images/channelB.png';
import Bpluse from './../../images/Bpluse.png';
import Jafekry from './../../images/jafekry.jpg';

const Header = () =>{
    return(
        <>
            <nav>
                <ul className='navbar-pad'>
                    <li className='navbar-item-pad'>Home</li>
                    <li className='navbar-item-pad'>Padcasts LIst</li>
                    <li className='navbar-item-pad'>Abute me</li>
                </ul>
            </nav>
            <div className='header-pad'>
                <div className='header-text-box-pad'>
                    <h1 className='titel-header-pad'>
                        Padcasts 
                        <br/>
                        World
                    </h1>
                    <br/>
                    <p>
                        You can lisiten meny padcastes here and lern meny things.
                    </p>
                </div>
                <div className='header-img-box-pad'>
                    <div>
                        <img className='img-header-pad'  src={ChannelB} style={{
                            margin: "300px",
                            zIndex: "0",
                            marginTop:"",     
                        }} />
                    </div>
                    <div>
                        <img className='img-header-pad' src={Jafekry}  style={{
                            margin:"150px",
                            zIndex: "1",
                            marginTop:"",       
                        }}  />
                    </div>
                    <div>
                        <img className='img-header-pad ' src={Bpluse}  style={{
                            margin:"0px",
                            zIndex: "2",
                            marginTop:"",
                        }} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;