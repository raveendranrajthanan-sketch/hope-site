
function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box">

          <div className="cta-decoration cta-decoration-one"></div>
          <div className="cta-decoration cta-decoration-two"></div>

          <div className="cta-content">

            <span className="cta-badge">
              <i className="bi bi-heart-fill"></i>
              MAKE A DIFFERENCE
            </span>

            <h2>
              Together We Can <span>Change Lives</span>
            </h2>

            <p>
              Your small contribution can bring hope, happiness and a better
              future to people who need support. Join us and become part of
              something meaningful.
            </p>

            <div className="cta-buttons">
              <a href="#causes" className="cta-btn-primary">
                Donate Now
                <i className="bi bi-arrow-right"></i>
              </a>

              <a href="#volunteers" className="cta-btn-outline">
                <i className="bi bi-people-fill"></i>
                Become a Volunteer
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
