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
</div>
        </div>
       
    )
};

export default Footer;