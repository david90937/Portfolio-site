import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from 'react-scroll'

const NavigationBar = () => {
    return (
        <Navbar id='navbar-container' className="justify-content-center" sticky="top">
            <nav className="d-flex mx-3 mt-2">
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
                    Home
                </Link>
                <Link className="link" activeClass="active"
                    to="experience-list"
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
                    Experience
                </Link>
                <Link className="link" activeClass="active"
                    to="education-list"
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
                    Education
                </Link>
                <Link className="link" activeClass="active"
                    to="projects-list"
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
                    Projects
                </Link>
            </nav>
        </Navbar>
    )
}

export default NavigationBar