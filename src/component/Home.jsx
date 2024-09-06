import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="main-content">
        {/* <!-- Banner Start --> */}
        <div className="rs-banner banner-style1">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="content-wrap">
                  <span className="sub-text">Welcome To Fintab Solution</span>
                  <h1 className="title">
                    We help your <span> Business</span> grow
                  </h1>
                  <p className="description">
                    we are leading business setup and consulting corporation in
                    all over india
                  </p>
                  <div className="banner-btn mt-40 md-mt-25">
                    <Link className="readon slide-started" to="/contact">
                      <span>Get Started</span>
                    </Link>
                  </div>
                  <div className="banner-box banner-boxs"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- About Start --> */}
        <div
          id="rs-about"
          className="rs-about about-style2 pt-120 pb-120 md-pt-80 md-pb-70"
        >
          <div className="container">
            <div className="row y-middle">
              <div className="col-lg-6 pr-42 md-pr-15 md-mb-50">
                <div
                  className="about-img wow fadeInLeft"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                  <img
                    src="./src/assets/images/about/style2/about-3.png"
                    alt="Images"
                  />
                </div>
              </div>
              <div className="col-lg-6 pr-38 md-pr-15 pl-30 md-pl-15">
                <div className="sec-title mb-45 md-mb-25">
                  <span className="sub-text big-text">About Us</span>
                  <h2 className="title title2 title-color pb-20">
                    over 5 year of experience in business setup, finance &
                    consulting <span> services</span>
                  </h2>
                  <p className="desc small2">
                    FINTAB SOLUTIONS stands as a cornerstone of excellence in
                    the financial services landscape of India. Established with
                    a vision to redefine client-centric service delivery, we
                    specialize in a diverse array of financial solutions ranging
                    from fundamental accounting practices to software
                    development and strategic business consultation. At the
                    heart of FINTAB SOLUTIONS lies a commitment to integrating
                    innovation with deep-rooted expertise. Our journey began
                    with a clear mission: to empower businesses with the tools
                    and insights needed to thrive in an increasingly digital
                    economy. From small enterprises to multinational
                    corporations, our tailored solutions cater to the specific
                    needs of each client, ensuring robustness and relevance in
                    every service we provide.
                  </p>
                </div>

                <div className="btn-part mt-45 md-mt-30">
                  <Link className="readon slide-started more" to="/about">
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- About End --> */}

        {/* <!-- Services Section Start --> */}
        <div className="rs-services services-style2 pt-120 pb-120 md-pt-80 md-pb-80">
          <div className="container">
            <div className="row mb-40 align-items-end">
              <div className="col-lg-6">
                <div className="sec-title md-mb-25">
                  <span className="sub-text big-text">Our Services</span>
                  <h2 className="title title2 title-color">
                    Proud to Work With The Premier<span> Organisation</span>
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="sec-title pb-10">
                  <p className="desc small">
                    such as new business setup, investment, financial services,
                    software development, marketing and HR services
                  </p>
                </div>
              </div>
            </div>
            <OwlCarousel items={3} className="owl-theme" loop nav margin={8}>
              {/* <div className="rs-carousel owl-carousel" data-loop="true" data-items="3" data-margin="30" data-autoplay="true" data-hoverpause="true" data-autoplay-timeout="5000" data-smart-speed="800" data-dots="false" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device="1" data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device="2" data-ipad-device-nav="true" data-ipad-device-dots="false" data-ipad-device2="2" data-ipad-device-nav2="true" data-ipad-device-dots2="false" data-md-device="3" data-md-device-nav="true" data-md-device-dots="false"> */}
              <div className="rs-services-slider mt-45">
                <div className="content-part">
                  <h3 className="title">
                    <Link to="/services">
                      New Companey <br /> Setup
                    </Link>
                  </h3>
                </div>
                <div className="bottom-part">
                  <div className="services-icon">
                    <img
                      src="./src/assets/images/services/style2/icons/1.png"
                      alt=""
                    />
                  </div>
                  <div className="services-btn">
                    <Link className="btn-text" to="/services">
                      <i className="fa flaticon-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rs-services-slider mt-45">
                <div className="content-part">
                  <h3 className="title">
                    <a to="">
                      Trademark <br />
                      Registration
                    </a>
                  </h3>
                </div>
                <div className="bottom-part">
                  <div className="services-icon">
                    <img
                      src="./src/assets/images/services/style2/icons/2.png"
                      alt=""
                    />
                  </div>
                  <div className="services-btn">
                    <Link className="btn-text" to="/services">
                      <i className="fa flaticon-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rs-services-slider mt-45">
                <div className="content-part">
                  <h3 className="title">
                    <Link to="/services">
                      Financial <br />
                      Services
                    </Link>
                  </h3>
                </div>
                <div className="bottom-part">
                  <div className="services-icon">
                    <img
                      src="./src/assets/images/services/style2/icons/3.png"
                      alt=""
                    />
                  </div>
                  <div className="services-btn">
                    <Link className="btn-text" to="/services">
                      <i className="fa flaticon-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rs-services-slider mt-45">
                <div className="content-part">
                  <h3 className="title">
                    <Link to="/services">
                      {" "}
                      Auditing,
                      <br /> Book keeping
                    </Link>
                  </h3>
                </div>

                <div className="bottom-part">
                  <div className="services-icon">
                    <img
                      src="./src/assets/images/services/style4/main-img/1.png"
                      alt=""
                    />
                  </div>
                  <div className="services-btn">
                    <Link className="btn-text" to="/services">
                      <i className="fa flaticon-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rs-services-slider mt-45">
                <div className="content-part">
                  <h3 className="title">
                    <Link to="/services">
                      Taxation and <br /> GST
                    </Link>
                  </h3>
                </div>
                <div className="bottom-part">
                  <div className="services-icon">
                    <img
                      src="./src/assets/images/services/style4/main-img/2.png"
                      alt=""
                    />
                  </div>
                  <div className="services-btn">
                    <Link className="btn-text" to="/services">
                      <i className="fa flaticon-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rs-services-slider mt-45">
                <div className="content-part">
                  <h3 className="title">
                    <Link to="/services">
                      Software <br />
                      Developement
                    </Link>
                  </h3>
                </div>
                <div className="bottom-part">
                  <div className="services-icon">
                    <img
                      src="./src/assets/images/services/style4/main-img/3.png"
                      alt=""
                    />
                  </div>
                  <div className="services-btn">
                    <Link className="btn-text" to="/services">
                      <i className="fa flaticon-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rs-services-slider mt-45">
                <div className="content-part">
                  <h3 className="title">
                    <Link to="/services">
                      Market Research and <br /> Sales Techniques
                    </Link>
                  </h3>
                </div>
                <div className="bottom-part">
                  <div className="services-icon">
                    <img
                      src="./src/assets/images/services/style2/icons/1.png"
                      alt=""
                    />
                  </div>
                  <div className="services-btn">
                    <Link className="btn-text" to="/services">
                      <i className="fa flaticon-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rs-services-slider mt-45">
                <div className="content-part">
                  <h3 className="title">
                    <Link to="/services">
                      Marketing and <br /> Hiring service
                    </Link>
                  </h3>
                </div>
                <div className="bottom-part">
                  <div className="services-icon">
                    <img
                      src="./src/assets/images/services/style2/icons/1.png"
                      alt=""
                    />
                  </div>
                  <div className="services-btn">
                    <Link className="btn-text" to="/services">
                      <i className="fa flaticon-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </OwlCarousel>
            <div className="services-item pt-20">
              <div className="row">
                <div className="col-lg-5 md-mb-30">
                  <div className="services-btn-box">
                    <div className="sec-title">
                      <p className="desc small2">
                        We have all the services to help your business. Leverage
                        agile frameworks to provide.
                      </p>
                      <div className="btn-part mt-28">
                        <Link
                          className="readon slide-started more"
                          to="/services"
                        >
                          <span>All Services</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-img">
                    <img
                      src="./src/assets/images/services/style2/medium-shot.jpg"
                      alt="Images"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Services Section End --> */}

        {/* <!-- Testimonial Section Start -->  */}
        <div
          id="rs-testimonial"
          className="rs-testimonial testimonial-style3 pt-120 md-pt-80"
          style={{paddingBottom:"60px"}}
        >
          <div className="row no-gutters">
            <div className="col-lg-6 testi-image"></div>
            <div className="col-lg-6">
              <div className="widget-content">
                <div className="sec-title mb-40 md-mb-20">
                  <span className="sub-text big-text">What Our Client Say</span>
                  <h2 className="title title2">
                    What Our Customer <span>Talking About</span>
                  </h2>
                </div>
                {/* <div className="rs-carousel owl-carousel" data-loop="true" data-items="1" data-margin="30" data-autoplay="true" data-hoverpause="true" data-autoplay-timeout="5000" data-smart-speed="800" data-dots="false" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device="1" data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device="1" data-ipad-device-nav="false" data-ipad-device-dots="true" data-ipad-device2="1" data-ipad-device-nav2="false" data-ipad-device-dots2="true" data-md-device="1" data-md-device-nav="false" data-md-device-dots="true"> */}
                <OwlCarousel
                  items={1}
                  className="owl-theme"
                  loop
                  
                  margin={8}
                >
                  <div className="testi-item">
                    <div className="item-content-basic">
                      <div className="quote">
                        <img
                          src="./src/assets/images/testimonial/style1/quote2.png"
                          alt="Images"
                        />
                      </div>
                      <p>
                        I had a great experience with Fintab Solution. They
                        really understood our problems and gave us smart
                        solutions. Thanks to them, our business is now more
                        efficient and profitable. They were always there to help
                        and answered all our questions. I highly recommend them!
                      </p>
                    </div>
                    <div className="testi-content">
                      <div className="testi-information">
                        <div className="testi-name">Mohammed Kaif</div>
                        <span className="designation">Customer</span>
                      </div>
                    </div>
                  </div>
                  <div className="testi-item">
                    <div className="item-content-basic">
                      <div className="quote">
                        <img
                          src="./src/assets/images/testimonial/style1/quote2.png"
                          alt="Images"
                        />
                      </div>
                      <p>
                        Fintab Solution provided exceptional service! Their
                        team's expertise and strategic guidance were
                        instrumental in helping us streamline our operations and
                        boost our profits. Highly recommend!
                      </p>
                    </div>
                    <div className="testi-content">
                      <div className="testi-information">
                        <div className="testi-name">Asif Alam</div>
                        <span className="designation">Customer</span>
                      </div>
                    </div>
                  </div>
                  <div className="testi-item">
                    <div className="item-content-basic">
                      <div className="quote">
                        <img
                          src="./src/assets/images/testimonial/style1/quote2.png"
                          alt="Images"
                        />
                      </div>
                      <p>
                        Fintab Solution has been amazing for our company! Their
                        expert advice helped us solve big problems and grow.
                        They are professional, responsive, and truly care about
                        our success. I highly recommend them to anyone needing
                        business help!
                      </p>
                    </div>
                    <div className="testi-content">
                      <div className="testi-information">
                        <div className="testi-name">Faizan Ahmed</div>
                        <span className="designation">Customer</span>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Testimonial Section End --> */}

        {/* <!-- Team Section starts from here --> */}
        {/* <div className="rs-team team-style1 team-modify1 pt-120 pb-120 md-pt-80 md-pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-25">
                <div className="team-item">
                  <div className="team-inner-wrap">
                    <div className="image-wrap">
                      <a href="">
                        <img
                          src="./src/assets/images/Founder.png"
                          alt="Images"
                        />
                      </a>
                      <div className="social-icons">
                        <a target="_blank" href="https://wa.me/qr/RVCBLTB4TNMBK1">
                          <i className="fab fa-whatsapp"></i>
                        </a>
                        <a target="_blank" href="https://www.facebook.com/abdulaziz.mohankola.5">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/abdul_aziz_mk">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/azizmkola">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                    <div className="team-content">
                      <h3 className="team-name">
                        <a href=""> ABDUL AZIZ</a>
                      </h3>
                      <span className="team-title">Founder & Director</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-25">
                <div className="team-item">
                  <div className="team-inner-wrap">
                    <div className="image-wrap">
                      <a href="">
                        <img src="./src/assets/images/ceo.png" alt="Images" />
                      </a>
                    </div>
                    <div className="team-content">
                      <h3 className="team-name">
                        <a href="">OBAIDULLAH FARHAN</a>
                      </h3>
                      <span className="team-title">Managing Director</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-25">
                <div className="team-item">
                  <div className="team-inner-wrap">
                    <div className="image-wrap">
                      <a href="">
                        <img
                          src="./src/assets/images/ehtesham.png"
                          alt="Images"
                        />
                      </a>
                    </div>
                    <div className="team-content">
                      <h3 className="team-name">
                        <a href="">Ehtesham Khan</a>
                      </h3>
                      <span className="team-title">Senior Developer</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-25">
                <div className="team-item">
                  <div className="team-inner-wrap">
                    <div className="image-wrap">
                      <a href="">
                        <img src="./src/assets/images/ceo.png" alt="Images" />
                      </a>
                    </div>
                    <div className="team-content">
                      <h3 className="team-name">
                        <a href=""> Parwez Ahmad </a>
                      </h3>
                      <span className="team-title"> Chartered Accountant </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- Team section end here --> */}

        {/* <!-- Newsletter section start --> */}
        <div className="rs-newsletter newsletter-style1 bg7 pt-85 pb-85 md-pt-65 md-pb-155">
          <div className="container">
            <div className="row y-middle">
              <div className="col-lg-6">
                <div className="sec-title md-mb-30">
                  <h2 className="title title2 white-color">
                    Subscribe Newsletter
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="newsletter-form">
                  <input
                    className="newsletter-input"
                    type="email"
                    name="EMAIL"
                    placeholder="Email Address"
                    required=""
                  />
                  <input
                    className="newsletter-button"
                    type="submit"
                    value="Subscribe Now"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Newsletter section End --> */}
      </div>
    </div>
  );
};

export default Home;
