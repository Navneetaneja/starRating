import React from 'react';

export default class ApiFetch extends React.Component{
    constructor()
    {
        super();
        this.state={
            items:[],
            isLoaded:false,
            error:null
        }
    }
    componentDidMount()
    {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(result=>{
            this.setState({
                isLoaded:true,
                items:result
            })
        },error=>{
            this.setState({
                isLoaded:true,
                error:error
            })
        })
    }
    render()
    {
        const items=this.state.items;
        if(this.state.error!==null)
        {
            return <div>ERROR : {this.state.error.message}</div>
        }
        else if(!this.state.isLoaded)
        {
            return <div>Loading....</div>;
        }
        return (
            <div>
                <ul>
                    {
                        items.map(item=>(
                            <li key={item.id}>
                                <h1>{item.title}</h1>
                                <p>{item.body}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}