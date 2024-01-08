import React from "react";


const Testmodule = () => {
    return(

    <>

<div>
  {/* Breadcrumb start */}
  <div className="breadcrumb-area bg-img bg-cover" data-bg-image="assets/images/breadcrumb-bg.jpg">
    <div className="container">
      <div className="content text-center">
        <h2>Features</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">Test Module</li>
            <p>Take a preset test or create your own! Challenge your friends and make learning a fun activity. Right from previous year papers to complete test series, <br />we’ve got you the best resources to practice.</p>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  {/* Breadcrumb end */}
  <section className="course-area latest ptb-100">
    <div className="container">
      <div className="how-section1">
        <div className="row">
          <div className="col-md-6 how-img">
            <img src="assets/images/features/TEST-MODULE-1.png" />
          </div>
          <div className="col-md-6">
            <h4>TEST SERIES</h4>
            <h4 className="subheading">Compete in an exam like environment</h4>
            <p className="text-muted">Attempt the best test series for every board and competitive exam in India, in an exam like environment, and compete with lakhs of students.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4>CREATE YOUR OWN TEST</h4>
            <h4 className="subheading">Customize tests to your preparation!
            </h4>
            <p className="text-muted">Select a chapter, a topic, duration and difficulty level for the test you want to take. You have the power to create your own test.</p>
          </div>
          <div className="col-md-6 how-img">
            <img src="assets/images/features/TEST-MODULE-2.png" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 how-img">
            <img src="assets/images/features/TEST-MODULE-3.png" />
          </div>
          <div className="col-md-6">
            <h4>PREVIOUS YEARS PAPERS</h4>
            <h4 className="subheading">Practice previous year papers</h4>
            <p className="text-muted">Practice upto 10 years of previous year papers for any exam. You can revise the solutions or attempt it in a timed test format.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4>PERSONALISED PERFORMANCE REPORTS</h4>
            <h4 className="subheading">Analyse your strengths and weaknesses</h4>
            <p className="text-muted">Get precise and detailed reports that help you improve your performance, ranking, speed and accuracy.</p>
          </div>
          <div className="col-md-6 how-img">
            <img src="assets/images/features/TEST-MODULE-4.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>





    </>

    )
}

export default Testmodule;