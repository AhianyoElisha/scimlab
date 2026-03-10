import React from 'react';
import InnerLayout from '../components/InnerLayout';
import publications from '../data/publicationsData';

function Shop() {
  return (
    <InnerLayout
      breadcrumbs={['Home', '//', 'Publications']}
      pageTitle="Publications & Resources"
      activePage="shop"
    >
      {/* Publications Section Start */}
      <section className="shop-section section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title wow fadeInUp">
              <img src="/assets/img/sub-title-1.svg" alt="img" />OUR PUBLICATIONS
            </h6>
            <h2 className="text-anim">
              Research Publications &amp; Resources
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".2s" style={{ maxWidth: '660px', margin: '15px auto 0' }}>
              Explore SCiM LAB's research monographs, technical handbooks, and reports — knowledge resources developed from our cutting-edge research and collaborations.
            </p>
          </div>
          <div className="row g-4">
            {publications.map((pub, index) => (
              <div
                key={pub.slug}
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.2 + (index % 3) * 0.2}s`}
              >
                <div className="shop-box-items" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', background: '#fff', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div className="shop-thumb" style={{ position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={pub.image}
                      alt={pub.title}
                      style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', top: '15px', left: '15px' }}>
                      <span style={{ background: 'var(--theme)', color: '#fff', padding: '4px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600 }}>
                        {pub.category}
                      </span>
                    </div>
                  </div>
                  <div className="shop-content" style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '18px', marginBottom: '8px', flex: 1 }}>
                      <a href={`/shop/${pub.slug}`}>{pub.title}</a>
                    </h3>
                    <p style={{ fontSize: '14px', color: '#666', marginBottom: '12px' }}>{pub.shortDesc}</p>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '15px' }}>
                      {pub.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{ background: '#f5f5f5', padding: '3px 10px', borderRadius: '12px', fontSize: '11px', color: '#555' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '20px', fontWeight: 700, color: 'var(--header)' }}>
                        ${pub.price}
                      </span>
                      <a href={`/shop/${pub.slug}`} className="theme-btn" style={{ fontSize: '13px', padding: '8px 18px' }}>
                        View Details <i className="fa-solid fa-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}

export default Shop;
