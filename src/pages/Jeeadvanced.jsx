import React from "react";


const Jeeadvanced = () => {
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
              An all-India level engineering entrance exam for admission into IITs.                            
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
            <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/exams/jeeAdvance.jpg" alt="course" />
            <div className="icon-start text-center mt-10 font-sm">
              <span> <h4>JEE Advanced </h4></span>
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
                  <span className="name">ELIGIBILITY :</span>
                </span>
                <span>12th Standard Science Students, Passed JEE</span>
              </li>
              <li className="icon-start">
                <span>
                  <span className="name">SUBJECTS :</span>
                </span>
                <span>Chemistry, Physics and Maths</span>
              </li>
              <li className="icon-start">
                <span>
                  <span className="name"> QUESTIONS TYPE:</span>
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
                All you need to know about JEE Advanced
                <img className="title-shape lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/title-shape.png" alt="Shape" />
              </h2>
              <div _ngcontent-c9 className="col-sm-9  pl-4 ">{/*bindings={
                  "ng-reflect-ng-for-of": "[object Object],[object Object"
                }*/}<div _ngcontent-c9><div _ngcontent-c9 className="pt-4" id="ref37"><h3 _ngcontent-c9 className="info headding3">What is JEE Advanced?</h3><div _ngcontent-c9 className="blog-post "><p>JEE Advanced is one of the toughest exam in india. Over 2.24 lakh students take it every year with only 20,000 getting a rank. JEE (Joint Entrance Exam), an all India common entrance exam for engineering, is held in two stages:</p>
                      <ul>
                        <li>JEE Main</li>
                        <li>JEE Advanced</li>
                      </ul>
                      <p>JEE Advanced is the second stage of the Joint Entrance Examination. You are eligible to take JEE Advanced only if you clear the cut-off for JEE Main.</p>
                      <p>This examination will form the basis for admission to various bachelor’s degree programmes in IITs. IIT Kanpur is to conduct the JEE Advanced 2019 examination for admission to 23 IITs for 12,428 seats, which include Indian School of Mines (ISM), Dhanbad. From 2018, the IITs will also reserve special seats for female engineering aspirants.</p>
                    </div></div></div><div _ngcontent-c9><div _ngcontent-c9 className="pt-4" id="ref38"><h3 _ngcontent-c9 className="info headding3">Syllabus for JEE Advanced</h3><div _ngcontent-c9 className="blog-post "><p><img alt="" height="50px" src="assets/images/physics.png" width="50px" /> <big><strong>Physics</strong></big></p>
                      <ol>
                        <li>General Physics
                          <ul>
                            <li>Units and Dimensions</li>
                            <li>Measurement and Errors</li>
                            <li>Vectors</li>
                          </ul>
                        </li>
                        <li>Mechanics
                          <ul>
                            <li>Kinematics</li>
                            <li>Laws of Motion</li>
                            <li>Friction</li>
                            <li>Centre of Mass, Momentum and Collision</li>
                            <li>Work, Energy and Power</li>
                            <li>Circular Motion</li>
                            <li>Rotational Dynamics</li>
                            <li>Mechanical Properties of Matter</li>
                            <li>Fluid Mechanics</li>
                            <li>Simple Harmonic Motion</li>
                            <li>Wave Motion and String Waves</li>
                            <li>Sound Waves</li>
                          </ul>
                        </li>
                        <li>Thermal Physics
                          <ul>
                            <li>Thermodynamics</li>
                            <li>Kinetic Theory</li>
                            <li>Heat Transfer</li>
                            <li>Thermal Expansion</li>
                          </ul>
                        </li>
                      </ol>
                      <ol start={4}>
                        <li>Electricity and Magnetism
                          <ul>
                            <li>Electrostatics</li>
                            <li>Current Electricity</li>
                            <li>Capacitors</li>
                            <li>&nbsp;Magnetism</li>
                            <li>Electromagnetic Induction</li>
                            <li>Alternating Current</li>
                          </ul>
                        </li>
                        <li>Optics
                          <ul>
                            <li>Geometrical Optics</li>
                            <li>Light Waves</li>
                            <li>Dispersion and Spectra</li>
                          </ul>
                        </li>
                        <li>Modern Physics
                          <ul>
                            <li>Nuclear Physics</li>
                            <li>Photoelectric Effect and Wave-Particle Duality</li>
                            <li>Bohr’s Model and Physics of the Atom</li>
                            <li>X-rays</li>
                          </ul>
                        </li>
                      </ol>
                      <p><img alt="" height="50px" src="assets/images/chemistry.png" width="50px" /><big><strong>Chemistry</strong></big></p>
                      <ol>
                        <li>Physical Chemistry
                          <ul>
                            <li>Some Basic Concepts of Chemistry</li>
                            <li>Mole Concept</li>
                            <li>Redox Reactions</li>
                            <li>Gaseous and Liquid States</li>
                            <li>Atomic Structure and Chemical Bonding</li>
                            <li>Energetics</li>
                            <li>Chemical Equilibrium</li>
                            <li>Electrochemistry</li>
                            <li>Chemical Kinetics</li>
                            <li>Solid State</li>
                            <li>Solutions</li>
                            <li>Surface Chemistry</li>
                            <li>Nuclear Chemistry</li>
                          </ul>
                        </li>
                        <li>Inorganic Chemistry
                          <ul>
                            <li>s-Block Elements</li>
                            <li>p-Block Elements</li>
                            <li>Transition Elements (3D Series)</li>
                            <li>Coordination Compounds</li>
                            <li>Metallurgy</li>
                            <li>Qualitative Analysis</li>
                          </ul>
                        </li>
                      </ol>
                      <ol start={3}>
                        <li>Organic Chemistry
                          <ul>
                            <li>General Organic Chemistry</li>
                            <li>Hydrocarbons</li>
                            <li>Reactions of Benzene</li>
                            <li>Phenols</li>
                            <li>Aldehydes, Ketones and Carboxylic Acids</li>
                            <li>Alcohols and Ethers</li>
                            <li>Haloalkanes and Haloarenes</li>
                            <li>Organic Compounds Containing Nitrogen</li>
                            <li>Carbohydrates</li>
                            <li>Amino Acids and Peptides</li>
                            <li>Polymers</li>
                            <li>Practical Organic Chemistry</li>
                          </ul>
                        </li>
                      </ol>
                      <p><img alt="" height="50px" src="assets/images/maths.png" width="50px" /> <big><strong>Maths</strong></big></p>
                      <ol>
                        <li>Algebra
                          <ul>
                            <li>Complex Numbers</li>
                            <li>Quadratic Equations</li>
                            <li>Sequence and Series</li>
                            <li>Logarithm</li>
                            <li>Binomial Theorem</li>
                            <li>Permutations and Combinations</li>
                            <li>Determinants and Matrices</li>
                            <li>Probability</li>
                          </ul>
                        </li>
                        <li>Trigonometry
                          <ul>
                            <li>Trigonometry</li>
                            <li>Solutions of Triangle</li>
                            <li>Inverse Trigonometric Functions</li>
                          </ul>
                        </li>
                        <li>Analytical Geometry
                          <ul>
                            <li>Coordinate Geometry</li>
                            <li>Straight Lines and Pair of Straight Lines</li>
                            <li>Circle</li>
                            <li>Parabola</li>
                            <li>Ellipse</li>
                            <li>Hyperbola</li>
                          </ul>
                        </li>
                      </ol>
                      <ol start={4}>
                        <li>Differential Calculus
                          <ul>
                            <li>Sets, Relations and Functions</li>
                            <li>Limits and Continuity</li>
                            <li>Differentiation</li>
                            <li>Application of Derivatives</li>
                          </ul>
                        </li>
                        <li>Integral Calculus
                          <ul>
                            <li>Indefinite Integrals</li>
                            <li>Definite Integrals</li>
                            <li>Area of Bounded Regions</li>
                            <li>Differential Equations</li>
                          </ul>
                        </li>
                        <li>Vectors
                          <ul>
                            <li>Vector Algebra</li>
                            <li>3D Geometry</li>
                          </ul>
                        </li>
                      </ol>
                    </div></div></div><div _ngcontent-c9><div _ngcontent-c9 className="pt-4" id="ref39"><h3 _ngcontent-c9 className="info headding3">Exam Pattern for JEE Advanced</h3><div _ngcontent-c9 className="blog-post "><p>JEE Advanced is probably the most unpredictable exam. The paper pattern is different every year with a different marking scheme, hence students should go through previous years' papers to get a fair idea.</p>
                      <p>Looking at the previous years' papers, we have identified certain trends, however they are subject to change. JEE Advanced usually consists of two papers of 3 hours each. The marks however, vary.</p>
                      <p>Here are the types of questions asked in JEE Advanced over the years:</p>
                      <ol>
                        <li>Single choice MCQs</li>
                        <li>Multiple correct MCQs</li>
                        <li>Integer answer type questions</li>
                        <li>Matrix match type</li>
                        <li>Passage comprehension type</li>
                      </ol>
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

export default Jeeadvanced;