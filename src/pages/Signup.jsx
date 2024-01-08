import React from "react";


const Signup = () => {
    return(

    <>

    {/* signup start */}
<div className="container-fluid ps-md-0">
  <div className="row g-0">
    <div className="d-none d-md-flex col-md-4 col-lg-6 signup-image" />
    <div className="col-md-8 col-lg-6">
      <div className="login d-flex align-items-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-6 mx-auto">
              <h4 className="login-heading mb-2"> <div><a className="navbar-brand" href="index.html" target="_self" title="Sreshta EduTech">
                    <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/logo/logo-1.svg" alt="Brand Logo" />
                  </a></div>Sign Up</h4>
              <h4 className="login-heading mb-4"> Let's get started</h4>
              {/* Sign In Form */}
              <form>
                <div className="form-floating mb-3">
                  <input type="MobileNumber" className="form-control" id="floatingInput" placeholder="Enter Your Mobile Number" />
                  <label htmlFor="floatingInput" />
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                  <label htmlFor="floatingPassword" />
                </div>
                <div className="d-grid">
                  <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Sign Up</button>
                  <div className="text-center">
                    <a className="small" href="login.html">Back To Login</a><br />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* signup end */}





    </>

    )
}

export default Signup;