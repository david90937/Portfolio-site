import React from "react";
import { Element } from "react-scroll";

const Projects = () => {
    return (
        <Element id="projects-list" name="projects-list">
            <div className="row justify-content-center">
                <div id="carouselExampleCaptions" className="carousel slide col-8" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <a href="https://github.com/david90937/Eve-Ore-Calculator" target="_blank" rel="noreferrer"><img src="https://cdn.pixabay.com/photo/2016/08/16/17/32/fluorite-1598476__340.jpg" className="d-block w-100" alt="..." /></a>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Ore Calculator</h5>
                                <p>A small tool I created using Python and Tkinter to calculate the profitability of producing certain in-game goods for the MMO Eve Online.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <a href="https://github.com/david90937/Innovate-Birmingham-Coursework" target="_blank" rel="noreferrer"><img src="https://cdn.pixabay.com/photo/2020/04/25/12/14/tech-5090539__340.jpg" className="d-block w-100" alt="..." /></a>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Innovate Birmingham Coursework</h5>
                                <p>A github repository containing all of the classwork I completed during the Innovate Birmingham bootcamp. </p>
                            </div>
                        </div> 
                        <div className="carousel-item">
                            <a href="https://github.com/david90937/Chirpr_Full_Stack" target="_blank" rel="noreferrer"><img src="https://cdn.pixabay.com/photo/2018/03/10/09/45/businessman-3213659__340.jpg" className="d-block w-100" alt="..." /> </a>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Chirpr Fullstack</h5>
                                <p>This project is a placeholder until my final Innovate Birmingham project has been completed.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </Element>
    )
}

export default Projects;