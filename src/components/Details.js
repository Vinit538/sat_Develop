


// import React from 'react';
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

// import './Details.css';

// const Details = () => {
//     return (
//         <div className='container detailsMainContainer py-5 px-3'>
//             <div className='text-center mb-4'>
//                 <h4 className='fw-bold'>SAT Academy Guidance and Support</h4>
//             </div>

//             <div className='text-center mb-3'>
//                 <h1 className='display-6 fw-semibold'>SAT Academy — Educate. Elevate. Excel.</h1>
//             </div>

//             <div className='text-center mb-5'>
//                 <p className='lead'>We’re here to help you level up your skills, gain confidence, and land your first tech job with expert support and placement guidance.</p>
//             </div>
//             <div className="social-icons-bar py-3">
//                 <ul className='list-unstyled d-flex gap-4 justify-content-center m-0'>
//                     <li>
//                         <a href='https://facebook.com' target='_blank' rel='noreferrer' className='text-dark fs-5'>
//                             <FaFacebookF />
//                         </a>
//                     </li>
//                     <li>
//                         <a href='https://instagram.com' target='_blank' rel='noreferrer' className='text-dark fs-5'>
//                             <FaInstagram />
//                         </a>
//                     </li>
//                     <li>
//                         <a href='https://linkedin.com' target='_blank' rel='noreferrer' className='text-dark fs-5'>
//                             <FaLinkedinIn />
//                         </a>
//                     </li>
//                     <li>
//                         <a href='https://youtube.com' target='_blank' rel='noreferrer' className='text-dark fs-5'>
//                             <FaYoutube />
//                         </a>
//                     </li>
//                 </ul>
//             </div>


//             <div className='row text-center text-md-start g-4'>
//                 {/* <div className='col-12 col-md-6 col-lg-3'>
//                     <a className='d-flex justify-content-center justify-content-md-start mb-2' href='#'>
//                         <img src='/satlogo.png' alt='SAT Academy Logo' className='img-fluid' style={{ maxWidth: '150px' }} />
//                     </a>
//                     <p className='small text-muted'>© 2025 SAT Academy. All Rights Reserved.</p>
//                 </div> */}

//                 <div className='col-6 col-md-3'>
//                     <h6 className='fw-bold mb-3'>Explore</h6>
//                     <ul className='list-unstyled'>
//                         <li><a className='text-decoration-none text-dark' href='#'>Courses</a></li>
//                         <li><a className='text-decoration-none text-dark' href='#'>Projects</a></li>
//                         <li><a className='text-decoration-none text-dark' href='#'>Internships</a></li>
//                     </ul>
//                 </div>

//                 <div className='col-6 col-md-3'>
//                     <h6 className='fw-bold mb-3'>Company</h6>
//                     <ul className='list-unstyled'>
//                         <li><a className='text-decoration-none text-dark' href='#'>About Us</a></li>
//                         <li><a className='text-decoration-none text-dark' href='#'>Careers</a></li>
//                         <li><a className='text-decoration-none text-dark' href='#'>Contact</a></li>
//                     </ul>
//                 </div>

//                 <div className='col-6 col-md-3'>
//                     <h6 className='fw-bold mb-3'>Legal</h6>
//                     <ul className='list-unstyled'>
//                         <li><a className='text-decoration-none text-dark' href='#'>Privacy Policy</a></li>
//                         <li><a className='text-decoration-none text-dark' href='#'>Terms & Conditions</a></li>
//                     </ul>
//                 </div>


//                 <div className='col-6 col-md-3'>
//                     <h6 className='fw-bold mb-3'>Follow Us</h6>
//                     <ul className='list-unstyled'>
//                         <li><a className='text-decoration-none text-dark' href='#'>FaceBook</a></li>
//                         <li><a className='text-decoration-none text-dark' href='#'>instagram</a></li>
//                         <li><a className='text-decoration-none text-dark' href='#'>linkedin</a></li>
//                         <li><a className='text-decoration-none text-dark' href='#'>YouTube</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Details;
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

import './Details.css';

const Details = () => {
    return (
        <div className='container detailsMainContainer py-5 px-3'>
            <div className='text-center mb-4'>
                <h4 className='fw-bold'>SAT Academy Guidance and Support</h4>
            </div>

            <div className='text-center mb-3'>
                <h1 className='display-6 fw-semibold'>SAT Academy — Educate. Elevate. Excel.</h1>
            </div>

            <div className='text-center mb-5'>
                <p className='lead'>We’re here to help you level up your skills, gain confidence, and land your first tech job with expert support and placement guidance.</p>
            </div>

            {/* Full-width Social Icons */}
            <div className='social-icons-bar py-4 social-icons-container'>
                <ul className='list-unstyled d-flex justify-content-center gap-4 m-0'>
                    <li>
                        <a href='https://facebook.com' target='_blank' rel='noreferrer' className='social-icon'>
                            <FaFacebookF />
                        </a>
                    </li>
                    <li>
                        <a href='https://instagram.com' target='_blank' rel='noreferrer' className='social-icon'>
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href='https://linkedin.com' target='_blank' rel='noreferrer' className='social-icon'>
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li>
                        <a href='https://youtube.com' target='_blank' rel='noreferrer' className='social-icon'>
                            <FaYoutube />
                        </a>
                    </li>
                </ul>
            </div>

            <div className='row text-center  g-4 pt-5 bottomNav'>
                <div className='col-6 col-md-3 text-center'>
                    <h6 className='fw-bold mb-3 text-center'>Explore</h6>
                    <ul className='list-unstyled'>
                        <li><a className='text-decoration-none text-dark' href='#'>Courses</a></li>
                        <li><a className='text-decoration-none text-dark' href='#'>Projects</a></li>
                        <li><a className='text-decoration-none text-dark' href='#'>Internships</a></li>
                    </ul>
                </div>

                <div className='col-6 col-md-3 text-center'>
                    <h6 className='fw-bold mb-3'>Company</h6>
                    <ul className='list-unstyled'>
                        <li><a className='text-decoration-none text-dark' href='#'>About Us</a></li>
                        <li><a className='text-decoration-none text-dark' href='#'>Careers</a></li>
                        <li><a className='text-decoration-none text-dark' href='#'>Contact</a></li>
                    </ul>
                </div>

                <div className='col-6 col-md-3 text-center'>
                    <h6 className='fw-bold mb-3'>Legal</h6>
                    <ul className='list-unstyled'>
                        <li><a className='text-decoration-none text-dark' href='#'>Privacy Policy</a></li>
                        <li><a className='text-decoration-none text-dark' href='#'>Terms & Conditions</a></li>
                    </ul>
                </div>

                <div className='col-6 col-md-3 text-center'>
                    <h6 className='fw-bold mb-3'>Follow Us</h6>
                    <ul className='list-unstyled'>
                        <li><a className='text-decoration-none text-dark' href='#'>Facebook</a></li>
                        <li><a className='text-decoration-none text-dark' href='#'>Instagram</a></li>
                        <li><a className='text-decoration-none text-dark' href='#'>LinkedIn</a></li>
                        <li><a className='text-decoration-none text-dark' href='#'>YouTube</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Details;
