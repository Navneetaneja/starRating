import React from "react";

class Task extends React.Component{
    constructor()
    {
        super();
        this.state={
            name:""
        }
        // this.change=this.change.bind(this);
    }
    change(e)
    {
        this.setState({
            name:e.target.value
        })
    }
    render()
    {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={(e)=>this.change(e)}/>
                <div>{this.state.name}</div>
            </div>
        );
    }
}
export default Task;