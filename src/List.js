import React from 'react';
import 'tachyons';
const List = (props) => {
    return(
        <div className="bg-light-green dib ma2 pa2 grow shadow">
            <img src={"https://joeschmoe.io/api/v1/"+props.name} alt="img"/>
            <h1 className="tc">Hello {props.name}</h1>
            <p>{props.work}</p>
        </div>
    );

}
export default List;
