import "./ScrolNav.css";

const ScrolNav = (props) => {

  return (
    <div className="container">
      <div className="scrol-nav">
      <nav className="scrol-nav-block">
        <a href="#start" className="scrol-nav-element text">Start</a>
        <a href="#01" className="scrol-nav-element text">01</a>
        <a href="#02" className="scrol-nav-element text">02</a>
        <a href="#03" className="scrol-nav-element text">03</a>
      </nav>
    </div>
    </div>
  )
}

export default ScrolNav;