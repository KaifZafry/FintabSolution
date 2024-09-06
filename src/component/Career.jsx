import React from "react";

const Career = () => {
  return (
    <div>
      <div class="rs-breadcrumbs img2">
        <div class="container">
          <div class="breadcrumbs-inner">
            <h1 class="page-title">
              Careers
              <span class="watermark">Careers</span>
            </h1>
            <span class="sub-text">
              Explore a career at Fintab Come, Work with Us!
            </span>
          </div>
        </div>
      </div>
      {/* <!-- Breadcrumbs End --> */}

      <div class="container">
        <div class="row my-5">
          <h2 class="text-center">Students</h2>
          <div class="text-content">
            <h6>Want to join FINTAB SOLUTIONS as interns:</h6>
            <p>
              "Are you passionate about finance, technology, and business
              innovation? At FINTAB SOLUTIONS, we offer dynamic internship
              opportunities designed to ignite your potential and fuel your
              career aspirations. As an intern with us, you'll gain hands-on
              experience in financial services, software development, and
              business consultancy. We provide a supportive learning environment
              where your ideas are valued, and your growth is nurtured by
              seasoned professionals. Whether you're exploring a future in
              accounting, entrepreneurship, or software engineering, FINTAB
              SOLUTIONS invites you to join us in shaping the future of business
              in India and Nepal. Embark on a transformative journey with us and
              make an impact from day one."
            </p>
            <div class="text-center">
              <a
                class="readon slide-started __mPS2id my-2"
                style={{
                  borderColor: "#FF6D00",
                  color: "#fff",
                  position: "relative",
                  zIndex: "10",
                }}
                href="mailto:office@fintab.in"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        <div class="row my-5">
          <h2 class="text-center">Professional</h2>
          <div class="text-content">
            <h6>Professionals interested in joining FINTAB SOLUTIONS:</h6>
            <p>
              "At FINTAB SOLUTIONS, we are always on the lookout for driven
              professionals who share our passion for excellence and innovation
              in financial services, software development, and business
              consultancy. Joining our team means being part of a dynamic
              environment where your expertise is valued and your ideas are
              encouraged to flourish. Whether you're an experienced accountant,
              a seasoned auditor, a skilled software developer, or a strategic
              business consultant, FINTAB SOLUTIONS offers opportunities to
              leverage your skills and make a meaningful impact in a diverse
              range of projects. Come be a part of our journey to redefine the
              future of business in India and Nepal. Explore career growth and
              development with us at FINTAB SOLUTIONS, where your career
              aspirations meet endless possibilities."
            </p>
            <div class="text-center">
              <a
                class="readon slide-started __mPS2id my-2"
                style={{
                  borderColor: "#FF6D00",
                  color: "#fff",
                  position: "relative",
                  zIndex: "10",
                }}
                href="mailto:office@fintab.in"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Contact Start --> */}
      <div class="rs-contact contact-style1 contact-modify3 pt-120 pb-120 md-pt-80 md-pb-80">
        <div class="container">
          <div class="row no-gutters">
            <div class="col-lg-6 contact-form"></div>
            <div class="col-lg-6">
              <div class="contact-section">
                <div class="sec-title mb-20">
                  <span class="sub-text">Let’s talk</span>
                  <h2 class="title">Free Consultation</h2>
                </div>
                <div class="contact-wrap">
                  <form id="contact-form" method="post" action="#">
                    <fieldset>
                      <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6 mb-30">
                          <input
                            class="from-control"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            required=""
                          />
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 mb-30">
                          <input
                            class="from-control"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="E-Mail"
                            required=""
                          />
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 mb-30">
                          <input
                            class="from-control"
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Phone Number"
                            required=""
                          />
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 mb-30">
                          <input
                            class="from-control"
                            type="text"
                            id="website"
                            name="website"
                            placeholder="Your Website"
                            required=""
                          />
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 mb-30">
                          <select
                            name="consultation"
                            class="wpcf7-form-control wpcf7-select wpcf7-validates-as-required"
                            aria-required="true"
                            aria-invalid="false"
                          >
                            <option value="Business Planning">
                              Business Planning
                            </option>
                            <option value="Project Reporting">
                              Project Reporting
                            </option>
                            <option value="Financial Advices">
                              Financial Advices
                            </option>
                            <option value="Business Analysis">
                              Business Analysis
                            </option>
                          </select>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 mb-25">
                          <input
                            class="from-control"
                            type="text"
                            id="date"
                            name="date"
                            placeholder="mm/ddd/yyy"
                            required=""
                          />
                        </div>
                        <div class="col-lg-12 mb-35">
                          <textarea
                            class="from-control"
                            id="message"
                            name="message"
                            placeholder="Your Message Here"
                            required=""
                          ></textarea>
                        </div>
                      </div>
                      <div class="btn-part">
                        <div class="form-group mb-0">
                          <input
                            class="readon details submit2"
                            type="submit"
                            value="Submit Now"
                          />
                        </div>
                      </div>
                    </fieldset>
                  </form>
                  <div id="form-messages"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
