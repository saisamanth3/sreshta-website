import React from "react";
import {Link} from 'react-router-dom';


const Cbse = () => {
    return(

    <>

  {/* Breadcrumb start */}
  <div className="breadcrumb-area bg-img bg-cover"  data-bg-image="assets/images/breadcrumb-bg.jpg">
    <div className="container">
      <div className="content text-center">
        <h2>CBSE</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">Syllabus</li>
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
         <img style={{width: '280px', height: '300px'}} src="assets/images/cbse.jpg" />
        </div>
        <div className="col-md-6">
          <h4>CBSE</h4>
          <p className="text-muted">
            The CBSE envisions a robust, vibrant and holistic school education that will engender excellence in every sphere of human endeavour. The Board is committed to provide quality education to promote intellectual, social and cultural vivacity among its learners. It works towards evolving a learning process and environment, which empowers the future citizens to become global leaders in the emerging knowledge society. The Board advocates Continuous and Comprehensive Evaluation with an emphasis on holistic development of learners. The Board commits itself to providing a stress-free learning environment that will develop competent, confident and enterprising citizens who will promote harmony and peace.
          </p>
        </div>
      </div>
    </div>
    
  </div>
  {/* content-area end */}


    
    




    </>

    )
}

export default Cbse;