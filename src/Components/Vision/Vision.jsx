import React from "react";
import backgroundImage from "../../../public/images/Vision.jpg"; // Update the path with your image location

const Vision = () => {
  return (
    <div
      className="about-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="section">
        <h1>Vision</h1>
        <p>
          We offer high tech driven regenerative & lifestyle based devices aimed
          at improving the quality of life & lifestyle, through innovation of
          material science, engineering technology & manufacturing in Egypt.
        </p>
      </div>
      <div className="section">
        <h1>Mission</h1>
        <p>
          The mission of QR Life Sciences is to be an innovative manufacturer of
          regenerative technology & life technology devices. Our objective is to
          reach the entire nation & the world with our therapeutic & living
          technology products. Affordability of high technology being the key to
          growth.
        </p>
      </div>
      <div className="section">
        <h1>About Us</h1>
        <p>
          At QRLife, we are dedicated to empowering individuals with innovative
          solutions that bridge technology and healthcare. Our platform
          integrates the simplicity of QR codes with critical health and
          emergency data, ensuring that vital information is accessible when it
          matters most. Whether you're managing personal health records,
          providing emergency responders with essential details, or enhancing
          communication between healthcare providers, QRLife is designed to make
          life safer and easier for everyone.{" "}
        </p>
      </div>
    </div>
  );
};

export default Vision;
