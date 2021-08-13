import React , {Component} from 'react';
import "./navbar.css";
import img from '../images/navbar-images/logo.png';

class Navbar extends Component{
    scroll = ()=>{
         
            window.scrollTo(
                 {
                    top:0,
                    left:0,
                    behavior:"smooth",

                 }
               
                );
            console.log("isl");
        
    }
	render(){
		return(
             
            <div className="navbar">
                <div className="logo">
                   <a href="#">
                     <img src={img} /> 
                    </a>
                </div>
                <div className="top">
                    <i className="fas fa-arrow-to-top fa-3x" onClick={this.scroll}></i>
                </div>
            </div>

		)
	}
}

export default Navbar;