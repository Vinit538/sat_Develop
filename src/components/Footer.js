// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope} from '@fortawesome/free-regular-svg-icons';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';


// const Footer = () => {
//     return (
//         <div>
//             <div>
//                 <a href='#'>
//                     <FontAwesomeIcon icon={faPhone} className="me-2" />
//                     <span>Contact us-+91-9999 999 999</span>
//                 </a>
//             </div>
//             <div>
//                 <a href='#'>
//                     <FontAwesomeIcon icon={faEnvelope} className="me-2" />
//                     <span>Email-satacademy@gmail.com</span>
//                 </a>
//             </div>
//             <div>
//                 <button className='btn btn-primary'>
//                     Register
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default Footer;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row align-items-center justify-content-around">
                    
                    <div className="col-md-4 mb-3 mb-md-0">
                        <a href="#" className="text-white text-decoration-none d-flex align-items-center">
                            <FontAwesomeIcon icon={faPhone} className="me-2" />
                            <span>Contact us - +91-9999 999 999</span>
                        </a>
                    </div>

                    <div className="col-md-4 mb-3 mb-md-0">
                        <a href="#" className="text-white text-decoration-none d-flex align-items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                            <span> Email - satacademy@gmail.com</span>
                        </a>
                    </div>

                    <div className="col-md-4 text-md-end ">
                        <button className="btn footerbtn">
                            Register
                        </button>
                    </div>

                </div>
                <hr className="bg-light" />
                <p className="text-center mb-0">© 2025 My SAT Academy. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;
