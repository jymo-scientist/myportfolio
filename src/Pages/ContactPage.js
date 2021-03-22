import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../imgs/phone.png';
import email from '../imgs/emailme.jpg';
import location from '../imgs/location.png';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/place/University+of+Embu+New+Library/@-0.5365621,37.443244,14z/data=!4m13!1m7!3m6!1s0x18262de0b161c82f:0x86c79bba0e2b8896!2sEmbu!3b1!8m2!3d-0.5388381!4d37.4596409!3m4!1s0x18262d9072a9e0e7:0xceb964a989947cb!8m2!3d-0.5145534!4d37.4556488" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+254783392722'} text2={'+254797030918'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'jameskinyanjui721@gmail.com'} text2={'jameskinyanjui11@yahoo.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Embu'} text2={'Kenya'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;