import React, { useEffect, useState } from "react";

const GoToTop = ()=>{
    const[isVisible, setIsvisible]=useState(false);
    const goToBtn =() =>{
    window.scrollTo({ top:0, left:0, behavior:"smooth"});
};


const listenToScroll =()=>{

    let heightToHidden = 200;
    const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
    
    if(winScroll > heightToHidden){
        setIsvisible(true);
    }
    else{
        setIsvisible(false);    
    }
};

useEffect(()=>{
    if (typeof window !== "undefined") { 
        window.addEventListener("scroll", listenToScroll);

        return () => window.removeEventListener("scroll", listenToScroll);
    // window.addEventListener("scroll", listenToScroll);
    // return ()=> window.removeEventListener("scroll", listenToScroll);
}
},[]);

return(
    <section className="go-to-section">
        {isVisible &&(
        <div className="top-btn" onClick={goToBtn}>
        <i className="fa-solid fa-arrow-up"></i>
        </div>
    )}
</section>

);
};
export default GoToTop;
