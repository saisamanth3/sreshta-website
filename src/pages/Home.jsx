import React from "react";
import {Link} from 'react-router-dom';


const Home = () => {
     return(
       <>
      <div>

  
  {/* Home-area start*/}
  <section className="hero-banner hero-banner_v1 header-next pb-60">
    <div className="container">
      <div className="row align-items-center gx-xl-5">
        <div className="col-lg-6">
          <div className="banner-content mb-40">
            <h2 className="title mb-30" data-aos="fade-up" data-aos-delay={100}>
              Explore the
              world of Personalised learning, see how <span>SRESHTA EDUTECH</span>
            </h2>
            <p className="text" data-aos="fade-up" data-aos-delay={100}>
              Welcome to Sreshta EduTech, your digital destination for high-quality
              education and professional development.
            </p>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-up">
          <div className="banner-image mb-40">
            <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/banner/hero-banner-1.png" alt="Banner Image" />
          </div>
        </div>
      </div>
    </div>
    {/* Shapes */}
    <div className="shape">
      <img className="shape-1 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/shape-1.png" alt="Shape" />
      <img className="shape-2 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/apple.png" alt="Shape" />
      <img className="shape-3 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/shape-3.png" alt="Shape" />
      <img className="shape-4 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/shape-4.png" alt="Shape" />
      <img className="shape-5 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/shape-5.png" alt="Shape" />
      <img className="shape-6 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/idea.png" alt="Shape" />
      <img className="shape-7 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/shape-7.png" alt="Shape" />
      <img className="shape-8 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/books.png" alt="Shape" />
      <img className="shape-9 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/shape-6.png" alt="Shape" />
    </div>
  </section>
  {/* Home-area end */}
  {/* Products-area start */}
  <section className="category-area category-area_v1 pb-100">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title title-center mb-50" data-aos="fade-up">
            <h2 className="title mb-0">
              Explore Our Most Popular
              Products
              <img className="title-shape lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/title-shape.png" alt="Shape" />
            </h2>
          </div>
        </div>
        <div className="col-12" data-aos="fade-up">
          <div className="swiper category-slider" id="category-slider-3" data-slides-per-view={4} data-swiper-loop="true">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="card p-25 border radius-md">
                  <div className="card-img mb-20">
                    <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/products/Robotics.png" alt="products" />
                  </div>
                  <h5 className="card-title lc-1 mb-1">
                    <a href="robotics.html" target="_self" title="Robotics">
                      Robotics
                    </a>
                  </h5>
                  <p className="card-text">
                    5+ Courses available
                  </p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card p-25 border radius-md">
                  <div className="card-img mb-20">
                    <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/products/lifeskills.PNG" alt="products" />
                  </div>
                  <h5 className="card-title lc-1 mb-1">
                    <a href="lifeskills.html" target="_self" title="Life Skills">
                      Skill Education
                    </a>
                  </h5>
                  <p className="card-text">
                    10+ Courses available
                  </p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card p-25 border radius-md">
                  <div className="card-img mb-20">
                    <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/products/IIT.png" alt="products" />
                  </div>
                  <h5 className="card-title lc-1 mb-1">
                    <a href="iit-foundation.html" target="_self" title="IIT">
                      IIT Foundation
                    </a>
                  </h5>
                  <p className="card-text">
                    10+ Courses available
                  </p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card p-25 border radius-md">
                  <div className="card-img mb-20">
                    <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/products/StateBoard.png" alt="products" />
                  </div>
                  <h5 className="card-title lc-1 mb-1">
                    <a href="states.html" target="_self" title="StateBoards">
                      State Boards 
                    </a>
                  </h5>
                  <h5 className="card-title lc-1 mb-1">
                    <a href="states.html" target="_self" title="StateBoards">
                      Curriculum
                    </a>
                  </h5>
                  <p className="card-text">
                    10+ Courses available
                  </p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card p-25 border radius-md">
                  <div className="card-img mb-20">
                    <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/products/CBSE.png" alt="products" />
                  </div>
                  <h5 className="card-title lc-1 mb-1">
                    <a href="cbse.html" target="_self" title="CBSE">
                      CBSE Curriculum
                    </a>
                  </h5>
                  <p className="card-text">
                    100+ Courses available
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-pagination  position-static mt-30" id="category-slider-3-pagination" />
            
          </div>
        </div>
      </div>
    </div>








    
    {/* Shapes */}
    <div className="shape">
      <img className="shape-1 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/shape-3.png" alt="Shape" />
      <img className="shape-2 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/shape-1.png" alt="Shape" />
      <img className="shape-3 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/shape-6.png" alt="Shape" />
      <img className="shape-4 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/shape-4.png" alt="Shape" />
    </div>
  </section>
  {/* Products-area end */}
  {/* About-area start */}
  <section className="about-area about-area_v1 pt-100 pb-60 bg-primary-light">
    <div className="container">
      <div className="row">
        <div className="row">
          <div className="col-md-7">
            <img src="assets/images/about-1.png" />
            <br />
            <div className="content-text">
              <p>Whether you are starting a new topic or revising an old one, Sreshta Edutech Mind Maps,video lectures and practice questions are designed to match your unique skill set.
                Learning becomes effective when flavoured with good video lectures, materials,Mind Maps, and Examination-Practicing questions/tests.
                <br /> MindMap is to visually organize information and ideas, allowing for better understanding, memory retention, and creative thinking. which are graphical representations that start with a central Idea.
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <h2 className="title mb-30">
              Transform Your Learning Experience <span>With Us</span>
              <img className="title-shape lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/title-shape.png" alt="Shape" />
            </h2>
            <div className="content-text">
              <p>
                Designed to suit every child's unique learning need
              </p>
            </div>
            <div className="info-list mt-40">
              <div className="card bg-none mb-30">
                <div className="card-icon radius-md">
                  <i className="ico-video-screen" />
                </div>
                <div className="card-content">
                  <h6 className="card-title mb-2">Content</h6>
                  <p className="card-text">Defined in simplest way with KeyPoint</p>
                </div>
              </div>
              <div className="card bg-none mb-30">
                <div className="card-icon radius-md">
                  <i className="ico-video-screen" />
                </div>
                <div className="card-content">
                  <h6 className="card-title mb-2">Videos &amp; More</h6>
                  <p className="card-text">Self-explanatory and <br />animated modules</p>
                </div>
              </div>
              <div className="card bg-none mb-30">
                <div className="card-icon radius-md">
                  <i className="ico-persons" />
                </div>
                <div className="card-content">
                  <h6 className="card-title mb-2">Exams</h6>
                  <p className="card-text">Concept wise assessment based on <br />bloom’s taxonomy
                  </p>
                </div>
              </div>
              <div className="card bg-none mb-30">
                <div className="card-icon radius-md">
                  <i className="ico-persons" />
                </div>
                <div className="card-content">
                  <h6 className="card-title mb-2">Mind Maps</h6>
                  <p className="card-text">visual representation of ideas,<br /> concepts, and information <br />in a non-linear and <br />interconnected format.
                  </p>
                </div>
              </div>
              <div className="card bg-none mb-30">
                <div className="card-icon radius-md">
                  <i className="ico-quality" />
                </div>
                <div className="card-content">
                  <h6 className="card-title mb-2">Course Complete Certificate</h6>
                  <p className="card-text">Complete the course <br />to get certificate</p>
                </div>
              </div>
            </div>
          </div>
        </div></div></div></section>
  {/* About-area end */}
  {/*How it works-area start */}
  <section className="howitworks-area testimonial-area_v2 pb-60">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title title-center mb-50" data-aos="fade-up">
            <h2 className="title">
              <br /><span>How we work</span>
            </h2>
            <p>Sreshta Edu Tech stands by you all the way to ensure that you achieve your learning goals. We are “Dedicatedly Committed”.</p>
            <br />
            <div className="container bootdey">
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      {/* Timeline start */}
                      <div className="timeline">
                        <div className="timeline-row">
                          <div className="timeline-time">
                            <h3>Concept Learning</h3>
                            <p>Learning becomes effective when flavoured with <br />good video
                              lectures, materials,Mind Maps, and<br /> Examination-Practicing
                              questions/tests.
                            </p>
                          </div>
                          <div className="timeline-dot fb-bg" />
                          <div className="timeline-content">
                            <img className="lazyload" src="assets/images/learn.png" />
                          </div>
                        </div>
                        <div className="timeline-row">
                          <div className="timeline-time">
                            <h3>Mind Maps</h3>
                            <p>MindMap is to visually organize information and ideas,
                              allowing for better understanding, memory retention, and
                              creative thinking. which are graphical representations that
                              start with a central Idea.</p>
                          </div>
                          <div className="timeline-dot green-one-bg" />
                          <div className="timeline-content green-one">
                            <img className="lazyload" src="assets/images/mindmaps.png" />
                          </div>
                        </div>
                        <div className="timeline-row">
                          <div className="timeline-time">
                            <h3>Video lectures</h3>
                            <p>Video tutorials make the process of e-learning easy and
                              effective. Students can access to any video any time
                              whenever they want, no time bound they can learn anywhere
                              from their mobile devices Laptops,tablets or smartphones
                              which can be a distant learning.</p>
                          </div>
                          <div className="timeline-dot green-two-bg" />
                          <div className="timeline-content green-two">
                            <img className="lazyload" src="assets/images/videolecture.png" />
                          </div>
                        </div>
                        <div className="timeline-row">
                          <div className="timeline-time">
                            <h3>Quiz</h3>
                            <p>Online quiz makes students to engage in a unique way. We have
                              almost 10,000 quiz questions , for all subjects for
                              practicing. Students can evaluate their standards, by taking
                              up online quiz, which give them immediate results. This
                              helps students to save their time.
                            </p>
                          </div>
                          <div className="timeline-dot green-three-bg" />
                          <div className="timeline-content green-three">
                            <img className="lazyload" src="assets/images/quiz.png" />
                          </div>
                        </div>
                        <div className="timeline-row">
                          <div className="timeline-time">
                            <h3>Reports</h3>
                            <p>Reports include individual student performance and grading<br />
                              with respect to their practicing of tests. Students, knowing<br />
                              their grade will work on their improvement.</p>
                          </div>
                          <div className="timeline-dot green-four-bg" />
                          <div className="timeline-content green-four">
                            <img className="lazyload" src="assets/images/reports.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></div></div></div></div></div></div></section>
  {/*How it works-area end */}
  {/* IOT-area start */}
  <section className="testimonial-area testimonial-area_v1 pb-60">
    <div className="container">
      <div className="row align-items-center gx-xl-5">
        <div className="col-lg-5" data-aos="fade-up">
          <div className="content-title mb-30">
            <h2 className="title">
              Internet of things (IOT) and AI with Robotics
              <img className="title-shape lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/title-shape.png" alt="Shape" />
            </h2>
          </div>
          <div className="swiper testimonial-slider mb-40" id="testimonial-slider-1">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="slider-item bg-white">
                  <div className="quote">
                    <p className="text font-lg mb-0">
                      Internet of Things (IoT) incorporates internet-connected devices or sensors
                      that have the potential to collect millions and billions of Gigabytes of
                      data in real-time. Without any human intervention, the data in IoT is
                      transferred among the various devices over a wireless network.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slider-item bg-white">
                  <div className="quote">
                  </div>
                  <div className="client-info d-flex align-items-center mt-30">
                    <div className="client-img">
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slider-item bg-white">
                  <div className="quote">
                  </div>
                  <div className="client-info d-flex align-items-center mt-30">
                    <div className="client-img">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7" data-aos="fade-up">
          <div className="testimonial-images img-right pb-10">
            <div className="row align-items-center">
              <div className="col-sm-6" data-aos="fade-up">
                <div className="lazy-container radius-md mb-30 ratio ratio-1-2">
                  <img className="lazyload blur-up" src="assets/images/iot-1.png" data-src="assets/images/iot-1.png" alt="Client Image" />
                </div>
              </div>
              <div className="col-sm-6" data-aos="fade-up">
                <div className="lazy-container radius-md mb-30 ratio ratio-1-2">
                  <img className="lazyload blur-up" src="assets/images/iot-2.png" data-src="assets/images/iot-2.png" alt="Client Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* IOT-area end */}
  {/* IIT-area start */}
  
<section className="testimonial-area testimonial-area_v1 pb-60">
    <div className="container">
      <div className="row align-items-center gx-xl-5">
        <div className="col-lg-5" data-aos="fade-up">
          <div className="content-title mb-30">
            <h2 style={{color: '#ee8b5d'}}>
               <h2> Coming Soon</h2>
           <h2 className="title"> </h2>
              
           <h2 className="title"> </h2>
              IIT Foundation
              <img className="title-shape lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/title-shape.png" alt="Shape" />
            </h2>
          </div>
       
          <div className="swiper testimonial-slider mb-40" id="testimonial-slider-1">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="slider-item bg-white">
                  <div className="quote">
                   
                    <p className="text font-lg mb-0">
                      IIT JEE foundation is a starting point (building block) for JEE aspirants
                      from class 6 to 10. Sometimes also called as "IIT JEE Launching Programs",
                      the foundation course helps aspirants become mentally and strategically
                      strong when they start studying IIT JEE concepts and topics, ideally from
                      class 11 onwards.
                    </p>                  
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slider-item bg-white">
                  <div className="quote">
                  </div>
                  <div className="client-info d-flex align-items-center mt-30">
                    <div className="client-img">
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slider-item bg-white">
                  <div className="quote">
                  </div>
                  <div className="client-info d-flex align-items-center mt-30">
                    <div className="client-img">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7" data-aos="fade-up">
          <div className="testimonial-images img-right pb-10">
            <div className="row align-items-center">
              <div className="col-sm-6" data-aos="fade-up">
                <div className="lazy-container radius-md mb-30 ratio ratio-1-2">
                  <img className="lazyload blur-up" src="assets/images/IIT-1.png" data-src="assets/images/IIT-1.png" alt="Client Image" />
                </div>
              </div>
              <div className="col-sm-6" data-aos="fade-up">
                <div className="lazy-container radius-md mb-30 ratio ratio-1-2">
                  <img className="lazyload blur-up" src="assets/images/IIT-2.png" data-src="assets/images/IIT-2.png" alt="Client Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="testimonial-area testimonial-area_v1 pb-60">
    <div className="container">
      <div className="row align-items-center gx-xl-5">
        <div className="col-lg-5" data-aos="fade-up">
          <div className="content-title mb-30">
            <h2 style={{color: '#ee8b5d'}}>
              <h2>Coming Soon </h2>
           <h2 className="title"> </h2>
              Skill Education
              <img className="title-shape lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/title-shape.png" alt="Shape" />
            </h2>
          </div>
       
          <div className="swiper testimonial-slider mb-40" id="testimonial-slider-1">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="slider-item bg-white">
                  <div className="quote">
                    <p className="text font-lg mb-0">
                      Life skills are abilities for adaptive and positive behavior that enable humans to deal effectively with the demands and challenges of life.[1] This concept is also termed as psychosocial competency.[2] The subject varies greatly depending on social norms and community expectations but skills that function for well-being and aid individuals to develop into active and productive members of their communities are considered as life skills.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slider-item bg-white">
                  <div className="quote">
                  </div>
                  <div className="client-info d-flex align-items-center mt-30">
                    <div className="client-img">
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slider-item bg-white">
                  <div className="quote">
                  </div>
                  <div className="client-info d-flex align-items-center mt-30">
                    <div className="client-img">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7" data-aos="fade-up">
          <div className="testimonial-images img-right pb-10">
            <div className="row align-items-center">
              <div className="col-sm-6" data-aos="fade-up">
                <div className="lazy-container radius-md mb-30 ratio ratio-1-2">
                  <img className="lazyload blur-up" src="assets/images/Life-Skills.jpg" data-src="assets/images/Life-Skills.jpg" alt="Client Image" />
                </div>
              </div>
              <div className="col-sm-6" data-aos="fade-up">
                <div className="lazy-container radius-md mb-30 ratio ratio-1-2">
                  <img className="lazyload blur-up" src="assets/images/Life-Skills2.jpg" data-src="assets/images/Life-Skills2.jpg" alt="Client Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Life Skills-area end */}
  {/* App-area start */}
  <section className="course-area popular ptb-100">
    <div className="container">
      <div className="row">
        <div className="row">
          <div className="col-md-7">
            <img src="assets/images/device.png" />
          </div>
          <div className="col-md-5">
            <h2 className="title mb-30">
              SRESHTA EDUTECH
              <img className="title-shape lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/title-shape.png" alt="Shape" />
            </h2>
            <h4 className="subheading">Application Learn from any Device <br />Mobile App / Web</h4>
            <a href="#"><img style={{width: '200px', height: '70px'}} src="assets/images/playstore.png" /></a>
            <a href="#"><img style={{width: '200px', height: '65px'}} src="assets/images/appstore.png" /></a>
          </div>
        </div>
        {/* Shapes */}
        <div className="shape">
          <img className="shape-1 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/shape-4.png" alt="Shape" />
          <img className="shape-2 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/shape-1.png" alt="Shape" />
          <img className="shape-3 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/shape-3.png" alt="Shape" />
          <img className="shape-4 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/shape-6.png" alt="Shape" />
        </div>
      </div></div></section>
  {/* App-area end */}
  {/* Feature-area start */}
  <section className="feature-area feature-area_v1 pt-100 pb-60">
    <div className="container">
      <div className="row align-items-center gx-xl-5">
        <div className="col-lg-5" data-aos="fade-up">
          <div className="content-title mb-40">
            <h2 className="title mb-0">
              Features
              <img className="title-shape lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/title-shape.png" alt="Shape" />
            </h2>
            <br />
            <div className="row ">
              <h4>Learn Module</h4>
              <div className="col-sm-6">
                <div className="card p-30 bg-primary-light radius-md mt-30">
                  <div className="card-icon mb-20">
                    <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/icon/Video-lectures.png" alt="Image" />
                  </div>
                  <h6 className="card-title lc-1 mb-0">
                    <a href="#" target="_self" title="Video-lectures">
                      Video Lectures
                    </a>
                  </h6>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card p-30 bg-primary-light radius-md mt-30">
                  <div className="card-icon mb-20">
                    <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/icon/Bookmarks.png" alt="Image" />
                  </div>
                  <h6 className="card-title lc-1 mb-0">
                    <a href="#" target="_self" title="Bookmarks">
                      Bookmarks 
                    </a>
                  </h6>
                  <h6 className="card-title lc-1 mb-0"> &amp; Notebooks</h6>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card p-30 bg-primary-light radius-md mt-30">
                  <div className="card-icon mb-20">
                    <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/icon/Conceptsheets.png" alt="Image" />
                  </div>
                  <h6 className="card-title lc-1 mb-0">
                    <a href="#" target="_self" title="Conceptsheets">
                      Concept Sheets
                    </a>
                  </h6>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card p-30 bg-primary-light radius-md mt-30">
                  <div className="card-icon mb-20">
                    <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/icon/Questionsets.png" alt="Image" />
                  </div>
                  <h6 className="card-title lc-1 mb-0">
                    <a href="#" target="_self" title="Questionsets">
                      Question Sets
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 order-lg-first" data-aos="fade-up">
          <div className="banner-img img-left mb-40">
            <div className="lazy-container radius-lg ratio ratio-2-3">
              <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/banner/video-banner-1.jpg" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Shapes */}
    <div className="shape">
      <img className="shape-1 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/shape-3.png" alt="Shape" />
      <img className="shape-2 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/shape-1.png" alt="Shape" />
      <img className="shape-3 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/shape-6.png" alt="Shape" />
      <img className="shape-4 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/shape-4.png" alt="Shape" />
    </div>
  </section>
  {/* Feature-area end */}
  
  
  {/*Associated-area start */}
  <section className="associated-area testimonial-area_v2 pb-60">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title title-center mb-50" data-aos="fade-up">
            <h2 className="title">
              Associated With <br /><span> Sreshta Edutech</span>
            </h2>
            <br />
            <img src="assets/images/clients.png" />
          </div>
        </div>
      </div>
      <div className="col-lg-12" data-aos="fade-up">
        <div className="cta-btn text-center mt-15">
          <Link className="btn btn-lg btn-primary rounded-pill" to="Schools/" target="_self" title="View More">View schools 220+ </Link>
        </div>
      </div>
    </div>
  </section>
  {/* Associated-area end */}
  {/*News & Releases area start */}
  <section className="associated-area testimonial-area_v2 pb-60">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title title-center mb-50" data-aos="fade-up">
            <h2 className="title">
              News &amp; <span> Releases</span>
            </h2>
            <br />
            <section className="section-container">
              <div className="product-list-container">
                <div className="product-list" id="productList">
                  {/* News 1 */}
                  <div className="product-card">
                    <div className="new-badge">New</div>
                    <img src="assets/images/news/News1.jpg" alt="News 1 Image" />
                    <h3>Digital Learning</h3>
                  </div>
                  {/* News 2 */}
                  <div className="product-card">
                    <img src="assets/images/news/News2.jpg" alt="News 2 Image" />
                    <h3>Forbes</h3>
                  </div>
                  {/* News 3 */}
                  <div className="product-card">
                    <div className="new-badge">New</div>
                    <img src="assets/images/news/News3.jpg" alt="News 3 Image" />
                    <h3>E-Learning</h3>
                  </div>
                  {/* News 4 */}
                  <div className="product-card">
                    <img src="assets/images/news/News4.jpg" alt="News 4 Image" />
                    <h3>Teachers <br />Magazine</h3>
                  </div>
                </div>
              </div>
              <div id="scrollRight" className="scroll-icon">
                <i className="fas fa-arrow-right" />
              </div>
            </section></div>
        </div></div></div></section>
  {/* News & Releases-area end */}
  {/* Testimonial-area start */}
  <section className="testimonial-area testimonial-area_v1 pb-60">
    <div className="container">
      <div className="row align-items-center gx-xl-5">
        <div className="col-lg-5" data-aos="fade-up">
          <div className="content-title mb-30">
            <h2 className="title">
              What Students Say About Our <span>Courses</span>
              <img className="title-shape lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/title-shape.png" alt="Shape" />
            </h2>
          </div>
          <div className="swiper testimonial-slider mb-40" id="testimonial-slider-1">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="slider-item bg-white">
                  <div className="quote">
                    <p className="text font-lg mb-0">
                      I was looking to develop my professional skills, but didn't have the time or
                      resources to attend in-person classes. That's when I discovered Sreshta
                      EduTech. The platform offered a wide range of courses that fit my needs, and
                      I was able to complete them on.
                    </p>
                  </div>
                  <div className="client-info d-flex align-items-center mt-30">
                    <div className="client-img">
                      <div className="lazy-container rounded-pill ratio ratio-1-1">
                        <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/avatar-1.jpg" alt="Person Image" />
                      </div>
                    </div>
                    <div className="content">
                      <h6 className="name mb-0">Siddharth</h6>
                      <span className="designation font-sm">AIIMS </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slider-item bg-white">
                  <div className="quote">
                    <p className="text font-lg mb-0">
                      I was looking to develop my professional skills, but didn't have the time or
                      resources to attend in-person classes. That's when I discovered Sreshta
                      EduTech. The platform offered a wide range of courses that fit my needs, and
                      I was able to complete them on.
                    </p>
                  </div>
                  <div className="client-info d-flex align-items-center mt-30">
                    <div className="client-img">
                      <div className="lazy-container rounded-pill ratio ratio-1-1">
                        <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/avatar-2.jpg" alt="Person Image" />
                      </div>
                    </div>
                    <div className="content">
                      <h6 className="name mb-0">Krishna</h6>
                      <span className="designation font-sm">NEET</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slider-item bg-white">
                  <div className="quote">
                    <p className="text font-lg mb-0">
                      I was looking to develop my professional skills, but didn't have the time or
                      resources to attend in-person classes. That's when I discovered Sreshta
                      EduTech. The platform offered a wide range of courses that fit my needs, and
                      I was able to complete them on.
                    </p>
                  </div>
                  <div className="client-info d-flex align-items-center mt-30">
                    <div className="client-img">
                      <div className="lazy-container rounded-pill ratio ratio-1-1">
                        <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/avatar-3.jpg" alt="Person Image" />
                      </div>
                    </div>
                    <div className="content">
                      <h6 className="name mb-0">Vikram</h6>
                      <span className="designation font-sm">Eamcet Student</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination" id="testimonial-slider-1-pagination" />
          </div>
        </div>
        <div className="col-lg-7" data-aos="fade-up">
          <div className="testimonial-images img-right pb-10">
            <div className="row align-items-center">
              <div className="col-sm-6" data-aos="fade-up">
                <div className="lazy-container radius-md mb-30 ratio ratio-1-2">
                  <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/testimonial-img-1.png" alt="Client Image" />
                </div>
              </div>
              <div className="col-sm-6" data-aos="fade-up">
                <div className="lazy-container radius-md mb-30 ratio ratio-1-2">
                  <img className="lazyload blur-up" src="assets/images/placeholder.png" data-src="assets/images/testimonial-img-2.png" alt="Client Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonial-area end */}
 
</div>

       
       </>



     )

}

export default Home;