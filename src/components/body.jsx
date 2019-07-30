import React, { Component } from 'react';
import './body.css';
import mobile from '../mobile_phone.png';
import logo2 from '../logo2.png';
import logo3 from '../logo3.png';
import logo4 from '../logo4.png';
import logo5 from '../logo5.png';
import logo6 from '../logo6.png';

class Body extends Component {
    render() { 
        return ( 
            <div className="body">
                <div class="container">
            <div className="tittle">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="body_tittle">
                                <h4>Tinytone features</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="body_p">
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptas iusto voluptatibus nihil illo magnam aliquam nostrum consectetur at laborum.</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="features_content">
                    <div className="row">
                    <div className="col-md-4">
                        <div className="features_content_body">
                            <div className="features_content_img"> 
                                <img src={ mobile }/>
                            </div>
                            <div className="features_content_h5_p">
                                <h5>Fully Responsive</h5>
                                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="features_content_body">
                            <div className="features_content_img"> 
                                <img src={ logo2 }/>
                            </div>
                            <div className="features_content_h5_p">
                                <h5>Fully Layered PSD</h5>
                                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="features_content_body">
                            <div className="features_content_img"> 
                                <img src={ logo3 }/>
                            </div>
                            <div className="features_content_h5_p">
                                <h5>Font Awwsome Icons</h5>
                                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4">
                        <div className="features_content_body">
                            <div className="features_content_img"> 
                                <img src={ logo4 }/>
                            </div>
                            <div className="features_content_h5_p">
                                <h5>HTML3 & CSS3</h5>
                                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="features_content_body">
                            <div className="features_content_img"> 
                                <img src={ logo5 }/>
                            </div>
                            <div className="features_content_h5_p">
                                <h5>Email Template</h5>
                                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="features_content_body">
                            <div className="features_content_img"> 
                                <img src={ logo6 }/>
                            </div>
                            <div className="features_content_h5_p">
                                <h5>Free to download</h5>
                                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
         );
    }
}
 
export default Body;