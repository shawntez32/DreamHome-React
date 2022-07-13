import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
    <div className="grid3">
            <div className="footer-div">
            <footer id="footer" class="footer">
                <div id="information" class="col">
                  <h4>INFORMATION</h4>
                  <a href="">About us</a>
                  <a href="">Contact Us</a>
                  <a href="">Term & Conditions</a>
                  <a href="">Shipping Guide</a>
                </div>
                <div id="useful-links" className="col">
                  <h4>USEFUL LINK</h4>
                  <a href="">Online Store</a>
                  <a href="">Customer Services</a>
                  <a href="">Promotion</a>
                  <a href="">Top Brands</a>
                </div>
                <div id="iZ" className="col">
                  <span><i className="bx bxl-facebook-square"></i></span>
                  <span><i className="bx bxl-instagram-alt"></i></span>
                  <span><i className="bx bxl-github"></i></span>
                  <span><i className="bx bxl-twitter"></i></span>
                  <span><i className="bx bxl-pinterest"></i></span>
                </div>
            </footer>
            </div>
            </div>
    </>
  );
}

export default Footer;