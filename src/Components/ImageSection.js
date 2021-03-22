import React from 'react';
import about from '../imgs/89.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Wakaba James</span></h4>
                <p className="about-text">
                  An enthuastic  current  undergraduate looking for an entry position to junior software 
                  engineering position that will utilize competative coding skills and coordination at any
                  organization in kenya and abroad .Adptable to learning
                  new things. A confindent and determined student who works well even in under sterssed 
                  environments.
                  Am passion driven  with current software development skills and software  skills.
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
                        <p>: 23</p>
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