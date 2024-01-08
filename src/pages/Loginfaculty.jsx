import React from "react";


const Loginfaculty= () => {
    return(

    <>

    {/* login start */}
<div className="container-fluid ps-md-0">
  <div className="row g-0">
    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image3" />
    <div className="col-md-8 col-lg-6">
      <div className="login d-flex align-items-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-6 mx-auto">
              <h4 className="login-heading mb-2"><div><a className="navbar-brand" href="index.html" target="_self" title="Sreshta EduTech">
                    <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/logo/logo-1.svg" alt="Brand Logo" />
                  </a></div>Welcome back!</h4>
              <h4 className="login-heading mb-4">Login</h4>
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
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" defaultValue id="rememberPasswordCheck" />
                  <label className="form-check-label" htmlFor="rememberPasswordCheck">
                    Remember password
                  </label>
                </div>
                <div className="d-grid">
                  <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Log in</button>
                  <div className="text-center">
                    <a className="small" href="forgotpassword.html">Forgot password?</a><br />
                    <a className="small" href="#">SignUp</a>
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
{/* login end */}





    </>

    )
}

export default Loginfaculty;