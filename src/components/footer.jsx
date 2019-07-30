import React, { Component } from 'react';
import './footer.css';
import facebook from '../facebook.png';
import tweeter from '../tweeter.png';
import googleplus from '../google+.png';
import pinterest from '../pinterest.png';
class  Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="footerwrapper">
                <div className="contaier">
                    <div className="footer_padding">
                        <div className="footer_tittle">
                            <h4>Keep in touch</h4>
                        </div>
                        <div className="footer_p">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, autem.</p>
                        </div>
                        <div className="input_field_button">
                            <div className="form-group">
                                <input className="form-control" placeholder="Enter your email address to update"/>
                                <button className="btn btn-primary">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                    <div className="social_icons">
                        <img src={ facebook } />
                        <img src={ tweeter } />
                        <img src={ googleplus } />
                        <img src={ pinterest } />
                    </div>
                    <div className="footer_content">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="col_1_content">
                                <address>
                                    <ul>
                                        <li><a href="#">halovietnam ltd</a></li>
                                        <li><a href="#">66,Dang Van ngu, Dong Da</a></li>
                                        <li><a href="#">hanoi,vietnam</a></li>
                                        <li><a href="mailto:jim@rock.com">jim@rock.com</a></li>
                                        <li><a href="tel:+13115552368">(311) 555-2368</a></li>
                                    </ul>
                                </address>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="col_2_content">
                                    <ul>
                                        <li><a href="#">Example</a></li>
                                        <li><a href="#">Shop</a></li>
                                        <li><a href="#">License</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="col_3_content">
                                    <ul>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Terms</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="col_4_content">
                                    <ul>
                                        <li><a href="#">Download</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Documents</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="col_5_content">
                                    <ul>
                                        <li><a href="#">Media</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Forums</a></li>
                                    </ul>
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
 
export default Footer;