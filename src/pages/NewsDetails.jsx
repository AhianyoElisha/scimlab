import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import InnerLayout from '../components/InnerLayout';
import newsArticles from '../data/newsData';

function NewsDetails() {
  const { slug } = useParams();
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const otherArticles = newsArticles.filter((a) => a.slug !== article.slug);
  const allTags = [...new Set(newsArticles.flatMap((a) => a.tags))];
  const categoryCounts = newsArticles.reduce((acc, a) => {
    acc[a.category] = (acc[a.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <InnerLayout
      breadcrumbs={['Home', '//', 'News', '//', article.title]}
      pageTitle="News Details"
      activePage="news"
    >
      <section className="news-details-section section-padding">
        <div className="container">
          <div className="news-details-wrapper">
            <div className="row g-4">
              <div className="col-lg-8 col-12">
                <div className="news-details-post">
                  <div className="news-details-image wow fadeInUp" style={{ height: '400px', overflow: 'hidden', borderRadius: '10px' }}>
                    <img src={article.detailsImage} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                  </div>
                  <div className="news-details-content">
                    <ul className="news-list wow fadeInUp" data-wow-delay=".2s">
                      <li><i className="flaticon-date"></i> {article.date.toUpperCase()}</li>
                      <li className="style-1">{article.category}</li>
                    </ul>
                    <h2 className="wow fadeInUp" data-wow-delay=".4s">
                      {article.title}
                    </h2>
                    {article.content.map((para, idx) => (
                      <p key={idx} className="mb-3 wow fadeInUp" data-wow-delay={`${0.5 + idx * 0.1}s`}>
                        {para}
                      </p>
                    ))}
                    {article.quote && (
                      <div className="sideber wow fadeInUp" data-wow-delay=".8s">
                        <h3>
                          {article.quote.text}"
                        </h3>
                        <div className="info-item-area">
                          <div className="client-info">
                            <div className="client-image">
                              <img src={article.quote.image} alt={article.quote.author} style={{width: '100px', height: '100px', objectFit: 'cover'}} />
                            </div>
                            <span>{article.quote.author}</span>
                          </div>
                          <div className="icon">
                            <svg width="64" height="50" viewBox="0 0 64 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M56.5 22.5H41.5V17.5C41.5 10.6075 47.1075 5 54 5H61.5C62.8808 5 64 3.88075 64 2.5C64 1.11925 62.8808 0 61.5 0H54C44.3505 0 36.5 7.8505 36.5 17.5V42.5C36.5 46.6355 39.8645 50 44 50H56.5C60.6355 50 64 46.6355 64 42.5V30C64 25.8645 60.6355 22.5 56.5 22.5ZM59 42.5C59 43.8785 57.8785 45 56.5 45H44C42.6215 45 41.5 43.8785 41.5 42.5V27.5H56.5C57.8785 27.5 59 28.6215 59 30V42.5Z" fill="#4653B8"/>
                              <path d="M17.5 5H25C26.3808 5 27.5 3.88075 27.5 2.5C27.5 1.11925 26.3808 0 25 0H17.5C7.8505 0 0 7.8505 0 17.5V42.5C0 46.6355 3.3645 50 7.5 50H20C24.1355 50 27.5 46.6355 27.5 42.5V30C27.5 25.8645 24.1355 22.5 20 22.5H5V17.5C5 10.6075 10.6075 5 17.5 5ZM22.5 30V42.5C22.5 43.8785 21.3785 45 20 45H7.5C6.1215 45 5 43.8785 5 42.5V27.5H20C21.3785 27.5 22.5 28.6215 22.5 30Z" fill="#4653B8"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                    <h4 className="wow fadeInUp" data-wow-delay=".9s">Key Highlights</h4>
                    <ul className="list wow fadeInUp" data-wow-delay=".3s">
                      {article.highlights.map((item, idx) => (
                        <li key={idx}>
                          <img src="/assets/img/inner/service/check-icon.svg" alt="img" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="news-image-2" style={{ height: '300px', overflow: 'hidden', borderRadius: '10px' }}>
                      <img src={article.secondaryImage} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                    </div>
                    <h4 className="text wow fadeInUp" data-wow-delay=".2s">Looking Forward</h4>
                    <ul className="list-item wow fadeInUp" data-wow-delay=".4s">
                      {article.lookingForward.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <div className="mt-4 wow fadeInUp" data-wow-delay=".5s">
                      <h4>Tags</h4>
                      <div className="tagcloud" style={{ marginTop: '10px' }}>
                        {article.tags.map((tag) => (
                          <a href="/news" key={tag}>{tag}</a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="main-sideber sticky-style">
                  <div className="single-sideber-widget wow fadeInUp" data-wow-delay=".2s">
                    <div className="widget-title">
                      <h3>Search</h3>
                    </div>
                    <div className="search-widget">
                      <form action="#">
                        <input type="text" placeholder="Search news" />
                        <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                      </form>
                    </div>
                  </div>
                  <div className="single-sideber-widget wow fadeInUp" data-wow-delay=".4s">
                    <div className="widget-title">
                      <h3>Other News</h3>
                    </div>
                    <div className="recent-post-area">
                      {otherArticles.slice(0, 3).map((other) => (
                        <div className="recent-items" key={other.slug}>
                          <div className="recent-thumb" style={{ width: '80px', height: '80px', overflow: 'hidden', flexShrink: 0 }}>
                            <img src={other.image} alt={other.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                          </div>
                          <div className="recent-content">
                            <ul><li>{other.date.toUpperCase()}</li></ul>
                            <h6><a href={`/news/${other.slug}`}>{other.title}</a></h6>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="single-sideber-widget wow fadeInUp" data-wow-delay=".6s">
                    <div className="widget-title">
                      <h3>Categories</h3>
                    </div>
                    <ul>
                      {Object.entries(categoryCounts).map(([cat, count]) => (
                        <li key={cat}><a href="/news">{cat}</a><span>({count})</span></li>
                      ))}
                    </ul>
                  </div>
                  <div className="single-sideber-widget mb-0 wow fadeInUp" data-wow-delay=".8s">
                    <div className="widget-title">
                      <h3>Tags</h3>
                    </div>
                    <div className="tagcloud">
                      {allTags.map((tag) => (
                        <a href="/news" key={tag}>{tag}</a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}

export default NewsDetails;
