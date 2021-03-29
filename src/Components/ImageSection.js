import React from 'react';
import about from '../imgs/James.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Wakaba James</span></h4>
                <p className="about-text">
                  An enthuastic  current  undergraduate looking for an entry position in junior software 
                  engineering where i can be able to  utilize my competitive coding skills and coordination at any organization
                  in kenya and abroad..
                 I Am passion driven  with current software development and testing skills.
                 Apart from that, i am a confident and determined person and i am adaptable to learning new things .
                 I posses the ability to work under time pressure and stressed environments. 
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Wakaba James</p>
                        <p>: 22</p>
                        <p>: Kenyan</p>
                        <p>: Swahili English</p>
                        <p>: 689 Nairobi</p>
                        <p>: Kenya</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;