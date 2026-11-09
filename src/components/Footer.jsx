
function Footer() {
  return (
    <footer className="modern-footer">
      <div className="container">

        <div className="row g-5">

          {/* About */}
          <div className="col-lg-4 col-md-6">
            <a href="#home" className="footer-logo">
              <span className="footer-logo-icon">
                <i className="bi bi-heart-fill"></i>
              </span>
              Hope<span>well</span>
            </a>

            <p className="footer-description">
              Together, we can create a better future by supporting
              people in need and making a positive difference
              in our communities.
            </p>

            <h6 className="footer-social-title">Follow Our Journey</h6>

            <div className="footer-social">
              <a href="#facebook" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#instagram" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#twitter" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#youtube" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-heading">Quick Links</h5>

            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#causes">Our Causes</a></li>
              <li><a href="#volunteers">Volunteers</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Causes */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">Our Causes</h5>

            <ul className="footer-links">
              <li><a href="#causes">Education Support</a></li>
              <li><a href="#causes">Clean Water</a></li>
              <li><a href="#causes">Food & Nutrition</a></li>
              <li><a href="#causes">Medical Care</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">Contact Us</h5>

            <div className="footer-contact-item">
              <i className="bi bi-geo-alt-fill"></i>
              <span>Kurunegala, Sri Lanka</span>
            </div>

            <div className="footer-contact-item">
              <i className="bi bi-envelope-fill"></i>
              <span>info@hopewell.org</span>
            </div>

            <div className="footer-contact-item">
              <i className="bi bi-telephone-fill"></i>
              <span>+94 77 123 4567</span>
            </div>

            <div className="footer-contact-item">
              <i className="bi bi-clock-fill"></i>
              <span>Monday - Friday<br />9.00 AM - 5.00 PM</span>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Hopewell.
            All Rights Reserved.
          </p>

          <a href="#home" className="back-to-top">
            Back to Top
            <i className="bi bi-arrow-up"></i>
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
