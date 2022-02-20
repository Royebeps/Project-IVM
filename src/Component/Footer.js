import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
             <div className="row center-text wrap">
                <div className="col-1-4"><p className= "footer-p">Shopping</p></div>
           <div className="col-1-4"><p className= "footer-p">More topics</p></div>
         <div className="col-1-4"><p className= "footer-p">All about cars</p></div>
         <div className="col-1-4"><p className= "footer-p">Discover More</p></div>
  </div>
            <div className="row center-text space">
                <div className="col-1-4"><ul className="footer-list">
                    <li className=" footer__list-child">Browse</li>
                    <li className=" footer__list-child">Evergree</li>
                    <li className=" footer__list-child">Sports</li>
                    <li className=" footer__list-child">Driving events</li>
                <li className=" footer__list-child">something</li></ul></div>
                <div className="col-1-4">
                    <ul className="footer-list">
                    <li className=" footer__list-child">Browse</li>
                    <li className=" footer__list-child">Evergree</li>
                    <li className=" footer__list-child">Sports</li>
                    <li className=" footer__list-child">Driving events</li>
                <li className=" footer__list-child">something</li></ul>
                </div>
                                <div className="col-1-4">
                    <ul className="footer-list">
                    <li className=" footer__list-child">Browse</li>
                    <li className=" footer__list-child">Evergree</li>
                    <li className=" footer__list-child">Sports</li>
                    <li className=" footer__list-child">Driving events</li>
                <li className=" footer__list-child">something</li></ul>
                </div>
                                <div className="col-1-4">
                    <ul className= "footer-list">
                    <li className=" footer__list-child">Browse</li>
                    <li className=" footer__list-child">Evergree</li>
                    <li className=" footer__list-child">Sports</li>
                    <li className=" footer__list-child">Driving events</li>
                <li className=" footer__list-child">something</li></ul>
        </div>
            </div>

            <div className="wrap widerSpace">
              <h2 className= "footer-p">Stay Informed</h2>  
  </div>
            <div className="space">
                <p className=" footer__list-child"> Follow us and use the following social media to get in</p> 
                <div><p className=" footer__list-child"> contact with us and share how much you love our product, your passion for our brand</p></div>
                <ul className="footer-logo">
                    <li className="ion-logo-instagram big"></li>
                     <li className="ion-logo-twitter big"></li>
                    <li className="ion-logo-linkedin big"></li>
                    <li className="ion-logo-facebook big"></li>
                </ul>
                      <div className="wrap widerSpace up"></div>
            </div>
                      <div className="wrap widerSpace">
                <div className="footer-group">
                    <h2 className="footer-company f1">IVM</h2>
                    <h2 className="footer-company">Innoson GROUP</h2>
                    <h2 className="footer-company f3">ROY</h2>
              </div>
            </div>
             <p className="space footer__list-child"> This is our updated website... Feel free to contact our developer</p> 
        </div>
       
    )
};

export default Footer;