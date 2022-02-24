import React from 'react';
import '../App.css';
const About = () => {

    return(
        <div>
            <div class="about-section">
            <h1>About Us</h1>
            <p>We are just a team of lads who want to help people build sick comps
                <br></br>
                hope you enjoy!
            </p>
            
            
            <div className='lads'>
            <h2>Our Team</h2>
            <div class="row">
            <div class="column">
                <div class="card">
                <img src='https://user-images.githubusercontent.com/88944710/154402424-5730b567-733d-484f-af59-b9f7896f322f.jpg'></img>
                <div class="container">
                    <h2>Noah Smith</h2>
                    <p class="title">CoFounder</p>
                    <p>The Foreman</p>
                    <p>noah@gmail.com</p>
                </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                <img src="https://user-images.githubusercontent.com/88944710/154402366-09cab1c0-a208-4641-bd38-2a6fc81c5653.jpg"></img>
                <div class="container">
                    <h2>Matt Larson</h2>
                    <p class="title">CoFounder</p>
                    <p>The engineer</p>
                    <p>matt@example.com</p>
                </div>
                </div>
            </div>

            <div class="column">
                <div class="card">
                <img src="https://user-images.githubusercontent.com/88944710/154402391-6903768b-06c0-491a-87af-0da230519c3c.jpg"></img>
                <div class="container">
                    <h2>Steele Kreis</h2>
                    <p class="title">CoFounder</p>
                    <p>The Architect</p>
                    <p>steele@example.com</p>
                </div>
                </div>
            </div>
            
            <div class="column">
                <div class="card">
                <img src='https://user-images.githubusercontent.com/88944710/154402458-a9fa9e1b-93af-489b-b22f-41818c90fad4.jpg'></img> 
                <div class="container">
                    <h2>Austin W.</h2>
                    <p class="title">CoFounder</p>
                    <p>The Muscle</p>
                    <p>Austin@example.com</p>
                </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
}



export default About;

