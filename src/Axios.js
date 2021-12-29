import axios from "axios";
import { useEffect, useState } from "react";

function Axios()
{
    const [loc,setLoc]=useState();
    const [l,set]=useState();
    useEffect(()=>{
        try{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${l}&appid=0898cd8f67b9a99ab0b05dcc63df7fbf`)
        .then(response=>setLoc(response.data));
        }
        catch(e)
        {
            setLoc("");
        }
    },[l]);
    return(
        <div>
            <input onChange={(e)=>{set(e.target.value)}} type="text" placeholder="Enter location"/>
            {
                JSON.stringify(loc)
            }
        </div>
    );
}

export default Axios;