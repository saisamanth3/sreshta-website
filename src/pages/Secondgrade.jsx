import React from "react";


const Secondgrade = () => {
    return(

    <>

<div>
  {/* Breadcrumb start */}
  <div className="breadcrumb-area bg-img bg-cover" data-bg-image="assets/images/breadcrumb-bg.jpg">
    <div className="container">
      <div className="content text-center">
        <h2>Primary</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">Second Grade</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  {/* Breadcrumb end */}
  {/* Learn-details-area start */}
  <section className="course-area latest ptb-100">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title title-inline mb-30" data-aos="fade-up">
            <h2 className="title mb-20">
              What you'll <span>Learn </span>
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
                      <a href="Secondtgrade-videos.html" title="Image" target="_self" className="lazy-container ratio ratio-2-3">
                        <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/grade-syllabus/videos.jpg" alt="course" />
                      </a>
                    </figure>
                    <div className="course-details">
                      <div className="p-3">
                        <h6 className="course-title lc-2 mb-0">
                          <a href="Secondtgrade-videos.html" target="_self" title="Link">
                            Videos
                          </a>
                        </h6>
                      </div>
                      <div className="course-bottom-info px-3 py-2">
                        <span className="font-sm"><a href="Secondtgrade-videos.html"> View </a><i className="fas fa-long-arrow-right" /></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="course-default border radius-md mb-30">
                    <figure className="course-img">
                      <a href="#" title="Image" target="_self" className="lazy-container ratio ratio-2-3">
                        <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/grade-syllabus/exams.jpg" alt="course" />
                      </a>
                    </figure>
                    <div className="course-details">
                      <div className="p-3">
                        <h6 className="course-title lc-2 mb-0">
                          <a href="#" target="_self" title="Link">
                            Exams
                          </a>
                        </h6>
                      </div>
                      <div className="course-bottom-info px-3 py-2">
                        <span className="font-sm"><a href="#"> View </a><i className="fas fa-long-arrow-right" /></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="course-default border radius-md mb-30">
                    <figure className="course-img">
                      <a href="worksheet-secondgrade.html" title="Image" target="_self" className="lazy-container ratio ratio-2-3">
                        <img className="lazyload" src="#" data-src="assets/images/grade-syllabus/worksheets.jpg" alt="course" />
                      </a>
                    </figure>
                    <div className="course-details">
                      <div className="p-3">
                        <h6 className="course-title lc-2 mb-0">
                          <a href="worksheet-secondgrade.html" target="_self" title="Link">
                            Worksheets
                          </a>
                        </h6>
                      </div>
                      <div className="course-bottom-info px-3 py-2">
                        <span className="font-sm"><a href="worksheet-secondgrade.html"> View </a><i className="fas fa-long-arrow-right" /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></section>
  {/* Learn-area end */}
</div>





    </>

    )
}

export default Secondgrade;