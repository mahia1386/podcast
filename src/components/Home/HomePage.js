import React from "react";
import Header from "./Header";
import Carousel from 'react-grid-carousel';

//images
import Political from './../../images/political.jpg';
import Economic from './../../images/Economic.jpg';
import History from './../../images/history.jpg';
import IndividualDevelopment from './../../images/Individual development.jpg';
import Jobs from './../../images/jobs.jpg';
import Sports from './../../images/sports.png';
import Scientific from './../../images/scientific.png';
import Sociocultural from './../../images/Sociocultural.jpg';
import ChannelB from './../../images/channelB.png';
import Bpluse from './../../images/Bpluse.png';
import Jafekry from './../../images/jafekry.jpg';

const HomePage = () => {
    return(
        <>
            <Header/>
            <br/>
            <div className="container carousel-pad">
                <h4 style={{fontWeight: 600,}}>Podcast topics</h4>
                <br/>
                <Carousel cols={4} rows={1} gap={20} loop>
                <Carousel.Item>
                <div className="carousel-box-pad">
                    <div className="subjects-imgbox-pad">
                        <span className="overlay"></span>
                        <img alt="image" src={Political} className="subjects-img-pad"/>
                    </div>
                    <div className="subjects-textbox-pad">
                        <h5 style={{color: 'black',}}>Political</h5>
                        <p className="subjects-text-pad">
                            Political podcasts that talk about the
                            future and the past and the plans of governments
                        </p>
                        <br/>
                        <button type="button" className="btn btn-primary">Primary</button>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-box-pad">
                    <div className="subjects-imgbox-pad">
                        <img alt="image" src={Economic} className="subjects-img-pad"/>
                    </div>
                    <div className="subjects-textbox-pad">
                        <h5 style={{color: 'black',}}>Economic</h5>
                        <p className="subjects-text-pad">
                            Political podcasts that talk about the
                            future and the past and the plans of governments
                        </p>
                        <br/>
                        <button type="button" className="btn btn-primary">Primary</button>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-box-pad">
                    <div className="subjects-imgbox-pad">
                        <img alt="image" src={History} className="subjects-img-pad"/>
                    </div>
                    <div className="subjects-textbox-pad">
                        <h5 style={{color: 'black',}}>History</h5>
                        <p className="subjects-text-pad">
                            Political podcasts that talk about the
                            future and the past and the plans of governments
                        </p>
                        <br/>
                        <button type="button" className="btn btn-primary">Primary</button>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-box-pad">
                    <div className="subjects-imgbox-pad">
                        <img alt="image" src={IndividualDevelopment} className="subjects-img-pad"/>
                    </div>
                    <div className="subjects-textbox-pad">
                        <h5 style={{color: 'black',}}>Individual Development</h5>
                        <p className="subjects-text-pad">
                            Political podcasts that talk about the
                            future and the past and the plans of governments
                        </p>
                        <br/>
                        <button type="button" className="btn btn-primary">Primary</button>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-box-pad">
                    <div className="subjects-imgbox-pad">
                        <img alt="image" src={Jobs} className="subjects-img-pad"/>
                    </div>
                    <div className="subjects-textbox-pad">
                        <h5 style={{color: 'black',}}>Jobs</h5>
                        <p className="subjects-text-pad">
                            Political podcasts that talk about the
                            future and the past and the plans of governments
                        </p>
                        <br/>
                        <button type="button" className="btn btn-primary">Primary</button>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-box-pad">
                    <div className="subjects-imgbox-pad">
                        <img alt="image" src={Sports} className="subjects-img-pad"/>
                    </div>
                    <div className="subjects-textbox-pad">
                        <h5 style={{color: 'black',}}>Sports</h5>
                        <p className="subjects-text-pad">
                            Political podcasts that talk about the
                            future and the past and the plans of governments
                        </p>
                        <br/>
                        <button type="button" className="btn btn-primary">Primary</button>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-box-pad">
                    <div className="subjects-imgbox-pad">
                        <img alt="image" src={Scientific} className="subjects-img-pad"/>
                    </div>
                    <div className="subjects-textbox-pad">
                        <h5 style={{color: 'black',}}>Scientific</h5>
                        <p className="subjects-text-pad">
                            Political podcasts that talk about the
                            future and the past and the plans of governments
                        </p>
                        <br/>
                        <button type="button" className="btn btn-primary">Primary</button>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-box-pad">
                    <div className="subjects-imgbox-pad">
                        <img alt="image" src={Sociocultural} className="subjects-img-pad"/>
                    </div>
                    <div className="subjects-textbox-pad">
                        <h5 style={{color: 'black',}}>Sociocultural</h5>
                        <p className="subjects-text-pad">
                            Political podcasts that talk about the
                            future and the past and the plans of governments
                        </p>
                        <br/>
                        <button type="button" className="btn btn-primary">Primary</button>
                    </div>
                </div>
                </Carousel.Item>
                </Carousel>
                <br/>
                {/* <Carousel cols={4} rows={1} gap={30} loop>
                    <Carousel.Item>
                        <div className="likes-box-pad">
                            {/* <img src={} alt="image"/> 
                            <p>Bpluse</p>
                        </div>
                    </Carousel.Item>
                </Carousel> */}
             </div>
        </>
    );
}

export default HomePage;