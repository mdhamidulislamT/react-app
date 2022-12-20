import NavbarTwo from "../components/NavbarTwo";

const ContactForm = () => {
  return (
    <div>
      <NavbarTwo />
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <form id="contactForm" className="mt-5">
            <div className="mb-3">
              <input className="form-control" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-3">
              <input className="form-control" placeholder="Enter your phone" />
            </div>
            <div className="mb-3">
              <button className="btn btn-lg btn-success"> Send Now</button>
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default ContactForm;
