import React from "react";
import { Element } from "react-scroll";

const Education = () => {
    return (
        <Element id='education-list' name='education-list'>
            <div className="accordion" id="work-accordion">
                <div className="accordion-item">
                    <div className="accordion-header fs-2" id="edu-acc-1">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#edu-collapse-1" aria-expanded="true" aria-controls="edu-collapse-1">
                            Innovate Birmingham
                        </button>
                    </div>
                    <div id="edu-collapse-1" className="accordion-collapse collapse" aria-labelledby="edu-acc-1" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p> <strong>Full stack web development student </strong></p>
                            <p>August 25th, 2021 - December 9th, 2021 </p>
                            <p>Topics included:  </p>
                            <li>HTML/CSS</li>
                            <li>JavaScript</li>
                            <li>DOM manipulation</li>
                            <li>Jquery</li>
                            <li>Git</li>
                            <li>Bootstrap</li>
                            <li>React</li>
                            <li>Node.js / Express</li>
                            <li>TypeScript</li>
                            <li>API's / authentication</li>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <div className="accordion-header fs-2" id="edu-acc-2">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#edu-collapse-2" aria-expanded="false" aria-controls="edu-collapse-2">
                            Pensacola Junior College
                        </button>
                    </div>
                    <div id="edu-collapse-2" className="accordion-collapse collapse" aria-labelledby="edu-acc-2" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><strong>Computer science major</strong></p>
                            <p>August, 2019 - March, 2020</p>
                            <p>Classes taken:</p>
                            <li>Introduction to Programming (Python)</li>
                            <li>HTML/CSS3</li>
                            <li>Introduction to Cyber Security</li>
                            <li>Accounting</li>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <div className="accordion-header fs-2" id="edu-acc-3">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#edu-collapse-3" aria-expanded="false" aria-controls="edu-collapse-3">
                            Faulkner State Community College
                        </button>
                    </div>
                    <div id="edu-collapse-3" className="accordion-collapse collapse" aria-labelledby="edu-acc-3" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><strong>Nursing major</strong></p>
                            <p>August, 2014 - March, 2016</p>
                            <p>Completed pre-nursing coursework in Anatomy, Biology, Pyschology, and Human Development.</p>
                            <p>Completed first semester of Nursing program and partial completion of second semester.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
};

export default Education