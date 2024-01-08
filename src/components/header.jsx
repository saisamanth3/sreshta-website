import { Link } from "react-router-dom";

const Header = () => {

return(

<>

    <header className="header-area">
        <div className="mobile-menu">
            <div className="container">
                <div className="mobile-menu-wrapper"></div>
            </div>
        </div>
   

        <div className="main-responsive-nav">
            <div className="container">
              
                <div className="logo">
                    <Link to='/' target='_self' title='Sreshta EduTech'>
                        <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/logo/logo-1.svg" alt="Brand Logo" />
                    </Link>
                </div>
         
                <button className="menu-toggler" type="button">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
        <div className="main-navbar">
         
            <div className="header-bottom">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                     
                        <Link className='navbar-brand' to='/' target='_self' title='Sreshta EduTech'>
                            <img className="lazyload" src="assets/images/placeholder.png" data-src="assets/images/logo/logo-1.svg" alt="Brand Logo" />
                        </Link>
                        
                          <div className="collapse navbar-collapse">
                            <ul id="mainMenu" className="navbar-nav mobile-item mx-auto">
                                <li className="nav-item">
                                    <a className="nav-link toggle" href="#pages">Products<i
                                            className="fa fa-chevron-down"></i></a>
                                    <ul className="menu-dropdown">
                                        <li className="nav-item">
                                            <Link className='nav-link' to='Cbse/'>CBSE </Link>
                                           
                                        </li>
                                        <li className="nav-item">
                                            <Link className='nav-link' to='Stateboard/'>State Board</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className='nav-link' to='LifeSkills/'>Life Skills</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link toggle" href="#pages">Robotics<i
                                                    className="fa fa-chevron-down"></i></a>
                                            <ul className="menu-dropdown">
                                                <li className="nav-item">
                                                    <Link className='nav-link' to='Robotics/'> Robotics</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className='nav-link' to='Roboticsai/'> Robotics with AI</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className='nav-link' to='Roboticsiot/'>Robotics with IOT</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className='nav-link' to='GameDevelopment/'>Game Development(scracth
                                                        programming)</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className='nav-link' href='iit-foundation.html'>IIT Foundation</a>
                                        </li>
                                    </ul>
                                </li>

                            <li className="nav-item">
                                <Link href="#primary" className="nav-link toggle">Primary <i
                                        className="fa fa-chevron-down"></i></Link>
                                <ul className="menu-dropdown">
                                <li className="nav-item">
                                    <Link className='nav-link' to='Firstgrade/'>First Grade</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to='Secondgrade/'>Second Grade</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to='Thirdgrade/'>Third Grade</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to='Fourthgrade/'>Fourth Grade</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to='Fifthgrade/'>Fifth Grade</Link>
                                </li>

                            </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#secondary" className="nav-link toggle">Secondary <i
                                        className="fa fa-chevron-down"></i></a>
                                <ul className="menu-dropdown">
                                    <li className="nav-item">
                                        <a className="nav-link" ><strong> classNames </strong></a>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-link' to='Class6/'>class6</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-link' to='Class7/'>class7</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-link' to='Class8/'>class8</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-link' to='Class9/'>class9</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-link' to='Class10/'>class10</Link>
                                    </li>

                                 

                                    <a className="nav-link" href="#"><strong> Boards </strong></a>
                            
                            <li className="nav-item">
                                <Link className='nav-link' to='Cbseboard/'>CBSE</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='Andhrapradeshboard/'>AndhraPradesh</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='Telanganaboard/'>Telangana</Link>
                            </li>

                            </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#exams" className="nav-link toggle">Exams <i className="fa fa-chevron-down"></i></a>
                                <ul className="menu-dropdown">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#"><strong> Engineering </strong></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-link' to='Viteee/'>VITEEE</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-link' to='Jeemain/'>JEE Main</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-link' to='Jeeadvanced/'>JEE Advanced</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-link' to='Vsat/'>VSAT</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-link' to='Kleee/'>KLEEE</Link>
                                    </li>

                                   

                                    <a className="nav-link" href="#"><strong> Medical</strong></a>
                            
                            <li className="nav-item">
                                <Link className='nav-link' to='Neet/'>NEET</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='Aiims/'>AIIMS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='Apeamcet/'>AP EAMCET</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='Tseamcet/'>TS EAMCET</Link>
                            </li>

                            </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link toggle" href="#pages">Features<i className="fa fa-chevron-down"></i></a>
                                <ul className="menu-dropdown">
                                    <li className="nav-item">
                                        <Link className='nav-link' to='Learnmodule/'> Learn Module</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-link' to='Testmodule/'>Test Module</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-link' to='Doubtsmodule/'>Doubts Module</Link>
                                    </li>
                                </ul>
                            </li>



                            </ul>
                        </div>
                        <div className="more-option mobile-item">

                            <div className="item">
                                <Link aria-label='login' className='btn btn-outline' to='Login/' target='_self' title='User'>

                                    <span>Login</span>

                                </Link>
                            </div>
                            <div className="item">
                                <div>
                                    <div className="cta-btn">
                                        <Link className='btn btn-primary' to='Signup/' target='_self' title='SignUp'>SignUp</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  
</>


)
 



}

export default Header;