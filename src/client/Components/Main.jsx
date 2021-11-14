import React from "react";
import { Element } from "react-scroll";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";


const Main = () => {
    return (
        <Element id='home' name='home'>
            <section className="container">
                <div className="row justify-content-center">
                    <div className="card col-lg-8 col-12">
                        <header className="header-title text-center my-3 text-light">DAVID ROBINETTE</header>
                        <h6 className="text-center my-3 text-light">AN ASPIRING FULL STACK WEB DEVELOPER</h6>
                        <img className="profile-image img-fluid" alt="profile headshot" src="https://media-exp1.licdn.com/dms/image/C4E03AQHLuTZqRjmKJA/profile-displayphoto-shrink_800_800/0/1634335547973?e=1642636800&v=beta&t=FoUv6R4QKEbv9nppS7kjvr_i_0wEavSRmOFvwRPHCEk" />
                        <div className="card-body text-light my-3">
                            <p>Welcome to my portfolio!</p>
                            <p>I'm a soon-to-be alumni of the Innovate Birmingham Full Stack Web Development boot camp. I'm looking to get started in the tech industry!</p>
                        </div>
                    </div>
                </div>
                <h3 className="text-center mt-6 mb-3 text-light">Experience</h3>
                <div className="my-3">
                    <Experience />
                </div>
                <h3 className="text-center mt-6 mb-3 text-light">Education</h3>
                <div className="my-3">
                    <Education />
                </div>
                <h3 className="text-center mt-6 mb-3 text-light">Projects</h3>
                <div className="my-3">
                    <Projects />
                </div>
            </section>
        </Element>
    )
};

export default Main;