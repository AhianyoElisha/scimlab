import React from 'react';
import InnerLayout from '../components/InnerLayout';

function Contact() {
  return (
    <InnerLayout
      breadcrumbs={['Home', '//', 'Contact Us']}
      pageTitle="Contact Us"
      activePage="contact"
    >
      <section className="contact-section fix section-padding">
        <div className="container container-2">
          <div className="contact-top">
            <h2 className="hero_title tv_hero_title hero_title_1">
              Our Contact Information
            </h2>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="icon-box-items">
                  <div className="icon">
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>
                  <div className="content">
                    <p>Call Us</p>
                    <h5><a href="tel:+233322060230">+233 (0) 32 206 0230</a></h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
                <div className="icon-box-items">
                  <div className="icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="content">
                    <p>Location</p>
                    <h5>TCC-CIMET, KNUST, Kumasi, Ghana</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".7s">
                <div className="icon-box-items">
                  <div className="icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="content">
                    <p>Email Us</p>
                    <h5>
                      <a href="mailto:scimlab@knust.edu.gh" className="link">scimlab@knust.edu.gh</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-middle-items">
            <div className="row">
              <div className="col-lg-6">
                <form action="/contact" id="contact-form" className="contact-form-box">
                  <h3 className="hero_title tv_hero_title hero_title_1">Get In Touch</h3>
                  <div className="row g-4 align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                      <div className="form-clt">
                        <input type="text" name="name" id="name" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                      <div className="form-clt">
                        <input type="text" name="email" id="email2" placeholder="Email Address" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                      <div className="form-clt">
                        <input type="text" name="phone" id="phone" placeholder="Phone number" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                      <div className="form-clt">
                        <input type="text" name="subject" id="subject" placeholder="Select Subject" />
                      </div>
                    </div>
                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".8s">
                      <div className="form-clt">
                        <textarea name="message" id="message" placeholder="Write a message..."></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".9s">
                      <div className="contact-button">
                        <button type="submit" className="theme-btn">
                          Submit Now
                          <i className="far fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-6">
                <div className="google-map-items">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.521981246951!2d-1.5636!3d6.6745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb9584e28f8127%3A0x4419df42af697e25!2sKNUST!5e0!3m2!1sen!2sgh" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}

export default Contact;
