import React from "react";


const Kleee = () => {
    return(

    <>

     {/* Course-details-area start */}
<div className="course-details-area pb-60">
  {/* Course title */}
  <div className="course-banner bg-img bg-cover pb-5" data-bg-image="assets/images/breadcrumb-bg.jpg">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="banner-content" data-aos="fade-up">
            <nav aria-label="breadcrumb">
            </nav>
            <h3 className="title mb-15 mt-10">
              Koneru Lakshmaiah University (KL University) conducts KLEEE (KL Engineering Entrance Exam) for admissions to BTech and BArch programmes offered at the University.                            
            </h3></div>
        </div>
      </div>
    </div>
  </div>
  {/* course-description */}
  <div className="container">
    <div className="row gx-xl-5">
      <div className="col-lg-8" data-aos="fade-up">
        {/* course-details-tab */}
        <div className="course-details-tab pt-5">
          <div className="tabs-navigation mb-40">
            <ul className="nav nav-tabs" data-hover="fancyHover">
              <li className="nav-item active">
                <button className="nav-link hover-effect btn-md rounded-pill active" data-bs-toggle="tab" data-bs-target="#tab1" type="button">Overview</button>
              </li>
              <li className="nav-item">
                <button className="nav-link hover-effect btn-md rounded-pill" data-bs-toggle="tab" data-bs-target="#tab2" type="button">Course Content</button>
              </li>
              <li className="nav-item">
                <button className="nav-link hover-effect btn-md rounded-pill" data-bs-toggle="tab" data-bs-target="#tab3" type="button">Details</button>
              </li>
              <li className="nav-item">
                <button className="nav-link hover-effect btn-md rounded-pill" data-bs-toggle="tab" data-bs-target="#tab4" type="button">Instructor</button>
              </li>
              <li className="nav-item">
                <button className="nav-link hover-effect btn-md rounded-pill" data-bs-toggle="tab" data-bs-target="#tab5" type="button">Review</button>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            {/* Overview */}
            <div className="tab-pane slide slide show active" id="tab1">
              <div className="content pb-20">
                <h5 className="title mb-20">What you'll learn</h5>
                <p className="text">
                  This comprehensive course is designed for learners of all levels, from beginners to experienced coders looking to refresh their skills. Over the course of 100 days, you'll master the fundamentals of Python programming, as well as advanced topics such as object-oriented programming, web development, data analysis, and more.
                </p>
                <div className="row gl-xl-5 mt-20">
                  <div className="col-lg-6">
                    <ul className="info-list list-unstyled mb-20">
                      <li>You will master the Python programming language by building 100 unique projects over 100 days.</li>
                      <li>You will be able to program in Python professionally</li>
                      <li>Create a portfolio of 100 Python projects to apply for developer jobs</li>
                      <li>Be able to use Python for data science and machine learning</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="info-list list-unstyled mb-20">
                      <li>You will learn automation, game, app and web development, data science and machine learning all using Python.</li>
                      <li>You will learn Selenium, Beautiful Soup, Request, Flask, Pandas, NumPy, Scikit Learn, Plotly, and Matplotlib.</li>
                      <li>Be able to build fully fledged websites and web apps with Python</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Course content */}
            <div className="tab-pane slide" id="tab2">
              <div className="accordion pb-20" id="courseAccordion">
                <div className="accordion-item radius-0 mb-20">
                  <h6 className="accordion-header" id="heading1">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                      Day 1 - Beginner - Working with Variables in Python to Manage Data
                      <span className="badge bg-info">1hr 30min</span>
                    </button>
                  </h6>
                  <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#courseAccordion">
                    <div className="accordion-body">
                      <ul className="course-content-list list-unstyled">
                        <li className="course-content">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Introduction to Python and Programming Basics</span>
                            </div>
                            <div className="content-right">
                              <span className="text">30 min</span>
                              <span className="btn btn-primary btn-sm radius-sm no-animation">
                                Preview
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="course-content">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Control Flow and Functions in Python</span>
                            </div>
                            <div className="content-right">
                              <span className="text">21 min</span>
                              <span className="btn btn-primary btn-sm radius-sm no-animation">
                                Preview
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="course-content disabled">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Object-Oriented Programming in Python</span>
                            </div>
                            <div className="content-right">
                              <i className="fal fa-lock" />
                            </div>
                          </a>
                        </li>
                        <li className="course-content disabled">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-file-alt" />
                              <span className="text">Variable naming quiz</span>
                            </div>
                            <div className="content-right">
                              <i className="fal fa-lock" />
                            </div>
                          </a>
                        </li>
                        <li className="course-content disabled">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Python Libraries for Web Development: Flask and Django</span>
                            </div>
                            <div className="content-right">
                              <i className="fal fa-lock" />
                            </div>
                          </a>
                        </li>
                        <li className="course-content disabled">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Database Management with Python and SQL</span>
                            </div>
                            <div className="content-right">
                              <i className="fal fa-lock" />
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item radius-0 mb-20">
                  <h6 className="accordion-header" id="heading2">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                      Day 2 - Beginner - Understanding Data Types and How to Manipulate Strings
                      <span className="badge bg-info">2hr 30min</span>
                    </button>
                  </h6>
                  <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#courseAccordion">
                    <div className="accordion-body">
                      <ul className="course-content-list list-unstyled">
                        <li className="course-content">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Introduction to Python and Programming Basics</span>
                            </div>
                            <div className="content-right">
                              <span className="text">30 min</span>
                              <span className="btn btn-primary btn-sm radius-sm no-animation">
                                Preview
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="course-content">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Control Flow and Functions in Python</span>
                            </div>
                            <div className="content-right">
                              <span className="text">21 min</span>
                              <span className="btn btn-primary btn-sm radius-sm no-animation">
                                Preview
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="course-content disabled">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Object-Oriented Programming in Python</span>
                            </div>
                            <div className="content-right">
                              <i className="fal fa-lock" />
                            </div>
                          </a>
                        </li>
                        <li className="course-content disabled">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-file-alt" />
                              <span className="text">Variable naming quiz</span>
                            </div>
                            <div className="content-right">
                              <i className="fal fa-lock" />
                            </div>
                          </a>
                        </li>
                        <li className="course-content disabled">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Python Libraries for Web Development: Flask and Django</span>
                            </div>
                            <div className="content-right">
                              <i className="fal fa-lock" />
                            </div>
                          </a>
                        </li>
                        <li className="course-content disabled">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Database Management with Python and SQL</span>
                            </div>
                            <div className="content-right">
                              <i className="fal fa-lock" />
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item radius-0 mb-20">
                  <h6 className="accordion-header" id="heading3">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
                      Day 3 - Beginner - Control Flow and Logical Operators
                      <span className="badge bg-info">1hr 12min</span>
                    </button>
                  </h6>
                  <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#courseAccordion">
                    <div className="accordion-body">
                      <ul className="course-content-list list-unstyled">
                        <li className="course-content">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Introduction to Python and Programming Basics</span>
                            </div>
                            <div className="content-right">
                              <span className="text">30 min</span>
                              <span className="btn btn-primary btn-sm radius-sm no-animation">
                                Preview
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="course-content">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Control Flow and Functions in Python</span>
                            </div>
                            <div className="content-right">
                              <span className="text">21 min</span>
                              <span className="btn btn-primary btn-sm radius-sm no-animation">
                                Preview
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="course-content disabled">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Object-Oriented Programming in Python</span>
                            </div>
                            <div className="content-right">
                              <i className="fal fa-lock" />
                            </div>
                          </a>
                        </li>
                        <li className="course-content disabled">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-file-alt" />
                              <span className="text">Variable naming quiz</span>
                            </div>
                            <div className="content-right">
                              <i className="fal fa-lock" />
                            </div>
                          </a>
                        </li>
                        <li className="course-content disabled">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Python Libraries for Web Development: Flask and Django</span>
                            </div>
                            <div className="content-right">
                              <i className="fal fa-lock" />
                            </div>
                          </a>
                        </li>
                        <li className="course-content disabled">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Database Management with Python and SQL</span>
                            </div>
                            <div className="content-right">
                              <i className="fal fa-lock" />
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item radius-0 mb-20">
                  <h6 className="accordion-header" id="heading4">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapse4">
                      Day 4 - Beginner - Randomization and Python Lists
                      <span className="badge bg-info">59min</span>
                    </button>
                  </h6>
                  <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#courseAccordion">
                    <div className="accordion-body">
                      <ul className="course-content-list list-unstyled">
                        <li className="course-content">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Introduction to Python and Programming Basics</span>
                            </div>
                            <div className="content-right">
                              <span className="text">30 min</span>
                              <span className="btn btn-primary btn-sm radius-sm no-animation">
                                Preview
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="course-content">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Control Flow and Functions in Python</span>
                            </div>
                            <div className="content-right">
                              <span className="text">21 min</span>
                              <span className="btn btn-primary btn-sm radius-sm no-animation">
                                Preview
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="course-content disabled">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Object-Oriented Programming in Python</span>
                            </div>
                            <div className="content-right">
                              <i className="fal fa-lock" />
                            </div>
                          </a>
                        </li>
                        <li className="course-content disabled">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-file-alt" />
                              <span className="text">Variable naming quiz</span>
                            </div>
                            <div className="content-right">
                              <i className="fal fa-lock" />
                            </div>
                          </a>
                        </li>
                        <li className="course-content disabled">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Python Libraries for Web Development: Flask and Django</span>
                            </div>
                            <div className="content-right">
                              <i className="fal fa-lock" />
                            </div>
                          </a>
                        </li>
                        <li className="course-content disabled">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Database Management with Python and SQL</span>
                            </div>
                            <div className="content-right">
                              <i className="fal fa-lock" />
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item radius-0 mb-20">
                  <h6 className="accordion-header" id="heading5">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
                      Day 5 - Beginner - Python Loops
                      <span className="badge bg-info">1hr 02min</span>
                    </button>
                  </h6>
                  <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#courseAccordion">
                    <div className="accordion-body">
                      <ul className="course-content-list list-unstyled">
                        <li className="course-content">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Introduction to Python and Programming Basics</span>
                            </div>
                            <div className="content-right">
                              <span className="text">30 min</span>
                              <span className="btn btn-primary btn-sm radius-sm no-animation">
                                Preview
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="course-content">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Control Flow and Functions in Python</span>
                            </div>
                            <div className="content-right">
                              <span className="text">21 min</span>
                              <span className="btn btn-primary btn-sm radius-sm no-animation">
                                Preview
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="course-content disabled">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Object-Oriented Programming in Python</span>
                            </div>
                            <div className="content-right">
                              <i className="fal fa-lock" />
                            </div>
                          </a>
                        </li>
                        <li className="course-content disabled">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-file-alt" />
                              <span className="text">Variable naming quiz</span>
                            </div>
                            <div className="content-right">
                              <i className="fal fa-lock" />
                            </div>
                          </a>
                        </li>
                        <li className="course-content disabled">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Python Libraries for Web Development: Flask and Django</span>
                            </div>
                            <div className="content-right">
                              <i className="fal fa-lock" />
                            </div>
                          </a>
                        </li>
                        <li className="course-content disabled">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Database Management with Python and SQL</span>
                            </div>
                            <div className="content-right">
                              <i className="fal fa-lock" />
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item radius-0 mb-20">
                  <h6 className="accordion-header" id="heading6">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
                      Day 6 - Beginner - Python Functions &amp; Karel
                      <span className="badge bg-info">1hr 11min</span>
                    </button>
                  </h6>
                  <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#courseAccordion">
                    <div className="accordion-body">
                      <ul className="course-content-list list-unstyled">
                        <li className="course-content">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Introduction to Python and Programming Basics</span>
                            </div>
                            <div className="content-right">
                              <span className="text">30 min</span>
                              <span className="btn btn-primary btn-sm radius-sm no-animation">
                                Preview
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="course-content">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Control Flow and Functions in Python</span>
                            </div>
                            <div className="content-right">
                              <span className="text">21 min</span>
                              <span className="btn btn-primary btn-sm radius-sm no-animation">
                                Preview
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="course-content disabled">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Object-Oriented Programming in Python</span>
                            </div>
                            <div className="content-right">
                              <i className="fal fa-lock" />
                            </div>
                          </a>
                        </li>
                        <li className="course-content disabled">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-file-alt" />
                              <span className="text">Variable naming quiz</span>
                            </div>
                            <div className="content-right">
                              <i className="fal fa-lock" />
                            </div>
                          </a>
                        </li>
                        <li className="course-content disabled">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Python Libraries for Web Development: Flask and Django</span>
                            </div>
                            <div className="content-right">
                              <i className="fal fa-lock" />
                            </div>
                          </a>
                        </li>
                        <li className="course-content disabled">
                          <a href="https://www.youtube.com/watch?v=bDJKs6r___g" className="youtube-popup" target="_self" title="Link">
                            <div className="content-left">
                              <i className="fal fa-play-circle" />
                              <span className="text">Database Management with Python and SQL</span>
                            </div>
                            <div className="content-right">
                              <i className="fal fa-lock" />
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Details */}
            <div className="tab-pane" id="tab3">
              <div className="content pb-20">
                <h5 className="title mb-20">Requirements</h5>
                <ul className="info-list list-unstyled mb-20">
                  <li>No programming experience needed - I'll teach you everything you need to know</li>
                  <li>A computer equipped with a Mac as well as PC machine with internet access</li>
                  <li>No paid software required - I'll teach you how to use PyCharm, Jupyter Notebooks.</li>
                  <li>I'll walk you through, step-by-step how to get all the software installed and set up</li>
                </ul>
              </div>
              <div className="overview pb-20">
                <h5 className="title mb-20">Description</h5>
                <p className="text">
                  Welcome to 100 Days of Code - The Complete Python Pro Bootcamp, the only course you'll ever need to learn to code in Python. My classes are among of the HIGHEST RATED courses in Udemy history, with over 500,000 5 STAR reviews and a 4.8 average!
                </p>
                <p className="text">
                  With over 60 hours of content, this Python course is without a doubt the most comprehensive Python course available online. This course will take you from novice to professional even if you have no programming expertise. This is why:
                </p>
                <ul className="info-list list-unstyled mb-20">
                  <li>The course is taught by the lead instructor at the App Brewery, London's best in-person programming Bootcamp.</li>
                  <li>The course has been updated to be 2023 ready and you'll be learning the latest tools and technologies used at large companies such as Apple, Google and Netflix.</li>
                  <li>This course doesn't cut any corners, there are beautiful animated explanation videos and tens of real-world projects which you will get to build. e.g. Tinder auto swiper, Snake game, Blog Website, LinkedIn Auto Submit Job Application</li>
                  <li>The curriculum was developed over a period of 2 years, with comprehensive student testing and feedback.</li>
                </ul>
              </div>
            </div>
            {/* Instructor */}
            <div className="tab-pane slide" id="tab4">
              <div className="mentor mb-40">
                <div className="mentor-info">
                  <div className="mentor-img">
                    <a href="mentor-details.html" target="_self" title="Link" className="lazy-container ratio ratio-1-1 radius-sm">
                      <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/avatar-1.jpg" alt="Avatar" />
                    </a>
                  </div>
                  <div className="mentor-content">
                    <h6 className="mb-1">
                      <a href="mentor-details.html" target="_self" title="Link">Jose Portilla</a>
                    </h6>
                    <span className="subtitle font-sm">
                      Web Designer, Researcher, Instructor at Tork
                    </span>
                    <ul className="list-group list-group-horizontal align-items-center mt-1">
                      <li className="d-inline-block">
                        <div className="ratings">
                          <div className="rate bg-img" data-bg-image="assets/images/rate-star.png">
                            <div className="rating-icon bg-img" data-bg-image="assets/images/rate-star.png" />
                          </div>
                          <span className="ratings-total">(4.5)</span>
                        </div>
                      </li>
                      <li className="d-inline-block icon-start font-sm">
                        <i className="fal fa-user" />34+ Enrolled
                      </li>
                      <li className="d-inline-block icon-start font-sm">
                        <i className="fal fa-book-open" />20 Lessons
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content-text mt-20">
                  <p>
                    Meet Jose, an experienced educator and industry expert with a passion for sharing knowledge and helping others succeed. With over 3 years of experience in Web Design, Jose brings a wealth of practical knowledge and real-world experience to the classroom.
                  </p>
                  <p>
                    Whether you're just starting out in SreshtaEdutech or looking to take your skills to the next level, Jose is the ideal guide to help you achieve your goals. With a focus on practical, hands-on learning, Jose will work with you to develop the skills and knowledge you need to succeed in SreshtaEdutech.
                  </p>
                </div>
                <div className="social-link icon-only mt-20">
                  <span>Social Link:</span>
                  <a href="https://www.instagram.com/" target="_blank" title="instagram" className="color-primary"><i className="fab fa-instagram" /></a>
                  <a href="https://www.dribbble.com/" target="_blank" title="dribbble" className="color-primary"><i className="fab fa-dribbble" /></a>
                  <a href="https://www.twitter.com/" target="_blank" title="twitter" className="color-primary"><i className="fab fa-twitter" /></a>
                  <a href="https://www.youtube.com/" target="_blank" title="youtube" className="color-primary"><i className="fab fa-youtube" /></a>
                </div>
              </div>
            </div>
            {/* Review */}
            <div className="tab-pane slide" id="tab5">
              <div className="review-progresses p-30 radius-md border mb-40">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-30">
                  <h4 className="mb-0">Total Reviews Status</h4>
                  <div className="ratings size-md">
                    <div className="rate bg-img" data-bg-image="assets/images/rate-star-md.png">
                      <div className="rating-icon bg-img" data-bg-image="assets/images/rate-star-md.png" />
                    </div>
                    <span className="ratings-total">(4.5)</span>
                  </div>
                </div>
                <div className="review-progress mb-10 row align-items-center">
                  <div className="col-3 col-sm-2">5 Star</div>
                  <div className="progress-line col-6 col-sm-8">
                    <div className="progress">
                      <div className="progress-bar bg-primary" style={{width: '90%'}} role="progressbar" aria-label="Basic example" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                  <div className="col-3 col-sm-2 text-end">90%</div>
                </div>
                <div className="review-progress mb-10 row align-items-center">
                  <div className="col-3 col-sm-2">4 Star</div>
                  <div className="progress-line col-6 col-sm-8">
                    <div className="progress">
                      <div className="progress-bar bg-primary" style={{width: '60%'}} role="progressbar" aria-label="Basic example" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                  <div className="col-3 col-sm-2 text-end">60%</div>
                </div>
                <div className="review-progress mb-10 row align-items-center">
                  <div className="col-3 col-sm-2">3 Star</div>
                  <div className="progress-line col-6 col-sm-8">
                    <div className="progress">
                      <div className="progress-bar bg-primary" style={{width: '50%'}} role="progressbar" aria-label="Basic example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                  <div className="col-3 col-sm-2 text-end">50%</div>
                </div>
                <div className="review-progress mb-10 row align-items-center">
                  <div className="col-3 col-sm-2">2 Star</div>
                  <div className="progress-line col-6 col-sm-8">
                    <div className="progress">
                      <div className="progress-bar bg-primary" style={{width: '20%'}} role="progressbar" aria-label="Basic example" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                  <div className="col-3 col-sm-2 text-end">20%</div>
                </div>
                <div className="review-progress mb-10 row align-items-center">
                  <div className="col-3 col-sm-2">1 Star</div>
                  <div className="progress-line col-6 col-sm-8">
                    <div className="progress">
                      <div className="progress-bar bg-primary" style={{width: '10%'}} role="progressbar" aria-label="Basic example" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                  <div className="col-3 col-sm-2 text-end">10%</div>
                </div>
              </div>
              <div className="review-box pb-10">
                <div className="review-list mb-30 border radius-md">
                  <div className="review-item p-30">
                    <div className="review-header flex-wrap mb-20">
                      <div className="author d-flex align-items-center justify-content-between gap-3">
                        <div className="author-img">
                          <a href="#" target="_self" title="Link" className="lazy-container ratio ratio-1-1 rounded-circle">
                            <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/avatar-4.jpg" alt="Avatar" />
                          </a>
                        </div>
                        <div className="author-info">
                          <h6 className="mb-1">
                            <a href="error-404.html" target="_self" title="Link">Mark Jco</a>
                          </h6>
                          <div className="ratings mb-1">
                            <div className="rate bg-img" data-bg-image="assets/images/rate-star.png">
                              <div className="rating-icon bg-img" data-bg-image="assets/images/rate-star.png" />
                            </div>
                            <span className="ratings-total">(4.5)</span>
                          </div>
                          <span className="font-xsm icon-start">
                            <span className="color-green">
                              <i className="fas fa-badge-check" />
                            </span>
                            Verified User
                          </span>
                        </div>
                      </div>
                      <div className="more-info font-sm">
                        <div className="icon-start">
                          <i className="fal fa-map-marker-alt" />
                          Los Angela's, USA
                        </div>
                        <div className="icon-start">
                          <i className="fal fa-clock" />
                          04 Days ago
                        </div>
                      </div>
                    </div>
                    <h5 className="lc-1">Ana Studios was very logical and creative at the same time</h5>
                    <p>The client received excellent feedback on DePalma Studios’ designs due to
                      their website's improved look and feel. The team was very communicative and
                      collaborative, and they demonstrated a unique understanding of the client’s
                      requirements, providing very.
                    </p>
                  </div>
                </div>
                <div className="review-list mb-30 border radius-md">
                  <div className="review-item p-30">
                    <div className="review-header flex-wrap mb-20">
                      <div className="author d-flex align-items-center justify-content-between gap-3">
                        <div className="author-img">
                          <a href="#" target="_self" title="Link" className="lazy-container ratio ratio-1-1 rounded-circle">
                            <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/avatar-2.jpg" alt="Avatar" />
                          </a>
                        </div>
                        <div className="author-info">
                          <h6 className="mb-1">
                            <a href="error-404.html" target="_self" title="Link">Johnny Ben</a>
                          </h6>
                          <div className="ratings mb-1">
                            <div className="rate bg-img" data-bg-image="assets/images/rate-star.png">
                              <div className="rating-icon bg-img" data-bg-image="assets/images/rate-star.png" />
                            </div>
                            <span className="ratings-total">(4.5)</span>
                          </div>
                          <span className="font-xsm icon-start">
                            <span className="color-green">
                              <i className="fas fa-badge-check" />
                            </span>
                            Verified User
                          </span>
                        </div>
                      </div>
                      <div className="more-info font-sm">
                        <div className="icon-start">
                          <i className="fal fa-map-marker-alt" />
                          Los Angela's, USA
                        </div>
                        <div className="icon-start">
                          <i className="fal fa-clock" />
                          04 Days ago
                        </div>
                      </div>
                    </div>
                    <h4 className="lc-1">Ana Studios was very logical and creative at the same time</h4>
                    <p>The client received excellent feedback on DePalma Studios’ designs due to
                      their website's improved look and feel. The team was very communicative and
                      collaborative, and they demonstrated a unique understanding of the client’s
                      requirements, providing very.
                    </p>
                  </div>
                  <div className="review-reply bg-light border-top p-30">
                    <div className="review-header flex-wrap mb-20 d-flex align-items-center justify-content-between gap-3">
                      <div className="author d-flex align-items-center gap-2">
                        <div className="icon"><i className="fal fa-reply-all" /></div>
                        <h6 className="mb-0">Reply from Ana Rita Pailo</h6>
                      </div>
                      <div className="more-info font-sm">
                        <div className="icon-start"><i className="fal fa-clock" />04 Days ago</div>
                      </div>
                    </div>
                    <div className="message">
                      <p>Hi Thomas,</p>
                      <p>I can see that we screwed up in our communication with you, and for that
                        I sincerely apologize!</p>
                      <p>I just re-read the email chain with Sven and I can see that we dropped
                        the ball in of our explanation of how we work. I think there were
                        several miscommunications that happened here, which I take full
                        responsibility for.</p>
                    </div>
                  </div>
                </div>
                {/* Pagination */}
                <nav className="pagination-nav mb-30">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a className="page-link" href="courses.html" aria-label="Previous">
                        <i className="far fa-angle-left" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4" data-aos="fade-up">
        <aside className="widget-area bg-white shadow-md radius-md">
          <div className="widget widget-enroll p-25">
            <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/exams/kleee.jpg" alt="course" />
            <div className="icon-start text-center mt-10 font-sm">
              <span> <h4>KLEEE</h4></span>
            </div>
            <ul className="toggle-list list-unstyled mt-20" id="toggleList" data-toggle-show={5}>
              <li className="icon-start">
                <span>
                  <span className="name">FIELD:</span>
                </span>
                <span>Engineering</span>
              </li>
              <li className="icon-start">
                <span>
                  <span className="name">ELIGIBILITY:</span>
                </span>
                <span>They should have passed 10+2 or equivalent examination with 60% and above in Group subjects.</span>
              </li>
              <li className="icon-start">
                <span>
                  <span className="name">SUBJECTS :</span>
                </span>
                <span>Physics , Chemistry, Mathematics</span>
              </li>
              <li className="icon-start">
                <span>
                  <span className="name">QUESTIONS TYPE:</span>
                </span>
                <span>Objective</span>
              </li>
            </ul>
          </div>
        </aside>
        {/* Spacer */}
      </div>
    </div>
  </div>
  {/* Course-details-area start */}
  {/* Course-details-area start */}
  <section className="course-area latest ptb-100">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title title-inline mb-30" data-aos="fade-up">
            <h2 className="title mb-20">
              Prepare Easy with <span>SRESHTA EDUTECH</span>
              <img className="title-shape lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/title-shape.png" alt="Shape" />
            </h2>
          </div>
        </div>
        <div className="col-12">
          <div className="tab-content" data-aos="fade-up">
            <div className="tab-pane slide show active" id="tab1">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="course-default border radius-md mb-30">
                    <figure className="course-img">
                      <a href="#" title="Image" target="_self" className="lazy-container ratio ratio-2-3">
                        <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/course/Videolectures.jpg" alt="course" />
                      </a>
                    </figure>
                    <div className="course-details">
                      <div className="p-3">
                        <h6 className="course-title lc-2 mb-0">
                          <a href="#" target="_self" title="Link">
                            Videolectures
                          </a>
                        </h6>
                      </div>
                      <div className="course-bottom-info px-3 py-2">
                        Learn every concept visually for a strong foundation
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="course-default border radius-md mb-30">
                    <figure className="course-img">
                      <a href="#" title="Image" target="_self" className="lazy-container ratio ratio-2-3">
                        <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/course/AdaptivePractice.jpg" alt="course" />
                      </a>
                    </figure>
                    <div className="course-details">
                      <div className="p-3">
                        <h6 className="course-title lc-2 mb-0">
                          <a href="#" target="_self" title="Link">
                            AdaptivePractice
                          </a>
                        </h6>
                      </div>
                      <div className="course-bottom-info px-3 py-2">
                        Practice questions which adapt to your own pace
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="course-default border radius-md mb-30">
                    <figure className="course-img">
                      <a href="#" title="Image" target="_self" className="lazy-container ratio ratio-2-3">
                        <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/course/Livedoubts.jpg" alt="course" />
                      </a>
                    </figure>
                    <div className="course-details">
                      <div className="p-3">
                        <h6 className="course-title lc-2 mb-0">
                          <a href="#" target="_self" title="Link">
                            Livedoubts
                          </a>
                        </h6>
                      </div>
                      <div className="course-bottom-info px-3 py-2">
                        Chat with the best teachers to solve your doubts 24x7
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="course-default border radius-md mb-30">
                    <figure className="course-img">
                      <a href="#" title="Image" target="_self" className="lazy-container ratio ratio-2-3">
                        <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/course/Testseries.jpg" alt="course" />
                      </a>
                    </figure>
                    <div className="course-details">
                      <div className="p-3">
                        <h6 className="course-title lc-2 mb-0">
                          <a href="#" target="_self" title="Link">
                            Test Series
                          </a>
                        </h6>
                      </div>
                      <div className="course-bottom-info px-3 py-2">
                        Compete with millions in an exam like environment
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12">
            <div data-aos="fade-up">
              <h4 />
              <h2 className="title mb-20">
                All you need to know about KLEEE
                <img className="title-shape lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/title-shape.png" alt="Shape" />
              </h2>
              <div _ngcontent-c9 className="col-sm-9  pl-4 ">{/*bindings={
                  "ng-reflect-ng-for-of": "[object Object],[object Object"
                }*/}<div _ngcontent-c9><div _ngcontent-c9 className="pt-4" id="ref55"><h3 _ngcontent-c9 className="info headding3">What is KLEEE ?</h3><div _ngcontent-c9 className="blog-post "><p>KLEE (Kerala Law Entrance Exam) 2019 is conducted by Commissioner of Entrance Exam (CEE), Thiruvananthapuram in offline mode. Candidates seeking admission to&nbsp;<strong>5 year LLB program</strong>&nbsp;must appear in this test.</p>
                      <p>KLEEE is tentatively scheduled for the first week of July 2019 in<strong>&nbsp;offline mode</strong>. The question paper consists of&nbsp;<strong>200 Objective types&nbsp;questions</strong>&nbsp;for which the candidates will be provided with&nbsp;<strong>3 hours</strong>. Admissions to the courses will be based on the rank of the candidate in the entrance exam.</p>
                      <ul>
                        <li>Each correct answer will be awarded with 3 marks and every incorrect answer 1 marks will be deducted.&nbsp;No marks are deducted for any un-attempted questions.</li>
                        <li>All candidates need to mark their answers in the OMR sheet as given by the authority</li>
                        <li>Paper will be divided into 3 parts which comprise of General English, General Knowledge, and Aptitude for Legal Studies in multiple choice questions.</li>
                        <li>General English and General Knowledge section comprise of 65 questions each and Aptitude for Legal Studies consists of 70 questions.</li>
                      </ul>
                    </div></div></div><div _ngcontent-c9><div _ngcontent-c9 className="pt-4" id="ref56"><h3 _ngcontent-c9 className="info headding3">Syllabus for KLEEE</h3><div _ngcontent-c9 className="blog-post "><p>Kerala LLB 5-year 2019 exam will consist of the following topics as per the sections stated in the underneath table:</p>
                      <p><img alt="" height="50px" src="assets/images/english.png" width="50px" /> <strong><big>General English</big></strong></p>
                      <ul>
                        <li>&nbsp;Reading Comprehension</li>
                        <li>Word Usage</li>
                        <li>Vocabulary</li>
                        <li>Grammar</li>
                        <li>Para Jumbles</li>
                        <li>Synonyms</li>
                        <li>Antonyms</li>
                        <li>Inference questions</li>
                        <li>Phrases</li>
                      </ul>
                      <br />
                      <p><img alt="" height="50px" src="assets/images/GK.png" width="50px" /> <big><strong>General Studies</strong></big></p>
                      <ul>
                        <li>Current Affairs</li>
                        <li>Famous Personalities</li>
                        <li>International Events</li>
                        <li>UN Bodies</li>
                        <li>Sports</li>
                        <li>Awards</li>
                        <li>Environmental Issue</li>
                        <li>Geopolitics</li>
                        <li>Honours</li>
                      </ul>
                      <br />
                      <p><img alt="" height="50px" src="assets/images/logicalReasoning.png" width="50px" /> <big><strong>Aptitude of Legal Studies</strong></big></p>
                      <ul>
                        <li>Law of Crimes</li>
                        <li>Law of Torts</li>
                        <li>Vicarious Liability</li>
                        <li>International Law</li>
                        <li>Strict Liability</li>
                        <li>Intellectual Property Rights</li>
                        <li>Contracts Law</li>
                        <li>Constitutional Law</li>
                        <li>Legal Awareness including Constitutional Law and Polity</li>
                      </ul>
                      <p>&nbsp;</p>
                    </div></div></div><div _ngcontent-c9><div _ngcontent-c9 className="pt-4" id="ref57"><h3 _ngcontent-c9 className="info headding3">Exam Pattern For KLEEE</h3><div _ngcontent-c9 className="blog-post "><ul>
                        <li><strong>Exam Mode –</strong>&nbsp;KLEE 2019 will be conducted in offline mode for both 3-year LLB and 5 years – integrated LLB.</li>
                        <li><strong>Exam Centers –</strong>&nbsp;The entrance exams will be conducted at various locations in as many as 4 cities of Kerala including Thiruvananthapuram, Ernakulum, Thrissur and Kozhikode.</li>
                        <li><strong>Exam Duration –</strong>&nbsp;The time allotted for attempting test paper of KLEE 2019 is 3 hours’.</li>
                        <li><strong>Number of Questions –</strong>&nbsp;The total number of questions in KLEE 2019 is 200.</li>
                        <li><strong>Types of Questions –</strong>&nbsp;The questions of KLEE 2019 will be of objective type having 4 to 5 choices as response of possible right answer.</li>
                        <li><strong>Total Marks –</strong>&nbsp;The total marks allotted for <b>KLEEE 2019&nbsp;</b>is 600.</li>
                      </ul>
                      <p>Kerala LLB 5 year 2019 will be of a total 3 hours’ time-span. Besides, the question paper will contain of 200 objective type questions in subjects:</p>
                      <table border={1} cellPadding={1} cellSpacing={1}>
                        <tbody>
                          <tr>
                            <th>Sections</th>
                            <th>Subject</th>
                            <th>Number of Questions</th>
                            <th>Total Marks</th>
                          </tr>
                          <tr>
                            <td>Part A</td>
                            <td>General English</td>
                            <td>65</td>
                            <td>195</td>
                          </tr>
                          <tr>
                            <td>Part B</td>
                            <td>General Knowledge</td>
                            <td>65</td>
                            <td>195</td>
                          </tr>
                          <tr>
                            <td>Part C</td>
                            <td>Aptitude for Legal Studies</td>
                            <td>70</td>
                            <td>210</td>
                          </tr>
                          <tr>
                            <th colSpan={2}>Total</th>
                            <td>200</td>
                            <td>600</td>
                          </tr>
                        </tbody>
                      </table>
                    </div></div></div></div>
            </div>
          </div>
        </div>
      </div></div></section>
  {/* Course-area end */}
</div>





    </>

    )
}

export default Kleee;