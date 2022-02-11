import React from "react";
import "./Header.css"
 


import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";





const slideImages = [{
    url: "fine car.jpg",
    caption: 'Slide 1'
},
{
    url: 'fine car1.jpg',
    caption: 'Slide 2'
},
{
    url: 'src/Component/fine car.jpg',
    caption: 'Slide 3'
    },];
console.log(slideImages[0]['url']);

const Header = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <div style={{
                            backgroundImage: `url(${slideImages.url})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',

                            height: '83vh',
                            width: '100%',
                        }}>
                            <span>{slideImage.caption}</span>
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