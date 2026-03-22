import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate in Computer Science</h4>
                <h5>Modern College of Commerce and Sciences</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Relevant coursework in Computer Science and Programming.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Scientific Computer Science</h4>
                <h5>University of PMAS Arid Agriculture</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Major in General Computer Science (GC). FYP on "Android Application Development (Java/Kotlin)".
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Android Developer</h4>
                <h5>Academic Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developed applications using Java/Kotlin (MVVM). Built Construction Material App and Easy Khata-style app with Firebase & SQLite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
