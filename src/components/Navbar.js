// // import React, { useEffect, useState } from 'react';
// // import './Navbar.css';

// // function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
// //   const [visible, setVisible] = useState(true);

// //   const toggleNavbar = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const currentScrollPos = window.scrollY;

// //       // Detect scroll direction
// //       if (currentScrollPos > prevScrollPos) {
// //         // Scrolling down
// //         setVisible(false);
// //       } else {
// //         // Scrolling up
// //         setVisible(true);
// //       }

// //       setPrevScrollPos(currentScrollPos);

// //       // Add blur effect after 50px
// //       if (currentScrollPos > 50) {
// //         setIsScrolled(true);
// //       } else {
// //         setIsScrolled(false);
// //       }
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, [prevScrollPos]);

// //   return (
// //     <nav
// //       className={`navbar navbar-expand-lg fixed-top custom-navbar
// //         ${isScrolled ? 'blurred' : ''}
// //         ${visible ? 'visible' : 'hidden'}
// //       `}
// //     >
// //       <div className="container">
// //         <a className="navbar-brand d-flex align-items-center" href="#">
// //           <img src="/satlogo.png" alt="Logo" className="navlogo" />
// //         </a>

// //         <button
// //           className={`navbar-toggler custom-toggler ${isOpen ? 'open' : ''}`}
// //           type="button"
// //           onClick={toggleNavbar}
// //           aria-controls="navbarContent"
// //           aria-expanded={isOpen}
// //           aria-label="Toggle navigation"
// //         >
// //           <div className="toggler-icon"></div>
// //         </button>

// //         <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarContent">
// //           <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
// //             <li className="nav-item">
// //               <a className="nav-link active" href="#">Course</a>
// //             </li>
// //             <li className="nav-item">
// //               <a className="nav-link" href="#">Project</a>
// //             </li>
// //             <li className="nav-item">
// //               <a className="nav-link" href="#">Internship</a>
// //             </li>
// //             <li className="nav-item">
// //               <a className="btn btn-outline-light ms-3" href="#">Student Login</a>
// //             </li>
// //           </ul>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;
// import React, { useEffect, useState } from 'react';
// import './Navbar.css';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const [visible, setVisible] = useState(true);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.scrollY;

//       if (currentScrollPos < prevScrollPos) {
//         // Scrolling Up
//         setVisible(true);
//       } else if (currentScrollPos > prevScrollPos) {
//         // Scrolling Down
//         setVisible(false);
//       }

//       setPrevScrollPos(currentScrollPos);

//       // Add blur after scrolling 50px
//       if (currentScrollPos > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [prevScrollPos]);

//   return (
//     <nav
//       className={`navbar navbar-expand-lg fixed-top custom-navbar
//         ${isScrolled ? 'blurred' : ''}
//         ${visible ? 'visible' : 'hidden'}
//       `}
//     >
//       <div className="container">
//         <a className="navbar-brand d-flex align-items-center" href="#">
//           <img src="/satlogo.png" alt="Logo" className="navlogo" />
//         </a>

//         <button
//           className={`navbar-toggler custom-toggler ${isOpen ? 'open' : ''}`}
//           type="button"
//           onClick={toggleNavbar}
//           aria-controls="navbarContent"
//           aria-expanded={isOpen}
//           aria-label="Toggle navigation"
//         >
//           <div className="toggler-icon"></div>
//         </button>

//         <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarContent">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
//             <li className="nav-item">
//               <a className="nav-link active" href="#">Course</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Project</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Internship</a>
//             </li>
//             <li className="nav-item">
//               <a className="btn btn-outline-light ms-3" href="#">Student Login</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);

      // Blur effect
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top custom-navbar
        ${isScrolled ? 'blurred' : ''}
        ${showNavbar ? 'visible' : 'hidden'}
      `}
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="/satlogo.png" alt="Logo" className="navlogo" />
        </a>

        <button
          className={`navbar-toggler custom-toggler ${isOpen ? 'open' : ''}`}
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <div className="toggler-icon"></div>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <a className="nav-link" href="#">Course</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Project</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Internship</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-light ms-3" href="#">Student Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

