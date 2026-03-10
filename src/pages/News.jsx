import React from 'react';
import InnerLayout from '../components/InnerLayout';
import newsArticles from '../data/newsData';

function News() {
  // Collect all unique tags from articles
  const allTags = [...new Set(newsArticles.flatMap((a) => a.tags))];
  // Collect unique categories with counts
  const categoryCounts = newsArticles.reduce((acc, a) => {
    acc[a.category] = (acc[a.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <InnerLayout
      breadcrumbs={['Home', '//', 'News']}
      pageTitle="News & Updates"
      activePage="news"
    >
      <section className="news-section section-padding">
        <div className="container">
          <div className="news-wrapper">
            <div className="row g-4">
              <div className="col-lg-8 col-12">
                <div className="news-left-content">
                  {newsArticles.map((article, idx) => (
                    <div
                      key={article.slug}
                      className={`news-item${idx === newsArticles.length - 1 ? ' mb-0' : ''} wow fadeInUp`}
                      data-wow-delay={`${0.2 + idx * 0.2}s`}
                    >
                      <div className="news-thumb" style={{ height: '300px', overflow: 'hidden' }}>
                        <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                        <div className="post-date">
                          <h4>{article.day}</h4>
                          <p>{article.month}</p>
                        </div>
                      </div>
                      <div className="news-content">
                        <div className="user-box">
                          <div className="user-item">
                            <i className="fa-solid fa-circle-user"></i>
                            {article.author}
                          </div>
                          <span>{article.category}</span>
                        </div>
                        <h4><a href={`/news/${article.slug}`}>{article.title}</a></h4>
                      </div>
                    </div>
                  ))}
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
                      <h3>Latest News</h3>
                    </div>
                    <div className="recent-post-area">
                      {newsArticles.slice(0, 3).map((article) => (
                        <div className="recent-items" key={article.slug}>
                          <div className="recent-thumb" style={{ width: '80px', height: '80px', overflow: 'hidden', flexShrink: 0 }}>
                            <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                          </div>
                          <div className="recent-content">
                            <ul><li>{article.date.toUpperCase()}</li></ul>
                            <h6><a href={`/news/${article.slug}`}>{article.title}</a></h6>
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

export default News;
