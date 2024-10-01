function PropsExperiment({ userinfo }) {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://cdn.pixabay.com/photo/2016/09/24/03/20/man-1690965_1280.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{userinfo.uname}</h5>
            <p className="card-text">{userinfo.ubio}</p>
            <a href="#" className="btn btn-primary">
              {userinfo.ulink}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropsExperiment;
