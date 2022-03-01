import React, {  useEffect, useState }  from "react";
import "./happenings.css";
import"./Introduction.css"
// import Fetcher from "./axiosHandler";
// import axios from "axios";




function Happenings() {


     const styles = {
          style: "item item-1"
     };

     const [show, useShow] = useState(false);

     function Clicked() {
          let x = true
          useShow(true);
          return x;
     };



    return (
<section>
        <ul className="happenings-navigator">
          <li>news<i className="ios-md-bookmarks"></i></li>
        <li>popular<i className="ios-star-outline"></i></li>
          <li>videos</li></ul>
              <div  className={show?"happenings-container":"happenings-container-clear"}>

                   <div className={styles.style}>
                         <div className="black-happenings"><h2 className="black-happenings-font ">this ferrari is almost at my reach</h2></div>
             1 1111  
</div>
           <div className="item item-2 ">
                       <div className="black-happenings">222</div>
                222
</div>
                   <div className="item item-3">
                          <div className="black-happenings">222</div>
               3 333
</div>
                   <div  className="item item-4">
                         <div className="black-happenings">222</div>
              4  444
</div>
                   <div className="item item-5">
                         <div className="black-happenings">222</div>
               5555
            
            </div>
                   <div className="item item-6">
                        <div className="black-happenings">222</div>
               6
            </div>
                   <div className="item item-7">
                        <div className="black-happenings">222</div>
               7
            </div>
                   <div className="item item-8">
                        <div className="black-happenings">222</div>
               8
            </div>
                   <div className="item item-9">
                        <div className="black-happenings">222</div>
               9
                   </div>
                   
                   


                   <div className={show ? "item item-10" : "clear"}>
                        <div className="black-happenings">222</div>
               10
          </div>
                   <div className={show ? "item item-9" : "clear"}>
                        <div className="black-happenings">222</div>
               11
          </div>
                   <div className={show ? "item item-5" : "clear"}>
                        <div className="black-happenings">222</div>
               12
          </div>
                   <div className={show ? "item item-9" : "clear"}>
                        <div className="black-happenings">222</div>
               13
          </div>
                   <div className={show ? "item item-4" : "clear"}>
                        <div className="black-happenings">222</div>
               13
            </div>

<div className={show?"item item-9":"clear"}>
               13
          </div>
        <div className={show?"item item-9":"clear"}>
               13
                        </div>
              </div>
              <div className="center">
                   <button id="o" className={show?"btn-clear":"btn"} onClick={ Clicked} >show more &#8595;</button>
              </div>
        
        </section>
    )
}

export default Happenings;