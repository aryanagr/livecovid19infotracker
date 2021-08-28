import React from 'react';
import { useState } from 'react';
const Time =()=>{
    let newdate=new Date().toLocaleDateString();
     let newtime=new Date().toLocaleTimeString();
     const [ctime,setctime]=useState(newtime);
     const [cdate,setcdate]=useState(newdate);
     const updatedatetime=()=>{
         setctime(new Date().toLocaleTimeString());
         setcdate(new Date().toLocaleDateString());
     }
     setInterval(updatedatetime,1000);
     setInterval(updatedatetime,1000);
    return(
    <footer className="page-footer font-small blue">


        <div className="footer-copyright text-center py-3">
           {cdate} {ctime}  
           </div>


    </footer>
);
}
export default Time;