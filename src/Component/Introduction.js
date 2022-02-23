import React from "react";
import "./Introduction.css";

function Introduction() {
    return (
        <div className="introduction center-content margin-bottom-big">
            <div className=" ">
                <h2 className="introduction-heading margin-bottom">
                    Welcome to the Largest Automobile production Comany 
                </h2>
                <div className="center">
                    <h2 className="introduction-heading ">in Africa</h2>
                    </div>
                <p className="introduction-paragraph">
Our product range from hold o hold on......Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nam ipsum nobis ea, architecto maxime culpa eligendi incidunt sunt eos quis nulla dolorum, atque iure maiores quaerat consectetur perspiciatis. Nullarem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nam ipsum nobis ea, architecto maxime culpa eligendi incidunt sunt eos quis nulla dolorum, atque iure maiores quaerat consectetur perspiciati. 
                </p>
                
            </div>
            
            <div className="center-content">
                <button className="btn"> Our other brands</button>
            </div>
            <div className="center-content">
                <ul className="list-style"><li className="introduction-box box-2">IVM</li>
                    <li className="introduction-box box-1">ROY</li>
                    <li className="introduction-box box-3">Plastics</li>
                    <li className="introduction-box box-4">Innoson GROUP</li>
                </ul>
            </div>

        </div>
    )
}
export default Introduction;
