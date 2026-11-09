
function Navbar() {
  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Causes", link: "#causes" },
    { name: "Volunteers", link: "#volunteers" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" }
  ]

  return (
    <nav className="navbar navbar-expand-lg navbar-hw" id="mainNav">
      <div className="container">

        {/* Logo */}
        <a className="hw-logo" href="#home">
          <span className="hw-logo-mark">
            <i className="bi bi-heart-fill"></i>
          </span>
          <span>
            Hope<span className="dot">well</span>
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-2"></i>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navMenu">

          <ul className="navbar-nav nav-hw mx-auto mt-3 mt-lg-0">
            {navLinks.map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={item.link}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Donate Button */}
          <a href="#causes" className="btn-hw-primary">
            Donate Now
            <i className="bi bi-arrow-right ms-2"></i>
          </a>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
