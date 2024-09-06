import React from 'react'

const Contact = () => {
  return (
    <div>
      <div class="rs-breadcrumbs img1">
			    <div class="container">
			        <div class="breadcrumbs-inner">
			            <h1 class="page-title">
			                Contact Us
			                <span class="watermark">Contact</span>
			            </h1>
			            <span class="sub-text"></span>
			        </div>
			    </div>
			</div>
			{/* <!-- Breadcrumbs End --> */}
		
			{/* <!-- Contact Section Start --> */}
			<div class="rs-contact contact-style3 pt-120 pb-120 md-pt-80 md-pb-80">
			    <div class="row no-gutters">
			        <div class="col-lg-4 office-buliding"></div>
			        <div class="col-lg-4">
        				<div class="contact-section">
                            <div class="contact-wrap">
                            	<div class="sec-title2 mb-34">
                            		<h2 class="title">Get in touch</h2>
                            	</div>
                                <form id="contact-form" method="post" action="">
                                    <fieldset>
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-6 mb-30">
                                                <input class="from-control" type="text" id="name" name="name" placeholder="Name" required=""/>
                                            </div> 
                                            <div class="col-lg-6 col-md-6 col-sm-6 mb-30">
                                                <input class="from-control" type="email" id="email" name="email" placeholder="E-Mail" required=""/>
                                            </div>   
                                            <div class="col-lg-6 col-md-6 col-sm-6 mb-30">
                                                <input class="from-control" type="text" id="phone" name="phone" placeholder="Phone Number" required=""/>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 mb-30">
                                                <input class="from-control" type="text" id="website" name="website" placeholder="Your Website" required=""/>
                                            </div>
                                            <div class="col-lg-12 mb-30">
                                                <textarea class="from-control" id="message" name="message" placeholder="Your Message Here" required=""></textarea>
                                            </div>
                                        </div>
                                        <div class="btn-part">                                            
                                            <div class="form-group mb-0">
                                                <input class="readon details submit" type="submit" value="Submit Now"/>
                                            </div>
                                        </div> 
                                    </fieldset>
                                </form> 
                                <div id="form-messages"></div>
                            </div>
                        </div>
			        </div>
			        <div class="col-lg-4">
			        	<div class="contact-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.015759180095!2d77.28223987464659!3d28.569289486951334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce34618d65b79%3A0x13d99b48b905d04a!2sFintab%20solutions!5e0!3m2!1sen!2sin!4v1721741792735!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
			        </div>
			    </div>
			    {/* <!-- Contact Icons Section End --> */}
			    <div class="rs-contact pt-100 md-pt-80">
			        <div class="container">
			            <div class="row">
			                <div class="col-lg-4 col-md-6 md-mb-30">
			                   <div class="contact-box">
			                       <div class="contact-icon">
			                           <img src="./src/assets/images/contact/style1/1.png" alt="images"/>
			                       </div>
			                       <div class="content-text">
			                           <h4 class="title"><a href="https://maps.app.goo.gl/51WPFnWgXkKiQrNZ9">Office address</a></h4>
			                           <p class="services-txt"> R161/B, gali no 6, 3rd floor, <br/>jamia nagar, new delhi, delhi 110025
									</p>
			                       </div>
			                   </div>
			                </div>
			                <div class="col-lg-4 col-md-6 sm-mb-30">
			                   <div class="contact-box con-bdr">
			                       <div class="contact-icon">
			                           <img src="./src/assets/images/contact/style1/2.png" alt="images"/>
			                       </div>
			                       <div class="content-text">
			                           <h4 class="title"><a target='_blank' href="mailto:office@fintab.in">Email us</a></h4>
			                           <span><a target='_blank' href="mailto:office@fintab.in">office@fintab.in
										</a></span><br/>
			                           <span><a target='_blank' href="mailto:office.fintab@gmail.com">office.fintab@gmail.com</a></span>
			                       </div>
			                   </div>
			                </div>
			                <div class="col-lg-4 col-md-6">
			                   <div class="contact-box con-bdr2">
			                       <div class="contact-icon">
			                           <img src="./src/assets/images/contact/style1/3.png" alt="images"/>
			                       </div>
			                       <div class="content-text">
			                           <h4 class="title"><a href="#">Call us</a></h4>
			                           <span><a target='_blank' href="tel:+91 7985022788">+91 7985022788</a></span><br/>
									   <span><a target='_blank' href="tel:+91 7985022788">+91 7985022788</a></span>
			                       </div>
			                   </div>
			                </div>
			            </div>
						<div class="text-center mt-5">
							<h2>Reach us</h2>
						</div>
						<div class="row my-5">
							<div class="col-lg-3 col-md-6">
								<div class="contact-box con-bdr">
									<div class="contact-icon">
										<a target="_blank" href="https://www.facebook.com/fintab.solutions">
											<img src="./src/assets/images/contact/icons/facebook.png" alt="images"/>
										</a>
										<h5>Facebook</h5>
										
									</div>
									
								</div>
							</div>
							<div class="col-lg-3 col-md-6">
								<div class="contact-box con-bdr2">
									<div class="contact-icon">
										<a target="_blank" href="https://www.instagram.com/fintab.solutions">
										<img src="./src/assets/images/contact/icons/instagram.png" alt="images"/></a>
										<h5>Instagram</h5>
									</div>
									
								</div>
							</div>
							<div class="col-lg-3 col-md-6">
								<div class="contact-box con-bdr">
									<div class="contact-icon">
										<a target="_blank" href="https://www.youtube.com/@FintabSolutions">
										<img src="./src/assets/images/contact/icons/youtube.png" alt="images"/>
										</a>
										<h5>YouTube</h5>
									</div>
									
								</div>
							</div>
							<div class="col-lg-3 col-md-6">
								<div class="contact-box con-bdr2">
									<div class="contact-icon">
										<a target="_blank" href=" https://wa.me/qr/RVCBLTB4TNMBK1">
											<img src="./src/assets/images/contact/icons/whatsapp.png" alt="images"/>
										</a>
                    <h5>Whatsapp</h5>	
									</div>
									
								</div>
							</div>
						</div>
			        </div>
			    </div>
			    {/* <!-- Contact Icons Section End --> */}
			</div>
    </div>
  )
}

export default Contact