
function Contact() {
  return (
    <section id="contact">
      <div className="container">

        {/* Section Heading */}
        <div className="text-center mb-5">
          <span className="badge bg-success-subtle text-success p-3 mb-3">
            <i className="bi bi-envelope-heart me-2"></i>
            CONTACT US
          </span>

          <h2 className="section-title">
            Get In Touch With Us
          </h2>

          <p className="section-sub">
            Have questions or want to support our mission?
            Contact us today. We would love to hear from you.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">

          {/* Contact Information */}
          <div className="col-lg-5">
            <div className="contact-info-card">

              <span className="contact-info-label">
                CONTACT INFORMATION
              </span>

              <h4>Let's Start a Conversation</h4>

              <p className="contact-info-description">
                Have a question, suggestion or want to make
                a difference? Our team is always ready to help.
              </p>

              <div className="contact-detail">
                <i className="bi bi-geo-alt-fill"></i>
                <div>
                  <strong>Our Location</strong>
                  <span>Kurunegala, Sri Lanka</span>
                </div>
              </div>

              <div className="contact-detail">
                <i className="bi bi-envelope-fill"></i>
                <div>
                  <strong>Email Address</strong>
                  <span>info@hopewell.org</span>
                </div>
              </div>

              <div className="contact-detail">
                <i className="bi bi-telephone-fill"></i>
                <div>
                  <strong>Phone Number</strong>
                  <span>+94 77 123 4567</span>
                </div>
              </div>

              <div className="contact-detail">
                <i className="bi bi-clock-fill"></i>
                <div>
                  <strong>Working Hours</strong>
                  <span>Monday - Friday: 9.00 AM - 5.00 PM</span>
                </div>
              </div>

              <div className="contact-social">
                <span>Follow Our Journey</span>

                <div className="contact-social-links">
                  <a href="https://facebook.com" aria-label="Facebook">
                    <i className="bi bi-facebook"></i>
                  </a>

                  <a href="https://instagram.com" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>

                  <a href="https://youtube.com" aria-label="YouTube">
                    <i className="bi bi-youtube"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <form className="contact-form">

              <div className="contact-form-heading">
                <h4>Send Us a Message</h4>
                <p>Fill in the form below and we will get back to you.</p>
              </div>

              <div className="row g-4">

                <div className="col-md-6">
                  <label htmlFor="contactName" className="form-label">
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="contactName"
                    name="name"
                    className="form-control"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="contactEmail" className="form-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="contactEmail"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="contactSubject" className="form-label">
                    Subject
                  </label>

                  <input
                    type="text"
                    id="contactSubject"
                    name="subject"
                    className="form-control"
                    placeholder="What is your message about?"
                    required
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="contactMessage" className="form-label">
                    Your Message
                  </label>

                  <textarea
                    id="contactMessage"
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                <div className="col-12">
                  <button type="submit" className="contact-submit">
                    Send Message
                    <i className="bi bi-send-fill"></i>
                  </button>
                </div>

              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
