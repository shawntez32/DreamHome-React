import React from "react";

function Header() {
  return (
    <>
    <div className="basic">
  <div className=" nav2 navbar navbar-expand-lg navbar-light justify-content-between">
  <a className="navbar-brand" href="#">DreamHome</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Price
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">$125,000</a>
          <a className="dropdown-item" href="#">$150,000</a>
          <a className="dropdown-item" href="#">$175,000</a>
          <a className="dropdown-item" href="#">$200,000</a>
          <a className="dropdown-item" href="#">$225,000</a>
          <a className="dropdown-item" href="#">$250,000</a>
          <a className="dropdown-item" href="#">$275,000</a>
          <a className="dropdown-item" href="#">$300,000</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Ballin outta control!</a>
        </div>
      </li>
      <form className="form-inline">
        <input id="myInput" className="form-control mr-sm-2" type="input" placeholder="Search" aria-label="Search"/>
      </form>
      <button className="btn btn-outline-dark nav-item navbar-button" style={{height: '40px'}} type="submit">Search</button>
    </ul>
  </div>
</div>
  <div className="container">
    <div className="row">
      <div id="matchList"></div>
    </div>
  </div>
      </div>
      <div className="nav3">
        <div className="container secondNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><h2>Just Visiting?</h2></li>
            <li>
              <div className="row nav-item">
              <div className="col-lg-3 col-md-6 col-sm-12 p-0 ">
                  <input type="text" className="form-control search-slt" placeholder="Enter Pickup City"/>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 p-0">
                  <input type="text" className="form-control search-slt" placeholder="Enter Drop City"/>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 p-0">
                  <select className="form-control search-slt" id="exampleFormControlSelect1">
                      <option>Select Vehicle</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                  </select>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 p-0">
                  <button type="button" className="btn btn-dark">Search</button>
              </div>
              </div>
            </li>
          </ul>
          </div>
      </div>
    </ >
  );
}

export default Header;