import React from 'react';
import InnerLayout from '../components/InnerLayout';
import ServiceIcons from '../components/ServiceIcons';
import services from '../data/servicesData';

function Service() {
  return (
    <InnerLayout
      breadcrumbs={['Home', '//', 'Services']}
      pageTitle="Research Focus Areas"
      activePage="services"
    >
      {/* Service Section Start */}
      <section className="service-section section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title wow fadeInUp">
              <img src="/assets/img/sub-title-1.svg" alt="img" />OUR SERVICES
            </h6>
            <h2 className="text-anim">Smart Solutions for Urban <br /> Development &amp; Industry</h2>
            <p className="mt-3 wow fadeInUp" data-wow-delay=".2s">
              SCiM LAB focuses on developing innovative solutions across six key research areas, <br />
              driving impact through frugal innovation and Industry 4.0 technologies.
            </p>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.2 + (index % 3) * 0.2}s`}
              >
                <div className="service-box-items" style={{ background: '#fff', borderRadius: '15px', padding: '30px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div className="icon" style={{ width: '80px', height: '80px', lineHeight: '80px', textAlign: 'center', borderRadius: '50%', background: 'var(--header)', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {ServiceIcons[service.icon]}
                  </div>
                  <div className="content" style={{ flex: 1 }}>
                    <h3><a href={`/services/${service.slug}`}>{service.title}</a></h3>
                    <p className="mt-2">{service.shortDesc}</p>
                  </div>
                  <a href={`/services/${service.slug}`} className="theme-btn mt-4" style={{ alignSelf: 'flex-start' }}>
                    Learn More
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Us Section Start */}
      <section className="about-feature-section-2 section-padding fix pt-0">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title wow fadeInUp">
              <img src="/assets/img/sub-title-1.svg" alt="img" />WHY SCiM LAB
            </h6>
            <h2 className="text-anim">Driving Innovation Through <br /> Research &amp; Collaboration</h2>
          </div>
          <div className="about-feature-wrapper-2 style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="about-feature-image-items-style-2">
                  <img src="/assets/media/2.jpg" alt="SCiM LAB research"  style={{maxWidth: '653px', height: '645px', objectFit: 'cover', backgroundPosition: 'center'}}/>
                  <div className="circle-image">
                    <img src="/assets/img/home-2/about-feature/circle-shape.png" alt="img" />
                    <div className="counter-items">
                      <h2><span className="count">12</span>+</h2>
                      <p>Active Projects</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 wow fadeInUp" data-wow-delay=".5s">
                <div className="about-feature-content-items-style-2">
                  <div className="about-feature-icon-box mt-0">
                    <div className="icon">
                      <img src="/assets/img/home-2/about-feature/icon-01.svg" alt="img" />
                    </div>
                    <div className="content">
                      <h4>Expert Research Team</h4>
                      <p>Our multidisciplinary team brings decades of combined expertise to every project.</p>
                    </div>
                  </div>
                  <div className="about-feature-icon-box">
                    <div className="icon">
                      <img src="/assets/img/home-2/about-feature/icon-02.svg" alt="img" />
                    </div>
                    <div className="content">
                      <h4>Industry 4.0 Technologies</h4>
                      <p>Integrating IoT, AI, robotics, and digital fabrication for real-world challenges.</p>
                    </div>
                  </div>
                  <div className="about-feature-icon-box">
                    <div className="icon">
                      <img src="/assets/img/home-2/about-feature/icon-03.svg" alt="img" />
                    </div>
                    <div className="content">
                      <h4>Frugal Innovation</h4>
                      <p>Affordable, scalable technologies that deliver maximum impact with minimal resources.</p>
                    </div>
                  </div>
                  <a href="/about" className="theme-btn">
                    About SCiM LAB
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}

export default Service;
