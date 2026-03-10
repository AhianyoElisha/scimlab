import React from 'react'

function Home() {
  return (
    <>
{/* Offcanvas Area Start */}
        <div className="fix-area">
            <div className="offcanvas__info">
                <div className="offcanvas__wrapper">
                    <div className="offcanvas__content">
                        <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                            <div className="offcanvas__logo">
                                <a href="/">
                                    <img src="/assets/img/logo/black-logo.png" alt="SCiM LAB" style={{width: '150px'}}/>
                                </a>
                            </div>
                            <div className="offcanvas__close">
                                <button>
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <h3 className="offcanvas-title">SCiM LAB</h3>
                        <p>The Smart Cities and Manufacturing Lab at TCC-CIMET, KNUST — Innovating Today, Shaping Tomorrow.</p>
                        <div className="mobile-menu fix mt-15"></div>
                        <div className="social-icon d-flex align-items-center">
                            <a href="https://www.linkedin.com/in/scimlab360" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://twitter.com/Scimlab_360" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                            <a href="https://instagram.com/scim_lab" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        </div>

                        <div className="offcanvas__contact">
                            <h3>Contact Us</h3>
                            <ul className="contact-list">
                                <li>
                                    <div className="icon">
                                       <i className="fa-solid fa-phone-plus"></i>
                                    </div>
                                    <div className="content">
                                        <p>Call Us</p>
                                        <h4><a href="tel:+233322060230">+233 (0) 32 206 0230</a></h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                       <i className="fa-solid fa-envelopes"></i>
                                    </div>
                                    <div className="content">
                                        <p>Send Email</p>
                                        <h4><a href="mailto:scimlab@knust.edu.gh">scimlab@knust.edu.gh</a></h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                       <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className="content">
                                        <p>Location</p>
                                        <h4>
                                            TCC-CIMET, KNUST, Kumasi, Ghana
                                        </h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                       <a href="/contact" className="theme-btn">Get In Touch <i className="fa-solid fa-plus"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="offcanvas__overlay"></div>

        {/* Header Section Start */}
        <header id="header-sticky" className="header-2">
            <div className="mega-menu-wrapper">
                <div className="header-main">
                    <a href="/" className="header-logo">
                        <img src="/assets/img/logo/black-logo.png" alt="SCiM LAB" style={{width: '150px'}} />
                    </a>
                    <a href="/" className="logo">
                        <span className="logo-img">
                            <img src="/assets/img/logo/logo.png" alt="SCiM LAB" style={{width: '150px', position: 'relative', top: '10px'}} />
                        </span>
                    </a>
                    <div className="header-right d-flex justify-content-end align-items-center">
                         <div className="mean__menu-wrapper">
                            <div className="main-menu">
                               <nav id="mobile-menu">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about">About Us</a></li>
                                    <li><a href="/team">Team</a></li>
                                    <li><a href="/shop">Shop</a></li>
                                    <li><a href="/services">Services</a></li>
                                    <li><a href="/projects">Projects</a></li>
                                    <li><a href="/news">News</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </nav>
                            </div>
                        </div>
                        <div className="head-right">
                            <a href="/contact" className="theme-btn">
                                GET IN TOUCH
                            </a>
                        </div>
                        
                        <div className="header__hamburger my-auto d-xl-none">
                            <div className="sidebar__toggle">
                                <div className="header-bar">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div id="smooth-wrapper">
            <div id="smooth-content">

        {/* Hero Section Start */}
        <section className="hero-section-2 hero-2 fix">
            <div className="array-button">
                <button className="array-prev">
                    <i className="far fa-chevron-left"></i>
                </button>
                <button className="array-next">
                    <i className="far fa-chevron-right"></i>
                </button>
            </div>
            <div className="swiper banner-active">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="hero-height">
                            <div className="hero-bg bg-cover" style={{backgroundImage: 'url(/assets/media/1.jpg)'}}></div>
                            <div className="hero-circle">
                                <div className="text-circle">
                                    <img src="/assets/img/home-2/hero/hero-circle.png" alt="img" />
                                </div>
                                <a href="/about" className="arrow-icon">
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </a>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="hero-content">
                                            <h1>
                                                Innovating Today, <br /> Shaping Tomorrow
                                            </h1>
                                        </div>
                                        <div className="hero-button">
                                            <a href="/services" className="theme-btn">
                                            Explore Our Work
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="swiper-slide">
                        <div className="hero-height">
                            <div className="hero-bg bg-cover" style={{backgroundImage: 'url(/assets/media/2.jpg)'}}></div>
                            <div className="hero-circle">
                                <div className="text-circle">
                                    <img src="/assets/img/home-2/hero/hero-circle.png" alt="img" />
                                </div>
                                <a href="/about" className="arrow-icon">
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </a>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="hero-content">
                                            <h1>
                                                Smart Cities & <br /> Manufacturing Solutions
                                            </h1>
                                        </div>
                                        <div className="hero-button">
                                            <a href="/projects" className="theme-btn">
                                            View Projects
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* About Section Start */}
        <section className="about-section-2 section-padding fix">
            <div className="row g-4">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                    <div className="about-left-image-style-2 fix">
                        <img data-speed=".8" src="/assets/media/1.jpg" alt="SCiM LAB workspace" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-right-content-style-2">
                        <div className="section-title mb-0">
                            <h6 className="sub-title wow fadeInUp"><img src="/assets/img/sub-title-1.svg" alt="img" />ABOUT SCiM LAB</h6>
                            <h2 className="text_invert-2">Pioneering innovation at the intersection of technology, sustainability, and urban design</h2>
                        </div>
                        <p className="wow fadeInUp" data-wow-delay=".2s">
                            The Smart Cities and Manufacturing Lab (SCiM-Lab) at TCC-CIMET, KNUST, focuses on developing innovative and smart solutions for urban development and industrial transformation. Our research spans frugal innovation, advanced manufacturing, robotics, and Industry 4.0 technologies.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about-wrapper-style-2">
                <div className="row">
                    <div className="col-xxl-6 col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div className="about-counter-style-2">
                            <div className="counter-items">
                                <h2><span className="count">50</span>+</h2>
                                <p>Years of TCC Excellence</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-8 col-lg-8">
                        <div className="about-image-box-style-2">
                            <div className="about-bottom-box wow fadeInUp" data-wow-delay=".5s">
                                <div className="about-content">
                                    <h4>UNESCO Category II Centre for Engineering Education</h4>
                                    <a href="/about" className="theme-btn">
                                        Learn More
                                        <i className="fa-solid fa-arrow-up-right"></i>
                                    </a>
                                </div>
                                <div className="about-image">
                                    <img src="/assets/media/1.jpg" alt="TCC-CIMET" />
                                </div>
                            </div>
                            <div className="about-bottom-image fix wow fadeInUp" data-wow-delay=".7s">
                                <img data-speed=".8" src="/assets/media/1.jpg" alt="KNUST campus" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Service Section Start */}
        <section className="service-section-2 section-padding fix">
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <h6 className="sub-title wow fadeInUp"><img src="/assets/img/sub-title-white.png" alt="img" />RESEARCH FOCUS AREAS</h6>
                        <h2 className="text-white text-anim">Smart solutions for urban <br /> development &amp; industry</h2>
                    </div>
                    <div className="array-button">
                        <button className="array-prev"><i className="fa-solid fa-arrow-left"></i></button>
                        <button className="array-next"><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            <div className="swiper service-slider-2">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="service-box-items-style-2">
                            <div className="top-box-items">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M49.9377 10.6252C45.833 10.6252 42.5002 13.958 42.5002 18.0627C42.5002 22.1675 45.833 25.5003 49.9377 25.5003C54.0425 25.5003 57.3752 22.1675 57.3752 18.0627C57.3752 13.958 54.0425 10.6252 49.9377 10.6252ZM49.9377 12.7502C52.8695 12.7502 55.2502 15.131 55.2502 18.0627C55.2502 20.9945 52.8695 23.3752 49.9377 23.3752C47.006 23.3752 44.6252 20.9945 44.6252 18.0627C44.6252 15.131 47.006 12.7502 49.9377 12.7502Z" fill="#FFFFFF"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M50.9998 30.8125V28.6875C50.9998 28.101 50.5237 27.625 49.9373 27.625C49.3508 27.625 48.8748 28.101 48.8748 28.6875V30.8125C48.8748 31.399 49.3508 31.875 49.9373 31.875C50.5237 31.875 50.9998 31.399 50.9998 30.8125Z" fill="#FFFFFF"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M60.2511 26.8738L58.1261 24.7488C57.7115 24.3344 57.0381 24.3344 56.6235 24.7488C56.2088 25.1631 56.2088 25.8368 56.6235 26.2511L58.7485 28.3761C59.1631 28.7905 59.8365 28.7905 60.2511 28.3761C60.6657 27.9618 60.6657 27.2881 60.2511 26.8738Z" fill="#FFFFFF"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M62.688 17H60.563C59.9766 17 59.5005 17.476 59.5005 18.0625C59.5005 18.649 59.9766 19.125 60.563 19.125H62.688C63.2744 19.125 63.7505 18.649 63.7505 18.0625C63.7505 17.476 63.2744 17 62.688 17Z" fill="#FFFFFF"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M58.7485 7.74877L56.6235 9.87377C56.2088 10.2881 56.2088 10.9618 56.6235 11.3761C57.0381 11.7905 57.7114 11.7905 58.1261 11.3761L60.2511 9.25114C60.6657 8.83677 60.6657 8.16314 60.2511 7.74877C59.8364 7.33439 59.1631 7.33439 58.7485 7.74877Z" fill="#FFFFFF"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M43.2511 9.87377L41.1261 7.74877C40.7115 7.33439 40.0381 7.33439 39.6235 7.74877C39.2088 8.16314 39.2088 8.83677 39.6235 9.25114L41.7485 11.3761C42.1631 11.7905 42.8365 11.7905 43.2511 11.3761C43.6657 10.9618 43.6657 10.2881 43.2511 9.87377Z" fill="#FFFFFF"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M48.8748 5.31241V7.43737C48.8748 8.02389 49.3508 8.50003 49.9373 8.50003C50.5237 8.50003 50.9998 8.02389 50.9998 7.43737V5.31241C50.9998 4.72589 50.5237 4.24976 49.9373 4.24976C49.3508 4.24976 48.8748 4.72589 48.8748 5.31241Z" fill="#FFFFFF"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M41.7485 24.7488L39.6235 26.8738C39.2088 27.2881 39.2088 27.9618 39.6235 28.3761C40.0381 28.7905 40.7114 28.7905 41.1261 28.3761L43.2511 26.2511C43.6657 25.8368 43.6657 25.1631 43.2511 24.7488C42.8365 24.3344 42.1631 24.3344 41.7485 24.7488Z" fill="#FFFFFF"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M39.313 17H37.188C36.6016 17 36.1255 17.476 36.1255 18.0625C36.1255 18.649 36.6016 19.125 37.188 19.125H39.313C39.8994 19.125 40.3755 18.649 40.3755 18.0625C40.3755 17.476 39.8994 17 39.313 17Z" fill="#FFFFFF"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M7.13901 36.125L4.28195 24.6957C4.20226 24.378 4.27345 24.0412 4.47532 23.7841C4.67614 23.5259 4.98532 23.375 5.31257 23.375H37.1876C37.7741 23.375 38.2501 23.851 38.2501 24.4375C38.2501 25.024 37.7741 25.5 37.1876 25.5H28.9861L31.6424 36.125H41.1401L40.1413 32.1332C39.9989 31.5637 40.3453 30.9868 40.9148 30.8444C41.4833 30.702 42.0613 31.0484 42.2036 31.6168L43.3299 36.125H51.764L51.5632 35.3207C51.4208 34.7512 51.7672 34.1742 52.3356 34.0319C52.9051 33.8895 53.4821 34.2359 53.6245 34.8043L53.9549 36.125H55.2501C55.8366 36.125 56.3126 36.601 56.3126 37.1875C56.3126 37.774 55.8366 38.25 55.2501 38.25H54.4861L57.3432 49.6793C57.4229 49.997 57.3517 50.3338 57.1498 50.5909C56.949 50.8491 56.6398 51 56.3126 51H35.0626V61.625H62.6876C63.2741 61.625 63.7501 62.101 63.7501 62.6875C63.7501 63.274 63.2741 63.75 62.6876 63.75H5.31257C4.72607 63.75 4.25007 63.274 4.25007 62.6875C4.25007 62.101 4.72607 61.625 5.31257 61.625H26.5626V51H11.6876C11.1999 51 10.7749 50.6685 10.6569 50.1957L7.67026 38.25H6.37507C5.78857 38.25 5.31257 37.774 5.31257 37.1875C5.31257 36.601 5.78857 36.125 6.37507 36.125H7.13901ZM28.6876 51V61.625H32.9376V51H28.6876ZM20.9515 48.875L18.2953 38.25H9.86114L12.5174 48.875H20.9515ZM20.4861 38.25L23.1424 48.875H32.639L29.9828 38.25H20.4861ZM32.1736 38.25L34.8299 48.875H44.3265L41.6703 38.25H32.1736ZM52.2953 38.25H43.8611L46.5174 48.875H54.9515L52.2953 38.25ZM6.67364 25.5L9.32989 36.125H17.7651L15.1088 25.5H6.67364ZM17.2986 25.5L19.9549 36.125H29.4526L26.7963 25.5H17.2986Z" fill="#FFFFFF"/>
                                    </svg>
                                </div>
                                <div className="content">
                                    <h3><a href="/services/smart-city-solutions">Smart City Solutions</a></h3>
                                    <p>Developing innovative urban systems using AI, IoT, and data analytics to enhance city infrastructure, mobility, and public services.</p>
                                </div>
                            </div>
                            <a href="/services/smart-city-solutions" className="link-btns">View Details</a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="service-box-items-style-2">
                            <div className="top-box-items">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M30.4469 45.6886H24.4374C24.0077 45.6886 23.6201 45.4298 23.4557 45.0324C23.2912 44.6355 23.3821 44.1786 23.686 43.8745L38.561 28.9996C38.9053 28.6552 39.4395 28.5891 39.8573 28.8384C40.275 29.0883 40.4701 29.5899 40.3303 30.0563L37.5529 39.3135H43.5624C43.9921 39.3135 44.3797 39.5723 44.5442 39.9691C44.7086 40.3666 44.6177 40.8235 44.3138 41.127L29.4388 56.0025C29.0946 56.3464 28.5603 56.4124 28.1426 56.1631C27.7248 55.9132 27.5297 55.4117 27.6695 54.9458L30.4469 45.6886ZM37.0837 33.4822L27.0027 43.5634H31.8749C32.2107 43.5634 32.5269 43.7222 32.7275 43.9918C32.9276 44.2613 32.9893 44.6093 32.8928 44.9312L30.9161 51.5193L40.9971 41.4381H36.1249C35.7892 41.4381 35.473 41.2799 35.2724 41.0103C35.0722 40.7408 35.0106 40.3922 35.107 40.0703L37.0837 33.4822Z" fill="#FFFFFF"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M13.8125 54.1877C13.5307 54.1877 13.2605 54.0758 13.0612 53.8765C12.8619 53.6773 12.75 53.407 12.75 53.1252C12.75 52.8435 12.8619 52.5732 13.0612 52.3739C13.2605 52.1747 13.5307 52.0627 13.8125 52.0627C14.0943 52.0627 14.3645 52.1747 14.5638 52.3739C14.7631 52.5732 14.875 52.8435 14.875 53.1252C14.875 53.407 14.7631 53.6773 14.5638 53.8765C14.3645 54.0758 14.0943 54.1877 13.8125 54.1877Z" fill="#FFFFFF"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M54.1875 54.1877C53.9057 54.1877 53.6355 54.0758 53.4362 53.8765C53.2369 53.6773 53.125 53.407 53.125 53.1252C53.125 52.8435 53.2369 52.5732 53.4362 52.3739C53.6355 52.1747 53.9057 52.0627 54.1875 52.0627C54.4693 52.0627 54.7395 52.1747 54.9388 52.3739C55.1381 52.5732 55.25 52.8435 55.25 53.1252C55.25 53.407 55.1381 53.6773 54.9388 53.8765C54.7395 54.0758 54.4693 54.1877 54.1875 54.1877Z" fill="#FFFFFF"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M12.751 44.625V48.875C12.751 49.4613 13.227 49.9375 13.8135 49.9375C14.4 49.9375 14.876 49.4613 14.876 48.875V44.625C14.876 44.0385 14.4 43.5625 13.8135 43.5625C13.227 43.5625 12.751 44.0385 12.751 44.625Z" fill="#FFFFFF"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M53.126 44.625V48.875C53.126 49.4613 53.602 49.9375 54.1885 49.9375C54.775 49.9375 55.251 49.4613 55.251 48.875V44.625C55.251 44.0385 54.775 43.5625 54.1885 43.5625C53.602 43.5625 53.126 44.0385 53.126 44.625Z" fill="#FFFFFF"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M17 35.0618H10.625C10.1957 35.0618 9.80789 34.8025 9.64321 34.4062C9.47852 34.0088 9.56989 33.552 9.87377 33.2481L31.1238 11.9981C31.3225 11.7983 31.5934 11.6868 31.875 11.6868H36.125C36.4065 11.6868 36.6775 11.7983 36.8761 11.9981L44.625 19.7469V13.8128H43.5625C42.976 13.8128 42.5 13.3368 42.5 12.7503C42.5 12.1638 42.976 11.6878 43.5625 11.6878H52.0625C52.649 11.6878 53.125 12.1638 53.125 12.7503C53.125 13.3368 52.649 13.8128 52.0625 13.8128H51V26.1219L58.1261 33.2481C58.43 33.552 58.5214 34.0088 58.3567 34.4062C58.192 34.8025 57.8042 35.0618 57.375 35.0618H51V51.0003C51 51.8461 50.6642 52.6568 50.066 53.2539C49.4689 53.8521 48.6582 54.1878 47.8125 54.1878H36.125C35.5385 54.1878 35.0625 53.7118 35.0625 53.1253C35.0625 52.5388 35.5385 52.0628 36.125 52.0628H47.8125C48.094 52.0628 48.365 51.9513 48.5636 51.7515C48.7634 51.5528 48.875 51.2819 48.875 51.0003V33.3766L34 18.5016L19.125 33.3766V51.0003C19.125 51.2819 19.2365 51.5528 19.4363 51.7515C19.635 51.9513 19.9059 52.0628 20.1875 52.0628H24.4375C25.024 52.0628 25.5 52.5388 25.5 53.1253C25.5 53.7118 25.024 54.1878 24.4375 54.1878C22.747 54.1878 21.284 54.1878 20.1875 54.1878C19.3417 54.1878 18.531 53.8521 17.9339 53.2539C17.3357 52.6568 17 51.8461 17 51.0003V35.0618ZM51.4398 32.9368H54.8101L35.6851 13.8118H32.3148L13.1898 32.9368H16.5601L33.2488 16.2481C33.6631 15.8326 34.3368 15.8326 34.7511 16.2481L51.4398 32.9368ZM46.75 21.8719L48.875 23.9969V13.8128H46.75V21.8719Z" fill="#FFFFFF"/>
                                    </svg>
                                </div>
                                <div className="content">
                                    <h3><a href="/services/advanced-manufacturing">Advanced Manufacturing</a></h3>
                                    <p>Applying frugal innovation in additive manufacturing, robotics, and Industry 4.0 technologies for industrial transformation.</p>
                                </div>
                            </div>
                            <a href="/services/advanced-manufacturing" className="link-btns">View Details</a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="service-box-items-style-2">
                            <div className="top-box-items">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M30.8115 45.6881H27.624C27.2058 45.6881 26.8261 45.4426 26.655 45.0611C26.4833 44.6792 26.5519 44.2325 26.8301 43.9197L35.3301 34.3574C35.6231 34.0277 36.0894 33.9134 36.5014 34.0701C36.9139 34.2267 37.1865 34.622 37.1865 35.0634V41.4382H40.374C40.7922 41.4382 41.1719 41.6836 41.343 42.0656C41.5147 42.4471 41.4461 42.8938 41.1679 43.2066L32.6679 52.7688C32.3749 53.0986 31.9086 53.2133 31.4966 53.0562C31.0841 52.8996 30.8115 52.5042 30.8115 52.0633V45.6881ZM35.0615 37.8576L29.9898 43.5631H31.874C32.4611 43.5631 32.9365 44.0388 32.9365 44.6256V49.2686L38.0082 43.5631H36.124C35.5369 43.5631 35.0615 43.0875 35.0615 42.5007V37.8576Z" fill="#091613"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M30.8115 45.6881H27.624C27.2058 45.6881 26.8261 45.4426 26.655 45.0611C26.4833 44.6792 26.5519 44.2325 26.8301 43.9197L35.3301 34.3574C35.6231 34.0277 36.0894 33.9134 36.5014 34.0701C36.9139 34.2267 37.1865 34.622 37.1865 35.0634V41.4382H40.374C40.7922 41.4382 41.1719 41.6836 41.343 42.0656C41.5147 42.4471 41.4461 42.8938 41.1679 43.2066L32.6679 52.7688C32.3749 53.0986 31.9086 53.2133 31.4966 53.0562C31.0841 52.8996 30.8115 52.5042 30.8115 52.0633V45.6881ZM35.0615 37.8576L29.9898 43.5631H31.874C32.4611 43.5631 32.9365 44.0388 32.9365 44.6256V49.2686L38.0082 43.5631H36.124C35.5369 43.5631 35.0615 43.0875 35.0615 42.5007V37.8576Z" fill="#FFFFFF"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M30.8888 11.6877C31.1161 10.1078 31.8493 8.63306 32.9904 7.49087C34.3854 6.09581 36.2767 5.31274 38.2498 5.31274H43.5633C44.1498 5.31274 44.6258 5.78874 44.6258 6.37524V9.56274H52.0623C52.6488 9.56274 53.1248 10.0387 53.1248 10.6252C53.1248 11.2117 52.6488 11.6877 52.0623 11.6877H44.6258V18.0627H52.0623C52.6488 18.0627 53.1248 18.5387 53.1248 19.1252C53.1248 19.7117 52.6488 20.1877 52.0623 20.1877H44.6258V23.3752C44.6258 23.9617 44.1498 24.4377 43.5633 24.4377C43.5633 24.4377 40.9846 24.4377 38.2498 24.4377C36.2767 24.4377 34.3854 23.6547 32.9904 22.2596C31.8493 21.1174 31.1161 19.6427 30.8888 18.0627H27.6248C26.2371 18.0627 25.0556 17.1756 24.6189 15.9377H9.56226C8.71651 15.9377 7.90582 16.2735 7.30869 16.8717C6.71051 17.4688 6.37476 18.2795 6.37476 19.1252V45.6877C6.37476 46.5335 6.71051 47.3442 7.30869 47.9413C7.90582 48.5395 8.71651 48.8752 9.56226 48.8752H10.6248V45.828C10.6248 44.8452 10.8978 43.8815 11.4131 43.0442C12.6658 41.0085 15.5123 36.3834 17.4152 33.2894C18.7688 31.0901 21.1669 29.7502 23.7498 29.7502H38.9999C41.5435 29.7502 43.9097 31.0497 45.275 33.1949L50.579 41.5302L59.3106 42.9858C61.8723 43.4119 63.7498 45.6282 63.7498 48.2261V54.1877C63.7498 55.0335 63.414 55.8442 62.8158 56.4413C62.2187 57.0395 61.408 57.3752 60.5623 57.3752H58.3491C57.8423 60.3885 55.2189 62.6877 52.0623 62.6877C48.9056 62.6877 46.2823 60.3885 45.7754 57.3752H28.5991C28.0923 60.3885 25.4689 62.6877 22.3123 62.6877C19.1556 62.6877 16.5323 60.3885 16.0254 57.3752H13.8123C12.9665 57.3752 12.1558 57.0395 11.5587 56.4413C10.9605 55.8442 10.6248 55.0335 10.6248 54.1877V51.0002H9.56226C8.15338 51.0002 6.80188 50.4403 5.80526 49.4447C4.80969 48.4481 4.24976 47.0966 4.24976 45.6877C4.24976 38.9441 4.24976 25.8689 4.24976 19.1252C4.24976 17.7164 4.80969 16.3649 5.80526 15.3682C6.80188 14.3727 8.15338 13.8127 9.56226 13.8127H24.6189C25.0556 12.5749 26.2371 11.6877 27.6248 11.6877H30.8888ZM22.3123 52.0627C24.6583 52.0627 26.5623 53.9667 26.5623 56.3127C26.5623 58.6587 24.6583 60.5627 22.3123 60.5627C19.9663 60.5627 18.0623 58.6587 18.0623 56.3127C18.0623 53.9667 19.9663 52.0627 22.3123 52.0627ZM52.0623 52.0627C54.4083 52.0627 56.3123 53.9667 56.3123 56.3127C56.3123 58.6587 54.4083 60.5627 52.0623 60.5627C49.7163 60.5627 47.8123 58.6587 47.8123 56.3127C47.8123 53.9667 49.7163 52.0627 52.0623 52.0627ZM23.7944 31.8752H23.7498C21.9043 31.8752 20.1915 32.8326 19.2246 34.404C17.3217 37.4969 14.4753 42.122 13.2226 44.1577C12.9134 44.6603 12.7498 45.2383 12.7498 45.828V54.1877C12.7498 54.4693 12.8613 54.7402 13.0611 54.9389C13.2598 55.1387 13.5307 55.2502 13.8123 55.2502H16.0254C16.5323 52.237 19.1556 49.9377 22.3123 49.9377C25.4689 49.9377 28.0923 52.237 28.5991 55.2502H45.7754C46.2823 52.237 48.9056 49.9377 52.0623 49.9377C55.2189 49.9377 57.8423 52.237 58.3491 55.2502H60.5623C60.8438 55.2502 61.1148 55.1387 61.3134 54.9389C61.5132 54.7402 61.6248 54.4693 61.6248 54.1877V48.2261C61.6248 46.6674 60.4985 45.3371 58.9611 45.0811L49.8491 43.5627C49.8491 43.5627 46.4183 43.5627 44.6258 43.5627C44.0393 43.5627 43.5633 43.0867 43.5633 42.5002C43.5633 41.9137 44.0393 41.4377 44.6258 41.4377H48.0014L43.4826 34.336C42.5072 32.8028 40.8168 31.8752 38.9999 31.8752C36.0748 31.8752 31.9247 31.8752 28.9996 31.8752C27.1828 31.8752 25.4923 32.8028 24.5169 34.336L19.9981 41.4377H23.3748C23.6563 41.4377 23.9273 41.5493 24.1259 41.7491C24.3257 41.9477 24.4373 42.2187 24.4373 42.5002C24.4373 42.7818 24.3257 43.0527 24.1259 43.2514C23.9273 43.4512 23.6563 43.5627 23.3748 43.5627C21.5611 43.5627 18.0623 43.5627 18.0623 43.5627C17.6744 43.5627 17.3174 43.3513 17.1304 43.0113C16.9445 42.6713 16.9573 42.2569 17.1655 41.9297C17.1655 41.9297 20.5209 36.6576 22.7245 33.1949C23.0326 32.7104 23.3928 32.2684 23.7944 31.8752ZM42.5008 22.3127V7.43774H38.2498C36.8409 7.43774 35.4894 7.99768 34.4928 8.99324C33.4972 9.98987 32.9373 11.3414 32.9373 12.7502V17.0002C32.9373 18.4091 33.4972 19.7606 34.4928 20.7572C35.4894 21.7528 36.8409 22.3127 38.2498 22.3127H42.5008ZM30.8123 13.8127H27.6248C27.0383 13.8127 26.5623 14.2887 26.5623 14.8752C26.5623 15.4617 27.0383 15.9377 27.6248 15.9377H30.8123V13.8127Z" fill="#091613"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M30.8888 11.6877C31.1161 10.1078 31.8493 8.63306 32.9904 7.49087C34.3854 6.09581 36.2767 5.31274 38.2498 5.31274H43.5633C44.1498 5.31274 44.6258 5.78874 44.6258 6.37524V9.56274H52.0623C52.6488 9.56274 53.1248 10.0387 53.1248 10.6252C53.1248 11.2117 52.6488 11.6877 52.0623 11.6877H44.6258V18.0627H52.0623C52.6488 18.0627 53.1248 18.5387 53.1248 19.1252C53.1248 19.7117 52.6488 20.1877 52.0623 20.1877H44.6258V23.3752C44.6258 23.9617 44.1498 24.4377 43.5633 24.4377C43.5633 24.4377 40.9846 24.4377 38.2498 24.4377C36.2767 24.4377 34.3854 23.6547 32.9904 22.2596C31.8493 21.1174 31.1161 19.6427 30.8888 18.0627H27.6248C26.2371 18.0627 25.0556 17.1756 24.6189 15.9377H9.56226C8.71651 15.9377 7.90582 16.2735 7.30869 16.8717C6.71051 17.4688 6.37476 18.2795 6.37476 19.1252V45.6877C6.37476 46.5335 6.71051 47.3442 7.30869 47.9413C7.90582 48.5395 8.71651 48.8752 9.56226 48.8752H10.6248V45.828C10.6248 44.8452 10.8978 43.8815 11.4131 43.0442C12.6658 41.0085 15.5123 36.3834 17.4152 33.2894C18.7688 31.0901 21.1669 29.7502 23.7498 29.7502H38.9999C41.5435 29.7502 43.9097 31.0497 45.275 33.1949L50.579 41.5302L59.3106 42.9858C61.8723 43.4119 63.7498 45.6282 63.7498 48.2261V54.1877C63.7498 55.0335 63.414 55.8442 62.8158 56.4413C62.2187 57.0395 61.408 57.3752 60.5623 57.3752H58.3491C57.8423 60.3885 55.2189 62.6877 52.0623 62.6877C48.9056 62.6877 46.2823 60.3885 45.7754 57.3752H28.5991C28.0923 60.3885 25.4689 62.6877 22.3123 62.6877C19.1556 62.6877 16.5323 60.3885 16.0254 57.3752H13.8123C12.9665 57.3752 12.1558 57.0395 11.5587 56.4413C10.9605 55.8442 10.6248 55.0335 10.6248 54.1877V51.0002H9.56226C8.15338 51.0002 6.80188 50.4403 5.80526 49.4447C4.80969 48.4481 4.24976 47.0966 4.24976 45.6877C4.24976 38.9441 4.24976 25.8689 4.24976 19.1252C4.24976 17.7164 4.80969 16.3649 5.80526 15.3682C6.80188 14.3727 8.15338 13.8127 9.56226 13.8127H24.6189C25.0556 12.5749 26.2371 11.6877 27.6248 11.6877H30.8888ZM22.3123 52.0627C24.6583 52.0627 26.5623 53.9667 26.5623 56.3127C26.5623 58.6587 24.6583 60.5627 22.3123 60.5627C19.9663 60.5627 18.0623 58.6587 18.0623 56.3127C18.0623 53.9667 19.9663 52.0627 22.3123 52.0627ZM52.0623 52.0627C54.4083 52.0627 56.3123 53.9667 56.3123 56.3127C56.3123 58.6587 54.4083 60.5627 52.0623 60.5627C49.7163 60.5627 47.8123 58.6587 47.8123 56.3127C47.8123 53.9667 49.7163 52.0627 52.0623 52.0627ZM23.7944 31.8752H23.7498C21.9043 31.8752 20.1915 32.8326 19.2246 34.404C17.3217 37.4969 14.4753 42.122 13.2226 44.1577C12.9134 44.6603 12.7498 45.2383 12.7498 45.828V54.1877C12.7498 54.4693 12.8613 54.7402 13.0611 54.9389C13.2598 55.1387 13.5307 55.2502 13.8123 55.2502H16.0254C16.5323 52.237 19.1556 49.9377 22.3123 49.9377C25.4689 49.9377 28.0923 52.237 28.5991 55.2502H45.7754C46.2823 52.237 48.9056 49.9377 52.0623 49.9377C55.2189 49.9377 57.8423 52.237 58.3491 55.2502H60.5623C60.8438 55.2502 61.1148 55.1387 61.3134 54.9389C61.5132 54.7402 61.6248 54.4693 61.6248 54.1877V48.2261C61.6248 46.6674 60.4985 45.3371 58.9611 45.0811L49.8491 43.5627C49.8491 43.5627 46.4183 43.5627 44.6258 43.5627C44.0393 43.5627 43.5633 43.0867 43.5633 42.5002C43.5633 41.9137 44.0393 41.4377 44.6258 41.4377H48.0014L43.4826 34.336C42.5072 32.8028 40.8168 31.8752 38.9999 31.8752C36.0748 31.8752 31.9247 31.8752 28.9996 31.8752C27.1828 31.8752 25.4923 32.8028 24.5169 34.336L19.9981 41.4377H23.3748C23.6563 41.4377 23.9273 41.5493 24.1259 41.7491C24.3257 41.9477 24.4373 42.2187 24.4373 42.5002C24.4373 42.7818 24.3257 43.0527 24.1259 43.2514C23.9273 43.4512 23.6563 43.5627 23.3748 43.5627C21.5611 43.5627 18.0623 43.5627 18.0623 43.5627C17.6744 43.5627 17.3174 43.3513 17.1304 43.0113C16.9445 42.6713 16.9573 42.2569 17.1655 41.9297C17.1655 41.9297 20.5209 36.6576 22.7245 33.1949C23.0326 32.7104 23.3928 32.2684 23.7944 31.8752ZM42.5008 22.3127V7.43774H38.2498C36.8409 7.43774 35.4894 7.99768 34.4928 8.99324C33.4972 9.98987 32.9373 11.3414 32.9373 12.7502V17.0002C32.9373 18.4091 33.4972 19.7606 34.4928 20.7572C35.4894 21.7528 36.8409 22.3127 38.2498 22.3127H42.5008ZM30.8123 13.8127H27.6248C27.0383 13.8127 26.5623 14.2887 26.5623 14.8752C26.5623 15.4617 27.0383 15.9377 27.6248 15.9377H30.8123V13.8127Z" fill="#FFFFFF"/>
                                    </svg>
                                </div>
                                <div className="content">
                                    <h3><a href="/services/digital-twinning">Digital Twinning</a></h3>
                                    <p>Frugal digital twins using low-cost IoT sensors and AI-driven analytics for urban monitoring and smart city development.</p>
                                </div>
                            </div>
                            <a href="/services/digital-twinning" className="link-btns">View Details</a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="service-box-items-style-2">
                            <div className="top-box-items">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M47.812 21.2498H44.6245C44.2063 21.2498 43.8266 21.0044 43.6555 20.6229C43.4838 20.2409 43.5523 19.7942 43.8306 19.4814L52.3306 9.9192C52.6235 9.58944 53.0899 9.4752 53.5019 9.63183C53.9144 9.78845 54.187 10.1838 54.187 10.6251V17H57.3745C57.7927 17 58.1723 17.2454 58.3435 17.6274C58.5152 18.0089 58.4466 18.4556 58.1684 18.7684L49.6684 28.3306C49.3754 28.6604 48.909 28.775 48.4971 28.618C48.0845 28.4613 47.812 28.066 47.812 27.6251V21.2498ZM52.062 13.4194L46.9903 19.1249H48.8745C49.4615 19.1249 49.937 19.6006 49.937 20.1874V24.8304L55.0086 19.1249H53.1245C52.5374 19.1249 52.062 18.6492 52.062 18.0624V13.4194Z" fill="#FFFFFF"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M29.7498 62.6875V48.875C29.7498 47.9304 30.1599 47.0826 30.8123 46.4992V40.2199L10.9042 45.6503C10.4388 45.7767 9.94582 45.5738 9.70463 45.1562C9.46344 44.7387 9.53357 44.2106 9.87676 43.8706L24.7039 29.1762C24.9345 28.9478 25.2564 28.8373 25.5784 28.8756L29.3375 29.3282C29.5649 28.9128 29.8475 28.5302 30.1737 28.1903L27.8373 25.075C27.6428 24.8158 27.5769 24.4811 27.6598 24.1676L32.9723 3.98013C33.0956 3.51263 33.5174 3.1875 33.9998 3.1875C34.4821 3.1875 34.9039 3.51263 35.0272 3.98013L40.3397 24.1676C40.4226 24.4811 40.3567 24.8158 40.1623 25.075L37.8258 28.1903C38.152 28.5302 38.4346 28.9128 38.662 29.3282L42.4211 28.8756C42.7431 28.8373 43.065 28.9478 43.2956 29.1762L58.1228 43.8706C58.4659 44.2106 58.5361 44.7387 58.2949 45.1562C58.0537 45.5738 57.5607 45.7767 57.0953 45.6503L37.1873 40.2199V46.4992C37.8396 47.0826 38.2498 47.9304 38.2498 48.875V62.6875H61.6248C62.2113 62.6875 62.6873 63.1635 62.6873 63.75C62.6873 64.3365 62.2113 64.8125 61.6248 64.8125H6.37476C5.78826 64.8125 5.31226 64.3365 5.31226 63.75C5.31226 63.1635 5.78826 62.6875 6.37476 62.6875H29.7498ZM36.1248 62.6875V48.875C36.1248 48.2885 35.6488 47.8125 35.0623 47.8125C34.378 47.8125 33.6215 47.8125 32.9373 47.8125C32.3508 47.8125 31.8748 48.2885 31.8748 48.875V62.6875H36.1248ZM35.0623 37.0813C34.7191 37.1503 34.3631 37.1875 33.9998 37.1875C33.6364 37.1875 33.2804 37.1503 32.9373 37.0813V45.6875H35.0623V37.0813ZM39.291 31.3926C39.3048 31.552 39.3123 31.7124 39.3123 31.875C39.3123 33.6388 38.4506 35.2028 37.1256 36.1696L38.0107 38.2426L53.7591 42.5372L42.1651 31.0473L39.291 31.3926ZM28.7085 31.3926L25.8344 31.0473L14.2404 42.5372L29.9888 38.2426L30.8739 36.1696C29.5489 35.2028 28.6873 33.6388 28.6873 31.875C28.6873 31.7124 28.6947 31.552 28.7085 31.3926ZM33.9998 28.6875C35.7593 28.6875 37.1873 30.1155 37.1873 31.875C37.1873 33.6345 35.7593 35.0625 33.9998 35.0625C32.2403 35.0625 30.8123 33.6345 30.8123 31.875C30.8123 30.1155 32.2403 28.6875 33.9998 28.6875ZM36.0748 26.9832L38.1541 24.2112L33.9998 8.42456L29.8454 24.2112L31.9247 26.9832C32.5622 26.7123 33.2634 26.5625 33.9998 26.5625C34.7361 26.5625 35.4373 26.7123 36.0748 26.9832Z" fill="#FFFFFF"/>
                                    </svg>
                                </div>
                                <div className="content">
                                    <h3><a href="/services/sustainable-architecture">Sustainable Architecture</a></h3>
                                    <p>Exploring bamboo, natural materials, and computational design for eco-friendly, scalable building solutions in developing regions.</p>
                                </div>
                            </div>
                            <a href="/services/sustainable-architecture" className="link-btns">View Details</a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="service-box-items-style-2">
                            <div className="top-box-items">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M30.4469 45.6886H24.4374C24.0077 45.6886 23.6201 45.4298 23.4557 45.0324C23.2912 44.6355 23.3821 44.1786 23.686 43.8745L38.561 28.9996C38.9053 28.6552 39.4395 28.5891 39.8573 28.8384C40.275 29.0883 40.4701 29.5899 40.3303 30.0563L37.5529 39.3135H43.5624C43.9921 39.3135 44.3797 39.5723 44.5442 39.9691C44.7086 40.3666 44.6177 40.8235 44.3138 41.127L29.4388 56.0025C29.0946 56.3464 28.5603 56.4124 28.1426 56.1631C27.7248 55.9132 27.5297 55.4117 27.6695 54.9458L30.4469 45.6886ZM37.0837 33.4822L27.0027 43.5634H31.8749C32.2107 43.5634 32.5269 43.7222 32.7275 43.9918C32.9276 44.2613 32.9893 44.6093 32.8928 44.9312L30.9161 51.5193L40.9971 41.4381H36.1249C35.7892 41.4381 35.473 41.2799 35.2724 41.0103C35.0722 40.7408 35.0106 40.3922 35.107 40.0703L37.0837 33.4822Z" fill="#FFFFFF"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M13.8125 54.1877C13.5307 54.1877 13.2605 54.0758 13.0612 53.8765C12.8619 53.6773 12.75 53.407 12.75 53.1252C12.75 52.8435 12.8619 52.5732 13.0612 52.3739C13.2605 52.1747 13.5307 52.0627 13.8125 52.0627C14.0943 52.0627 14.3645 52.1747 14.5638 52.3739C14.7631 52.5732 14.875 52.8435 14.875 53.1252C14.875 53.407 14.7631 53.6773 14.5638 53.8765C14.3645 54.0758 14.0943 54.1877 13.8125 54.1877Z" fill="#FFFFFF"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M54.1875 54.1877C53.9057 54.1877 53.6355 54.0758 53.4362 53.8765C53.2369 53.6773 53.125 53.407 53.125 53.1252C53.125 52.8435 53.2369 52.5732 53.4362 52.3739C53.6355 52.1747 53.9057 52.0627 54.1875 52.0627C54.4693 52.0627 54.7395 52.1747 54.9388 52.3739C55.1381 52.5732 55.25 52.8435 55.25 53.1252C55.25 53.407 55.1381 53.6773 54.9388 53.8765C54.7395 54.0758 54.4693 54.1877 54.1875 54.1877Z" fill="#FFFFFF"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M12.751 44.625V48.875C12.751 49.4613 13.227 49.9375 13.8135 49.9375C14.4 49.9375 14.876 49.4613 14.876 48.875V44.625C14.876 44.0385 14.4 43.5625 13.8135 43.5625C13.227 43.5625 12.751 44.0385 12.751 44.625Z" fill="#FFFFFF"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M53.126 44.625V48.875C53.126 49.4613 53.602 49.9375 54.1885 49.9375C54.775 49.9375 55.251 49.4613 55.251 48.875V44.625C55.251 44.0385 54.775 43.5625 54.1885 43.5625C53.602 43.5625 53.126 44.0385 53.126 44.625Z" fill="#FFFFFF"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M17 35.0618H10.625C10.1957 35.0618 9.80789 34.8025 9.64321 34.4062C9.47852 34.0088 9.56989 33.552 9.87377 33.2481L31.1238 11.9981C31.3225 11.7983 31.5934 11.6868 31.875 11.6868H36.125C36.4065 11.6868 36.6775 11.7983 36.8761 11.9981L44.625 19.7469V13.8128H43.5625C42.976 13.8128 42.5 13.3368 42.5 12.7503C42.5 12.1638 42.976 11.6878 43.5625 11.6878H52.0625C52.649 11.6878 53.125 12.1638 53.125 12.7503C53.125 13.3368 52.649 13.8128 52.0625 13.8128H51V26.1219L58.1261 33.2481C58.43 33.552 58.5214 34.0088 58.3567 34.4062C58.192 34.8025 57.8042 35.0618 57.375 35.0618H51V51.0003C51 51.8461 50.6642 52.6568 50.066 53.2539C49.4689 53.8521 48.6582 54.1878 47.8125 54.1878H36.125C35.5385 54.1878 35.0625 53.7118 35.0625 53.1253C35.0625 52.5388 35.5385 52.0628 36.125 52.0628H47.8125C48.094 52.0628 48.365 51.9513 48.5636 51.7515C48.7634 51.5528 48.875 51.2819 48.875 51.0003V33.3766L34 18.5016L19.125 33.3766V51.0003C19.125 51.2819 19.2365 51.5528 19.4363 51.7515C19.635 51.9513 19.9059 52.0628 20.1875 52.0628H24.4375C25.024 52.0628 25.5 52.5388 25.5 53.1253C25.5 53.7118 25.024 54.1878 24.4375 54.1878C22.747 54.1878 21.284 54.1878 20.1875 54.1878C19.3417 54.1878 18.531 53.8521 17.9339 53.2539C17.3357 52.6568 17 51.8461 17 51.0003V35.0618ZM51.4398 32.9368H54.8101L35.6851 13.8118H32.3148L13.1898 32.9368H16.5601L33.2488 16.2481C33.6631 15.8326 34.3368 15.8326 34.7511 16.2481L51.4398 32.9368ZM46.75 21.8719L48.875 23.9969V13.8128H46.75V21.8719Z" fill="#FFFFFF"/>
                                    </svg>
                                </div>
                                <div className="content">
                                    <h3><a href="/services/urban-mobility">Urban Mobility</a></h3>
                                    <p>Researching sustainable transport solutions and mobility patterns to improve urban movement in African cities.</p>
                                </div>
                            </div>
                            <a href="/services/urban-mobility" className="link-btns">View Details</a>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="service-box-items-style-2">
                            <div className="top-box-items">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M47.812 21.2498H44.6245C44.2063 21.2498 43.8266 21.0044 43.6555 20.6229C43.4838 20.2409 43.5523 19.7942 43.8306 19.4814L52.3306 9.9192C52.6235 9.58944 53.0899 9.4752 53.5019 9.63183C53.9144 9.78845 54.187 10.1838 54.187 10.6251V17H57.3745C57.7927 17 58.1723 17.2454 58.3435 17.6274C58.5152 18.0089 58.4466 18.4556 58.1684 18.7684L49.6684 28.3306C49.3754 28.6604 48.909 28.775 48.4971 28.618C48.0845 28.4613 47.812 28.066 47.812 27.6251V21.2498ZM52.062 13.4194L46.9903 19.1249H48.8745C49.4615 19.1249 49.937 19.6006 49.937 20.1874V24.8304L55.0086 19.1249H53.1245C52.5374 19.1249 52.062 18.6492 52.062 18.0624V13.4194Z" fill="#FFFFFF"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M29.7498 62.6875V48.875C29.7498 47.9304 30.1599 47.0826 30.8123 46.4992V40.2199L10.9042 45.6503C10.4388 45.7767 9.94582 45.5738 9.70463 45.1562C9.46344 44.7387 9.53357 44.2106 9.87676 43.8706L24.7039 29.1762C24.9345 28.9478 25.2564 28.8373 25.5784 28.8756L29.3375 29.3282C29.5649 28.9128 29.8475 28.5302 30.1737 28.1903L27.8373 25.075C27.6428 24.8158 27.5769 24.4811 27.6598 24.1676L32.9723 3.98013C33.0956 3.51263 33.5174 3.1875 33.9998 3.1875C34.4821 3.1875 34.9039 3.51263 35.0272 3.98013L40.3397 24.1676C40.4226 24.4811 40.3567 24.8158 40.1623 25.075L37.8258 28.1903C38.152 28.5302 38.4346 28.9128 38.662 29.3282L42.4211 28.8756C42.7431 28.8373 43.065 28.9478 43.2956 29.1762L58.1228 43.8706C58.4659 44.2106 58.5361 44.7387 58.2949 45.1562C58.0537 45.5738 57.5607 45.7767 57.0953 45.6503L37.1873 40.2199V46.4992C37.8396 47.0826 38.2498 47.9304 38.2498 48.875V62.6875H61.6248C62.2113 62.6875 62.6873 63.1635 62.6873 63.75C62.6873 64.3365 62.2113 64.8125 61.6248 64.8125H6.37476C5.78826 64.8125 5.31226 64.3365 5.31226 63.75C5.31226 63.1635 5.78826 62.6875 6.37476 62.6875H29.7498ZM36.1248 62.6875V48.875C36.1248 48.2885 35.6488 47.8125 35.0623 47.8125C34.378 47.8125 33.6215 47.8125 32.9373 47.8125C32.3508 47.8125 31.8748 48.2885 31.8748 48.875V62.6875H36.1248ZM35.0623 37.0813C34.7191 37.1503 34.3631 37.1875 33.9998 37.1875C33.6364 37.1875 33.2804 37.1503 32.9373 37.0813V45.6875H35.0623V37.0813ZM39.291 31.3926C39.3048 31.552 39.3123 31.7124 39.3123 31.875C39.3123 33.6388 38.4506 35.2028 37.1256 36.1696L38.0107 38.2426L53.7591 42.5372L42.1651 31.0473L39.291 31.3926ZM28.7085 31.3926L25.8344 31.0473L14.2404 42.5372L29.9888 38.2426L30.8739 36.1696C29.5489 35.2028 28.6873 33.6388 28.6873 31.875C28.6873 31.7124 28.6947 31.552 28.7085 31.3926ZM33.9998 28.6875C35.7593 28.6875 37.1873 30.1155 37.1873 31.875C37.1873 33.6345 35.7593 35.0625 33.9998 35.0625C32.2403 35.0625 30.8123 33.6345 30.8123 31.875C30.8123 30.1155 32.2403 28.6875 33.9998 28.6875ZM36.0748 26.9832L38.1541 24.2112L33.9998 8.42456L29.8454 24.2112L31.9247 26.9832C32.5622 26.7123 33.2634 26.5625 33.9998 26.5625C34.7361 26.5625 35.4373 26.7123 36.0748 26.9832Z" fill="#FFFFFF"/>
                                    </svg>
                                </div>
                                <div className="content">
                                    <h3><a href="/services/frugal-innovation">Frugal Innovation</a></h3>
                                    <p>Developing affordable, scalable technologies that deliver maximum impact with minimal resources for communities across Africa.</p>
                                </div>
                            </div>
                            <a href="/services/frugal-innovation" className="link-btns">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* About Feature Section Start */}
        <section className="about-feature-section-2 section-padding fix section-bg-2">
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="sub-title wow fadeInUp"><img src="/assets/img/sub-title-1.svg" alt="img" />WHY SCiM LAB</h6>
                    <h2 className="text-anim">Driving innovation through <br /> research and collaboration</h2>
                </div>
                <div className="about-feature-wrapper-2">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="about-feature-image-items-style-2">
                                <img src="/assets/img/home-2/about-feature/about-feature-01.png" alt="SCiM LAB research" style={{objectFit: 'cover'}} />
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
                                    <div className="icon">
                                        <img src="/assets/img/home-2/about-feature/icon-01.svg" alt="img" />
                                    </div>
                                    <div className="content">
                                        <h4>Expert Research Team</h4>
                                        <p>Our multidisciplinary team of architects, engineers, and technologists brings decades of combined expertise to every project.</p>
                                    </div>
                                </div>
                                <div className="about-feature-icon-box">
                                    <div className="icon">
                                        <img src="/assets/img/home-2/about-feature/icon-02.svg" alt="img" />
                                    </div>
                                    <div className="content">
                                        <h4>Industry 4.0 Technologies</h4>
                                        <p>Integrating IoT, AI, robotics, and digital fabrication to create practical solutions for real-world challenges in developing regions.</p>
                                    </div>
                                </div>
                                <div className="about-feature-icon-box">
                                    <div className="icon">
                                        <img src="/assets/img/home-2/about-feature/icon-03.svg" alt="img" />
                                    </div>
                                    <div className="content">
                                        <h4>Frugal Innovation</h4>
                                        <p>Developing affordable, scalable technologies that deliver maximum impact with minimal resources for communities across Africa.</p>
                                    </div>
                                </div>
                                <a href="/services" className="theme-btn">
                                Explore Research Areas
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="custom-support-list wow fadeInUp" data-wow-delay=".7s">
                    <li>
                        <img src="/assets/img/home-1/about/check-icon.svg" alt="img" />
                        UNESCO Recognition
                    </li>
                    <li>
                        <img src="/assets/img/home-1/about/check-icon.svg" alt="img" />
                        Global Partnerships
                    </li>
                    <li>
                        <img src="/assets/img/home-1/about/check-icon.svg" alt="img" />
                        Expert Researchers
                    </li>
                    <li>
                        <img src="/assets/img/home-1/about/check-icon.svg" alt="img" />
                        Sustainable Impact
                    </li>
                </ul>
            </div>
        </section>

        {/* CTA Banner Section Start */}
        <section className="cta-banner-section-2 fix bg-cover" style={{backgroundImage: 'url(/assets/media/1.jpg)'}}>
            <div className="container">
                <div className="cta-banner-content-2">
                    <div className="circle-box">
                        <div className="text-image">
                            <img src="/assets/img/home-1/choose/text.png" alt="img" />
                        </div>
                        <a href="/about" className="arrow-icon"><i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <h2 className="text-anim">innovating for smart cities</h2>
                </div>
            </div>
        </section>

        {/* Contact Section Start */}
        <section className="counter-section-2">
            <div className="container">
                <div className="counter-wrapper-2">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-7 wow fadeInUp" data-wow-delay=".2s">
                        <form action="#" id="contact-form" className="contact-form-box-2">
                            <h3 className="text-anim">Get In Touch</h3>
                            <div className="row g-4 align-items-center justify-content-center">
                                <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="form-clt">
                                        <input type="text" name="name" id="name" placeholder="Your Name" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="form-clt">
                                        <input type="text" name="email" id="email2" placeholder="Email Address" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                    <div className="form-clt">
                                        <input type="text" name="phone" id="phone" placeholder="Phone number" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                    <div className="form-clt">
                                        <input type="text" name="subject" id="subject" placeholder="Organization name" />
                                    </div>
                                </div>
                                <div className="col-lg-12 wow fadeInUp" data-wow-delay=".8s">
                                    <div className="form-clt">
                                        <textarea name="message" id="message" placeholder="Your message"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12 wow fadeInUp" data-wow-delay=".9s">
                                    <div className="contact-button">
                                        <button type="submit" className="theme-btn">
                                        Send Message
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        </div>
                        <div className="col-lg-4 col-md-5 wow fadeInUp" data-wow-delay=".4s">
                            <div className="counter-image-style-2 fix">
                                <img data-speed=".8" src="/assets/media/1.jpg" alt="SCiM LAB" />
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="contact-information-list">
                    <li className="wow fadeInUp" data-wow-delay=".6s">
                        <div className="icon">
                            <img src="/assets/img/home-2/cta-banner/list-icon-01.svg" alt="img" />
                        </div>
                        <div className="content">
                            <h5>Contact us:</h5>
                            <p><a href="tel:+233322060230">Call: +233 (0) 32 206 0230</a></p>
                            <p><a href="mailto:scimlab@knust.edu.gh">Email: scimlab@knust.edu.gh</a></p>
                        </div>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay=".8s">
                        <div className="icon">
                            <img src="/assets/img/home-2/cta-banner/list-icon-02.svg" alt="img" />
                        </div>
                        <div className="content">
                            <h5>Our Location:</h5>
                            <p>Technology Consultancy Centre (TCC-CIMET), <span className="d-block">KNUST, Kumasi, Ghana</span></p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        {/* Marquee Section Start */}
        <div className="marquee-section-2 fix marquee-style section-padding pb-0">
            <div className="mycustom-marque">
              <div className="scrolling-wrap color-2">
               <div className="comm">
                   <div></div>
                   <div className="cmn-textslide"> Smart Cities</div>
                   <div className="cmn-textslide"> Manufacturing</div>
                   <div className="cmn-textslide"> Innovation</div>
               </div>
               <div className="comm">
                   <div></div>
                   <div className="cmn-textslide"> Smart Cities</div>
                   <div className="cmn-textslide"> Manufacturing</div>
                   <div className="cmn-textslide"> Innovation</div>
               </div>
               <div className="comm">
                   <div></div>
                   <div className="cmn-textslide"> Smart Cities</div>
                   <div className="cmn-textslide"> Manufacturing</div>
                   <div className="cmn-textslide"> Innovation</div>
               </div>
           </div>
            </div>
        </div>

        {/* Project Section Start */}
        <section className="project-section-2 fix section-padding pb-0">
            <div className="row g-4">
                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="project-box-items-style-2">
                        <div className="thumb">
                            <img src="/assets/media/1.jpg" alt="Shells of Elegance" />
                        </div>
                        <div className="content">
                            <ul>
                                <li>
                                    <span>Architecture</span>
                                </li>
                                <li>
                                    <span>Design</span>
                                </li>
                            </ul>
                            <h3><a href="/project-details">Shells of Elegance</a></h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="project-box-items-style-2">
                        <div className="thumb">
                            <img src="/assets/media/1.jpg" alt="BambooBend" />
                        </div>
                        <div className="content">
                            <ul>
                                <li>
                                    <span>Sustainability</span>
                                </li>
                                <li>
                                    <span>Fabrication</span>
                                </li>
                            </ul>
                            <h3><a href="/project-details">RENABUMA — BambooBend</a></h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                    <div className="project-box-items-style-2">
                        <div className="thumb">
                            <img src="/assets/media/1.jpg" alt="Digital Twinning" />
                        </div>
                        <div className="content">
                            <ul>
                                <li>
                                    <span>Technology</span>
                                </li>
                                <li>
                                    <span>Urban</span>
                                </li>
                            </ul>
                            <h3><a href="/project-details">Frugal Digital Twinning</a></h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                    <div className="project-box-items-style-2">
                        <div className="thumb">
                            <img src="/assets/media/1.jpg" alt="POINT" />
                        </div>
                        <div className="content">
                            <ul>
                                <li>
                                    <span>Transport</span>
                                </li>
                                <li>
                                    <span>Research</span>
                                </li>
                            </ul>
                            <h3><a href="/project-details">POINT — Urban Mobility</a></h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Feature Section Start */}
        <section className="feature-section-2 counter-feature2 section-padding fix pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="feature-box-items-2">
                            <h2>01</h2>
                            <div className="content">
                                <h4>Research</h4>
                                <p>Pioneering engineering research at the intersection of technology, sustainability, and urban design.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="feature-box-items-2">
                            <h2>02</h2>
                            <div className="content">
                                <h4>Manufacturing</h4>
                                <p>Advanced manufacturing through additive techniques, robotics, and Industry 4.0 integration.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="feature-box-items-2">
                            <h2>03</h2>
                            <div className="content">
                                <h4>Innovation</h4>
                                <p>Frugal innovation that delivers maximum impact with minimal resources for communities across Africa.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="feature-box-items-2">
                            <h2>04</h2>
                            <div className="content">
                                <h4>Training</h4>
                                <p>Building capacity through STEAM education, entrepreneurship training, and professional development.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Testimonial Section Start */}
        <section className="testimonial-section-2 section-padding fix">
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="sub-title wow fadeInUp"><img src="/assets/img/sub-title-1.svg" alt="img" />TESTIMONIALS</h6>
                    <h2 className="text-anim">What our partners and <br />
                    collaborators have to say</h2>
                </div>
                <div className="swiper testimonial-slider-2">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="testimonial-box-items-style-2">
                                <div className="client-info">
                                    <div className="client-img">
                                        <img src="/assets/Team/barnor.jpg" alt="img" style={{width: '58px', height: '58px', borderRadius: '5px'}}/>
                                    </div>
                                    <div className="client-content">
                                        <h5>Prof. Francis Davis</h5>
                                        <p>Director-General, TCC-CIMET</p>
                                    </div>
                                </div>
                                <div className="testimonial-content">
                                    <div className="star">
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                    </div>
                                    <p className="testi-text">"SCiM LAB represents the future of engineering education and innovation in Africa. The integration of smart technologies with sustainable practices is exactly what our continent needs."</p>
                                    <h5>"PIONEERING RESEARCH"</h5>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial-box-items-style-2">
                                <div className="client-info">
                                    <div className="client-img">
                                        <img src="/assets/Team/barnor.jpg" alt="img" style={{width: '58px', height: '58px', borderRadius: '5px'}}/>
                                    </div>
                                    <div className="client-content">
                                        <h5>Prof. Daniel Y. A. Duah</h5>
                                        <p>Principal Investigator</p>
                                    </div>
                                </div>
                                <div className="testimonial-content">
                                    <div className="star">
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                    </div>
                                    <p className="testi-text">"The collaborative environment at SCiM LAB enables us to bridge the gap between academic research and real-world application, creating tangible impact for communities."</p>
                                    <h5>"IMPACTFUL COLLABORATION"</h5>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial-box-items-style-2">
                                <div className="client-info">
                                    <div className="client-img">
                                        <img src="/assets/Team/barnor.jpg" alt="img"  style={{width: '58px', height: '58px', borderRadius: '5px'}}/>
                                    </div>
                                    <div className="client-content">
                                        <h5>Dr. Oliver Kornyo</h5>
                                        <p>Principal Investigator</p>
                                    </div>
                                </div>
                                <div className="testimonial-content">
                                    <div className="star">
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                    </div>
                                    <p className="testi-text">"Our work in IoT, AI, and digital twinning demonstrates that cutting-edge technology can be made accessible and practical for developing nations through frugal innovation."</p>
                                    <h5>"TECHNOLOGY FOR ALL"</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="brand-section section-padding fix pb-0 bg-white">
            <div className="container">
                <div className="top-text">
                    <p className="wow fadeInUp">Partnering with institutions and organizations worldwide</p>
                </div>
                <div className="swiper brand-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="brand-image text-center">
                                    <img src="/assets/img/home-1/brand/brand-01.png" alt="partner" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand-image text-center">
                                    <img src="/assets/img/home-1/brand/brand-02.png" alt="partner" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand-image text-center">
                                    <img src="/assets/img/home-1/brand/brand-03.png" alt="partner" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand-image text-center">
                                    <img src="/assets/img/home-1/brand/brand-04.png" alt="partner" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand-image text-center">
                                    <img src="/assets/img/home-1/brand/brand-05.png" alt="partner" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="brand-image text-center">
                                    <img src="/assets/img/home-1/brand/brand-06.png" alt="partner" />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </section>

        {/* CTA Section Start */}
        <section className="cta-section-2 bg-cover bg-white" style={{backgroundImage: 'url(/assets/media/1.jpg)'}}>
            <div className="container">
                <div className="cta-wrapper-2">
                    <h3 className="text-anim">Empowering Communities Through Smart Innovation and Research</h3>
                    <div className="cta-icon-items wow fadeInUp" data-wow-delay=".2s">
                        <div className="icon">
                            <img src="/assets/img/home-2/cta-icon.svg" alt="img" />
                        </div>
                        <div className="content">
                            <h4>UNESCO Recognized</h4>
                            <p>Category II Centre</p>
                        </div>
                    </div>
                    <a href="/contact" className="theme-btn wow fadeInUp" data-wow-delay=".4s">
                        Partner With Us
                        <i className="fa-solid fa-arrow-up-right"></i>
                    </a>
                </div>
            </div>
        </section>

        {/* News Section Start */}
        <section className="news-section section-padding fix">
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="sub-title wow fadeInUp"><img src="/assets/img/sub-title-1.svg" alt="img" />LATEST NEWS</h6>
                    <h2 className="text-anim">News &amp; Updates</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="news-box-items-style-1 style-2">
                            <div className="news-thumb">
                                <img src="/assets/media/1.jpg" alt="Shells of Elegance project" />
                            </div>
                            <div className="news-content">
                                <span>PROJECT</span>
                                <h4><a href="/news/shells-of-elegance-organic-cube">Shells of Elegance 2.0: Building the Human-Scale Organic Cube</a></h4>
                                <div className="user-box-items">
                                    <div className="user-item">
                                        <i className="fa-solid fa-circle-user"></i>
                                        SCiM LAB
                                    </div>
                                    <div className="date-item"><i className="fa-regular fa-calendar"></i>15 Jan, 2026</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="news-box-items-style-1 style-2">
                            <div className="news-thumb">
                                <img src="/assets/media/2.jpg" alt="BambooBend collaboration" />
                            </div>
                            <div className="news-content">
                                <span>COLLABORATION</span>
                                <h4><a href="/news/bamboobend-sustainable-building">BambooBend: SCiM LAB and DDF-KIT Redefine Sustainable Building</a></h4>
                                <div className="user-box-items">
                                    <div className="user-item">
                                        <i className="fa-solid fa-circle-user"></i>
                                        SCiM LAB
                                    </div>
                                    <div className="date-item"><i className="fa-regular fa-calendar"></i>08 Dec, 2025</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="news-box-items-style-1 style-2">
                            <div className="news-thumb">
                                <img src="/assets/media/1.jpg" alt="Digital Twinning" />
                            </div>
                            <div className="news-content">
                                <span>RESEARCH</span>
                                <h4><a href="/news/frugal-digital-twinning-smart-cities">Frugal Digital Twinning for Smart Cities in Developing Countries</a></h4>
                                <div className="user-box-items">
                                    <div className="user-item">
                                        <i className="fa-solid fa-circle-user"></i>
                                        SCiM LAB
                                    </div>
                                    <div className="date-item"><i className="fa-regular fa-calendar"></i>20 Nov, 2025</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       {/* Footer Section Start */}
        <footer className="footer-section bg-cover" style={{backgroundImage: 'url(/assets/media/1.jpg)'}}>
            <div className="container">
                <div className="footer-widget-wrapper">
                    <div className="row align-items-xl-end">
                        <div className="col-xl-4 col-lg-6 col-md-7 wow fadeInUp">
                            <div className="footer-widget-items">
                                <div className="widget-head">
                                    <a href="/">
                                        <img src="/assets/img/logo/white-logo.png" alt="SCiM LAB" className="white-logo-filter" style={{width: '150px'}} />
                                    </a>
                                </div>
                                <div className="footer-content">
                                   <h3 className="title">
                                        Innovating Today, Shaping Tomorrow
                                   </h3>
                                   <a href="/contact" className="theme-btn">
                                        Contact Us Today
                                        <i className="fa-solid fa-arrow-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="footer-widget-items">
                                <div className="widget-head">
                                    <h3>
                                        Quick Links
                                    </h3>
                                </div>
                                <ul className="list-area">
                                    <li>
                                        <a href="/about">
                                            <i className="fa-regular fa-chevrons-right"></i> About SCiM LAB
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/team">
                                            <i className="fa-regular fa-chevrons-right"></i> Our Team
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/projects">
                                            <i className="fa-regular fa-chevrons-right"></i> Projects
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/news">
                                            <i className="fa-regular fa-chevrons-right"></i> News
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/shop">
                                            <i className="fa-regular fa-chevrons-right"></i> Shop
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/contact">
                                            <i className="fa-regular fa-chevrons-right"></i> Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="footer-widget-items">
                                <div className="widget-head">
                                    <h3>
                                        Research Areas
                                    </h3>
                                </div>
                                <ul className="list-area">
                                    <li>
                                        <a href="/service-details">
                                            <i className="fa-regular fa-chevrons-right"></i> Smart City Solutions
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/service-details">
                                            <i className="fa-regular fa-chevrons-right"></i> Advanced Manufacturing
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/service-details">
                                            <i className="fa-regular fa-chevrons-right"></i> Digital Twinning
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/service-details">
                                            <i className="fa-regular fa-chevrons-right"></i> Sustainable Architecture
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/service-details">
                                            <i className="fa-regular fa-chevrons-right"></i> Urban Mobility
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/service-details">
                                            <i className="fa-regular fa-chevrons-right"></i> Frugal Innovation
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="footer-widget-items footer-contact-form">
                                <div className="footer-shape">
                                    <img src="/assets/img/home-1/footer-shape.png" alt="img" className='white-logo-filter' />
                                </div>
                                <div className="footer-shape-2">
                                    <img src="/assets/img/home-1/footer-shape-2.png" alt="img" />
                                </div>
                                <div className="icon">
                                    <img src="/assets/img/home-1/email.svg" alt="img" />
                                </div>
                                <h3>Stay Updated</h3>
                                <p>
                                    Subscribe to our newsletter for the latest research updates and events
                                </p>
                                <form action="#">
                                    <input type="text" placeholder="Your email" />
                                    <button className="theme-btn" type="submit">
                                        Subscribe Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-info-bottom wow fadeInUp" data-wow-delay=".8s">
                    <div className="info-item">
                        <div className="icon">
                            <img src="/assets/img/home-1/icon/icon1.svg" alt="" />
                        </div>
                        <div className="content">
                            <h6>Contact us:</h6>
                            <p>
                                <a href="tel:+233322060230">+233 (0) 32 206 0230</a>
                            </p>
                            <p className="mt-2">
                                <a href="mailto:scimlab@knust.edu.gh">scimlab@knust.edu.gh</a>
                            </p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="icon">
                            <img src="/assets/img/home-1/icon/icon2.svg" alt="" />
                        </div>
                        <div className="content">
                            <h6>Our Location:</h6>
                            <p>
                                TCC-CIMET, KNUST, <br /> Kumasi, Ghana
                            </p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="icon">
                            <img src="/assets/img/home-1/icon/icon3.svg" alt="" />
                        </div>
                        <div className="content">
                            <h6>Working Hours:</h6>
                            <p>
                               Mon - Fri: 8:00am - 5:00pm <br />
                                Saturday &amp; Sunday: Closed
                            </p>
                        </div>
                    </div>
                    <div className="social-icon-list">
                        <h5>Follow Us:</h5>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/scimlab360" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://twitter.com/Scimlab_360" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                            <a href="https://instagram.com/scim_lab" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom wow fadeInUp" data-wow-delay=".9s">
                <div className="container">
                    <p className="text-1">&copy; 2026 SCiM LAB — TCC-CIMET, KNUST. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    </div>
</div>
    </>
  )
}

export default Home
