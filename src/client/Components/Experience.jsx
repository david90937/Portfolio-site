import React from "react";
import { Element } from "react-scroll";

const WorkExp = () => {
    return (
        <Element id='experience-list' name='experience-list'>
            <div className="accordion" id="work-accordion">
                <div className="accordion-item">
                    <div className="accordion-header fs-2" id="exp-acc-1">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#exp-collapse-1" aria-expanded="true" aria-controls="exp-collapse-1">
                            Innovate Birmingham
                        </button>
                    </div>
                    <div id="exp-collapse-1" className="accordion-collapse collapse show" aria-labelledby="exp-acc-1" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><strong>Fullstack web development student</strong></p>
                            <p>Birmingham, AL - August 25th, 2021 - December 9th, 2021</p>
                            <ul>
                                <li>Improved upon existing knowledge of HTML, CSS, Javascript,  and API's.</li>
                                <li>Learned GIt, Bootstrap, Jquery,  React, Node.js, SQL, and more.</li>
                                <li>Implemented small scripts / applications throughout the course to solidify knowledge. </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <div className="accordion-header fs-2" id="exp-acc-2">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#exp-collapse-2" aria-expanded="false" aria-controls="exp-collapse-2">
                            Allstate
                        </button>
                    </div>
                    <div id="exp-collapse-2" className="accordion-collapse collapse" aria-labelledby="exp-acc-2" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><strong>Claims Service Specialist</strong></p>
                            <p>Birmingham, AL - April 20th, 2020 - August 25th, 2021</p>
                            <ul>
                                <li>Utilized innovative tools and technology to investigate injuries and medical bills as result of an auto accident</li>
                                <li>Reviewed claim files for coverage which includes reviewing policy endorsements, policy conditions, and state regulations to confirm coverage is available for the loss</li>
                                <li>Communicated empathetically with customers to help them through their claim process in a fast, fair and easy manner</li>
                                <li>Used data and analytics to problem solve and contribute to team goals by sharing ideas with team members/management.</li>
                                <li>Mentored new and existing employees on complex claims processes and quality control</li>
                                <li>Handled sensitive / urgent files at team lead's request to ensure quality standards and customer experience goals were met. </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <div className="accordion-header fs-2" id="exp-acc-3">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#exp-collapse-3" aria-expanded="false" aria-controls="exp-collapse-3">
                            Walmart
                        </button>
                    </div>
                    <div id="exp-collapse-3" className="accordion-collapse collapse" aria-labelledby="exp-acc-3" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><strong>Personal Shopper</strong></p>
                            <p>Foley, AL - May, 2019 - March, 2020</p>
                            <ul>
                                <li>Provided an elevated customer experience to generate a loyal clientele.</li>
                                <li>Assisted customers with food selection, inquiries, and order customization requests.</li>
                                <li>Built long-term customer relationships and advised customers on purchases and promotions.</li>
                                <li>Provided courtesy calls to ensure excellent quality to our delivery customers.</li>
                                <li>Mentored and directed new employees in a high-paced team environment.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
};

export default WorkExp;