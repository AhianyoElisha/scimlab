import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import InnerLayout from '../components/InnerLayout';
import ModelViewer from '../components/ModelViewer';
import projects from '../data/projectsData';

function Showroom() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project || !project.modelUrl) {
    return <Navigate to={project ? `/projects/${slug}` : '/projects'} replace />;
  }

  return (
    <InnerLayout
      breadcrumbs={['Home', '//', 'Projects', '//', project.title, '//', '3D Showroom']}
      pageTitle={`${project.title} — 3D Showroom`}
      activePage="projects"
    >
      {/* Section Title & Description */}
      <section className="section-padding fix pb-0">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title wow fadeInUp">
              <img src="/assets/img/sub-title-1.svg" alt="img" />3D SHOWROOM
            </h6>
            <h2 className="text-anim">{project.title}</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <p className="wow fadeInUp" data-wow-delay=".2s" style={{ color: '#666', lineHeight: 1.8, fontSize: '16px' }}>
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Model Viewer */}
      <section className="section-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="wow fadeInUp" data-wow-delay=".3s">
                <ModelViewer modelUrl={project.modelUrl} title={project.title} />
              </div>
            </div>
          </div>

          {/* Project Info Below */}
          <div className="row g-4 mt-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <div style={{ background: '#f8f9fa', borderRadius: '15px', padding: '24px', height: '100%' }}>
                <h5 style={{ marginBottom: '16px' }}>Project Info</h5>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                    <strong>Category:</strong>
                    <span>{project.category}</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                    <strong>Client:</strong>
                    <span>{project.client}</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                    <strong>Timeline:</strong>
                    <span>{project.date}</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
                    <strong>Location:</strong>
                    <span>{project.location}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div style={{ background: '#f8f9fa', borderRadius: '15px', padding: '24px', height: '100%' }}>
                <h5 style={{ marginBottom: '16px' }}>How to Interact</h5>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 2.2 }}>
                  <li><i className="fa-solid fa-computer-mouse" style={{ color: 'var(--theme)', marginRight: '10px', width: '20px' }}></i> Click &amp; drag to rotate</li>
                  <li><i className="fa-solid fa-arrows-up-down" style={{ color: 'var(--theme)', marginRight: '10px', width: '20px' }}></i> Scroll to zoom in/out</li>
                  <li><i className="fa-solid fa-up-down-left-right" style={{ color: 'var(--theme)', marginRight: '10px', width: '20px' }}></i> Shift + drag to pan</li>
                  <li><i className="fa-solid fa-expand" style={{ color: 'var(--theme)', marginRight: '10px', width: '20px' }}></i> Fullscreen for immersive view</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay=".4s">
              <div style={{ background: 'var(--theme)', borderRadius: '15px', padding: '24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h5 style={{ color: '#fff', marginBottom: '12px' }}>Explore This Project</h5>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '20px', lineHeight: 1.7 }}>
                  View the full details, scope, and research behind this project.
                </p>
                <Link
                  to={`/projects/${project.slug}`}
                  className="theme-btn"
                  style={{ display: 'inline-block', textAlign: 'center', background: '#fff', color: 'var(--theme)' }}
                >
                  View Project Details <i className="fa-solid fa-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}

export default Showroom;
