
function Volunteers() {
  const volunteers = [
    {
      name: "Sarah Johnson",
      role: "Volunteer Coordinator",
      icon: "bi-person-heart"
    },
    {
      name: "Michael Brown",
      role: "Community Helper",
      icon: "bi-people"
    },
    {
      name: "Emily Wilson",
      role: "Education Volunteer",
      icon: "bi-book"
    }
  ]

  return (
    <section id="volunteers" className="py-5">
      <div className="container text-center">

        <span className="badge bg-success-subtle text-success p-3 mb-3">
          OUR TEAM
        </span>

        <h2 className="section-title">
          Meet Our Volunteers
        </h2>

        <p className="section-sub mb-5">
          Meet the passionate people who make a difference
          in our communities.
        </p>

        <div className="row g-4">
          {volunteers.map((volunteer, index) => (
            <div className="col-md-4" key={index}>
              <div className="card cause-card p-4">
                <i className={`bi ${volunteer.icon} fs-1 text-success mb-3`}></i>

                <h4>{volunteer.name}</h4>

                <p>{volunteer.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Volunteers
