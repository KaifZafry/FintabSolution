import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer id="rs-footer" className="rs-footer footer-main-home">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 md-mb-20">
                <img
                  className="mb-3"
                  src="./src/assets/images/white-logo.png"
                  alt=""
                />
                <div className="textwidget mb-33">
                  FINTAB SOLUTIONS stands as a cornerstone of excellence in the
                  financial services
                </div>
                <ul className="footer-social md-mb-30">
                  <li>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/fintab.solutions"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/fintab-solutions"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/fintab.solutions"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/@FintabSolutions"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://maps.app.goo.gl/51WPFnWgXkKiQrNZ9"
                    >
                      <i className="fa fa-map-marker "></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 pl-76 md-pl-15 md-mb-10">
                <h3 className="footer-title">Contact Info</h3>
                <ul className="address-widget">
                  <li>
                    <i className="fi fi-rr-map-marker-home"></i>
                    <div className="desc">
                      R161/B, gali no 6, 3rd floor, jamia nagar,
                      <br /> New Delhi, Delhi 110025
                    </div>
                  </li>
                  <li>
                    <i className="fi fi-rr-phone-call"></i>
                    <div className="desc">
                      <a href="tel:+91 7985022788">+91 7985022788</a>
                    </div>
                  </li>
                  <li>
                    <i className="fi fi-rr-envelope-plus"></i>
                    <div className="desc">
                      <a target="_blank" href="Office@fintab.in">
                        {" "}
                        Office@fintab.in
                      </a>
                      <a target="_blank" href="mailto:Office.fintab@gmail.com">
                        {" "}
                        Office.fintab@gmail.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 pl-75 md-pl-15 md-mb-10">
                <h3 className="footer-title">What We Do</h3>
                <ul className="site-map">
                  <li>
                    <Link to="/services">NEW BUSINESS SETUP </Link>
                  </li>
                  <li>
                    <Link to="/services"> License Registrations</Link>
                  </li>
                  <li>
                    <Link to="/services"> Financial Services</Link>
                  </li>
                  <li>
                    <Link to="/services">Software Development</Link>
                  </li>
                  <li>
                    <Link to="/services">Human Resources</Link>
                  </li>
                  <li>
                    <Link to="/services">Free Consultation</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 pl-75 md-pl-15 md-mb-10">
                <h3 className="footer-title">Business License</h3>
                <ul className="site-map">
                  <li>
                    <Link to="/services">Professional License </Link>
                  </li>
                  <li>
                    <Link to="/services">General Trade License </Link>
                  </li>
                  <li>
                    <Link to="/services"> Industrial License</Link>
                  </li>
                  <li>
                    <Link to="/services">Freelance License</Link>
                  </li>
                  <li>
                    <Link to="/services">Tourism License</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row y-middle">
              <div className="col-lg-6 md-mb-10 text-lg-end text-center order-last">
                <ul className="copy-right-menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/careers">career</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="copyright text-lg-start text-center">
                  <p>
                    © 2024 Fintab Solution. Designed By{" "}
                    <a target="_blank" href="mailto:kaifzafry3110@gmail.com">
                      Kaif_Zafry
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer End --> */}

      {/* <!-- start scrollUp  --> */}
      <div id="scrollUp">
        <i className="fa fa-angle-up"></i>
      </div>
      {/* <!-- End scrollUp  --> */}
    </div>
  );
};

export default Footer;
