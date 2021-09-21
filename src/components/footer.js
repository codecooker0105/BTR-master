import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container v-r v-c">
          <div className="footer-content">
            <p className="explain v-c">
              Beyond the Runway revolutionizes online shopping by<br />
              empowering customers to try on clothes with a custom fit<br />
              virtual avatar. With BTR’s technology, brands can transform<br />
              their merchandise into realistic, 3D garments on their websites.<br />
              Customers can then try the pieces on their custom avatars,<br />
              share the looks across social media, and build virtual closets.<br />
              Margaux Avedisian and Deborah Metts founded Beyond the Runway in 2020<br />
              after witnessing the fashion industry’s need to innovate and<br />
              respond to pressing issues of sustainability, diversity, and technology.<br />
              The results are improved fit accuracy, reduced return rates,<br />
              and a personalized, top quality, shopping experience.<br />
              It’s the future of shopping for clothes.
            </p>
            <div className="footer-links v-r">
              <p className="link-header">Navigation</p>
              <NavLink to="#">About Us</NavLink>
              <NavLink to="#">Shop</NavLink>
              <NavLink to="#">Avatar</NavLink>
              <NavLink to="#">Closet</NavLink>
              <NavLink to="#">Faq</NavLink>
            </div>
            <div className="footer-links v-r">
              <p className="link-header">Contact us</p>
              <a href="mailto:info@beyondtherunway.com" style={{textTransform: 'lowercase'}}>info@beyondtherunway.com</a>
            </div>
          </div>
          <p>@{new Date().getFullYear()}, Beyond The Runway</p>
          <p>Private and Confidential</p>
        </div>
      </div>
    );
  }
}

export default connect()(Footer);
