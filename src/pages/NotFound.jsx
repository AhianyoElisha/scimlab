import React from 'react';
import InnerLayout from '../components/InnerLayout';

function NotFound() {
  return (
    <InnerLayout
      breadcrumbs={['Home', '//', '404']}
      pageTitle="Page Not Found"
      activePage=""
    >
      <section className="error-section fix section-padding">
        <div className="container">
          <div className="error-items">
            <div className="thumb wow fadeInUp" data-wow-delay=".3s">
              <img src="/assets/img/404.png" alt="img" />
            </div>
            <div className="content">
              <h2 className="hero_title tv_hero_title hero_title_1">PAGE NOT FOUND</h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Oops! The page you are looking for does not exist. It might have been moved or deleted.
              </p>
              <a href="/" className="theme-btn wow fadeInUp" data-wow-delay=".6s">
                Go Back to Home
                <i className="fa-solid fa-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}

export default NotFound;
