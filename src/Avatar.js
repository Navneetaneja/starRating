import React,{Component} from 'react';
import List from './List';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
class Avatar extends Component{
    constructor(){
        super();
        this.state={
            name:"welcome to my world"
        }
    }
    nameChange(){
        this.setState({
            name:"HI ! Now you can explore !!!!!"
        })
    }
    render(){
    const arraylist = [
        {
            name:'navneet',
            work:'web developer'
        },
        {
            name:'vishu',
            work:'frontend'
        }
    ]
    const card = arraylist.map((avatarlist,i)=>{
        return(
            <List key={i} name={arraylist[i].name} work={arraylist[i].work}/>
        );
    })
    return(
        <div>
            <nav class="navbar bg-dark navbar-dark fixed-bottom">
           <div class="bg-danger rounded" style={{height:"20px",width:"20px"}}></div>
           <a class="navbar-brand" href="#" >Navbar</a>
           <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#mydiv"><mark class="bg-warning">My Pro</mark>file <span class="navbar-toggler-icon"></span></button>
           <div class="collapse navbar-collapse" id="mydiv">
               <ul class="navbar-nav text-muted font-weight-bold">
                   <li class="nav-item">CSE</li>
                   <li class="nav-item">ECE</li>
                   <li class="nav-item">Marine Studies</li>
               </ul>
           </div>
       </nav>
       <div class="collapse navbar-collapse bg-light" id="mydiv">
        <ul class="navbar-nav p-3">
            <li class="nav-item dropdown dropup">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Maths</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item">Ian Stewart</a>
                    <a class="dropdown-item">Shakuntla Devi</a>
                    <a class="dropdown-item">Arihant</a>
                </div>
            </li>
            <li class="nav-item dropdown dropup">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Music</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item">Guitar</a>
                    <a class="dropdown-item">Piano</a>
                    <a class="dropdown-item">Drum</a>
                </div>
            </li>
            <li class="nav-item dropdown dropup">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Web Development</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item">MERN stack</a>
                    <a class="dropdown-item">MEAN Stack</a>
                    <a class="dropdown-item">HTML,CSS,JS</a>
                </div>
            </li>
        </ul>
       </div>
        <h1>{this.state.name}</h1>
        {card}
        <br></br>
        <button onClick={()=>this.nameChange()}>Change</button>
        </div>
    );
    }
}
export default Avatar;