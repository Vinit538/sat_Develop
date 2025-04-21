import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Custom styles
import Details from './Details';
import UserForm from './UserForm';

function Home() {

  //input animation
  const [isFocused, setIsFocused] = useState(false);
  const [isInputValid, setIsInputValid] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };
  const handleInputBlur = () => {
    setIsFocused(false);
    if (
      document.getElementById("userName")?.value ||
      document.getElementById("userEmail")?.value ||
      document.getElementById("userPhoneNo")?.value ||
      document.getElementById("userQualification")?.value ||
      document.getElementById("userLanguage")?.value ||
      document.getElementById("userCity")?.value ||
      document.getElementById("userSelectedTech")?.value
    ) {
      setIsInputValid(true);
    } else {
      setIsInputValid(false);
    }
  };

  // const handleInputChange = (e)=>{
  //   const{name, value}=e.target;
  //   setUserData({ ...userData, [name]:value});
  // }

  // const handleSubmit = (event)=>{
  //   event.preventDefault();
  // }
  //Register

  const [newUserData, setNewUserData] = useState({
    userName: '',
    userEmail: '',
    userPhoneNo: '',
    userQualification: '',
    userLanguage: '',
    userCity: '',
    userSelectedTech: '',
  });

  const validateField = (name, value) => {
    let isValid = false;
    switch (name) {
      case "userName":
        isValid = /^[A-Za-z ]+$/.test(value);
        break;
      case "userEmail":
        isValid = /^[A-Za-z0-9._%+-]+@[A-Za-z.-]+\.[A-Za-z]{2,}$/i.test(value);
        break;
      case "userPhoneNo":
        isValid = /^[0-9]{10}$/.test(value);
        break;
      case "userCity":
        isValid = /^[A-Za-z ]+$/.test(value);
        break;
      default:
        isValid = true;
    }

    setValidationStatus((prev) => ({ ...prev, [name]: isValid }));
  };

  const newUserInputChange = (e) => {
    const { name, value } = e.target;
    setNewUserData({ ...newUserData, [name]: value });
    validateField(name, value);
  };

  // const handleNewUserSubmit = (event) => {
  //   event.preventDefault();
  // }

  const handleNewUserSubmit = (event) => {
    event.preventDefault();

    console.log("Registered User Data:", newUserData);
    alert("Registration successful!");

    // Reset form (optional)
    setNewUserData({
      userName: '',
      userEmail: '',
      userPhoneNo: '',
      userQualification: '',
      userLanguage: '',
      userCity: '',
      userSelectedTech: '',
    });
  };

  // to validate the user data
  const [validationStatus, setValidationStatus] = useState({
    userName: null,
    userEmail: null,
    userPhoneNo: null,
    userCity: null,
  });

  return (
    <div className='mainbody'>
      {/* Hero Section */}
      <section className="hero-section d-flex justify-content-between">
        {/* <div className="container"> */}
        <div className="row">
          <div className="col-md-6 intro_Div">
            <h1 className="display-3 fw-bold introDivHeading">Empower Your Future with SAT Academy</h1>
            <p className="lead mt-3 introDivText">Launch your career in tech! Learn Full Stack, DevOps, and CAD from real-world experts and get placement-ready with personalized support.</p>
            {/* <Link className='introExplorebutton' to=''>Explore Courses</Link>
              <a href="#courses" className="btn btn-primary btn-lg mt-4">Explore Courses</a> */}
          </div>
          <div className="col-md-6 custom_registerBoxOuter ">
            <div className="card p-4 shadow-lg p-3 mb-5 bg-body rounded custom_registerBoxInner">
              <h3 className="mb-4 text-left">Register Now and Begin Your Learning Journey!</h3>

         <UserForm />

            </div>
          </div>

          {/* </div> */}
        </div>
      </section>

      {/* Why SAT Academy Section */}
      <section className="why-section py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Why Choose SAT Academy?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Expert Trainers</h5>
                  <p className="card-text">Learn from certified trainers with real-world experience and in-depth knowledge.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Guaranteed Placements</h5>
                  <p className="card-text">We prepare you for top companies with interview training and placement drives.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Hands-on Projects</h5>
                  <p className="card-text">Practical sessions, mini-projects, and real assignments to boost your skills.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="courses-section py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Our Programs</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 course-card">
                <div className="card-body">
                  <h5 className="card-title">Java Full Stack Development</h5>
                  <p className="card-text">Master Core Java, Spring Boot, React, MySQL, and Cloud Deployments.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 course-card">
                <div className="card-body">
                  <h5 className="card-title">Python for Data Science</h5>
                  <p className="card-text">Learn Python, Data Analysis, Machine Learning, and AI Fundamentals.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 course-card">
                <div className="card-body">
                  <h5 className="card-title">CAD Designing</h5>
                  <p className="card-text">Become a CAD expert with practical training for Mechanical and Civil designs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement/Success Stories Section */}
      <section className="placement-section py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Our Success Stories</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="success-box p-4 shadow-sm">
                <h5>500+ Students Placed</h5>
                <p>Our alumni are now working in MNCs like Infosys, TCS, Capgemini, and more.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="success-box p-4 shadow-sm">
                <h5>95% Placement Record</h5>
                <p>Get job ready with SAT Academy's intensive placement training programs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Details />
    </div>
  );
}

export default Home;
