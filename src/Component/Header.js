import React from "react";
import "./Header.css"
 
import "./fine car.jpg";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";





const slideImages = [{
    u: 'fine car.jpg',
    caption: 'Slide 1',
    intro:'grand IMMORTAL'
     
},
{
    u: 'fine\ car.jpg',
    caption: 'Slide 2',
    intro:'saviour IMMORTAL'
     
},
{
    u: 'fine car.jpg',
    caption: 'this car ',
    intro:'G hahahahahhahahhahahahahhahhaha IMMORTAL' 
     
    },
    {
        u: "backgroundImage: url('fine car.jpg')",
        caption: 'slide 4',
        intro:'G IMMORTAL'
        
    }];

function underConstruction(){
    alert("this section is still under construction");
};


const Header = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide"  key={index}>
                         <div style={{
                            backgroundImage: `url(${slideImages.u})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                            height: "83vh",
                            width: "100%",
                            backgroundRepeat:"no-repeat"
                        }} >
                            {/* <img alt='him' src={slideImage.url}/> */}
                            <span className="header-caption">{slideImage.caption}</span>
                            <span className="header-intro" onClick={underConstruction}>{slideImage.intro }</span>
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