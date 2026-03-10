import React from 'react';
import InnerLayout from '../components/InnerLayout';

function Faq() {
  return (
    <InnerLayout
      breadcrumbs={['Home', '//', 'FAQs']}
      pageTitle="Frequently Asked Questions"
      activePage=""
    >
      <section className="faq-section-444 section-padding fix">
        <div className="container container-2">
          <div className="section-title-area">
            <div className="section-title">
              <h6 className="sub-title wow fadeInUp"><img src="/assets/img/sub-title-1.svg" alt="img" />OUR FAQ'S</h6>
              <h2 className="text-anim">Common Questions About <br /> SCiM LAB</h2>
            </div>
            <a href="/contact" className="theme-btn wow fadeInUp" data-wow-delay=".2s">
              Contact Us <i className="fa-solid fa-arrow-up-right"></i>
            </a>
          </div>
          <div className="row g-4">
            <div className="col-lg-5">
              <div className="faq-left-items-style-4">
                <ul>
                  <li className="wow fadeInUp" data-wow-delay=".3s">
                    <div className="icon"><img src="/assets/img/inner/faq-01.svg" alt="img" /></div>
                    <div className="content">
                      <h5>Contact us:</h5>
                      <p><a href="tel:+233322060230">Call: +233 (0) 32 206 0230</a></p>
                      <p><a href="mailto:scimlab@knust.edu.gh">Email: scimlab@knust.edu.gh</a></p>
                    </div>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".5s">
                    <div className="icon"><img src="/assets/img/inner/faq-02.svg" alt="img" /></div>
                    <div className="content">
                      <h5>Our Location:</h5>
                      <p>TCC-CIMET, KNUST, <br /> Kumasi, Ghana</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="faq-right-items-style-4">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".2s">
                      <h5 className="accordion-header">
                        <button className="accordion-button collapsed color-2" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                          What is SCiM LAB?
                        </button>
                      </h5>
                      <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <div className="accordion-body">
                          SCiM LAB (Smart Cities and Manufacturing Lab) is a research laboratory at TCC-CIMET, KNUST. We focus on smart city solutions, advanced manufacturing, digital twinning, sustainable architecture, urban mobility, and frugal innovation.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".4s">
                      <h5 className="accordion-header">
                        <button className="accordion-button collapsed color-2" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                          How can I collaborate with SCiM LAB?
                        </button>
                      </h5>
                      <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <div className="accordion-body">
                          We welcome collaborations from academic institutions, industry partners, government agencies, and international organisations. Contact us via email at scimlab@knust.edu.gh or visit our Contact page to discuss opportunities.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".6s">
                      <h5 className="accordion-header">
                        <button className="accordion-button collapsed color-2" type="button" data-bs-toggle="collapse" data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
                          What research areas does SCiM LAB cover?
                        </button>
                      </h5>
                      <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <div className="accordion-body">
                          Our six core research areas are: Smart City Solutions, Advanced Manufacturing, Digital Twinning, Sustainable Architecture, Urban Mobility, and Frugal Innovation. Each area addresses critical challenges in urbanisation and technological development in Africa.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".8s">
                      <h5 className="accordion-header">
                        <button className="accordion-button collapsed color-2" type="button" data-bs-toggle="collapse" data-bs-target="#faq6" aria-expanded="false" aria-controls="faq6">
                          Are there opportunities for students?
                        </button>
                      </h5>
                      <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <div className="accordion-body">
                          Yes! SCiM LAB offers research assistantship positions, internship opportunities, and thesis supervision for students interested in our research areas. We also run workshops and training programmes throughout the year.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item wow fadeInUp" data-wow-delay=".9s">
                      <h5 className="accordion-header">
                        <button className="accordion-button color-2" type="button" data-bs-toggle="collapse" data-bs-target="#faq7" aria-expanded="true" aria-controls="faq7">
                          Where can I find SCiM LAB publications?
                        </button>
                      </h5>
                      <div id="faq7" className="accordion-collapse collapse show" data-bs-parent="#accordion">
                        <div className="accordion-body">
                          Our research publications, monographs, and technical handbooks are available on our Publications page. You can also request copies by contacting us directly.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counter-section-2 section-padding pt-0">
        <div className="container">
          <div className="counter-wrapper-222 mt-0">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-7 wow fadeInUp" data-wow-delay=".2s">
                <form action="#" id="appointment-form" className="contact-form-box-2">
                  <h3 className="text-anim">Make An Appointment</h3>
                  <div className="row g-4 align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                      <div className="form-clt">
                        <input type="text" name="name" id="apptName" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                      <div className="form-clt">
                        <input type="text" name="email" id="apptEmail" placeholder="Email Address" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                      <div className="form-clt">
                        <input type="text" name="phone" id="apptPhone" placeholder="Phone number" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                      <div className="form-clt">
                        <input type="text" name="company" id="apptCompany" placeholder="Company name" />
                      </div>
                    </div>
                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".8s">
                      <div className="form-clt">
                        <textarea name="message" id="apptMessage" placeholder="Your message"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".9s">
                      <div className="contact-button">
                        <button type="submit" className="theme-btn">
                          Make An Appointment <i className="fa-solid fa-arrow-up-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-4 col-md-5 wow fadeInUp" data-wow-delay=".4s">
                <div className="counter-image-style-2 fix">
                  <img data-speed=".8" src="/assets/img/home-2/cta-banner/counter-img.jpg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}

export default Faq;
