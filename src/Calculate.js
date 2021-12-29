import React from 'react';
import "./calculate.css";
class Calculate extends React.Component{
    constructor()
    {
        super();
        this.state={
            name:""
        }
    }
    componentDidMount()
    {
        var buts=document.querySelectorAll(".buttons");
        buts.forEach(but =>{
            but.addEventListener('click',(e)=>{  
            if(e.target.value!=="=")
            {  
            this.setState({
                name:this.state.name+e.target.value
            });
            }
            else
            {
                var ans=eval(this.state.name);
                this.setState({
                    name:ans
                });
            }
        });

        });
    }
    render(){
        return(
            <div align="center">
                <div id="container">
                <div id="screen">{this.state.name}</div>
                <table>
                <tbody>
                <tr><td><button className="buttons" value="7">7</button></td><td><button className="buttons" value="8">8</button></td><td><button className="buttons" value="9">9</button></td><td><button className="buttons" value="+">+</button></td></tr>
                <tr><td><button className="buttons" value="4">4</button></td><td><button className="buttons" value="5">5</button></td><td><button className="buttons" value="6">6</button></td><td><button className="buttons" value="-">-</button></td></tr>
                <tr><td><button className="buttons" value="1">1</button></td><td><button className="buttons" value="2">2</button></td><td><button className="buttons" value="3">3</button></td><td><button className="buttons" value="*">*</button></td></tr>
                <tr><td><button className="buttons" value="0">0</button></td><td><button className="buttons" value=".">.</button></td><td><button className="buttons" value="=">=</button></td><td><button className="buttons" value="/">/</button></td></tr>
                </tbody>
                </table>
                </div>
            </div>
        );
    }
}
export default Calculate;