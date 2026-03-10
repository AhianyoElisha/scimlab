import React from 'react';
import InnerLayout from '../components/InnerLayout';
import projects from '../data/projectsData';

function OurProject() {
  return (
    <InnerLayout
      breadcrumbs={['Home', '//', 'Projects']}
      pageTitle="Our Projects"
      activePage="projects"
    >
      {/* Project Section Start */}
      <section className="project-section section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title wow fadeInUp">
              <img src="/assets/img/sub-title-1.svg" alt="img" />OUR WORK
            </h6>
            <h2 className="text-anim">
              Research &amp; Innovation Projects
            </h2>
          </div>
          <div className="row g-4">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.2 + (index % 3) * 0.2}s`}
              >
                <div className="project-card-items" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <div className="project-thumb" style={{ position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', top: '15px', left: '15px' }}>
                      <span style={{ background: 'var(--theme)', color: '#fff', padding: '4px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600 }}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="project-content" style={{ padding: '25px', background: '#fff' }}>
                    <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>
                      <a href={`/projects/${project.slug}`}>{project.title}</a>
                    </h3>
                    <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
                      {project.shortDesc}
                    </p>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '15px' }}>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{ background: '#f5f5f5', padding: '3px 10px', borderRadius: '12px', fontSize: '12px', color: '#555' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={`/projects/${project.slug}`} className="theme-btn" style={{ fontSize: '14px' }}>
                      View Details <i className="fa-solid fa-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding fix pt-0">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title wow fadeInUp">
              <img src="/assets/img/sub-title-1.svg" alt="img" />COLLABORATORS
            </h6>
            <h2 className="text-anim">Our Research Partners</h2>
          </div>
          <div className="row g-4 justify-content-center">
            {['TCC-CIMET, KNUST', 'DDF-KIT Karlsruhe', 'City Authorities, Ghana', 'International Research Consortium'].map((partner, i) => (
              <div key={i} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 + i * 0.2}s`}>
                <div style={{ textAlign: 'center', padding: '30px 20px', background: '#f8f9fa', borderRadius: '15px' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--header)', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fa-solid fa-handshake" style={{ color: 'var(--theme)', fontSize: '24px' }}></i>
                  </div>
                  <h5 style={{ fontSize: '16px' }}>{partner}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}

export default OurProject;
