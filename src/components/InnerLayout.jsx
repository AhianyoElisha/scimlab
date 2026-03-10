import React from 'react';

function InnerLayout({ children, breadcrumbs, pageTitle, activePage }) {
  return (
    <>
      {/* Offcanvas Area Start */}
      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <a href="/"><img src="/assets/img/logo/black-logo.png" alt="SCiM LAB" style={{ width: '150px' }} /></a>
                </div>
                <div className="offcanvas__close"><button><i className="fas fa-times"></i></button></div>
              </div>
              <h3 className="offcanvas-title">SCiM LAB</h3>
              <p>The Smart Cities and Manufacturing Lab at TCC-CIMET, KNUST — Innovating Today, Shaping Tomorrow.</p>
              <div className="mobile-menu fix mt-15"></div>
              <div className="social-icon d-flex align-items-center">
                <a href="https://www.linkedin.com/in/scimlab360" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://twitter.com/Scimlab_360" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://instagram.com/scim_lab" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              </div>
              <div className="offcanvas__contact">
                <h3>Contact Us</h3>
                <ul className="contact-list">
                  <li>
                    <div className="icon"><i className="fa-solid fa-phone-plus"></i></div>
                    <div className="content"><p>Call Us</p><h4><a href="tel:+233322060230">+233 (0) 32 206 0230</a></h4></div>
                  </li>
                  <li>
                    <div className="icon"><i className="fa-solid fa-envelopes"></i></div>
                    <div className="content"><p>Send Email</p><h4><a href="mailto:scimlab@knust.edu.gh">scimlab@knust.edu.gh</a></h4></div>
                  </li>
                  <li>
                    <div className="icon"><i className="fa-solid fa-location-dot"></i></div>
                    <div className="content"><p>Location</p><h4>TCC-CIMET, KNUST, Kumasi, Ghana</h4></div>
                  </li>
                </ul>
              </div>
              <a href="/contact" className="theme-btn">Get In Touch <i className="fa-solid fa-plus"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay"></div>

      {/* Header Section Start */}
      <header className="header-section-3">
        <div className="header-top-section">
          <div className="header-top-wrapper">
            <p>
              Smart Cities &amp; Manufacturing Lab — TCC-CIMET, KNUST{' '}
              <a href="/contact" className="icon">Let's Talk <img src="/assets/img/talk.svg" alt="" /></a>
            </p>
            <ul className="contact-list">
              <li>
                <div className="icon"><i className="fa-solid fa-envelopes"></i></div>
                <div className="content"><h4><a href="mailto:scimlab@knust.edu.gh">scimlab@knust.edu.gh</a></h4></div>
              </li>
              <li>
                <div className="icon"><i className="fa-solid fa-clock"></i></div>
                <div className="content"><h4>Mon - Fri: 8:00am - 5:00pm</h4></div>
              </li>
              <li>
                <div className="icon"><i className="fa-solid fa-location-dot"></i></div>
                <div className="content"><h4>TCC-CIMET, KNUST, Kumasi</h4></div>
              </li>
            </ul>
          </div>
        </div>
        <div id="header-sticky" className="header-3">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <a href="/" className="header-logo">
                <img src="/assets/img/logo/black-logo.png" alt="SCiM LAB" style={{ width: '150px' }} />
              </a>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li className={activePage === 'home' ? 'active' : ''}><a href="/">Home</a></li>
                        <li className={activePage === 'about' ? 'active' : ''}><a href="/about">About Us</a></li>
                        <li className={activePage === 'team' ? 'active' : ''}><a href="/team">Team</a></li>
                        <li className={activePage === 'shop' ? 'active' : ''}><a href="/shop">Shop</a></li>
                        <li className={activePage === 'services' ? 'active' : ''}><a href="/services">Services</a></li>
                        <li className={activePage === 'projects' ? 'active' : ''}><a href="/projects">Projects</a></li>
                        <li className={activePage === 'news' ? 'active' : ''}><a href="/news">News</a></li>
                        <li className={activePage === 'contact' ? 'active' : ''}><a href="/contact">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="head-right">
                  <div className="contact-item">
                    <div className="icon"><i className="fa-solid fa-phone-xmark"></i></div>
                    <div className="content">
                      <span>Call Us</span>
                      <h6><a href="tel:+233322060230">+233 (0) 32 206 0230</a></h6>
                    </div>
                  </div>
                </div>
                <div className="header__hamburger my-auto d-xl-none">
                  <div className="sidebar__toggle">
                    <div className="header-bar"><span></span><span></span><span></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="smooth-wrapper">
        <div id="smooth-content">

          {/* Breadcrumb Section Start */}
          <section className="breadcrumb-wrapper bg-cover fix" style={{ backgroundImage: 'url(/assets/media/1.jpg)' }}>
            <div className="container">
              <div className="page-heading">
                <ul className="breadcrumb-list">
                  {breadcrumbs.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <h1 className="breadcrumb-title">{pageTitle}</h1>
              </div>
            </div>
          </section>

          {/* Page Content */}
          {children}

          {/* CTA Section Start */}
          <section className="section-bg-3 pt-35">
            <div className="cta-section-3 mt-0">
              <div className="cta-image d-none d-xl-block">
                <img src="/assets/media/2.jpg" alt="img" style={{maxWidth: '377px', height: '367px', objectFit: 'cover', backgroundPosition: 'center'}}/>
              </div>
              <div className="cta-shape d-none d-xl-block float-bob-y">
                <img src="/assets/img/home-3/cta-image-shape.png" alt="img" />
              </div>
              <div className="container">
                <div className="cta-wrapper-3">
                  <div className="cta-content">
                    <h2 className="text-anim">Empowering Communities <br /> Through Innovation</h2>
                    <p className="wow fadeInUp" data-wow-delay=".2s">
                      Partner with SCiM LAB to drive smart city development and sustainable manufacturing solutions for the future.
                    </p>
                  </div>
                  <div className="circle-box">
                    <div className="text-image">
                      <img src="/assets/img/home-1/choose/text-3.png" alt="img" />
                    </div>
                    <a href="/contact" className="arrow-icon"><i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Section Start */}
          <footer className="footer-section-2 bg-cover" style={{ backgroundImage: 'url(/assets/media/1.jpg)' }}>
            <div className="footer-info-area-2">
              <div className="container footer-info-container">
                <div className="footer-info-wrapper-2">
                  <div className="info-items wow fadeInUp" data-wow-delay=".2s">
                    <div className="icon"><img src="/assets/img/footer/icon-01.svg" alt="img" /></div>
                    <div className="content"><h5>Call Us</h5><h6><a href="tel:+233322060230">+233 (0) 32 206 0230</a></h6></div>
                  </div>
                  <div className="info-items wow fadeInUp" data-wow-delay=".4s">
                    <div className="icon"><img src="/assets/img/footer/icon-02.svg" alt="img" /></div>
                    <div className="content"><h5>Email Us</h5><h6><a href="mailto:scimlab@knust.edu.gh">scimlab@knust.edu.gh</a></h6></div>
                  </div>
                  <div className="info-items wow fadeInUp" data-wow-delay=".6s">
                    <div className="icon"><img src="/assets/img/footer/icon-03.svg" alt="img" /></div>
                    <div className="content"><h5>Working Hours</h5><h6>Mon - Fri: 8:00am - 5:00pm</h6></div>
                  </div>
                  <div className="info-items border-none wow fadeInUp" data-wow-delay=".8s">
                    <div className="icon"><img src="/assets/img/footer/icon-04.svg" alt="img" /></div>
                    <div className="content"><h5>Location</h5><h6>TCC-CIMET, KNUST, Kumasi</h6></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="footer-widget-wrapper-2 footer-style-2">
                <div className="row">
                  <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="single-footer-widget">
                      <div className="widget-head">
                        <a href="/" className="footer-logo">
                          <img src="/assets/img/logo/white-logo.png" alt="SCiM LAB" className="white-logo-filter" style={{ width: '150px' }} />
                        </a>
                      </div>
                      <div className="footer-content">
                        <p>The Smart Cities and Manufacturing Lab at TCC-CIMET, KNUST — Innovating Today, Shaping Tomorrow.</p>
                        <div className="social-icon d-flex align-items-center">
                          <a href="https://www.linkedin.com/in/scimlab360" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                          <a href="https://twitter.com/Scimlab_360" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                          <a href="https://instagram.com/scim_lab" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 col-sm-6 col-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="single-footer-widget">
                      <div className="widget-head"><h3>Quick Links</h3></div>
                      <ul className="list-area">
                        <li><a href="/about">About SCiM LAB</a></li>
                        <li><a href="/team">Our Team</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/faq">FAQs</a></li>
                        <li><a href="/news">News</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 col-sm-6 col-6 wow fadeInUp" data-wow-delay=".6s">
                    <div className="single-footer-widget">
                      <div className="widget-head"><h3>Research Areas</h3></div>
                      <ul className="list-area">
                        <li><a href="/services/smart-city-solutions">Smart City Solutions</a></li>
                        <li><a href="/services/advanced-manufacturing">Advanced Manufacturing</a></li>
                        <li><a href="/services/digital-twinning">Digital Twinning</a></li>
                        <li><a href="/services/sustainable-architecture">Sustainable Architecture</a></li>
                        <li><a href="/services/urban-mobility">Urban Mobility</a></li>
                        <li><a href="/services/frugal-innovation">Frugal Innovation</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                    <div className="single-footer-widget">
                      <div className="widget-head"><h3>Stay Updated</h3></div>
                      <div className="footer-content">
                        <p>Subscribe to our newsletter for the latest research updates and events</p>
                        <div className="footer-input">
                          <input type="email" id="footer-email" placeholder="Your email" />
                          <button className="theme-btn" type="button">SUBSCRIBE NOW <i className="far fa-arrow-right"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom-2">
              <div className="container">
                <div className="footer-bottom-wrapper-2 style-2 wow fadeInUp" data-wow-delay=".3s">
                  <p className="text-center">&copy; 2026 SCiM LAB — TCC-CIMET, KNUST. All Rights Reserved</p>
                </div>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </>
  );
}

export default InnerLayout;
