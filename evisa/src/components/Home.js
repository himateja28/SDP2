import React from 'react';
import Typed from 'typed.js'
import gov from '../assests/img11.png'
import myPic from '../assests/profile.png'
import img from '../assests/img0.jpg'
import fast from '../assests/img8.png'
import status from '../assests/img7.png'
import service from '../assests/img1.png'
import visa from '../assests/visa.png'
import student from '../assests/student.png'
import medi from '../assests/medi.png'
import travel from '../assests/travel.png'
import emp from '../assests/employee.png'
import Footer from './Footer'
import {Link} from 'react-router-dom'
function Home() {
    const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Services','Updates','Support'],
      typeSpeed: 50,
      loop:true
    });

    return () => {
      typed.destroy();
    };
  }, []);
      
    return (
        <div>
             <div class="navbar-logo-left">
        <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease"
            role="banner" class="navbar-logo-left-container shadow-three w-nav">
            <div class="container">
                <div class="navbar-wrapper"><a href="#" class="navbar-brand w-nav-brand"><img src={gov}
                            loading="lazy" width="66" alt="" /></a>
                    <div class="text-block">Online E-Visa</div>
                    <nav role="navigation" class="nav-menu-wrapper w-nav-menu">
                        <ul role="list" class="nav-menu-two w-list-unstyled">
                            <li><a href="#" class="nav-link">About us</a></li>
                            <li><Link to="/apply" class="nav-link">Apply E-Visa</Link></li>
                            <li><Link to="/check" class="nav-link">Check Status</Link></li>
                            <li><Link to="/faq" class="nav-link">FAQ's</Link></li>
                            <li>
                                <div class="nav-divider"></div>
                            </li>
                            <li><a href="#team" class="nav-link-accent">Team</a></li>
                            <li class="mobile-margin-top-10"><Link to="/apply" class="button-primary w-button">Apply Now</Link>
                            </li>
                        </ul>
                    </nav>
                    <div class="menu-button w-nav-button">
                        <div class="w-icon-nav-menu"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="hero-subscribe-right">
        <div class="container">
            <div class="hero-wrapper">
                <div class="hero-split"><img src={img} loading="lazy" alt="" class="shadow-two" /></div>
                <div class="hero-split">
                    <h1>One Place for all your E-visa <span style={{color:"red"}} ref={el} /></h1>
                    <p class="margin-bottom-24px">Here we provide all services about visa services. We Were most
                        concerend about your privacy and we are the responbiliity to ensure the service seamlessly and
                        user friendly ✈️....</p>
                </div>
            </div>
        </div>
    </section>
    <section class="pricing-overview">
        <div class="container-3">
            <h2 class="centered-heading">We Offer</h2>
            <p class="pricing-description">The Below Listed are the Types of E-visa&#x27;s Currently we were offering
                <br /></p>
            <div class="pricing-grid">
                <div id="w-node-_2df555e3-597c-6855-5962-d6e86a0fe40a-68ca730e" class="pricing-card-three"><img
                        src={travel} loading="lazy" alt="" class="pricing-image" />
                    <h3>Travel Visa</h3>
                    <p class="pricing-card-text">We provide travel visa for tourits</p><a
                        href="#" class="text-link-arrow-2 w-inline-block">
                        <div>Learn more</div>
                        <div class="arrow-embed-2 w-embed"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M11.72 15L16.3472 10.357C16.7732 9.92932 16.7732 9.23603 16.3472 8.80962L11.72 4.16667L10.1776 5.71508L12.9425 8.4889H4.16669V10.6774H12.9425L10.1776 13.4522L11.72 15Z"
                                    fill="currentColor" />
                            </svg></div>
                    </a>
                </div>
                <div id="w-node-_2df555e3-597c-6855-5962-d6e86a0fe414-68ca730e" class="pricing-card-three"><img
                        src={student} loading="lazy" alt="" class="pricing-image" />
                    <h3>Studnet Visa</h3>
                    <p class="pricing-card-text">We provide visa for students for education purposes</p><a
                        href="#" class="text-link-arrow-2 w-inline-block">
                        <div>Learn more</div>
                        <div class="arrow-embed-2 w-embed"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M11.72 15L16.3472 10.357C16.7732 9.92932 16.7732 9.23603 16.3472 8.80962L11.72 4.16667L10.1776 5.71508L12.9425 8.4889H4.16669V10.6774H12.9425L10.1776 13.4522L11.72 15Z"
                                    fill="currentColor" />
                            </svg></div>
                    </a>
                </div>
                <div id="w-node-_2df555e3-597c-6855-5962-d6e86a0fe41e-68ca730e" class="pricing-card-three"><img
                        src={medi} loading="lazy" alt="" class="pricing-image" />
                    <h3>Medical Visa</h3>
                    <p class="pricing-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p><a
                        href="#" class="text-link-arrow-2 w-inline-block">
                        <div>Learn more</div>
                        <div class="arrow-embed-2 w-embed"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M11.72 15L16.3472 10.357C16.7732 9.92932 16.7732 9.23603 16.3472 8.80962L11.72 4.16667L10.1776 5.71508L12.9425 8.4889H4.16669V10.6774H12.9425L10.1776 13.4522L11.72 15Z"
                                    fill="currentColor" />
                            </svg></div>
                    </a>
                </div>
                <div id="w-node-db5077cf-bbdc-aac5-35d6-71d12849860a-68ca730e" class="pricing-card-three"><img
                        src={visa} loading="lazy" alt="" class="pricing-image" />
                    <h3>Immigrant visa</h3>
                    <p class="pricing-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p><a
                        href="#" class="text-link-arrow-2 w-inline-block">
                        <div>Learn more</div>
                        <div class="arrow-embed-2 w-embed"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M11.72 15L16.3472 10.357C16.7732 9.92932 16.7732 9.23603 16.3472 8.80962L11.72 4.16667L10.1776 5.71508L12.9425 8.4889H4.16669V10.6774H12.9425L10.1776 13.4522L11.72 15Z"
                                    fill="currentColor" />
                            </svg></div>
                    </a>
                </div>
                <div id="w-node-_56a545e3-4466-d6f1-9620-a33dbc98c7e0-68ca730e" class="pricing-card-three"><img
                        src={emp} loading="lazy" alt="" class="pricing-image" />
                    <h3>Employement Visa</h3>
                    <p class="pricing-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p><a
                        href="#" class="text-link-arrow-2 w-inline-block">
                        <div>Learn more</div>
                        <div class="arrow-embed-2 w-embed"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M11.72 15L16.3472 10.357C16.7732 9.92932 16.7732 9.23603 16.3472 8.80962L11.72 4.16667L10.1776 5.71508L12.9425 8.4889H4.16669V10.6774H12.9425L10.1776 13.4522L11.72 15Z"
                                    fill="currentColor" />
                            </svg></div>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="team-slider">
        <div class="container-3">
            <h2 class="centered-heading">Here We Provide </h2>
            <p class="centered-subheading">The below features were we are offering as part of this online service</p>
            <div data-delay="4000" data-animation="slide" class="team-slider-wrapper w-slider" data-autoplay="false"
                data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0"
                data-nav-spacing="12" data-duration="500" data-infinite="true">
                <div class="w-slider-mask">
                    <div class="team-slide-wrapper w-slide">
                        <div class="team-block"><img src={service} loading="lazy" width="338" alt=""
                                class="team-member-image-two" />
                            <div class="team-block-info">
                                <h3 class="team-member-name-two">Customer Service</h3>
                                <p class="team-member-text">We provide 24/7 customer service for user bettter experience
                                    and we respect your feed back</p>
                            </div>
                        </div>
                    </div>
                    <div class="team-slide-wrapper w-slide">
                        <div class="team-block"><img src={fast} loading="lazy" alt=""
                                class="team-member-image-two" />
                            <div class="team-block-info">
                                <h3 class="team-member-name-two">Fast Processing </h3>
                                <p class="team-member-text">We provide fast processing of your visa application as fast
                                    as much we value user time </p>
                            </div>
                        </div>
                    </div>
                    <div class="team-slide-wrapper w-slide">
                        <div class="team-block"><img src={status} loading="lazy" alt=""
                                class="team-member-image-two" />
                            <div class="team-block-info">
                                <h3 class="team-member-name-two">Status of Application</h3>
                                <p class="team-member-text">We provide a token number for your application that can used
                                    to track the status of application</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="team-slider-arrow w-slider-arrow-left">
                    <div class="w-icon-slider-left"></div>
                </div>
                <div class="team-slider-arrow w-slider-arrow-right">
                    <div class="w-icon-slider-right"></div>
                </div>
                <div class="team-slider-nav w-slider-nav w-slider-nav-invert w-round"></div>
            </div>
        </div>
    </section>
    <Footer/>
        </div>
    )
}

export default Home
