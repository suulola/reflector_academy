import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <div className="bg-reflector row p-4">

        <div className="col-sm-12 col-md-3">
          <h5 className="footer_header">Connect with Us</h5>
          <div className="d-flex social_media_links pb-3 pt-2">
            <a href="http://facebook.com/ReflectorAcad"><img src="/images/linkedin.svg" alt="linkedIn link"/></a>
            <a href="http://facebook.com/ReflectorAcad"><img src="/images/facebook.svg" alt="facebook link"/></a>
            <a href="http://facebook.com/ReflectorAcad"><img src="/images/instagram.svg" alt="instagram link"/></a>
            <a href="http://facebook.com/ReflectorAcad"><img src="/images/twitter.svg" alt="twitter link"/></a>
            <a href="http://facebook.com/ReflectorAcad"><img src="/images/youtube.svg" alt="youtube link"/></a>
           
          </div>
          <p className="footer_item">Call:  +2348069219037, +2347061026139</p>
          <h5></h5>
          <p className="footer_item">Send us an e-mail info@reflectoracademy.com</p>
        </div>
        <div className="col-sm-12 col-md-3">
          <h5 className="footer_header">ABOUT US</h5>
          <p className="footer_item">Vision</p>
          <p className="footer_item">Mission</p>
        </div>
        <div className="col-sm-12 col-md-3">
          <h5 className="footer_header">PROGRAMMES</h5>
          <p className="footer_item">Career Day</p>
          <p className="footer_item">Reflector Web Series</p>
          <p className="footer_item">Workshop/Conferences</p>
        </div>
        
        <div className="col-sm-12 col-md-3">
          <h5 className="footer_header">RESOURCE LIBRARY</h5>
          <p className="footer_item">Newsletter</p>
          <p className="footer_item">Blog</p>
          <p className="footer_item">Picture</p>
          <p className="footer_item">Gallery</p>
          <p className="footer_item">Free Ebook</p>
          <p className="footer_item">Video</p>
          <p className="footer_item">Library</p>
        </div>
        

      </div>
    )
}

export default Footer
