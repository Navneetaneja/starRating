import React, { useState } from 'react';
const Star = () => {
    const [index, setIndex] = useState(-1);
    const change = (item) => {
        //console.log(item);
        setIndex(item);
    }
    var arr=[1,2,3,4,5];
    return (
        <div align="center" style={{ marginTop: "10vh" }}>
            {
                arr.map((item,id)=>{
                    // console.log(item);
                    return(
                    <span key={id} style={{color:`${item<=index ? "gold":"black"}`}} onClick={()=>change(item)} className="fas fa-star"></span>
                    );
                })
            }
        </div>
    );
}
export default Star;