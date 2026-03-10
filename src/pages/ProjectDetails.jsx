import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import InnerLayout from '../components/InnerLayout';
import projects from '../data/projectsData';

function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const otherProjects = projects.filter((p) => p.slug !== project.slug);

  return (
    <InnerLayout
      breadcrumbs={['Home', '//', 'Projects', '//', project.title]}
      pageTitle={project.title}
      activePage="projects"
    >
      {/* Project Details Section Start */}
      <section className="project-details-section section-padding fix">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="project-details-wrapper">
                <div className="project-details-thumb wow fadeInUp">
                  <img src={project.image} alt={project.title} style={{ borderRadius: '15px', width: '100%' }} />
                </div>
                <div className="project-details-content mt-4">
                  <h2 className="wow fadeInUp">{project.title}</h2>
                  <p className="mt-3 wow fadeInUp" data-wow-delay=".2s">{project.description}</p>

                  <h3 className="mt-4 wow fadeInUp" data-wow-delay=".3s">Project Scope</h3>
                  <div className="list-items mt-3 wow fadeInUp" data-wow-delay=".4s">
                    <ul>
                      {project.details.map((item, i) => (
                        <li key={i}>
                          <img src="/assets/img/inner/service/check-icon.svg" alt="img" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.modelUrl && (
                    <div className="mt-4 wow fadeInUp" data-wow-delay=".45s">
                      <Link
                        to={`/showroom/${project.slug}`}
                        className="theme-btn"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                      >
                        <i className="fa-solid fa-cube"></i>
                        View 3D Showroom
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </Link>
                    </div>
                  )}

                  <div className="mt-4 wow fadeInUp" data-wow-delay=".5s">
                    <h4>Tags</h4>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '10px' }}>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{ background: '#f5f5f5', padding: '5px 14px', borderRadius: '20px', fontSize: '13px', color: '#555' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="main-sidebar">
                <div className="single-sidebar-widget wow fadeInUp">
                  <div className="wid-title">
                    <h3>Project Info</h3>
                  </div>
                  <div className="project-info-list" style={{ listStyle: 'none', padding: 0 }}>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee' }}>
                        <strong>Category:</strong>
                        <span>{project.category}</span>
                      </li>
                      <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee' }}>
                        <strong>Client:</strong>
                        <span>{project.client}</span>
                      </li>
                      <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee' }}>
                        <strong>Timeline:</strong>
                        <span>{project.date}</span>
                      </li>
                      <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0' }}>
                        <strong>Location:</strong>
                        <span>{project.location}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".2s">
                  <div className="wid-title">
                    <h3>All Projects</h3>
                  </div>
                  <div className="service-category">
                    <ul>
                      {projects.map((p) => (
                        <li key={p.slug} className={p.slug === project.slug ? 'active' : ''}>
                          <a href={`/projects/${p.slug}`}>
                            {p.title}
                            <i className="fa-solid fa-arrow-right"></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".3s" style={{ background: 'var(--header)', borderRadius: '15px', padding: '30px' }}>
                  <h4 style={{ color: '#fff', marginBottom: '15px' }}>Collaborate With Us</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                    Interested in partnering on this or similar research projects?
                  </p>
                  <a href="/contact" className="theme-btn mt-3" style={{ display: 'inline-block' }}>
                    Get In Touch <i className="fa-solid fa-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="project-section section-padding fix pt-0">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title wow fadeInUp">
              <img src="/assets/img/sub-title-1.svg" alt="img" />EXPLORE MORE
            </h6>
            <h2 className="text-anim">Related Projects</h2>
          </div>
          <div className="row g-4">
            {otherProjects.slice(0, 3).map((p, index) => (
              <div key={p.slug} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 + index * 0.2}s`}>
                <div className="project-card-items" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <div className="project-thumb">
                    <img src={p.image} alt={p.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '15px', left: '15px' }}>
                      <span style={{ background: 'var(--theme)', color: '#fff', padding: '4px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600 }}>
                        {p.category}
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: '20px', background: '#fff' }}>
                    <h4><a href={`/projects/${p.slug}`}>{p.title}</a></h4>
                    <p style={{ fontSize: '14px', color: '#666', margin: '8px 0' }}>{p.shortDesc}</p>
                    <a href={`/projects/${p.slug}`} className="theme-btn" style={{ fontSize: '14px' }}>
                      View Details <i className="fa-solid fa-arrow-up-right"></i>
                    </a>
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

export default ProjectDetails;
