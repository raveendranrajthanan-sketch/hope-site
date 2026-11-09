
function Testimonials() {
  const testimonials = [
    {
      name: "James Anderson",
      role: "Monthly Donor",
      message: "Hopewell is doing amazing work. I am happy to support their mission and help people in need.",
      icon: "bi-person-circle"
    },
    {
      name: "Sarah Williams",
      role: "Volunteer",
      message: "Being part of Hopewell has changed my life. Helping the community gives me great happiness.",
      icon: "bi-person-circle"
    },
    {
      name: "David Miller",
      role: "Community Member",
      message: "Their dedication and kindness bring real positive changes to our community.",
      icon: "bi-person-circle"
    }
  ]

  return (
    <section id="testimonials" className="py-5">
      <div className="container text-center">

        <span className="badge bg-success-subtle text-success p-3 mb-3">
          TESTIMONIALS
        </span>

        <h2 className="section-title">What People Say</h2>

        <p className="section-sub mb-5">
          Hear from the people who support and benefit from our mission.
        </p>

        <div className="row g-4">
          {testimonials.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card testimonial-card h-100">

                <div className="testimonial-quote">
                  <i className="bi bi-quote"></i>
                </div>

                <div className="testimonial-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i className="bi bi-star-fill" key={star}></i>
                  ))}
                </div>

                <p className="testimonial-message">
                  "{item.message}"
                </p>

                <div className="testimonial-author">
                  <i className={`bi ${item.icon} testimonial-avatar`}></i>

                  <div>
                    <h5>{item.name}</h5>
                    <small>{item.role}</small>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials
