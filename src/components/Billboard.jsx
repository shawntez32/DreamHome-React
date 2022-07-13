import React from "react";

const customStyle = {height: '620px'};

function Billboard() {
    return(
        <>
        <center id="billboard">
          <div id="imageContainer" class="imageContainer">
          <img className="icImage" src="Images/a7.jpg"/>
          <div className="caption BL"><p>Here at DreamHome we want to simplify finding your perfect home by considering all the factors.</p></div>
          <div className="caption TL" ><h2>Our Mission</h2></div>
          </div>
		    <iframe id="map" style={{customStyle}} src="https://maps.google.co.uk/maps?f=q&source=s_q&hl=en&geocode=&815&sspn=8.047465,13.666992&ie=UTF8&hq=&hnear=15+Springfield+Way,+Hythe+CT21+5SH,+United+Kingdom&t=m&z=14&ll=51.077429,1.121722&output=embed"></iframe>
  </center>
  </>
    )
}

export default Billboard;