import React from "react";
import logo from '../../../public/images/QL-logo.png'

export default function Footer() {
  return (
    <footer>
      <div className="container max footer">
        <div className="logo"><img src={logo} alt="" /></div>
        <div className="app-info">
          <p>
            Since Healthcare cover is increasingly becoming a necessity not a
            luxury, to be able to cope with the continuous increase in medical
            expenses, LifeHC’s has dedicated itself to the development of the
            right health product for each segment of the society, a good
            management of its operations, as well as an efficient, objective and
            fair claims settlement service.
          </p>
        </div>
        <div className="our-services">
          <h3>Our Smart Services</h3>
          <ul>
            <li>Online Services</li>
            <li>Medical network access</li>
            <li>HR Reports</li>
            <li>Mobile Application</li>
            <li>TContinuation options</li>
            <li>Health & Wellbeing benefits</li>
          </ul>
        </div>
      </div>
      <p className="copy-rights">Yousef Hassan - copyrights - 2024</p>
    </footer>
  );
}
