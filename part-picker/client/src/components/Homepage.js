import React from 'react';
import '../App.css';
import {Link } from "react-router-dom";


const Homepage = () => {

    return(
        <div>
            
            
            <div className='hero-container'>
                <h1>Lets Build</h1>
            <h2>Build A computer that fits your exact needs and fits in your budget!</h2>
            <p>Pick and pull parts that are perfect for you!</p>
            <div>
            <p>
              Want to login and register?
              <br />
              Click on the button below.
            </p>
            <Link to="/login"><button class="button1" role="button"><span class="text">LOGIN</span></button>

            </Link>
          </div>

            </div>
            
        </div>
    );
}

export default Homepage;