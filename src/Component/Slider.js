// import

// function slider()  {
    

//     return (
//         <div>
//         <div className="slideshow-container">
//             <div className="mySlides fade">
//                 <div className="numbertext">
// 1/3
//                 </div>
//                 <img src="/src/Component/fine car.jpg" alt="photoss" style={"width:100%"}></img>
//                 <div className="text">caption text</div>
//             </div>
//              <div className="mySlides fade">
//                 <div className="numbertext">
// 2/3
//                 </div>
//                 <img src="/src/Component/fine car.jpg" alt="photoss" style={"width:100%"}></img>
//                 <div className="text">caption text</div>
//             </div>
//              <div className="mySlides fade">
//                 <div className="numbertext">
// 3/3
//                 </div>
//                 <img src="/src/Component/fine car.jpg" alt="photoss" style={"width:100%"}></img>
//                 <div className="text">caption text</div>
//             </div>

//             <a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
//             <a className="next" onClick={plusSlides(1)}>&#10095;</a>
//         </div>
        
//                 <div>
//                     <span className="dot" onClick={currentSlide(1)}></span>
//                     <span className="dot" onClick={currentSlide(2)}></span>
//                     <span className="dot" onClick={currentSlide(3)}></span>
//                 </div>

//                 </div>
//     )
// }


// import React from "react";
// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";





// const slideImages = [{
//     url: "fine car.jpg",
//     caption: 'Slide 1'
// },
// {
//     url: 'fine car1.jpg',
//     caption: 'Slide 3'
// },
// {
//     url: 'fine car.jpg',
//     caption: 'Slide 3'
//     },];

// const Slideshow = () => {
//     return (
//         <div className="slide-container">
//             <Slide>
//                 {slideImages.map((slideImage, index) => (
//                     <div className="each-slide" key={index}>
//                         <div style={{ 'backgroundImage': `url(${slideImage.url})` }}>
//                             <span>{ slideImage.caption }</span>
//                         </div>
//                     </div>
//                 ))}
//             </Slide>
//             </div>
//         )
// }
