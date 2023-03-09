const Contact = () => {
    return (
        <div className="container col-md-12">
          <h1 className="mb-3" style={{color: "#414141"}}>Contact Us</h1>
          <hr />
          <form>
            <div className="mb-3 col-md-4">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input className="form-control" type="text" id="name" required />
            </div>
            <div className="mb-3 col-md-4"  >
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input className="form-control" type="email" id="email" required />
            </div>
            <div className="mb-3  col-md-4">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea className="form-control" id="message" required />
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>&nbsp;
            {/* <button className="btn btn-danger" type="button">Close</button> */}
          </form>
        </div>
      )
    }
  
  export default Contact;