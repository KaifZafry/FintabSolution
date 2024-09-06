import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
//import '../assets/js/main.js'

const Header = () => {

	const [isClassToggled, setIsClassToggled] = useState(false);

  // Effect to add/remove the class on the body element
  useEffect(() => {
    if (isClassToggled) {
      document.body.classList.add('nav-expanded');
    } else {
      document.body.classList.remove('nav-expanded');
    }
  }, [isClassToggled]); // Dependency array to run the effect when isClassToggled changes

  // Toggle the state when the button is clicked
  const handleButtonClick = () => {
    setIsClassToggled(true);
  };
  const closeButtonClick=() => {
	setIsClassToggled(false);
	console.log("toggled")
  }
  return (
    <div>
        <div className="full-width-header">
				{/* <!--Header Start--> */}
				<header id="rs-header" className="rs-header header-style1 header-modify1">
					{/* <!-- Toolbar Area Start --> */}
					<div className="toolbar-area topbar-style1 hidden-md">
						<div className="container">
							<div className="row rs-vertical-middle">
							   <div className="col-lg-10">
									<div className="toolbar-contact">
										<ul className="rs-contact-info">                   
											<li>
					                            <i className="fi fi-rr-envelope-plus"></i>                  
					                            <a href="mailto:office@fintab.in">office@fintab.in</a>               
					                        </li>
	                                        <li>
                                              	<i className="fi fi-rr-phone-call"></i>                                      
                                                <a href="tel:+91 7985022788"> +91 7985022788</a>                   
                                            </li>
                                            <li>
                                              	<i className="fi-rr-map-marker-home"></i>                                      
												  R161/B, gali no 6, 3rd floor, jamia nagar, new delhi, Delhi, India 110025               
                                            </li>
										</ul>
									</div>
								</div>
								<div className="col-lg-2">
									<div className="toolbar-sl-share">
										
										<ul className="clearfix">
											<li><a target="_blank" href="https://www.facebook.com/fintab.solutions"><i className="fab fa-facebook-f"></i></a></li>
											<li><a target="_blank" href="https://www.linkedin.com/company/fintab-solutions"><i className="fa-brands fa-linkedin-in"></i></a></li>
											<li><a target="_blank" href="https://www.instagram.com/fintab.solutions"><i className="fab fa-instagram"></i></a></li>
											<li><a target="_blank" href="https://www.youtube.com/@FintabSolutions"><i className="fab fa-youtube"></i></a></li>
											<li><a target="_blank" href="https://maps.app.goo.gl/51WPFnWgXkKiQrNZ9"><i className="fa fa-map-marker "></i></a></li>
								
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Toolbar Area End --> */}
					
					{/* <!-- Menu Start --> */}
					<div className="menu-area menu-sticky">
						<div className="container">
							<div className="row-table">
								<div className="col-cell header-logo">                                  
								    <div className="logo-area">
								        <Link to="/">
								            <img className="normal-logo" width="120" src="./src/assets/images/logo-dark.png" alt="logo"/>  
								            <img className="sticky-logo"   width="120" src="./src/assets/images/logo-dark.png" alt="logo"/>
								        </Link>
								    </div>
								</div>
								<div className="col-cell">
									<div className="rs-menu-area">
										<div className="main-menu">
											<nav className="rs-menu hidden-md">
												<ul className="nav-menu">
													<li className=" current-menu-item">
														<Link to="/">Home</Link>
													</li>
													<li>
														<Link to="/about">About</Link>
													</li>
													
													<li className="">
														<Link to="/services">Services</Link>
														
													</li>
													<li><Link to="/careers">Careers</Link></li>
													
													<li className="">
														<Link to="/contact">Contact</Link>                                                        
														
													</li>
												</ul> 
											</nav>
										</div>
                                         {/* <!-- //.main-menu --> */}
									</div>
								</div>
								<div className="col-cell">
									<div className="expand-btn-inner">
										<ul>
                                            <li className="btn-quote"><Link className="readon slide-started" to="/contact">Get a Quote</Link></li>
											<li className="humburger">
											    <a id="nav-expander" onClick={handleButtonClick} className="nav-expander bar" href="#">
											        <div className="bar">
											            <span className="dot1"></span>
											            <span className="dot2"></span>
											            <span className="dot3"></span>
											            <span className="dot4"></span>
											            <span className="dot5"></span>
											            <span className="dot6"></span>
											            <span className="dot7"></span>
											            <span className="dot8"></span>
											            <span className="dot9"></span>
											        </div>
											    </a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Menu End --> */}

					{/* <!-- Canvas Menu start --> */}
					<nav className="right_menu_togle menu-wrap-off  hidden-md">
					    <div className="close-btn" onClick={closeButtonClick}>
					        <a id="nav-close"  className="nav-close">
					            <div className="line">
					                <span className="line1"></span>
					                <span className="line2"></span>
					            </div>
					        </a>
					    </div>
					    <div className="rs-offcanvas-inner">
					        <div className="canvas-logo">
					            <Link to="/"><img src="./src/assets/images/logo-dark.png" alt="logo"/></Link>
					        </div>
					        
					        <div className="canvas-contact">
					            <div className="address-area">
					                <div className="address-list">
					                    <div className="info-icon">
					                        <i className="flaticon-location"></i>
					                    </div>
					                    <div className="info-content">
					                        <h4 className="title">Address</h4>
					                        <em> R161/B, gali no 6, 3rd floor, jamia nagar, new delhi, Delhi, India 110025 </em>
					                    </div>
					                </div>
					                <div className="address-list">
					                    <div className="info-icon">
					                        <i className="flaticon-email"></i>
					                    </div>
					                    <div className="info-content">
					                        <h4 className="title">Email</h4>
					                        <em><a target='_blank' href="mailto:office@fintab.in">mailto:office@fintab.in</a></em>
					                    </div>
					                 </div>
					                <div className="address-list">
					                    <div className="info-icon">
					                      <i className="flaticon-call"></i>
					                    </div>
					                    <div className="info-content">
					                      <h4 className="title">Phone</h4>
					                      <em>+91 7985022788</em>
					                    </div>
					                </div>
					            </div>


					            <ul className="social">
					                <li><a target="_blank" href="https://www.facebook.com/fintab.solutions"><i className="fab fa-facebook-f"></i></a></li>
											<li><a target="_blank" href="https://www.linkedin.com/company/fintab-solutions"><i className="fa-brands fa-linkedin-in"></i></a></li>
											<li><a target="_blank" href="https://www.instagram.com/fintab.solutions"><i className="fab fa-instagram"></i></a></li>
											<li><a target="_blank" href="https://www.youtube.com/@FintabSolutions"><i className="fab fa-youtube"></i></a></li>
											<li><a target="_blank" href="https://maps.app.goo.gl/51WPFnWgXkKiQrNZ9"><i className="fa fa-map-marker "></i></a></li>
								
					            </ul>
					        </div>
					    </div>
					</nav>
					{/* <!-- Canvas Menu end --> */}

					{/* <!-- Canvas Mobile Menu start --> */}
					<nav className="right_menu_togle mobile-navbar-menu" id="mobile-navbar-menu">
					    <div className="close-btn"  onClick={closeButtonClick}>
					        <a id="nav-close2" className="nav-close">
					            <div className="line">
					                <span className="line1"></span>
					                <span className="line2"></span>
					            </div>
					        </a>
					    </div>
					    <ul className="nav-menu">
                        <li className=" current-menu-item">
														<Link to="/" onClick={closeButtonClick}>Home</Link>
													</li>
													<li>
														<Link to="/about" onClick={closeButtonClick}>About</Link>
													</li>
													
													<li className="">
														<Link to="/services" onClick={closeButtonClick}>Services</Link>
														
													</li>
													<li><Link to="/careers" onClick={closeButtonClick}>Careers</Link></li>
													
													<li className="">
														<Link to="/contact" onClick={closeButtonClick}>Contact</Link>                                                        
														
													</li>
						 </ul> 
					    {/* <!-- //.nav-menu --> */}
					   
					   {/* nav-menu */}
						<div className="canvas-contact">
							<div className="address-area">
								<div className="address-list">
									<div className="info-icon">
										<i className="flaticon-location"></i>
									</div>
									<div className="info-content">
										<h4 className="title">Address</h4>
										<em>R161/B, gali no 6, 3rd floor, jamia nagar, new delhi, Delhi, India 110025 </em>
									</div>
								</div>
								<div className="address-list">
									<div className="info-icon">
										<i className="flaticon-email"></i>
									</div>
									<div className="info-content">
										<h4 className="title">Email</h4>
										<em><a target='_blank' href="mailto:Office.fintab@gmail.com">Office.fintab@gmail.com</a></em>
									</div>
								</div>
								<div className="address-list">
									<div className="info-icon">
										<i className="flaticon-call"></i>
									</div>
									<div className="info-content">
										<h4 className="title">Phone</h4>
										<em>+91 7985022788</em>
									</div>
								</div>
							</div>
					  </div>
					</nav>
					                            
				</header>
				
			</div>
    </div>
  )
}

export default Header