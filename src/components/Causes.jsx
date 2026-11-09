
function Causes() {
  const causes = [
    {
      title: 'Education Support',
      category: 'EDUCATION',
      description: 'Help children access quality education, books and learning resources.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600',
      raised: '$18,500',
      goal: '$25,000',
      progress: '74%'
    },
    {
      title: 'Clean Water',
      category: 'CLEAN WATER',
      description: 'Provide safe and clean drinking water to communities in need.',
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600',
      raised: '$12,000',
      goal: '$20,000',
      progress: '60%'
    },
    {
      title: 'Food & Nutrition',
      category: 'FOOD',
      description: 'Support families with nutritious meals and essential food supplies.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600',
      raised: '$15,000',
      goal: '$20,000',
      progress: '75%'
    },
    {
      title: 'Medical Care',
      category: 'HEALTHCARE',
      description: 'Help provide medical treatment and healthcare for children.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600',
      raised: '$9,000',
      goal: '$15,000',
      progress: '60%'
    }
  ]

  return (
    <section className="section-pad" id="causes">
      <div className="container">

        <div className="text-center mb-5">
          <span className="eyebrow">
            <i className="bi bi-heart-fill"></i>
            Make A Difference
          </span>

          <h2 className="section-title mt-3">
            Causes That Need Your Support
          </h2>

          <p className="section-sub">
            Every donation creates hope and changes someone's life.
            Choose a cause and become part of the change.
          </p>
        </div>

        <div className="row g-4">

          {causes.map((cause, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="cause-card">

                <div className="cause-image">
                  <img
                    src={cause.image}
                    alt={cause.title}
                  />

                  <span className="cause-category">
                    {cause.category}
                  </span>
                </div>

                <div className="cause-content">

                  <h4>{cause.title}</h4>

                  <p>{cause.description}</p>

                  <div className="progress-info">
                    <span>Raised: {cause.raised}</span>
                    <span>Goal: {cause.goal}</span>
                  </div>

                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: cause.progress }}
                    ></div>
                  </div>

                  <a href="#contact" className="cause-link">
                    Donate Now
                    <i className="bi bi-arrow-right"></i>
                  </a>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Causes
