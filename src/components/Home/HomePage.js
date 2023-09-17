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
import Bpluse from './../../images/Bpluse.png';
import Majoon from './../../images/Majoon.jpg';
import HelliTalk from './../../images/HelliTalk.jpg';
import Ketabjiby from './../../images/ketabjiby.png';
import Listenpadcaracter from './../../images/listenpadcaracter.jpg';

const HomePage = () => {
    return(
        <>
            <Header/>
            <br/>
            <div className="container carousel-pad">
                <h4 style={{fontWeight: 600,}}>The most requested podcasts</h4>
                <div className="distance-boxes">
                    <Carousel cols={4} rows={1} gap={5} loop>
                        <Carousel.Item>
                            <img alt="image" src={Bpluse} className="img circle-img"/>
                            <h6 className="text">subject/by name</h6>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img alt="image" src={Majoon} className="img circle-img"/>
                            <h6 className="text">subject/by name</h6>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img alt="image" src={HelliTalk} className="img circle-img"/>
                            <h6 className="text">subject/by name</h6>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img alt="image" src={Ketabjiby} className="img circle-img"/>
                            <h6 className="text">subject/by name</h6>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <h4 style={{fontWeight: 600,}}>Podcast topics</h4>
                <div className="distance-boxes">
                    <Carousel cols={4} rows={1} gap={20} loop>
                        <Carousel.Item>
                            <div className="carousel-box-pad">
                                <div className="subjects-imgbox-pad">
                                    <img alt="image" src={Political} className="circle-img subjects-img-pad"/>
                                </div>
                                <div className="subjects-textbox-pad">
                                    <h5 style={{color: 'black',}}>Political</h5>
                                    <p>
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
                                    <img alt="image" src={Economic} className="circle-img subjects-img-pad"/>
                                </div>
                                <div className="subjects-textbox-pad">
                                    <h5 style={{color: 'black',}}>Economic</h5>
                                    <p>
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
                                    <img alt="image" src={History} className="circle-img subjects-img-pad"/>
                                </div>
                                <div className="subjects-textbox-pad">
                                    <h5 style={{color: 'black',}}>History</h5>
                                    <p>
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
                                    <img alt="image" src={IndividualDevelopment} className="circle-img subjects-img-pad"/>
                                </div>
                                <div className="subjects-textbox-pad">
                                    <h5 style={{color: 'black',}}>Individual Development</h5>
                                    <p>
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
                                    <img alt="image" src={Jobs} className="circle-img subjects-img-pad"/>
                                </div>
                                <div className="subjects-textbox-pad">
                                    <h5 style={{color: 'black',}}>Jobs</h5>
                                    <p>
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
                                    <img alt="image" src={Sports} className="circle-img subjects-img-pad"/>
                                </div>
                                <div className="subjects-textbox-pad">
                                    <h5 style={{color: 'black',}}>Sports</h5>
                                    <p>
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
                                    <img alt="image" src={Scientific} className="circle-img subjects-img-pad"/>
                                </div>
                                <div className="subjects-textbox-pad">
                                    <h5 style={{color: 'black',}}>Scientific</h5>
                                    <p>
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
                                    <img alt="image" src={Sociocultural} className="circle-img subjects-img-pad"/>
                                </div>
                                <div className="subjects-textbox-pad">
                                    <h5 style={{color: 'black',}}>Sociocultural</h5>
                                    <p>
                                        Political podcasts that talk about the
                                        future and the past and the plans of governments
                                    </p>
                                    <br/>
                                    <button type="button" className="btn btn-primary">Primary</button>
                                </div>
                            </div>
                        </Carousel.Item>              
                    </Carousel>
                </div>
            </div>
            <div className="bigbox benefits">
                <img src={Listenpadcaracter}/>
                <div style={{paddingTop: "100px" , paddingRight: "50px"}}>
                    <h1 style={{fontSize: "50px"}}>The benefits of podcasting</h1>
                    <br/>
                    <p>
                        You can lisiten meny padcastes here and lern meny things.
                        Political podcasts that talk about the future and the past and the plans of governments.
                        You can lisiten meny padcastes
                        <br/> here and lern meny things.
                        Political podcasts that talk about the future and the past and the plans of governments.
                    </p>
                    <be/>
                    <button type="button" className="btn" style={{justifyContent:"left"}}>Show more</button>
                </div>
            </div>
            <div className="bigbox foter">
                <div style={{paddingTop: "100px" , paddingRight: "50px"}}>
                    <h1 style={{fontSize: "50px"}}>The benefits of podcasting</h1>
                    <br/>
                    <p>
                        You can lisiten meny padcastes here and lern meny things.
                        Political podcasts that talk about the future and the past and the plans of governments.
                        You can lisiten meny padcastes
                        <br/> here and lern meny things.
                        Political podcasts that talk about the future and the past and the plans of governments.
                    </p>
                    <be/>
                    <button type="button" className="btn" style={{justifyContent:"left"}}>Show more</button>
                </div>
            </div>
        </>
    );
}

export default HomePage;