function Contact() {
  return (
    <div className="container py-5" style={{ minHeight: "100vh" }}>
      <h2 className="text-center fw-bold mb-4">Contact</h2>

      <div className="row justify-content-center">
        {/* Form below */}
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-control" placeholder="Enter name..." />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter email..." />
            </div>

            <div className="mb-3">
              <label className="form-label">Title</label>
              <input type="text" className="form-control" placeholder="Enter title..." />
            </div>

            <div className="mb-3">
              <label className="form-label">Content</label>
              <textarea className="form-control" rows="4" placeholder="Enter content..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>

        {/* Thông tin liên lạc */}
        <div className="col-md-4 mt-4 mt-md-0">
          <div className="p-4 border rounded bg-light">
            <h5 className="fw-semibold mb-3">Contact infomation</h5>
            <p className="mb-1"><strong>Email:</strong> Bachnguyendev193@gmail.com</p>
            <p className="mb-1"><strong>Phone:</strong> 0123 456 789</p>
            <p className="mb-1"><strong>LinkedIn:</strong> linkedin.com/in/nguyenxuanbach</p>
            <p className="mb-1"><strong>GitHub:</strong> https://github.com/BachNguyenDev</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
