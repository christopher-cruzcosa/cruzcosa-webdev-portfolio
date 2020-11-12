import React from "react";

function Wrapper(props) {
   return <div role="main" className="flex-shrink-o" style={{backgroundColor: "whitesmoke"}}>
       <div className="container"{...props} ></div>
   </div>;
}

export default Wrapper;