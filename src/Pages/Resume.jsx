function Resume() {
  return (
    <div className="container py-5" style={{ minHeight: "100vh" }}>
      <h2 className="text-center fw-bold mb-4">Profile Details</h2>

      {/* About me */}
      <div className="mb-5">
        <h4 className="fw-semibold mb-3">About me</h4>
        <ul className="list-unstyled">
          <li>
            <strong>Full name:</strong> Nguyễn Xuân Bách
          </li>
          <li>
            <strong>Birth:</strong> 19/03/2002
          </li>
          <li>
            <strong>Giới tính:</strong> Nam
          </li>
          <li>
            <strong>Address:</strong> Go Vap District, Ho Chi Minh City
          </li>
          <li>
            <strong>Email:</strong> bachnguyendev193@gmail.com
          </li>
          <li>
            <strong>Phone:</strong> 0123 456 789
          </li>
        </ul>
      </div>

      {/* Career Goal */}
      <div className="mb-5">
        <h4 className="fw-semibold mb-3">Career Goal</h4>
        <p className="text-muted">
          I aim to become a Frontend Developer capable of building visually
          appealing, smooth, and user-friendly interfaces. My goal is to
          continuously learn and improve my knowledge and skills, contributing
          to products that deliver real value to users and businesses.
        </p>
      </div>

      {/* Education */}
      <div className="mb-5">
        <h4 className="fw-semibold mb-3">Education</h4>
        <ul className="list-unstyled">
          <li>
            <strong>School:</strong> University of Transport
          </li>
          <li>
            <strong>Major:</strong> Information and Technology
          </li>
          <li>
            <strong>GPA:</strong> 3.0/4.0
          </li>
          <li>
            <strong>Duration:</strong> 2021 - 2025
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
