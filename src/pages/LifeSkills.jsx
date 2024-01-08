import React from "react";


const Lifeskills = () => {
    return(

    <>

<div>
  {/* Breadcrumb start */}
  <div className="breadcrumb-area bg-img bg-cover" data-bg-image="assets/images/lifeskills-breadcrumb.jpg">
    <div className="container">
      <div className="content text-center">
        <h2>Skill Education</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">Skills</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  {/* Breadcrumb end */}
  {/* content-area start */}
  <div className="course-area pt-60 pb-75">
    <div className="container">
      <div className="row">
        <div className="col-md-6 how-img">
          <img src="assets/images/Life-Skills.jpg" />
        </div>
        <div className="col-md-6">
          <h4>Skill Education </h4>
          <p className="text-muted">
            Skill Education are abilities for adaptive and positive behavior that enable humans to deal effectively with the demands and challenges of life.[1] This concept is also termed as psychosocial competency.[2] The subject varies greatly depending on social norms and community expectations but skills that function for well-being and aid individuals to develop into active and productive members of their communities are considered as life skills.
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* content-area end */}
</div>





    </>

    )
}

export default Lifeskills;