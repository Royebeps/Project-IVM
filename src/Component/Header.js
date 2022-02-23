import React from "react";
import "./Header.css"
 
import "./fine car.jpg";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";





const slideImages = [{
    url: 'fine car.jpg',
    caption: 'Slide 1'
},
{
    url: 'fine\ car.jpg',
    caption: 'Slide 2'
},
{
    url: 'src/Component/fine car.jpg',
    caption: 'this car was a part to the future revolutionized with cutting edge technology'
    },
    {
        url: 'images/slide_4.jpg',
        caption:'slide 4'
}];


const Header = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide header " key={index}>
                         <div style={{
                            backgroundImage: `url(${slideImages.url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                            height: "83vh",
                            width: "100%",
                            backgroundRepeat:"no-repeat"
                        }} >
                            {/* <img alt='him' src={slideImage.url}/> */}
                            <span className="header-caption">{slideImage.caption}</span>
                        </div>
                    </div>
    ))}
            </Slide>
             <div className="banner_fade"></div>
            </div>
        )
}


// function () {
//     return (
//         <header>
//         <div>
//             <div className="header">
//                 <h2 className="header-description">learn more about</h2>
            
//             </div> 
           
            
//             </div>
//             </header>
//     )
// }

export default Header;