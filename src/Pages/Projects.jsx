import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
function Projects() {
  const projectList = [
    {
      img: project1, 
      title: "Website xem phim",
      desc: "Web xem phim sử dụng API TMDB, có chức năng tìm kiếm và xem trailer.",
      tech: "ReactJS, Bootstrap, TMDB API",
      github: "https://github.com/BachNguyenDev/Movie-Website",
      demo: "https://movie-website-murex-nine.vercel.app/"
    },
    {
      img: project2,
      title: "Ecommerce Website",
      desc: "Web thương mại điện tử với chức năng giỏ hàng và thanh toán.",
      tech: "ReactJS, Redux, Bootstrap, axios",
      github: "https://github.com/BachNguyenDev/Ecomerce-Website",
      demo: "https://ecomerce-website-lilac.vercel.app/"
    },
    {
      img: project3,
      title: "Portfolio cá nhân",
      desc: "Website giới thiệu bản thân, kỹ năng và các dự án đã thực hiện.",
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/BachNguyenDev/Portfolio",
      demo: "https://portfolio-wine-nu-19.vercel.app/"
    }
  ];

  return (
    <div className="container py-5" style={{ minHeight: "100vh" }}>
      <h2 className="text-center fw-bold mb-5">My Projects</h2>

      <div className="row g-4">
        {projectList.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img src={project.img} className="card-img-top" alt="project thumbnail" />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{project.title}</h5>
                <p className="card-text text-muted" style={{ flexGrow: 1 }}>
                  {project.desc}
                </p>

                <p className="small"><strong>Công nghệ:</strong> {project.tech}</p>

                <div className="mt-auto d-flex justify-content-between">
                  <a href={project.github} target="_blank" className="btn btn-outline-dark btn-sm">
                    GitHub
                  </a>
                  <a href={project.demo} target="_blank" className="btn btn-primary btn-sm">
                    Demo
                  </a>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
