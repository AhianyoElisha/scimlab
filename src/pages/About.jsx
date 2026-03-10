import React from 'react';
import { Link } from 'react-router-dom';
import InnerLayout from '../components/InnerLayout';
import teamMembers from '../data/teamData';
import projects from '../data/projectsData';

function About() {
  const featuredTeam = teamMembers.slice(0, 4);
  const featuredProjects = projects.slice(0, 4);

  return (
    <InnerLayout
      breadcrumbs={['Home', '//', 'About Us']}
      pageTitle="About SCiM LAB"
      activePage="about"
    >
      {/* About Section */}
      <section className="about-section section-padding fix">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="about-image-items-style-1">
                <div className="section-title mb-0">
                  <h6 className="sub-title wow fadeInUp"><img src="/assets/img/sub-title-1.svg" alt="img" />ABOUT SCiM LAB</h6>
                </div>
                <div className="about-image wow fadeInUp" data-wow-delay=".2s">
                  <img src="/assets/img/home-1/about/about-01.png" alt="SCiM LAB" />
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="about-content-style-1">
                <div className="section-title mb-0">
                  <h2 className="text_invert-2">Pioneering innovation at the intersection of technology, sustainability, and urban design at TCC-CIMET, KNUST</h2>
                </div>
                <div className="list-items">
                  <ul className="wow fadeInUp" data-wow-delay=".2s">
                    <li><img src="/assets/img/home-1/about/check-icon.svg" alt="img" /> UNESCO Category II Centre</li>
                    <li><img src="/assets/img/home-1/about/check-icon.svg" alt="img" /> Frugal Innovation</li>
                  </ul>
                  <ul className="wow fadeInUp" data-wow-delay=".4s">
                    <li><img src="/assets/img/home-1/about/check-icon.svg" alt="img" /> Expert Research Team</li>
                    <li><img src="/assets/img/home-1/about/check-icon.svg" alt="img" /> Global Partnerships</li>
                  </ul>
                </div>
                <div className="bottom-items">
                  <div className="icon-box-items wow fadeInUp" data-wow-delay=".6s">
                    <div className="icon"><img src="/assets/img/home-1/about/icon-1.svg" alt="img" /></div>
                    <div className="content">
                      <h2><span className="count">50</span>+</h2>
                      <p>Years of TCC Excellence in engineering education and innovation</p>
                    </div>
                  </div>
                  <div className="icon-box-items wow fadeInUp" data-wow-delay=".8s">
                    <div className="icon"><img src="/assets/img/home-1/about/icon-2.svg" alt="img" /></div>
                    <div className="content">
                      <h2><span className="count">12</span>+</h2>
                      <p>Active research projects across smart cities and manufacturing</p>
                    </div>
                  </div>
                </div>
                <Link to="/projects" className="theme-btn wow fadeInUp" data-wow-delay=".9s">
                  View Our Projects <i className="fa-solid fa-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <div className="brand-section section-padding fix pt-0">
        <div className="container">
          <div className="top-text text-center">
            <p>Partnering with institutions and organizations worldwide</p>
          </div>
          <div className="swiper brand-slider">
            <div className="swiper-wrapper">
              {[1,2,3,4,5,6].map(i => (
                <div className="swiper-slide" key={i}>
                  <div className="brand-image text-center">
                    <img src={`/assets/img/home-1/brand/brand-0${i}.png`} alt="partner" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* About Feature Section */}
      <section className="about-feature-section-2 section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title wow fadeInUp"><img src="/assets/img/sub-title-1.svg" alt="img" />WHY SCiM LAB</h6>
            <h2 className="text-anim">Driving innovation through <br /> research and collaboration</h2>
          </div>
          <div className="about-feature-wrapper-2 style-2">
            <div className="about-shape">
              <img src="/assets/img/home-2/about/about-shape.png" alt="img" />
            </div>
            <div className="row g-4 align-items-center">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="about-feature-image-items-style-2">
                  <img src="/assets/img/home-2/about-feature/about-feature-01.png" alt="SCiM LAB research" />
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
                    <div className="icon"><img src="/assets/img/home-2/about-feature/icon-01.svg" alt="img" /></div>
                    <div className="content">
                      <h4>Expert Research Team</h4>
                      <p>Our multidisciplinary team of architects, engineers, and technologists brings decades of combined expertise to every project.</p>
                    </div>
                  </div>
                  <div className="about-feature-icon-box">
                    <div className="icon"><img src="/assets/img/home-2/about-feature/icon-02.svg" alt="img" /></div>
                    <div className="content">
                      <h4>Industry 4.0 Technologies</h4>
                      <p>Integrating IoT, AI, robotics, and digital fabrication to create practical solutions for real-world challenges.</p>
                    </div>
                  </div>
                  <div className="about-feature-icon-box">
                    <div className="icon"><img src="/assets/img/home-2/about-feature/icon-03.svg" alt="img" /></div>
                    <div className="content">
                      <h4>Frugal Innovation</h4>
                      <p>Developing affordable, scalable technologies that deliver maximum impact with minimal resources for communities across Africa.</p>
                    </div>
                  </div>
                  <Link to="/services" className="theme-btn">
                    Explore Research Areas <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <ul className="custom-support-list wow fadeInUp" data-wow-delay=".7s">
            <li><img src="/assets/img/home-1/about/check-icon.svg" alt="img" /> UNESCO Recognition</li>
            <li><img src="/assets/img/home-1/about/check-icon.svg" alt="img" /> Global Partnerships</li>
            <li><img src="/assets/img/home-1/about/check-icon.svg" alt="img" /> Expert Researchers</li>
            <li><img src="/assets/img/home-1/about/check-icon.svg" alt="img" /> Sustainable Impact</li>
          </ul>
        </div>
      </section>

      {/* Project Section */}
      <section className="project-section section-padding pt-0 pb-0">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <h6 className="sub-title wow fadeInUp"><img src="/assets/img/sub-title-1.svg" alt="img" />OUR PROJECTS</h6>
            </div>
            <h2 className="text-anim">View Our Portfolio Of <br /> Research &amp; Innovation</h2>
          </div>
        </div>
        <div className="row g-2">
          {featuredProjects.map((project, idx) => (
            <div className={`col-lg-6 col-md-6 wow fadeInUp`} data-wow-delay={idx % 2 === 0 ? '.3s' : '.5s'} key={project.slug}>
              <div className="project-thumb-box-items-style-1">
                <img src={project.image} alt={project.title} />
                <div className="project-content">
                  <div className="text-items">
                    <h3><Link to={`/projects/${project.slug}`}>{project.title}</Link></h3>
                    <p>{project.category.toUpperCase()}</p>
                  </div>
                  <Link to={`/projects/${project.slug}`} className="circle-icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Section */}
      <section className="feature-section-2 counter-feature2 section-padding fix pt-0">
        <div className="container">
          <div className="row">
            {[
              { num: '01', title: 'Research', desc: 'Pioneering engineering research at the intersection of technology, sustainability, and urban design.' },
              { num: '02', title: 'Manufacturing', desc: 'Advanced manufacturing through additive techniques, robotics, and Industry 4.0 integration.' },
              { num: '03', title: 'Innovation', desc: 'Frugal innovation that delivers maximum impact with minimal resources for communities across Africa.' },
              { num: '04', title: 'Training', desc: 'Building capacity through STEAM education, entrepreneurship training, and professional development.' },
            ].map((item, idx) => (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay={`${0.2 + idx * 0.2}s`} key={item.num}>
                <div className="feature-box-items-2">
                  <h2>{item.num}</h2>
                  <div className="content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="work-prosec-section-3 section-padding pt-0">
        <div className="work-shape-1"><img src="/assets/img/home-3/work-prosce/shape-01.png" alt="img" /></div>
        <div className="work-shape-2"><img src="/assets/img/home-3/work-prosce/shape-02.png" alt="img" /></div>
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title color-2 wow fadeInUp"><img src="/assets/img/sub-title-3.svg" alt="img" />OUR APPROACH</h6>
            <h2 className="text-anim">From Concept to <br /> Real-World Impact</h2>
          </div>
          <div className="row">
            {[
              { icon: 'icon-01.svg', title: 'Research & Design', desc: 'Our multidisciplinary team identifies challenges and designs innovative solutions using cutting-edge research methodologies.', style: 'style-2' },
              { icon: 'icon-02.svg', title: 'Prototype & Test', desc: 'We develop prototypes using frugal innovation principles, testing with real communities to ensure practical, scalable outcomes.', style: '' },
              { icon: 'icon-03.svg', title: 'Deploy & Scale', desc: 'Successful solutions are deployed in real-world environments and scaled across communities for maximum impact.', style: 'style-2' },
            ].map((item, idx) => (
              <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${0.3 + idx * 0.2}s`} key={item.icon}>
                <div className={`work-prosec-card-style-3 ${item.style}`}>
                  <div className="icon"><img src={`/assets/img/home-3/work-prosce/${item.icon}`} alt="img" /></div>
                  <div className="content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title wow fadeInUp"><img src="/assets/img/sub-title-1.svg" alt="img" />OUR TEAM</h6>
            <h2 className="text-anim">Meet Our Research Team</h2>
            <p className="mt-3 wow fadeInUp" data-wow-delay=".2s">A multidisciplinary team of architects, engineers, and technologists driving <br /> innovation at the intersection of smart cities and manufacturing.</p>
          </div>
        </div>
        <div className="swiper team-slider">
          <div className="swiper-wrapper">
            {featuredTeam.map(member => (
              <div className="swiper-slide" key={member.slug}>
                <div className="team-box-items-style-1">
                  <div className="thumb">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="content">
                    <h3><Link to={`/team/${member.slug}`}>{member.name}</Link></h3>
                    <p>{member.title}</p>
                    <div className="bottom-items">
                      <div className="social-icon d-flex">
                        {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>}
                        {member.twitter && <a href={member.twitter} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>}
                      </div>
                      <Link to={`/team/${member.slug}`} className="theme-btn">
                        View Profile <i className="fa-solid fa-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-dot"><div className="dot"></div></div>
        </div>
      </section>
    </InnerLayout>
  );
}

export default About;
