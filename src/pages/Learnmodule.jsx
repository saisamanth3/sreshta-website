import React from "react";


const Learnmodule = () => {
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
            <li className="breadcrumb-item active" aria-current="page">Learn Module</li>
            <p>        Learn concepts with fun video lectures, practice what you learned with goals and save what you think is important for revision.
            </p>
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
            <img src="assets/images/features/LEARN-MODULE-1.png" />
          </div>
          <div className="col-md-6">
            <h4>VIDEO LECTURES</h4>
            <h4 className="subheading">Save what you like with Bookmarks and Notebooks</h4>
            <p className="text-muted">Want to learn or revise a chapter? Watch videos in English or Hinglish of a full chapter or any single concept you wish to learn. Our interactive videos will help you build a strong foundation.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4>BOOKMARKS AND NOTEBOOKS</h4>
            <h4 className="subheading">Save what you like with Bookmarks and Notebooks
            </h4>
            <p className="text-muted">Found something important? Bookmark questions, videos and concepts to revise them later. Make unlimited Notebooks of your own, for every chapter and add your Bookmarks to it.</p>
          </div>
          <div className="col-md-6 how-img">
            <img src="assets/images/features/LEARN-MODULE-2.png" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 how-img">
            <img src="assets/images/features/LEARN-MODULE-3.png" />
          </div>
          <div className="col-md-6">
            <h4>CONCEPT SHEETS</h4>
            <h4 className="subheading">Revision has never been quicker</h4>
            <p className="text-muted">With ‘Concepts’, you can find all the important definitions and formulas within every chapter in one place for a quick revision.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4>QUESTION SETS</h4>
            <h4 className="subheading">Dedicated question sets for every topic</h4>
            <p className="text-muted">Practice with short sets based on difficulty and question type. Solve handpicked easy, moderate or hard questions to get you prepared for any test in time.</p>
          </div>
          <div className="col-md-6 how-img">
            <img src="assets/images/features/LEARN-MODULE-4.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>





    </>

    )
}

export default Learnmodule;