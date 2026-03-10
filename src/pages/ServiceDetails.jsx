import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import InnerLayout from '../components/InnerLayout';
import ServiceIcons from '../components/ServiceIcons';
import services from '../data/servicesData';

function ServiceDetails() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <InnerLayout
      breadcrumbs={['Home', '//', 'Services', '//', service.title]}
      pageTitle={service.title}
      activePage="services"
    >
      {/* Service Details Section Start */}
      <section className="service-details-section section-padding fix">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="service-details-wrapper">
                <div className="service-details-thumb wow fadeInUp">
                  <img src={service.image} alt={service.title} style={{ borderRadius: '15px', width: '100%' }} />
                </div>
                <div className="service-details-content mt-4">
                  <h2 className="wow fadeInUp">{service.title}</h2>
                  <p className="mt-3 wow fadeInUp" data-wow-delay=".2s">{service.description}</p>

                  <h3 className="mt-4 wow fadeInUp" data-wow-delay=".3s">What We Do</h3>
                  <div className="list-items mt-3 wow fadeInUp" data-wow-delay=".4s">
                    <ul>
                      {service.details.map((item, i) => (
                        <li key={i}>
                          <img src="/assets/img/inner/service/check-icon.svg" alt="img" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h3 className="mt-4 wow fadeInUp" data-wow-delay=".5s">Key Highlights</h3>
                  <div className="list-items mt-3 wow fadeInUp" data-wow-delay=".6s">
                    <ul>
                      {service.features.map((item, i) => (
                        <li key={i}>
                          <img src="/assets/img/inner/service/check-icon.svg" alt="img" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="main-sidebar">
                <div className="single-sidebar-widget wow fadeInUp">
                  <div className="wid-title">
                    <h3>Research Areas</h3>
                  </div>
                  <div className="service-category">
                    <ul>
                      {services.map((s) => (
                        <li key={s.slug} className={s.slug === service.slug ? 'active' : ''}>
                          <a href={`/services/${s.slug}`}>
                            {s.title}
                            <i className="fa-solid fa-arrow-right"></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".2s" style={{ background: 'var(--header)', borderRadius: '15px', padding: '30px' }}>
                  <h4 style={{ color: '#fff', marginBottom: '15px' }}>Partner With Us</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                    Interested in collaborating on {service.title.toLowerCase()} research?
                  </p>
                  <div className="mt-3">
                    <p style={{ color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <i className="fa-solid fa-phone" style={{ color: 'var(--theme)' }}></i>
                      <a href="tel:+233322060230" style={{ color: '#fff' }}>+233 (0) 32 206 0230</a>
                    </p>
                    <p className="mt-2" style={{ color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <i className="fa-solid fa-envelope" style={{ color: 'var(--theme)' }}></i>
                      <a href="mailto:scimlab@knust.edu.gh" style={{ color: '#fff' }}>scimlab@knust.edu.gh</a>
                    </p>
                  </div>
                  <a href="/contact" className="theme-btn mt-3" style={{ display: 'inline-block' }}>
                    Contact Us <i className="fa-solid fa-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Research Areas */}
      <section className="service-section section-padding fix pt-0">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title wow fadeInUp">
              <img src="/assets/img/sub-title-1.svg" alt="img" />EXPLORE MORE
            </h6>
            <h2 className="text-anim">Other Research Areas</h2>
          </div>
          <div className="row g-4">
            {otherServices.slice(0, 3).map((s, index) => (
              <div
                key={s.slug}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.2 + index * 0.2}s`}
              >
                <div className="service-box-items" style={{ background: '#fff', borderRadius: '15px', padding: '30px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div className="icon" style={{ width: '80px', height: '80px', lineHeight: '80px', textAlign: 'center', borderRadius: '50%', background: 'var(--header)', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {ServiceIcons[s.icon]}
                  </div>
                  <div className="content" style={{ flex: 1 }}>
                    <h3><a href={`/services/${s.slug}`}>{s.title}</a></h3>
                    <p className="mt-2">{s.shortDesc}</p>
                  </div>
                  <a href={`/services/${s.slug}`} className="theme-btn mt-4" style={{ alignSelf: 'flex-start' }}>
                    Learn More <i className="fa-solid fa-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}

export default ServiceDetails;
