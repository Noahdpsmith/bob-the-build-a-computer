import React from 'react';
import '../App.css';

const Footer = () => {

    return(
        <div>
            <div class="feet">
            </div>
            <div class="content">
               
            </div>
            <footer class="footer">
                <nav>
                    <div class="row">

                   

                    <div class="column">
                    <h2>Categories</h2>
                    <ul>
                    <li><a>parts</a></li>
                    <li><a>new builds</a></li>
                    <li><a>my builds</a></li>
                    <li><a>about Us</a></li>
                    </ul>
                    </div>
                    <div class="column">
                    <h2>Information</h2>
                    <ul>
                    <li><a>Noah Smith</a></li>
                    <li><a>Matt Larson</a></li>
                    <li><a>Steele Kreis</a></li>
                    <li><a>Andrew Whittaker</a></li>
                    </ul>
                    </div>
                    <div class="column">
                    <h2>Company</h2>
                    <ul>
                    <li><a>Bob the build a computer</a></li>
                    <li><a>a local company</a></li>
                    <li><a>we love you</a></li>
                    <li><a></a></li>
                    </ul>
                    </div>
                    
                

                   <div class="column">
                    <h2>copyright</h2>
                    <ul class="footer__secondary-nav">
                    <li>
                    ©2022 bob the build a computer, LLC. All rights reserved.
                    </li>
                    </ul>
                    </div>
                    </div>
                    </nav>
            </footer>
        </div>
           
     
    );
}


export default Footer;
