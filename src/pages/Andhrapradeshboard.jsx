import React from "react";


const Andhrapradeshboard = () => {
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
              The Andhra Pradesh Board is a recognized authority for secondary education, which is responsible for conducting the secondary school public examination for students of Andhra Pradesh.                          </h3>
          </div>
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
            <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/Boards/Ap.jpg" alt="course" />
            <div className="icon-start text-center mt-10 font-sm">
              <span> <h4>Andhra Pradesh</h4></span>
            </div>
            <ul className="toggle-list list-unstyled mt-20" id="toggleList" data-toggle-show={5}>
              <li className="icon-start">
                <span>
                  <span className="name">ELIGIBILITY:</span>
                </span>
                <span>1st to 12th Standard <br />in Andhra Pradesh Board</span>
              </li>
              <li className="icon-start">
                <span>
                  <span className="name">DIFFICULTY LEVEL :</span>
                </span>
                <span>Medium</span>
              </li>
              <li className="icon-start">
                <span>
                  <span className="name">EXAMS CONDUCTED :</span>
                </span>
                <span>Class 10, Class<br /> 11 and Class 12</span>
              </li>
              <li className="icon-start">
                <span>
                  <span className="name">SCORING:</span>
                </span>
                <span>Grades and CGPA</span>
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
                All you need to know about Andhra Pradesh Board
                <img className="title-shape lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/title-shape.png" alt="Shape" />
              </h2>
              <div _ngcontent-c8 className="col-sm-9  pl-4">{/*bindings={
                  "ng-reflect-ng-for-of": "[object Object],[object Object"
                }*/}<div _ngcontent-c8><div _ngcontent-c8 className="pt-4" id="ref19"><h3 _ngcontent-c8 className="info headding3">About Andhra Pradesh Board</h3><div _ngcontent-c8 className="blog-post "><ul>
                        <li>The board came into existence in 1953 for development of the education system in the state of Andhra Pradesh.</li>
                        <li>The schools affiliated with the board increase regularly.</li>
                        <li>This is an autonomous body of the state which works under the Andhra Pradesh Department of Education</li>
                      </ul>
                    </div></div></div><div _ngcontent-c8><div _ngcontent-c8 className="pt-4" id="ref20"><h3 _ngcontent-c8 className="info headding3">AP Class-12 Syllabus</h3><div _ngcontent-c8 className="blog-post "><ul>
                        <li><b><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathematics2anewn.pdf" target="_blank">AP Class-12&nbsp; Mathematics IIA</a>&nbsp;<a href="http://bieap.gov.in/Pdf/mathematics2anewn.pdf" target="_blank">&nbsp;Syllabus </a></font></b></li>
                        <li><b><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathematics2anewn.pdf" target="_blank">AP Class-12</a>&nbsp;</font><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathematics2anewn.pdf" target="_blank">Mathematics</a></font><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathematics2bnewn.pdf" target="_blank"> IIB</a>&nbsp;</font><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathematics2anewn.pdf" target="_blank">Syllabus</a></font></b></li>
                        <li><b><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathematics2anewn.pdf" target="_blank">AP Class-12</a>&nbsp;</font><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/physics2newn.pdf" target="_blank">Physics </a></font><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathematics2anewn.pdf" target="_blank">Syllabus</a></font></b></li>
                        <li><b><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathematics2anewn.pdf" target="_blank">AP Class-12</a>&nbsp;</font></b><strong><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/chemistry2newn.pdf" target="_blank">Chemistry</a>&nbsp;</font></strong><b><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathematics2anewn.pdf" target="_blank">Syllabus</a></font></b></li>
                        <li><b><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathematics2anewn.pdf" target="_blank">AP Class-12</a>&nbsp;</font></b><strong><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/botany2newn.pdf" target="_blank">Botany</a>&nbsp;</font></strong><b><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathematics2anewn.pdf" target="_blank">Syllabus</a></font></b></li>
                        <li><b><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathematics2anewn.pdf" target="_blank">AP Class-12</a>&nbsp;</font></b><strong><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/zoology2newn.pdf" target="_blank">Zoology</a>&nbsp;</font></strong><b><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathematics2anewn.pdf" target="_blank">Syllabus</a></font></b></li>
                        <li><b><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathematics2anewn.pdf" target="_blank">AP Class-12</a>&nbsp;</font><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/english2new.pdf" target="_blank">English</a>&nbsp;</font><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathematics2anewn.pdf" target="_blank">Syllabus</a></font></b></li>
                      </ul>
                    </div></div></div><div _ngcontent-c8><div _ngcontent-c8 className="pt-4" id="ref21"><h3 _ngcontent-c8 className="info headding3">AP Class-11 Syllabus</h3><div _ngcontent-c8 className="blog-post "><ul>
                        <li><b><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathsafirstyrsyllabusnew.pdf" target="_blank">AP Class 11 Mathematics IA Syllabus</a></font></b></li>
                        <li><b><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathsafirstyrsyllabusnew.pdf" target="_blank">AP Class 11</a>&nbsp;</font><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathsbfirstyrsyllabusnew.pdf" target="_blank">Mathematics</a>&nbsp;</font><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathsbfirstyrsyllabusnew.pdf" target="_blank">IB</a>&nbsp;</font><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathsafirstyrsyllabusnew.pdf" target="_blank">Syllabus</a></font></b></li>
                        <li><b><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathsafirstyrsyllabusnew.pdf" target="_blank">AP Class 11</a>&nbsp;</font><font color="#670706" face="Arial" size={2}><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/physicsfirstyrsyllabusnew.pdf" target="_blank">Physics</a>&nbsp;</font></font><font color="#670706" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/physicsfirstyrsyllabusnew.pdf" target="_blank"><font color="#003366" face="Arial" size={2}>&nbsp;</font></a></font><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathsafirstyrsyllabusnew.pdf" target="_blank">Syllabus</a>&nbsp;</font></b></li>
                        <li><b><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathsafirstyrsyllabusnew.pdf" target="_blank">AP Class 11</a>&nbsp;</font><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/chemistryfirstyrsyllabusnew.pdf" target="_blank">Chemistry</a>&nbsp;</font><a href="http://bieap.gov.in/Pdf/chemistryfirstyrsyllabusnew.pdf" target="_blank"><font color="#003366" face="Arial" size={2}> </font></a><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathsafirstyrsyllabusnew.pdf" target="_blank">Syllabus</a></font></b></li>
                        <li><b><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathsafirstyrsyllabusnew.pdf" target="_blank">AP Class 11</a>&nbsp;</font><font color="#670706" face="Arial" size={2}><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/botanyfirstyrsyllabusnew.pdf" target="_blank">Botany</a></font></font><font color="#670706" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/botanyfirstyrsyllabusnew.pdf" target="_blank"><font color="#003366" face="Arial" size={2}> </font></a></font><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathsafirstyrsyllabusnew.pdf" target="_blank">Syllabus</a>&nbsp;</font></b></li>
                        <li><b><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathsafirstyrsyllabusnew.pdf" target="_blank">AP Class 11</a>&nbsp;</font><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/zoofirstyrsyllabusnew.pdf" target="_blank">Zoology</a>&nbsp;</font><font color="#003366" face="Arial" size={2}><a href="http://bieap.gov.in/Pdf/mathsafirstyrsyllabusnew.pdf" target="_blank">Syllabus</a></font></b></li>
                        <li><b><a href="http://bieap.gov.in/Pdf/english-I.pdf" target="_blank"><span><font face="Arial" size={2}>AP Class 11 English Syllabus</font></span></a></b></li>
                      </ul>
                    </div></div></div><div _ngcontent-c8><div _ngcontent-c8 className="pt-4" id="ref23"><h3 _ngcontent-c8 className="info headding3">AP Class-10 Syllabus</h3><div _ngcontent-c8 className="blog-post "><h4>Class 10 :</h4>
                      <p><img alt="" height="50px" src="assets/images/maths.png" width="50px" />&nbsp;<big><strong>Mathematics</strong></big></p>
                      <ol>
                        <li>Real Numbers</li>
                        <li>Sets</li>
                        <li>Polynomials</li>
                        <li>Pair of Linear Equations in Two Variables</li>
                        <li>Quadratic Equations</li>
                        <li>Progressions</li>
                        <li>Coordinate Geometry</li>
                      </ol>
                      <ol start={8}>
                        <li>Similar Triangles</li>
                        <li>Tangents and Secants to a Circle</li>
                        <li>Mensuration</li>
                        <li>Trigonometry</li>
                        <li>Probability</li>
                        <li>Statistics</li>
                      </ol>
                      <p><img alt="" height="50px" src="assets/images/english.png" width="50px" />&nbsp;<big><strong>English</strong></big></p>
                      <ol>
                        <li>Adjective</li>
                        <li>Articles</li>
                        <li>Conjunction</li>
                        <li>Prepositions</li>
                        <li>Punctuation</li>
                        <li>Reading Comprehension</li>
                      </ol>
                      <ol start={6}>
                        <li>Sentences</li>
                        <li>Tenses</li>
                        <li>Transformation of Sentences</li>
                        <li>Verb</li>
                        <li>Vocabulary</li>
                        <li>Writing</li>
                      </ol>
                      <p><img alt="" height="50px" src="assets/images/science.png" width="50px" />&nbsp;<strong><big>Science</big></strong></p>
                      <table>
                        <tbody>
                          <tr>
                            <td><strong>Physics</strong></td>
                          </tr>
                          <tr>
                            <td>
                              <ol>
                                <li>Heat</li>
                                <li>Reflection of Light by Different Surfaces</li>
                                <li>Refraction of Light at Plane Surfaces</li>
                                <li>Refraction of Light at Curved Surface</li>
                                <li>Human Eye and Colourful World</li>
                                <li>Electric Current</li>
                                <li>Electromagnetism</li>
                              </ol>
                            </td>
                          </tr>
                          <tr>
                            <td><strong>Chemistry</strong></td>
                          </tr>
                          <tr>
                            <td>
                              <ol>
                                <li>Chemical Reactions and Equations</li>
                                <li>Acids, Bases and Salts</li>
                                <li>Structure of Atom</li>
                                <li>Classification of Elements - The Periodic Table</li>
                                <li>Chemical Bonding</li>
                                <li>Principles of Metallurgy</li>
                                <li>Carbon and its Compounds</li>
                              </ol>
                            </td>
                          </tr>
                          <tr>
                            <td><strong>Biology</strong></td>
                          </tr>
                          <tr>
                            <td>
                              <ol>
                                <li>Coordination in Life Processes</li>
                                <li>Coordination-The Linking System</li>
                                <li>Excretion - The Wastage Disposing System</li>
                                <li>Heredity - From Parent to Progeny</li>
                                <li>Natural Resources</li>
                                <li>Nutrition - Food Supplying System</li>
                              </ol>
                              <ol start={7}>
                                <li>Our Environment - Our Concern</li>
                                <li>Reproduction - The Generating System</li>
                                <li>Respiration - The Energy Releasing System</li>
                                <li>Transportation -The Circulatory System</li>
                              </ol>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p><img alt="" height="50px" src="assets/images/geography.png" width="50px" /> <big><strong>Social Science</strong></big></p>
                      <table>
                        <tbody>
                          <tr>
                            <td><strong>History</strong></td>
                          </tr>
                          <tr>
                            <td>
                              <ol>
                                <li>The World Between Wars (1900-1950): Part - I</li>
                                <li>The World Between Wars (1900-1950): Part - II</li>
                                <li>National Liberation Movements in the Colonies</li>
                                <li>National Movement in India-Partition and Independence: 1939-1947</li>
                                <li>Independent India (The First 30 Years - 1947-77)</li>
                                <li>Emerging Political Trends 1977 to 2000</li>
                                <li>Post-War World and India</li>
                                <li>Social Movements in our Times</li>
                              </ol>
                            </td>
                          </tr>
                          <tr>
                            <td><strong>Civics</strong></td>
                          </tr>
                          <tr>
                            <td>
                              <ol>
                                <li>Citizens and the Governments</li>
                                <li>People, Settlement and Migration</li>
                                <li>The Making of Independent India's Constitution</li>
                              </ol>
                            </td>
                          </tr>
                          <tr>
                            <td><strong>Geography</strong></td>
                          </tr>
                          <tr>
                            <td>
                              <ol>
                                <li>India: Relief Features</li>
                                <li>Climate of India</li>
                                <li>Indian Rivers and Water Resources</li>
                              </ol>
                            </td>
                          </tr>
                          <tr>
                            <td><strong>Economics</strong></td>
                          </tr>
                          <tr>
                            <td>
                              <ol>
                                <li>Food Security and Sustainable Development with Equity</li>
                                <li>Globalisation</li>
                                <li>Ideas of Development</li>
                                <li>Production and Employment</li>
                                <li>Rampur: A Village Economy</li>
                              </ol>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div></div></div><div _ngcontent-c8><div _ngcontent-c8 className="pt-4" id="ref24"><h3 _ngcontent-c8 className="info headding3">AP Class-9 Syllabus</h3><div _ngcontent-c8 className="blog-post "><p>&nbsp; Update&nbsp;</p>
                    </div></div></div><div _ngcontent-c8><div _ngcontent-c8 className="pt-4" id="ref25"><h3 _ngcontent-c8 className="info headding3">Grading Pattern</h3><div _ngcontent-c8 className="blog-post "><p>Board of Secondary Education, Andhra Pradesh (BSEAP) has introduced a new grading system. This system is introduced in order to ease the burden on the students. The grading system is otherwise known as the GPA system. In this system, a grade will be assigned between A to E based on the marks.</p>
                      <table border={1} cellPadding={1} cellSpacing={1}>
                        <thead>
                          <tr>
                            <th scope="col">First and Third Languages (i.e., Telugu and English), Non-Languages</th>
                            <th scope="col">Second Language (Hindi)</th>
                            <th scope="col">Grade/Grade-Points</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>92 – 100 Marks</td>
                            <td>90 – 100 Marks</td>
                            <td>A1/10</td>
                          </tr>
                          <tr>
                            <td>83 – 91 Marks</td>
                            <td>80 – 89 Marks</td>
                            <td>A2/9</td>
                          </tr>
                          <tr>
                            <td>75 – 82 Marks</td>
                            <td>70 – 79 Marks</td>
                            <td>B1/8</td>
                          </tr>
                          <tr>
                            <td>67 – 74 Marks</td>
                            <td>60 – 69 Marks</td>
                            <td>B2/7</td>
                          </tr>
                          <tr>
                            <td>59 – 66 Marks</td>
                            <td>50 – 59 Marks</td>
                            <td>C1/6</td>
                          </tr>
                          <tr>
                            <td>51 – 58 Marks</td>
                            <td>40 – 49 Marks</td>
                            <td>C2/5</td>
                          </tr>
                          <tr>
                            <td>43 – 50 Marks</td>
                            <td>30 – 39 Marks</td>
                            <td>D1/4</td>
                          </tr>
                          <tr>
                            <td>35 – 42 Marks</td>
                            <td>20 – 29 Marks</td>
                            <td>D2/3</td>
                          </tr>
                          <tr>
                            <td>Less Than 35 (Below 35)</td>
                            <td>Less than 20 (Below 20)</td>
                            <td>E/Fail</td>
                          </tr>
                        </tbody>
                      </table>
                      <p>&nbsp;</p>
                      <p>Below table is the example that shows the grades and grade points for the marks obtained in each subject.</p>
                      <table border={1} cellPadding={1} cellSpacing={1}>
                        <thead>
                          <tr>
                            <th scope="col">Subject Name</th>
                            <th scope="col">Marks Obtained</th>
                            <th scope="col">Grades/Grade-Points</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>First Language - Telugu</td>
                            <td>94</td>
                            <td>A1/10</td>
                          </tr>
                          <tr>
                            <td>Second Language - Hindi</td>
                            <td>74</td>
                            <td>B1/8</td>
                          </tr>
                          <tr>
                            <td>Third Language - English</td>
                            <td>78</td>
                            <td>B1/8</td>
                          </tr>
                          <tr>
                            <td>Mathematics</td>
                            <td>96</td>
                            <td>A1/10</td>
                          </tr>
                          <tr>
                            <td>General Science</td>
                            <td>90</td>
                            <td>A2/10</td>
                          </tr>
                          <tr>
                            <td>Social Studies</td>
                            <td>88</td>
                            <td>A2/9</td>
                          </tr>
                        </tbody>
                      </table>
                      <p>&nbsp;</p>
                      <h5>GPA = (Subject 1+ Subject 2+ Subject 3+ Subject 4+ Subject 5+ Subject 6)/6</h5>
                      <p>Grade Point Average (GPA): 10+8+8+10+10+9 = 55/6 = 9.166</p>
                      <h5>Calculating Grade Score</h5>
                      <p>Here is the list of grades from A1 to E and the respective score range. You can check the list and calculate the score before the final score is released by the board.</p>
                      <table border={1} cellPadding={1} cellSpacing={1}>
                        <thead>
                          <tr>
                            <th scope="col">Grade</th>
                            <th scope="col">GPA</th>
                            <th scope="col">Marks Range</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Grade A1</td>
                            <td>10</td>
                            <td>550 to 600</td>
                          </tr>
                          <tr>
                            <td>Grade A2</td>
                            <td>9</td>
                            <td>499 to 549</td>
                          </tr>
                          <tr>
                            <td>Grade B1</td>
                            <td>8</td>
                            <td>448 to 498</td>
                          </tr>
                          <tr>
                            <td>Grade B2</td>
                            <td>7</td>
                            <td>397 to 447</td>
                          </tr>
                          <tr>
                            <td>Grade C1</td>
                            <td>6</td>
                            <td>346 to 396</td>
                          </tr>
                          <tr>
                            <td>Grade C2</td>
                            <td>5</td>
                            <td>295 to 345</td>
                          </tr>
                          <tr>
                            <td>Grade D1</td>
                            <td>4</td>
                            <td>245 to 294</td>
                          </tr>
                          <tr>
                            <td>Grade D2</td>
                            <td>3</td>
                            <td>195 to 244</td>
                          </tr>
                          <tr>
                            <td>Grade E</td>
                            <td>2</td>
                            <td>194 and Below That</td>
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

export default Andhrapradeshboard;