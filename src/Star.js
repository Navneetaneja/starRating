import React, { useEffect, useState } from 'react';

const Star = (props) => {
    const [index, setIndex] = useState(-1);
    const [loading,setLoading]=useState(true);
    const change = (item) => {
        //console.log(item);
        setIndex(item);
    }
    const emoji=()=>{
        switch(index)
        {
            case 0:
                return <span style={{color:"red"}} className='fa fa-frown-o'></span>
            case 1:
                return <span style={{color:"red"}} className='fa fa-frown-o'></span>
            case 2:
                return <span style={{color:"red"}} className='fa fa-frown-o'></span>
            case 5:
                return <span style={{color:"red"}} className='fa fa-heart'></span>
            default:
                return <span style={{color:"green"}} className='fa fa-smile-o'></span>
        }
    }
    var arr=[1,2,3,4,5];
    useEffect(()=>{
        if(props.mess!==null)
        {
        setTimeout(()=>{
        setLoading(false);
        },1000);
        }
    },[props]);

    return loading?<div className='loader'></div>:(
        <div align="center" style={{ marginTop: "10vh" }}>
            <h3>FEEDBACK</h3>
            {
                arr.map((item,id)=>{
                    // console.log(item);
                    return(
                    <span key={id} style={{color:`${item<=index ? "gold":"black"}`}} onClick={()=>change(item)} className="fa fa-star"></span>
                    );
                })
            }
            <br/>
            {emoji()}
        </div>
    );
}
export default Star;