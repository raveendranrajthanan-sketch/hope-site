
function About() {
  return (
    <section className="section-pad" id="about">
      <div className="container contact-card about-card">

        <div className="row align-items-center g-5">

          <div className="col-lg-6">
            <div className="about-collage">

              <div className="about-badge">
                <div className="ab-ring">
                  <span>13yrs</span>
                </div>

                <div>
                  <div className="fw-bold font-display">
                    Trusted Since
                  </div>
                  <div className="text-muted small">
                    2013 · 40 countries
                  </div>
                </div>
              </div>

              <div className="img-a">
                <img
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&h=650&fit=crop&auto=format"
                  alt="Volunteers distributing supplies"
                />
              </div>

              <div className="img-b">
                <img
                  src="https://images.unsplash.com/photo-1593113630400-ea4288922497?w=500&h=500&fit=crop&auto=format"
                  alt="Child receiving school supplies"
                />
              </div>

            </div>
          </div>

          <div className="col-lg-6">

            <span className="eyebrow">
              <i className="bi bi-flag-fill"></i>
              Our Story
            </span>

            <h2 className="section-title mt-3 mb-3">
              We believe generosity works best when it's traceable.
            </h2>

            <p className="section-sub">
              Hopewell started in a single village kitchen in 2013
              and has grown into a donor network spanning 40
              countries — without ever losing sight of the person
              on the receiving end of a gift.
            </p>

            <ul className="about-list mt-3">

              <li>
                <span className="ic">
                  <i className="bi bi-eye-fill"></i>
                </span>
                <div>
                  <strong>Full transparency</strong>
                  <div className="text-muted small">
                    Track your donation from wallet to warehouse
                    to doorstep.
                  </div>
                </div>
              </li>

              <li>
                <span className="ic">
                  <i className="bi bi-patch-check-fill"></i>
                </span>
                <div>
                  <strong>Verified NGO partners</strong>
                  <div className="text-muted small">
                    Every partner is audited annually by an
                    independent body.
                  </div>
                </div>
              </li>

              <li>
                <span className="ic">
                  <i className="bi bi-globe-americas"></i>
                </span>
                <div>
                  <strong>On-the-ground reach</strong>
                  <div className="text-muted small">
                    Local teams in 40 countries, not a single
                    head office.
                  </div>
                </div>
              </li>

            </ul>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
