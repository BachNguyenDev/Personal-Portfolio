function Skills() {
  return (
    <div className="container py-5" style={{ minHeight: "100vh" }}>
      <h2 className="text-center fw-bold mb-5">Skills</h2>

      <div className="row">
        
        <div className="col-md-6 mb-4">
          <h4 className="fw-semibold mb-3">Technical Skills</h4>

          {/*Programing Language*/}
          <p className="fw-semibold mb-1">Programing Language</p>
          <div className="mb-3">
            <label>JavaScript</label>
            <div className="progress">
              <div className="progress-bar" style={{ width: "80%" }}>80%</div>
            </div>
          </div>

          <div className="mb-3">
            <label>C#</label>
            <div className="progress">
              <div className="progress-bar bg-success" style={{ width: "75%" }}>75%</div>
            </div>
          </div>

          {/* Framework / Library */}
          <p className="fw-semibold mt-4 mb-1">Framework / Library</p>
          <div className="mb-3">

            <label>ReactJS</label>
            <div className="progress">
              <div className="progress-bar bg-info" style={{ width: "85%" }}>85%</div>
            </div>
          </div>

          <div className="mb-3">
            <label>Bootstrap</label>
            <div className="progress">
              <div className="progress-bar bg-warning" style={{ width: "90%" }}>90%</div>
            </div>
          </div>

          <div className="mb-3">
            <label>Redux</label>
            <div className="progress">
              <div className="progress-bar bg-dark" style={{ width: "80%" }}>80%</div>
            </div>
          </div>

          <div className="mb-3">
            <label>ExpressJS</label>
            <div className="progress">
              <div className="progress-bar bg-secondary" style={{ width: "80%" }}>80%</div>
            </div>
          </div>

          {/* Database */}
          <p className="fw-semibold mt-4 mb-1">Database</p>
          <div className="mb-3">
            <label>PostgreSQL</label>
            <div className="progress">
              <div className="progress-bar bg-danger" style={{ width: "70%" }}>70%</div>
            </div>
          </div>

          {/* Tools */}
          <p className="fw-semibold mt-4 mb-1">Tools</p>
          <ul>
            <li>Git / GitHub</li>
            <li>Postman</li>
            <li>Visual Studio Code</li>
          </ul>
        </div>

        {/* Solf Skills && Languages*/}
        <div className="col-md-6">
          <h4 className="fw-semibold mb-3">Soft Skills</h4>
          <ul>
            <li>Good Communication</li>
            <li>Team Work</li>
            <li>Time Management</li>
            <li>Problem-Solving Skills</li>
          </ul>

          <h4 className="fw-semibold mt-4 mb-3">Languages</h4>
          <p><strong>English: </strong>Reading docmument, basic comunication</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
