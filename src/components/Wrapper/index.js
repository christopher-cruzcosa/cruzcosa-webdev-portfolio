import React from "react";

function Wrapper(props) {
   return <main className="flex-shrink-0">
       <div className="container wrapper" style={{backgroundColor: "whitesmoke"}} {...props} ></div>
   </main>;
}

export default Wrapper;