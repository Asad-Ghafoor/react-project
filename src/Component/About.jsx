import React from "react";
import "../Component/style.css"
import "bootstrap/dist/css/bootstrap.css";
const About = () => {
    return (<>
        <section className="bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mb-4 mb-sm-5">
                        <div className="card card-style1 border-0">
                            <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 mb-4 mb-lg-0">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="..."/>
                                    </div>
                                    <div className="col-lg-6 px-xl-10">
                                        <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                                            <h3 className="h2 text-white mb-0">Asad Ghafoor</h3>
                                            <span className="text-primary">Developer</span>
                                        </div>
                                        <ul className="list-unstyled mb-1-9">
                                            <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Position:</span> Internship</li>
                                            <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Experience:</span> 7 Month</li>
                                            <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Email:</span> asadghafoor993@gmail.com</li>
                                            <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Website:</span> ITExpert.com</li>
                                            <li className="display-28"><span className="display-26 text-secondary me-2 font-weight-600">Phone:</span>+92 3231505846 </li>
                                        </ul>
                                        {/*  */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 mb-4 mb-sm-5">
                        <div>
                            <span className="section-title text-primary mb-3 mb-sm-4">About Me</span>
                            <p>Edith is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-12 mb-4 mb-sm-5">
                                <div className="mb-4 mb-sm-5">
                                    <span className="section-title text-primary mb-3 mb-sm-4">Skill</span>
                                    <div className="progress-text">
                                        <div className="row">
                                            <div className="col-6">MongoDB</div>
                                            <div className="col-6 text-end">80%</div>
                                        </div>
                                    </div>
                                    <div className="custom-progress progress progress-medium mb-3" style={{"height": "4px"}}>
                                        <div className="animated custom-bar progress-bar slideInLeft bg-secondary" style={{"width":"80%"}} aria-valuemax="100" aria-valuemin="0" aria-valuenow="10" role="progressbar"></div>
                                    </div>
                                    <div className="progress-text">
                                        <div className="row">
                                            <div className="col-6">React JS</div>
                                            <div className="col-6 text-end">90%</div>
                                        </div>
                                    </div>
                                    <div className="custom-progress progress progress-medium mb-3" style={{"height":" 4px"}}>
                                        <div className="animated custom-bar progress-bar slideInLeft bg-secondary" style={{"width":"90%" }}aria-valuemax="100" aria-valuemin="0" aria-valuenow="70" role="progressbar"></div>
                                    </div>
                                    <div className="progress-text">
                                        <div className="row">
                                            <div className="col-6">Node JS || Express JS</div>
                                            <div className="col-6 text-end">50%</div>
                                        </div>
                                    </div>
                                    <div className="custom-progress progress progress-medium mb-3" style={{"height": "4px"}}>
                                        <div className="animated custom-bar progress-bar slideInLeft bg-secondary" style={{"width":"50%"}} aria-valuemax="100" aria-valuemin="0" aria-valuenow="70" role="progressbar"></div>
                                    </div>
                                    <div className="progress-text">
                                        <div className="row">
                                            <div className="col-6">MongoDB</div>
                                            <div className="col-6 text-end">60%</div>
                                        </div>
                                    </div>
                                    <div className="custom-progress progress progress-medium" style={{"height": "4px"}}>
                                        <div className="animated custom-bar progress-bar slideInLeft bg-secondary" style={{"width":"60%"}} aria-valuemax="100" aria-valuemin="0" aria-valuenow="70" role="progressbar"></div>
                                    </div>
                                </div>
                                <div>
                                    <span className="section-title text-primary mb-3 mb-sm-4">Education</span>
                                    <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                                    <p className="mb-1-9">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default About;