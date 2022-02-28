const MainSection = (props) => {
  return (
    <section className="main__section">
    <div className={`row ${props.reversed ? 'flex-md-row-reverse' : ''}`}>
      <div className={`col-1 col-md-${props.reversed ? '1' : '2'}`}></div>
      <div className="col-10 col-md-5 align-self-center">
        <div id={props.number} className="main__information">
          <div className="main__information-number text">{props.number}</div> 
          <div className="main__information-pre-title">
            <div className="main__information-pre-title-line"></div>
            <span className="main__information-pre-title-text text">Get Started</span>
          </div>
          <h2 className="main__information-title title">What level of hiker are you?</h2>
          <p className="main__information-text text">Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?</p>
          <div className="main__information-button">
            <span className="main__information-button-text text">read more</span>
            <div className="main__information-button-arrow">
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z" fill="#FBD784"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {props.reversed ? <div className="col-md-1"></div> : null}
      <div className="col-md-4 align-self-center">
        <div className="main__picture">
          <img src={`./img/${props.number}.jpeg`} alt="" />
        </div>
      </div>
      <div className="col-1 col-md-1"></div>
    </div>
  </section>
  )
};

export default MainSection;