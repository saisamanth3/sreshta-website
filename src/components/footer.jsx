import { Link } from "react-router-dom";

const Footer = () => {

    return(
<>


<footer className="footer-area bg-primary-light">
  <div className="footer-top pt-100 pb-70">
    <div className="container">
      <div className="row gx-xl-5 justify-content-between">
        <div className="col-lg-3 col-sm-6 col-sm-12">
          <div className="footer-widget" data-aos="fade-up" data-aos-delay={100}>
            <div className="logo mb-20">
            <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/logo/logo-1.svg" alt="Brand Logo" />
            </div>
            <p>
              E-learning refers to the process of learning using electronic devices such as computers,
              smartphones, or tablets. Compare to others.
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4">
          <div className="footer-widget" data-aos="fade-up" data-aos-delay={200}>
            <h5>Classes</h5>
            <ul className="footer-links">
              <li>
                <link to="class6/" target="_self" title="link" />Class6
              </li>
              <link to="class7/" target="_self" title="link" />Class7
              <li>
                <link to="class8/" target="_self" title="link" />Class8
              </li>
              <li>
                <link to="class9/" target="_self" title="link" />Class9
              </li>
              <li>
                <link to="class10/" target="_self" title="link" />Class10
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4">
          <div className="footer-widget" data-aos="fade-up" data-aos-delay={200}>
            <h5>IIT</h5>
            <ul className="footer-links">
              <li>
                <link to="Viteee/" target="_self" title="link" />VITEEE
              </li>
              <li>
                <link to="Jeemain/" target="_self" title="link" />JEE Main
              </li>
              <li>
                <link to="Jeeadvanced/" target="_self" title="link" />JEE Advanced
              </li>
            </ul>
          </div>
          <div className="footer-widget" data-aos="fade-up" data-aos-delay={200}>
            <h5>Skill Education</h5>
            <ul className="footer-links">
              <li>
                <link to="Lifeskills/" target="_self" title="link" />Life Skills
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4">
          <div className="footer-widget" data-aos="fade-up" data-aos-delay={200}>
            <h5>Robotics</h5>
            <ul className="footer-links">
              <li>
                <link to="Roboticsai/" target="_self" title="link" />Robotics-ai
              </li>
              <li>
                <link to="Roboticsiot/" target="_self" title="link" />Robotics-iot
              </li>
              <li>
                <link to="GameDevelopment/" target="_self" title="link" />Game Development Programme
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="footer-widget" data-aos="fade-up" data-aos-delay={200}>
            <h5>Contact Us</h5>
            <ul className="footer-links">
              <li>
                <a href="#" target="_self" title="email">info@sreshtaedutech.in</a>
              </li>
              <li>
                <a href="#" target="_self" title="email">sreshtaedutech.in@gmail.com</a>
              </li>
              <li>
                <a href="#" target="_self" title="contact"> 040-35592680</a>
              </li>
              <li>
                <a href="#" target="_self" title="contact">+91-9030706500</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copy-right-area border-top ptb-30">
    <div className="container">
      <div className="copy-right-content">
        <div className="social-link rounded style-2 justify-content-center mb-10">
          <a href="https://www.instagram.com/" target="_blank" title="Link"><i className="fab fa-instagram" /></a>
          <a href="https://www.dribbble.com/" target="_blank" title="Link"><i className="fab fa-dribbble" /></a>
          <a href="https://www.twitter.com/" target="_blank" title="Link"><i className="fab fa-twitter" /></a>
          <a href="https://www.youtube.com/" target="_blank" title="Link"><i className="fab fa-youtube" /></a>
        </div>
        <span>
          Copyright <i className="fal fa-copyright" /><span id="footerDate" /> <a className="color-primary" href="#" target="_self" title="Sreshta">Sreshta EduTech</a>. All Rights
          Reserved |
        </span>
        <a className="terms" href="Privacypolicy/">     Privacy Policy</a>
        <a className="terms" href="Termsofuse/">| Terms of Use</a>
      </div>
    </div>
  </div>
  <div className="shape">
    <img className="shape-1 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/shape-3.png" alt="Shape" />
    <img className="shape-2 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/shape-1.png" alt="Shape" />
    <img className="shape-3 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/shape-6.png" alt="Shape" />
    <img className="shape-4 lazyload" src="assets/images/placeholder.png" data-src="assets/images/shape/shape-4.png" alt="Shape" />
  </div>
</footer>


</>


)
 



}

export default Footer;