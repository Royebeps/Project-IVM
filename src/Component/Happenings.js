import React, {}  from "react";
import "./happenings.css";
import Fetcher from "./axiosHandler";
import axios from "axios";




function Happenings({fetchUrl}) {
  





    // const [movies, setMovies] = useState([]);
    

//a snipet of code which runs based on a specific condition

// useEffect(() => {
//     async function fetchData() {
//     const requests = await axios.get(fetchUrl);
//     setMovies(requests.data.results)
//     return requests;
//     }
//     fetchData();
// }, []);

    return (


        <div className="happenings-container">

            <div className="item item-1 ">
             1   
</div>
           <div className="item item-2 ">
                 
</div>
           <div className="item item-3">
               3 
</div>
           <div className="item item-4">
              4  
</div>
            <div className="item item-5">
                <button>
increase 5
                </button>
            
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