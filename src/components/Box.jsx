import React from "react";

function Box() {
    return(
        <>
        <div className="grid1">
                  <div className="box">
                      <div className="top">
                        <div className="overlay">
                          <img className="house_image" alt="image" src='Images/house.webp' />
                        </div>
                        <div className="bottom">
                          <ul className="list-inline mrg-0 clr-535353">
                            <li href="#"><h4>$475,000</h4> </li>
                            <li><h4>4,340 SqFt</h4></li>
                            <li><h4>5 Beds</h4></li>
                            <li><h4>5 Baths</h4></li>
                            <li><h4>609 W Gravers Ln</h4></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    </div>
        </>
    )
}

export default Box;