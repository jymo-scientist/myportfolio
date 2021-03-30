import React from 'react';
import {faFacebook, faStaylinked} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> wakaba james
                        <h4>SoftWare Developer</h4>
                    </span>
                </h1>
                <p className="h-sub-text">

                </p>
                <div className="icons">
                    <Link to="https://www.facebook.com" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link to="https://github.com/jymo-scientist/" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link to="https://www.linkedin.com/feed/" className="icon-holder">
                        <FontAwesomeIcon icon={faStaylinked} className="icon yt"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;