import { useState, useEffect } from "react";
import avatar from "../assets/avatar.jpg";
import MyCV from "../assets/CV_FE_Nguyen_Xuan_Bach.pdf";
import { Link } from "react-router-dom";
export default function HomePage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ minHeight: "100vh", background: "#f8f9fa" }}
    >
      <img
        src={avatar}
        alt="Avatar"
        className="mb-4"
        style={{
          width: windowWidth >= 768 ? "250px" : "200px",
          height: windowWidth >= 768 ? "250px" : "200px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "4px solid #0dfd35ff",
        }}
      />

      <h1 className="fw-bold">Nguyễn Xuân Bách</h1>
      <h4 className="text-primary mb-3">Frontend Developer Intern</h4>

      <p className="text-muted mb-4 px-5" style={{ maxWidth: "600px" }}>
        "Hello, my name is Nguyen Xuan Bach, and I am eager to join as a
        frontend developer intern. With a foundation in HTML, CSS, and
        JavaScript, I am passionate about building responsive and user-friendly
        interfaces. I am excited to learn, contribute to real projects, and grow
        as a developer in your team."
      </p>

      <div className="d-flex gap-3">
        <Link to="/resume" className="btn btn-primary px-4 py-2">
          Xem Hồ Sơ Chi Tiết
        </Link>

        <a href={MyCV} download="CV_FE_Nguyen_Xuan_Bach.pdf" className="btn btn-outline-primary px-4 py-2">
          Tải CV
        </a>
      </div>
    </section>
  );
}
