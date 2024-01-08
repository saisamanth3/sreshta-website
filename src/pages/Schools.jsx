import React from "react";


const Schools = () => {
    return(

    <>

<div>
  {/* Breadcrumb start */}
  <div className="breadcrumb-area bg-img bg-cover" data-bg-image="assets/images/breadcrumb-bg.jpg">
    <div className="container">
      <div className="content text-center">
        <h2>Associated With
          Sreshta Edutech </h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">Schools</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  {/* Breadcrumb end */}
  {/* Schools-details-area start */}
  <div className="container">
    <div className="course-area pt-60 pb-75">
      <div className="container">
        <div className="row gx-xl-5">
          <img src="assets/images/schools.png" />
        </div>
      </div>
    </div>
    {/* Schools-area end */}
  </div></div>





    </>

    )
}

export default Schools;