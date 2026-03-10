import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import InnerLayout from '../components/InnerLayout';
import teamMembers from '../data/teamData';

function TeamDetails() {
  const { slug } = useParams();
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    return <Navigate to="/team" replace />;
  }

  return (
    <InnerLayout
      breadcrumbs={['Home', '//', 'Team', '//', member.name]}
      pageTitle={member.name}
      activePage="team"
    >
      {/* Team Details Section Start */}
      <section className="project-details-section section-padding fix">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-5 wow fadeInUp" data-wow-delay=".3s">
              <div className="team-left-image">
                <img src={member.image} alt={member.name} style={{ borderRadius: '15px', width: '100%' }} />
              </div>
              <div className="mt-4">
                <div className="social-icon d-flex align-items-center" style={{ gap: '12px' }}>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="theme-btn" style={{ padding: '10px 20px' }}>
                    <i className="fa-brands fa-linkedin-in"></i> LinkedIn
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="theme-btn" style={{ padding: '10px 20px' }}>
                    <i className="fa-brands fa-twitter"></i> Twitter
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="team-details-content">
                <span className="top-text wow fadeInUp">{member.role}</span>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">{member.name}</h2>
                <p className="wow fadeInUp" data-wow-delay=".3s" style={{ fontSize: '18px', color: 'var(--theme)' }}>
                  {member.title}
                </p>
                <p className="mt-2 wow fadeInUp" data-wow-delay=".3s" style={{ color: '#666' }}>
                  {member.department}
                </p>

                <h3 className="wow fadeInUp mt-4" data-wow-delay=".4s">About</h3>
                <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">{member.bio}</p>

                <h4 className="wow fadeInUp mt-4" data-wow-delay=".6s">Areas of Expertise</h4>
                <div className="list-items wow fadeInUp mt-3" data-wow-delay=".7s">
                  <ul>
                    {member.expertise.map((item, i) => (
                      <li key={i}>
                        <img src="/assets/img/inner/service/check-icon.svg" alt="img" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <ul className="wow fadeInUp mt-4" data-wow-delay=".8s" style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div className="icon" style={{ width: '40px', height: '40px', lineHeight: '40px', textAlign: 'center', borderRadius: '50%', background: 'var(--theme)', color: 'var(--header)' }}>
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <p><a href={`mailto:${member.email}`}>{member.email}</a></p>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div className="icon" style={{ width: '40px', height: '40px', lineHeight: '40px', textAlign: 'center', borderRadius: '50%', background: 'var(--theme)', color: 'var(--header)' }}>
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <p><a href={`tel:${member.phone.replace(/\s/g, '')}`}>{member.phone}</a></p>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div className="icon" style={{ width: '40px', height: '40px', lineHeight: '40px', textAlign: 'center', borderRadius: '50%', background: 'var(--theme)', color: 'var(--header)' }}>
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <p>TCC-CIMET, KNUST, Kumasi, Ghana</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Other Team Members */}
          <div className="mt-5 pt-5" style={{ borderTop: '1px solid #eee' }}>
            <h3 className="text-center mb-4 wow fadeInUp">Other Team Members</h3>
            <div className="row g-4">
              {teamMembers
                .filter((m) => m.slug !== member.slug)
                .slice(0, 3)
                .map((otherMember, index) => (
                  <div
                    key={otherMember.slug}
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay={`${0.2 + index * 0.2}s`}
                  >
                    <div className="team-box-items-style-1 mt-0">
                      <div className="thumb">
                        <img src={otherMember.image} alt={otherMember.name} />
                      </div>
                      <div className="content">
                        <h3><a href={`/team/${otherMember.slug}`}>{otherMember.name}</a></h3>
                        <p>{otherMember.title}</p>
                        <div className="bottom-items">
                          <div className="social-icon d-flex">
                            <a href={otherMember.linkedin} target="_blank" rel="noopener noreferrer">
                              <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href={otherMember.twitter} target="_blank" rel="noopener noreferrer">
                              <i className="fa-brands fa-twitter"></i>
                            </a>
                          </div>
                          <a href={`/team/${otherMember.slug}`} className="theme-btn">
                            View Profile
                            <i className="fa-solid fa-arrow-up-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}

export default TeamDetails;
