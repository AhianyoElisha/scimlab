import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import InnerLayout from '../components/InnerLayout';
import publications from '../data/publicationsData';

function ShopDetails() {
  const { slug } = useParams();
  const publication = publications.find((p) => p.slug === slug);

  if (!publication) {
    return <Navigate to="/shop" replace />;
  }

  const otherPublications = publications.filter((p) => p.slug !== publication.slug);

  return (
    <InnerLayout
      breadcrumbs={['Home', '//', 'Publications', '//', publication.title]}
      pageTitle={publication.title}
      activePage="shop"
    >
      {/* Publication Details Section Start */}
      <section className="shop-details-section section-padding fix">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-5">
              <div className="shop-details-thumb wow fadeInUp">
                <img
                  src={publication.image}
                  alt={publication.title}
                  style={{ width: '100%', borderRadius: '15px' }}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="shop-details-content">
                <span className="wow fadeInUp" style={{ background: 'var(--theme)', color: '#fff', padding: '4px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, display: 'inline-block', marginBottom: '15px' }}>
                  {publication.category}
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".1s">{publication.title}</h2>
                <div className="price mt-2 wow fadeInUp" data-wow-delay=".2s">
                  <span style={{ fontSize: '28px', fontWeight: 700, color: 'var(--header)' }}>
                    ${publication.price}
                  </span>
                </div>
                <p className="mt-3 wow fadeInUp" data-wow-delay=".3s">{publication.description}</p>
                <div className="mt-3 wow fadeInUp" data-wow-delay=".4s" style={{ padding: '15px', background: '#f8f9fa', borderRadius: '10px' }}>
                  <p style={{ fontSize: '14px', color: '#555' }}>{publication.details}</p>
                </div>
                <div className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                  <h5 style={{ marginBottom: '10px' }}>Topics</h5>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {publication.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{ background: '#f5f5f5', padding: '5px 14px', borderRadius: '20px', fontSize: '13px', color: '#555' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 wow fadeInUp" data-wow-delay=".6s">
                  <a href="/contact" className="theme-btn">
                    Request a Copy <i className="fa-solid fa-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Publications */}
      <section className="shop-section section-padding fix pt-0">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title wow fadeInUp">
              <img src="/assets/img/sub-title-1.svg" alt="img" />MORE FROM SCiM LAB
            </h6>
            <h2 className="text-anim">Other Publications</h2>
          </div>
          <div className="row g-4">
            {otherPublications.slice(0, 3).map((pub, index) => (
              <div key={pub.slug} className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 + index * 0.2}s`}>
                <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', background: '#fff' }}>
                  <div style={{ position: 'relative' }}>
                    <img src={pub.image} alt={pub.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '15px', left: '15px' }}>
                      <span style={{ background: 'var(--theme)', color: '#fff', padding: '4px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600 }}>
                        {pub.category}
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h4 style={{ fontSize: '17px', marginBottom: '8px' }}>
                      <a href={`/shop/${pub.slug}`}>{pub.title}</a>
                    </h4>
                    <p style={{ fontSize: '14px', color: '#666', marginBottom: '12px' }}>{pub.shortDesc}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--header)' }}>${pub.price}</span>
                      <a href={`/shop/${pub.slug}`} className="theme-btn" style={{ fontSize: '13px', padding: '8px 18px' }}>
                        View <i className="fa-solid fa-arrow-up-right"></i>
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

export default ShopDetails;
