import React from "react";


const Doubtsmodule = () => {
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
            <li className="breadcrumb-item active" aria-current="page">Doubts Module</li><br />
          </ol>
          <p>Have a doubt at 3 am? Our experts are available 24x7. Connect with a tutor instantly and get your concepts cleared in less than 3 steps.</p>
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
            <img src="assets/images/features/DOUBTS-MODULE-1.png" />
          </div>
          <div className="col-md-6">
            <h4>24/7</h4>
            <h4 className="subheading">We’re here for you 24x7</h4>
            <p className="text-muted">Our experts are here to solve your doubts 365 days, around the clock!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4>IMAGE UPLOAD</h4>
            <h4 className="subheading">Just click a picture of your doubt
            </h4>
            <p className="text-muted">You don’t need to waste time typing your doubt, just take a picture and send it across.</p>
          </div>
          <div className="col-md-6 how-img">
            <img src="assets/images/features/DOUBTS-MODULE-2.png" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 how-img">
            <img src="assets/images/features/DOUBTS-MODULE-3.png" />
          </div>
          <div className="col-md-6">
            <h4>CHAT WITH EXPERT</h4>
            <h4 className="subheading">Learn from the best teachers</h4>
            <p className="text-muted">Over 16,000 of the best teachers are available to solve your doubts.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4>SIMILAR QUESTIONS</h4>
            <h4 className="subheading">We’ve found the closest match to your doubt</h4>
            <p className="text-muted">Send us your doubt and we’ll find you the exact solution or a solution that matches your question within seconds.</p>
          </div>
          <div className="col-md-6 how-img">
            <img src="assets/images/features/DOUBTS-MODULE-4.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>





    </>

    )
}

export default Doubtsmodule;