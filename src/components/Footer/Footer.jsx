import Logo from '../Logo/Logo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <div className="footer__blok">
              <div className="footer__blok-logo">
                <Logo />
              </div>
              <p className="footer__blok-text text">Get out there & discover your next slope, mountain & destination!</p>
              <span className="footer__blok-copyright text">Copyright 2019 MNTN, Inc. Terms & Privacy</span>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer__nav">
              <h5 className="text footer-title">More on The Blog</h5>
              <a className="text footer-link" href="#start">About MNTN</a>
              <a className="text footer-link" href="#start">Contributors & Writers</a>
              <a className="text footer-link" href="#start">Write For Us</a>
              <a className="text footer-link" href="#start">Contact Us</a>
              <a className="text footer-link" href="#start">Privacy Policy</a>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer__about">
              <h5 className="text footer-title">More on MNTN</h5>
              <a className="text footer-link" href="#start">The Team</a>
              <a className="text footer-link" href="#start">Jobs</a>
              <a className="text footer-link" href="#start">Press</a>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;