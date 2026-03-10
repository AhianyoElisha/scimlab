import React from 'react';
import InnerLayout from '../components/InnerLayout';

function Pricing() {
  return (
    <InnerLayout
      breadcrumbs={['Home', '//', 'Programmes']}
      pageTitle="Research Programmes"
      activePage=""
    >
      <section className="pricing-section fix section-padding">
        <div className="container container-2">
          <div className="section-title text-center">
            <h6 className="sub-title color-2 wow fadeInUp"><img src="/assets/img/sub-title-3.svg" alt="img" />OUR PROGRAMMES</h6>
            <h2 className="text-anim">Research Collaboration Programmes</h2>
            <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
              SCiM LAB offers structured research collaboration programmes for academic institutions, industry partners,
              <br /> and government agencies looking to advance smart city and manufacturing innovation.
            </p>
          </div>
          <div className="row pricing-row">
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="pricing-box-items">
                <div className="pricing-header">
                  <h3>Academic Partnership</h3>
                  <h2>Tier 1</h2>
                </div>
                <p>Joint research projects, student exchange, and knowledge sharing with academic institutions.</p>
                <a href="/contact" className="theme-btn">
                  Get Started <i className="fa-solid fa-arrow-up-right"></i>
                </a>
                <h4>What's Included</h4>
                <ul className="pricing-list">
                  <li><i className="fa-light fa-check"></i> Joint research publications</li>
                  <li><i className="fa-light fa-check"></i> Student exchange opportunities</li>
                  <li><i className="fa-light fa-check"></i> Shared lab access</li>
                  <li><i className="fa-light fa-check"></i> Conference co-presentations</li>
                  <li><i className="fa-light fa-check"></i> Grant co-applications</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="pricing-box-items active">
                <div className="pricing-header">
                  <h3>Industry Collaboration</h3>
                  <h2>Tier 2</h2>
                </div>
                <p>Applied research, prototyping, and technology transfer for industry partners.</p>
                <a href="/contact" className="theme-btn">
                  Get Started <i className="fa-solid fa-arrow-up-right"></i>
                </a>
                <h4>What's Included</h4>
                <ul className="pricing-list">
                  <li><i className="fa-light fa-check"></i> Applied research projects</li>
                  <li><i className="fa-light fa-check"></i> Prototype development</li>
                  <li><i className="fa-light fa-check"></i> Technology transfer support</li>
                  <li><i className="fa-light fa-check"></i> Technical consulting</li>
                  <li><i className="fa-light fa-check"></i> IP co-development</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
              <div className="pricing-box-items">
                <div className="pricing-header">
                  <h3>Government & NGO</h3>
                  <h2>Tier 3</h2>
                </div>
                <p>Policy research, capacity building, and strategic advisory for public sector partners.</p>
                <a href="/contact" className="theme-btn">
                  Get Started <i className="fa-solid fa-arrow-up-right"></i>
                </a>
                <h4>What's Included</h4>
                <ul className="pricing-list">
                  <li><i className="fa-light fa-check"></i> Policy research & analysis</li>
                  <li><i className="fa-light fa-check"></i> Capacity building workshops</li>
                  <li><i className="fa-light fa-check"></i> Strategic advisory services</li>
                  <li><i className="fa-light fa-check"></i> Monitoring & evaluation</li>
                  <li><i className="fa-light fa-check"></i> Stakeholder engagement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}

export default Pricing;
