import React from "react";
import { Link } from "react-router-dom";


const Stateboard = () => {
    return(

    <>

<div>
  {/* Breadcrumb start */}
  <div className="breadcrumb-area bg-img bg-cover" data-bg-image="assets/images/breadcrumb-bg.jpg">
    <div className="container">
      <div className="content text-center">
        <h2>State Board</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">States</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  {/* Breadcrumb end */}
  {/* Course-area start */}
  <div className="course-area pt-60 pb-75">
    <div className="container">
      <div className="row gx-xl-5">
        <div className="container">
          <form className="form cf">
            <section className="plan cf">
              <input type="radio" name="radio1" id="state1" defaultValue="free" /><label className="state1-label four col" htmlFor="state1"><img src="assets/images/states/01AndhraPradesh.png" />
                <h6 className="course-title lc-2 mb-0">
                  <Link to="AP-Syllabus/" target="_self" title="Link">
                    AndhraPradesh
                  </Link><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state2" defaultValue="state2" defaultChecked /><label className="state2-label four col" htmlFor="state2"><img src="assets/images/states/02ArunachalPradesh.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    ArunachalPradesh
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state3" defaultValue="state3" /><label className="state3-label four col" htmlFor="state3"><img src="assets/images/states/03Assam.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    Assam
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state4" defaultValue="platinum" /><label className="state4-label four col" htmlFor="state4"><img src="assets/images/states/04Bihar.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    Bihar
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state5" defaultValue="state5" /><label className="vikram-label four col" htmlFor="state5"><img src="assets/images/states/05Chhattisgarh.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    Chhattisgarh
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state6" defaultValue="free" /><label className="state6-label four col" htmlFor="state6"><img src="assets/images/states/06Goa.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    Goa
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state7" defaultValue="state7" defaultChecked /><label className="state7-label four col" htmlFor="state7"><img src="assets/images/states/07Gujarat.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    Gujarat
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state8" defaultValue="state8" /><label className="state8-label four col" htmlFor="state8"><img src="assets/images/states/08Haryana.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    Haryana
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state9" defaultValue="state9" /><label className="state9-label four col" htmlFor="state9"><img src="assets/images/states/09HimachalPradesh.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    HimachalPradesh
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state10" defaultValue="state10" /><label className="state10-label four col" htmlFor="state10"><img src="assets/images/states/10Jharkhand.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    Jharkhand
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state11" defaultValue="state11" /><label className="state11-label four col" htmlFor="state11"><img src="assets/images/states/11Karnataka.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    Karnataka
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state12" defaultValue="state12" defaultChecked /><label className="state7-label four col" htmlFor="state12"><img src="assets/images/states/12Kerala.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    Kerala
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state13" defaultValue="state13" /><label className="state13-label four col" htmlFor="state13"><img src="assets/images/states/13MadhyaPradesh.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    MadhyaPradesh
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state14" defaultValue="state14" /><label className="state14-label four col" htmlFor="state14"><img src="assets/images/states/14Maharashtra.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    Maharashtra
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state15" defaultValue="state15" /><label className="state15-label four col" htmlFor="state15"><img src="assets/images/states/15Manipur.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    Manipur
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state16" defaultValue="state16" /><label className="state16-label four col" htmlFor="state16"><img src="assets/images/states/16Meghalaya.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    Meghalaya
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state17" defaultValue="state17" defaultChecked /><label className="state17-label four col" htmlFor="state17"><img src="assets/images/states/17Mizoram.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    Mizoram
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state18" defaultValue="state18" /><label className="state18-label four col" htmlFor="state18"><img src="assets/images/states/18Nagaland.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    Nagaland
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state19" defaultValue="state19" /><label className="state19-label four col" htmlFor="state19"><img src="assets/images/states/19Odisha.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    Odisha
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state20" defaultValue="state20" /><label className="state20-label four col" htmlFor="state20"><img src="assets/images/states/20Punjab.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    Punjab
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state21" defaultValue="state21" /><label className="state21-label four col" htmlFor="state21"><img src="assets/images/states/21Rajasthan.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    Rajasthan
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state22" defaultValue="state22" defaultChecked /><label className="state22-label four col" htmlFor="state22"><img src="assets/images/states/22Sikkim.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    Sikkim
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state23" defaultValue="state23" /><label className="state23-label four col" htmlFor="state23"><img src="assets/images/states/23Tamil Nadu.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    Tamil Nadu
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state24" defaultValue="state24" /><label className="state24-label four col" htmlFor="state24"><img src="assets/images/states/24Telangana.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    Telangana
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state25" defaultValue="state26" /><label className="state25-label four col" htmlFor="state25"><img src="assets/images/states/25Tripura.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    Tripura
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state26" defaultValue="state26" /><label className="state26-label four col" htmlFor="state26"><img src="assets/images/states/26Uttarakhand.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    Uttarakhand
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state27" defaultValue="state27" defaultChecked /><label className="state27-label four col" htmlFor="state27"><img src="assets/images/states/27Uttar Pradesh.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    Uttar Pradesh
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
              <input type="radio" name="radio1" id="state28" defaultValue="state28" /><label className="state18-label four col" htmlFor="state28"><img src="assets/images/states/28WestBengal.png" />
                <h6 className="course-title lc-2 mb-0">
                  <a to="#" target="_self" title="Link">
                    WestBengal
                  </a><i className="fas fa-long-arrow-right" />
                </h6>
              </label>
            </section>  
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Course-area end */}
</div>





    </>

    )
}

export default Stateboard;