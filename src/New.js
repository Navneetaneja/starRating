import React from 'react';

class New extends React.Component{

    constructor(){
        super();
        this.state={
            data:
            [
            {
                id:101,
                name:"A",
                marks:"90%"
            },
            {
                id:102,
                name:"B",
                marks:"80%"
            },
            {
                id:103,
                name:"C",
                marks:"70%"
            }
            ]
        }
    }
    render(){
        return(
            <div>
                <table>
                    <thead>
                        <tr><td>ID</td><td>Name</td><td>Marks</td></tr>
                    </thead>
                <tbody>
                {this.state.data.map((temp,i)=>{
                 return(
                     <Values key={i} id={temp.id} name={temp.name} marks={temp.marks}/>
                 );
                })}
                </tbody>
                </table>
            </div>
        );
    }
}

class Values extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.id}</td><td>{this.props.name}</td><td>{this.props.marks}</td>
            </tr>
        );
    }
}
export default New;