import React from "react";
import { SocialIcon } from "react-social-icons";
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <footer className="footer-content text-center">
            <div className="email">
            <a className="email-link" href="mailto:drobin4@gmail.com"><p>drobin4@gmail.com</p></a>
            </div>
            <div className="social-container">
            <SocialIcon className="social-icon" url="https://www.linkedin.com/in/david-robinette/"></SocialIcon>
            <SocialIcon className="social-icon" bgColor="#ced4da" url="https://github.com/david90937"></SocialIcon>
            <SocialIcon className="social-icon" url="https://discordapp.com/users/David909#7254"></SocialIcon>
            </div>
            <Link className="link" activeClass="active"
                    to="page-top"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={100}
                    delay={0}
                    isDynamic={true}
                    // onSetActive={this.handleSetActive}
                    // onSetInactive={this.handleSetInactive}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                >
                    <img className="to-top" src="https://cdn.pixabay.com/photo/2012/04/11/17/50/button-29139_960_720.png" alt="up arrow" />
                    
                </Link>
        </footer>
    )
};

export default Footer;