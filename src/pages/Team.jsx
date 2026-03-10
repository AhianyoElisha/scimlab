import React from 'react';
import InnerLayout from '../components/InnerLayout';
import teamMembers from '../data/teamData';

function Team() {
  return (
    <InnerLayout
      breadcrumbs={['Home', '//', 'Our Team']}
      pageTitle="Our Research Team"
      activePage="team"
    >
      {/* Team Section Start */}
      <section className="team-section-inner section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title wow fadeInUp">
              <img src="/assets/img/sub-title-1.svg" alt="img" />OUR TEAM
            </h6>
            <h2 className="text-anim">Meet the SCiM LAB Team</h2>
            <p className="mt-3 wow fadeInUp" data-wow-delay=".2s">
              A multidisciplinary team of architects, engineers, and technologists driving <br />
              innovation at the intersection of smart cities and manufacturing.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div
                key={member.slug}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.2 + (index % 3) * 0.2}s`}
              >
                <div className="team-box-items-style-1 mt-0">
                  <div className="thumb">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="content">
                    <h3><a href={`/team/${member.slug}`}>{member.name}</a></h3>
                    <p>{member.title}</p>
                    <div className="bottom-items">
                      <div className="social-icon d-flex">
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </div>
                      <a href={`/team/${member.slug}`} className="theme-btn">
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
      </section>
    </InnerLayout>
  );
}

export default Team;
