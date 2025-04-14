import React from 'react';
import './Home.css'; // Custom styles

function Home() {
  return (
    <div className='mainbody'>
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold">Empower Your Future with SAT Academy</h1>
              <p className="lead mt-3">Learn Java, Python, CAD, and more with industry experts. Land your dream job with our placement assistance.</p>
              <a href="#courses" className="btn btn-primary btn-lg mt-4">Explore Courses</a>
            </div>
            <div className="col-md-6 custom_registerBoxOuter ">
              <div className="card p-4 shadow-lg p-3 mb-5 bg-body rounded custom_registerBoxInner">
                <h3 className="mb-4 text-left">Register Now and Begin Your Learning Journey!</h3>
                <form className='form_box'>
                  <div className="mb-3">
                    <input class="form-control" type="text" id="name" placeholder="Name" aria-label="Name" />
                  </div>

                  <div className="mb-3">
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                  </div>

                  <div className="mb-3">
                    <input class="form-control" type="number" id="phonenumber" placeholder="Phone No" aria-label="Phone No" />
                  </div>
                  <div className="mb-3">
                    <select class="form-select form-select-mb-2" aria-label=".form-select-sm example">
                      <option selected>Qualification</option>
                      <option value="1">Graduation</option>
                      <option value="2">Post Graduation</option>
                      <option value="3">Diploma/PUC</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <select class="form-select form-select-mb-1" aria-label=".form-select-sm example">
                      <option selected>Select Language</option>
                      <option value="1">Kannada</option>
                      <option value="2">English</option>
                      <option value="3">Telugu</option>
                      <option value="4">Tamil</option>
                      <option value="5">Hindi</option>
                    </select>
                  </div>
                  <div className="radioButtonTech">
                    <div className='d-grid gap-3' >
                      <label className='text-muted h6'>
                        Which Technology Path Will You Choose to Launch Your Career?
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                      <label class="form-check-label" for="exampleRadios1">
                        CAD Design
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                      <label class="form-check-label" for="exampleRadios2">
                        Java
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                      <label class="form-check-label" for="exampleRadios3">
                        Full Stack
                      </label>
                    </div>
                  </div>
                  <div className='registerButton'>
                    <button type="submit" className="btn btn-primary w-100">Register</button>
                  </div>

                </form>
              </div>
            </div>

          </div>
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

      {/* Footer */}
      {/* <footer className="footer bg-dark text-white text-center py-3">
        <p className="mb-0">&copy; {new Date().getFullYear()} SAT Academy | Designed with ❤️</p>
      </footer> */}
    </div>
  );
}

export default Home;
