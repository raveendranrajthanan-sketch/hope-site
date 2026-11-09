
function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero-glow"></div>

      <span className="blob blob-1"></span>
      <span className="blob blob-2"></span>
      <span className="blob blob-3"></span>

      <div className="container position-relative">
        <div className="row align-items-center g-5">

          {/* Left Content */}
          <div className="col-lg-6">
            <span className="eyebrow">
              <i className="bi bi-stars"></i>
              128,400+ Lives Touched This Year
            </span>

            <h1 className="hero-title mt-4">
              A small gift becomes{" "}
              <span className="accent-underline">
                someone's
              </span>{" "}
              whole tomorrow.
            </h1>

            <p className="hero-lead mt-4">
              Hopewell connects everyday donors directly with
              verified, on-the-ground causes — meals, schooling,
              clean water, medical care — with full transparency
              on where every rupee goes.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <a href="#causes" className="btn-hw-primary">
                Donate Now <i className="bi bi-arrow-right"></i>
              </a>

              <a href="#contact" className="btn-hw-outline">
                <i className="bi bi-play-circle"></i> Watch Story
              </a>
            </div>

            <div className="d-flex align-items-center gap-3 mt-5">
              <div className="hero-avatars">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&auto=format"
                  alt="Donor"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format"
                  alt="Donor"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&auto=format"
                  alt="Donor"
                />
              </div>

              <div>
                <div className="fw-bold font-display">
                  12,600+ donors
                </div>
                <div className="text-muted small">
                  trust Hopewell with their giving
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6">
            <div className="hero-media">
              <div className="hero-media-frame">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&h=1000&fit=crop&auto=format"
                  alt="Children supported by Hopewell smiling"
                />
              </div>

              <div className="float-card float-card-1">
                <span className="fc-icon">
                  <i className="bi bi-cup-hot-fill"></i>
                </span>
                <div>
                  <div className="fc-val">42,180</div>
                  <div className="fc-label">Meals served today</div>
                </div>
              </div>

              <div className="float-card float-card-2">
                <span className="fc-icon">
                  <i className="bi bi-shield-check"></i>
                </span>
                <div>
                  <div className="fc-val">100%</div>
                  <div className="fc-label">Verified &amp; secure</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Hero
