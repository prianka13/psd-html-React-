import React, { Component } from 'react';
import './header.css';
import ipad from '../ipad.png';
import apple from '../apple_logo.png';
import android from '../android.png';
import windows from '../windows.png';

class Header extends Component {
    render() { 
        return ( 
            <div className="header-wrapper">
                <div className="container">
                    <div className="menu">
                    <div className="row">
                        <div class="col-md-6">
                        <div className="menu_left_content">
                            <h4>tinyone</h4>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="menu_right_content">
                        <ul class="nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Support</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                        </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                <div className="menu-body">
                <div className="row">
                    <div className="col-md-6">
                    <div className="menu-body_left">
                        <div className="menu-body_left_header4">
                            <h4>Inspire Your Inspiration</h4>
                        </div>
                        <div className="menu-body_left_header6">
                            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, officiis?</h6>
                        </div>
                        <div className="menu-body_left_p">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla suscipit exercitationem consequuntur rem quidem animi. Sit omnis, mollitia quam cupiditate voluptas nostrum soluta, at tempora atque dolores consectetur nulla doloribus.</p>
                        </div>
                        <div className="download-icons">
                            <ul class="nav">
                                <li><a href="#"><img src={ apple } /></a></li>
                                <li><a href="#"><img src={ android } /></a></li>
                                <li><a href="#"><img src={ windows } /></a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="menu-body_right">
                       <img src={ ipad } alt="ipad"/> 
                    </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
         );
    }
}
 
export default Header;