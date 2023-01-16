import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomeRootTwo.css";
import asset1 from "./assets/asset 1.png";
import asset2 from "./assets/rocket7.png";
import asset3 from "./assets/asset 3.png";
import asset4 from "./assets/asset 4.png";
import asset5 from "./assets/asset 5.png";
import asset6 from "./assets/asset 6.png";
import asset7 from "./assets/asset 7.png";
import asset8 from "./assets/asset 8.svg";
import asset9 from "./assets/asset 9.png";
import asset11 from "./assets/asset 11.svg";
import asset13 from "./assets/asset 13.svg";
import asset18 from "./assets/asset 18.png";
import asset21 from "./assets/asset 21.png";
import asset24 from "./assets/asset 24.png";

function HomeRootTwo() {
  useEffect(() => {
    console.log("hello");
  });

  return (
    <div className="container-fluid mainContainer">
      <header>
        <div className="container header-section flex">
          <div className="header-left">
            <h1>Square Root Two Technologies</h1>
            <p>Take your business to the zenith!</p>
            <Link to="/" className="primary-button get-started-btn">
              Get Started
            </Link>
          </div>
          <div className="header-right">
            <div className="stars">
              <span className="star1"></span>
              <span className="star2"></span>
              <span className="star3"></span>
              <span className="star4"></span>
              <span className="star5"></span>
              <span className="star6"></span>
              <span className="star7"></span>
              <span className="star8"></span>
              <span className="star9"></span>
              <span className="star10"></span>
              <span className="star11"></span>
              <span className="star12"></span>
              <span className="star13"></span>
              <span className="star14"></span>
              <span className="star15"></span>
              <span className="star16"></span>
              <span className="star17"></span>
              <span className="star18"></span>
              <span className="star19"></span>
              <span className="star20"></span>
              <span className="star21"></span>
              <span className="star22"></span>
              <span className="star23"></span>
              <span className="star24"></span>
            </div>
            <div className="rocketContainer">
              <div className="rocket">
                <img src={asset2} alt="hero" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="companies-section">
        <div className="container">
          <div className="small-bold-text companies-header">
            The world’s best companies rely on UsabilityHub to make better
            design decisions.
          </div>
          <div className="logos flex">
            <img className="logo" src={asset3} alt="" />
            <img className="logo" src={asset4} alt="" />
            <img className="logo" src={asset5} alt="" />
            <img className="logo" src={asset6} alt="" />
            <img className="logo" src={asset7} alt="" />
            <img className="logo" src={asset8} alt="" />
            <img className="logo" src={asset9} alt="" />
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <div className="features-header">
            <h2 className="features-heading-text">Our Services</h2>
          </div>
          <div className="features-area flex">
            <div className="features-card flex">
              <img src={asset11} alt="" />
              <h3>JavaScript</h3>
              <p>Dive into the world of JavaScript. Read our blogs.</p>
              <Link to="/" className="secondary-button">
                Learn More <i className="fa-solid fa-right-long"></i>
              </Link>
            </div>
            <div className="features-card flex">
              <img src={asset13} alt="" />
              <h3>Salesforce</h3>
              <p>Discover how people navigate your Figma prototypes.</p>
              <Link to="/" className="secondary-button">
                Learn more <i className="fa-solid fa-right-long"></i>
              </Link>
            </div>
            <div className="features-card flex">
              <img src={asset13} alt="" />
              <h3>Games</h3>
              <p>Test interaction with first click and navigation tests.</p>
              <Link to="/" className="secondary-button">
                Learn more <i className="fa-solid fa-right-long"></i>
              </Link>
            </div>
            <div className="features-card flex">
              <img src={asset13} alt="" />
              <h3>Sociology</h3>
              <p>Read our blogs on Sociology and Corporate Communication</p>
              <Link to="/" className="secondary-button">
                Learn more <i className="fa-solid fa-right-long"></i>
              </Link>
            </div>
            <div className="features-card flex">
              <img src={asset13} alt="" />
              <h3>Automation Anywhere</h3>
              <p>Find out which designs users prefer and why.</p>
              <Link to="/" className="secondary-button">
                Learn more <i className="fa-solid fa-right-long"></i>
              </Link>
            </div>
            <div className="features-card flex">
              <img src={asset13} alt="" />
              <h3>Five second tests</h3>
              <p>Test comprehensibility by measuring first impressions.</p>
              <Link to="/" className="secondary-button">
                Learn more <i className="fa-solid fa-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="big-feature-section">
        <div className="container flex big-feature-container">
          <div className="feature-img">
            <img src={asset18} alt="" />
          </div>
          <div className="feature-desc flex">
            <h4>Effortless validation for</h4>
            <h3>Design professionals</h3>
            <p>
              Test interfaces, interaction flows, iconography and more, to help
              you create intuitive and delightful experiences for your users.
            </p>
          </div>
        </div>
      </div>

      <div className="big-feature-section">
        <div
          className="container flex big-feature-container"
          id="second-big-feature"
        >
          <div className="feature-img">
            <img src={asset21} alt="/" />
          </div>
          <div className="feature-desc flex">
            <h4>Effortless validation for</h4>
            <h3>Design professionals</h3>
            <p>
              Test interfaces, interaction flows, iconography and more, to help
              you create intuitive and delightful experiences for your users.
            </p>
          </div>
        </div>
      </div>

      <div className="big-feature-section">
        <div className="container flex big-feature-container">
          <div className="feature-img">
            <img src={asset24} alt="" />
          </div>
          <div className="feature-desc flex">
            <h4>Effortless validation for</h4>
            <h3>Design professionals</h3>
            <p>
              Test interfaces, interaction flows, iconography and more, to help
              you create intuitive and delightful experiences for your users.
            </p>
          </div>
        </div>
      </div>

      <div className="examples-section">
        <div className="container">
          <div className="examples-header flex">
            <h2 className="examples-heading-text">
              One platform, endless possibilities
            </h2>
            <Link to="/" className="secondary-button">
              See more examples <i className="fa-solid fa-right-long"></i>
            </Link>
          </div>
          <div className="examples-area flex">
            <Link to="/" className="examples-card">
              <h3 className="card-text">
                Can user complete a task in my software interface?
              </h3>
            </Link>
            <Link className="examples-card examples-card-custom" to="/">
              <h3 className="card-text">
                Can users find important pages on my website?
              </h3>
            </Link>
            <Link className="examples-card" to="/">
              <h3 className="card-text">
                Is my website’s intended audience clear?{" "}
              </h3>
            </Link>
            <Link className="examples-card" to="/">
              <h3 className="card-text">
                Do visitors understand what a page is about?
              </h3>
            </Link>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container flex cta-section-container">
          <h2>Start testing today</h2>
          <p>Take the guesswork out of design decisions</p>
          <Link to="/" className="primary-button">
            Get Started
          </Link>
        </div>
      </div>

      <footer>
        <div className="container flex footer-container">
          <Link to="/" className="company-logo">
            <img src={asset1} alt="company logo" />
          </Link>
          <div className="link-column flex">
            <h4>Product</h4>
            <Link to="/" className="hover-link">
              Overview
            </Link>
            <Link to="/" className="hover-link">
              Pricing
            </Link>
            <Link to="/" className="hover-link">
              Usability Hub
            </Link>
            <Link to="/" className="hover-link">
              Customers Page
            </Link>
            <Link to="/" className="hover-link">
              Status Page
            </Link>
          </div>
          <div className="link-column flex">
            <h4>Methodology</h4>
            <Link to="/" className="hover-link">
              Overview
            </Link>
            <Link to="/" className="hover-link">
              Pricing
            </Link>
            <Link to="/" className="hover-link">
              Usability Hub
            </Link>
            <Link to="/" className="hover-link">
              Customers Page
            </Link>
            <Link to="/" className="hover-link">
              Status Page
            </Link>
          </div>
          <div className="link-column flex">
            <h4>Resources</h4>
            <Link to="/" className="hover-link">
              Overview
            </Link>
            <Link to="/" className="hover-link">
              Pricing
            </Link>
            <Link to="/" className="hover-link">
              Usability Hub
            </Link>
            <Link to="/" className="hover-link">
              Customers Page
            </Link>
            <Link to="/" className="hover-link">
              Status Page
            </Link>
          </div>
        </div>
      </footer>

      <div className="subfooter">
        <div className="container flex subfooter-container">
          <Link className="hover-link" to="/">
            Privacy policy
          </Link>
          <Link className="hover-link" to="/">
            Terms & Condition
          </Link>
          <Link className="hover-link" to="/">
            Security Information
          </Link>
          <Link className="hover-link" to="/">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link className="hover-link" to="/">
            <i className="fa-brands fa-twitter"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeRootTwo;
