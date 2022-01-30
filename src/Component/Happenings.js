import React, {useState}  from "react";
import "./happenings.css";




function Happenings() {
    const [count, setCounter] = useState(7);
    
    const increase = () => {
        setCounter(count + 6);
    }
    
    return (


        <div className="happenings-container">

            <div className="item item-1">
             1   
</div>
           <div className="item item-2">
                2
</div>
           <div className="item item-3">
               3 
</div>
           <div className="item item-4">
              4  
</div>
            <div className="item item-5">
                <button onClick={increase}>
increase 5
                </button>
                {count}
            </div>
              <div className="item item-6">
               6
            </div>
              <div className="item item-7">
               7
            </div>
             <div className="item item-8">
               8888
            </div>
             <div className="item item-9">
               9999
            </div>
           </div>
    )
}

export default Happenings;