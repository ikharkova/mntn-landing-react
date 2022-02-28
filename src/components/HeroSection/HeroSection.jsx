import Contacts from "../Contacts/Contacts";
import "./HeroSection.css";

const HeroSection = (props) => {

  return (
    <section className="hero-section">
      <Contacts />
      <div className="hero-section__main">
        <div className="hero-section__main-titel-grup">
          <div className="hero-section__main-titel-line"></div>
          <h1 className="hero-section__main-titel text">A Hiking guide</h1>
        </div>
        <p className="hero-section__main-text title">Be prepared for the <br />Mountains and beyond!</p>
        <a className="hero-section__main-link text" href="#01">
          <span>scroll down</span>
          <div>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z" fill="white" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  )
}

export default HeroSection;