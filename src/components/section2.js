import React,{Component} from 'react';
import "./section2.css";
import img1 from '../images/section2-images/image1.png';
import img2 from '../images/section2-images/image2.png';
import img3 from '../images/section2-images/image3.jpg';
class Section2 extends Component{
	render(){
		return(
           <div className="section2">
               <div className="left">
                  <h6>Women Tank</h6>
                  <div className="h2">
                    <div className="bg-h2"></div>
                    <h2>Nike Pro Collection</h2>
                     
                  </div>
                  <div className="p">
                     <img src={img1} />
                     <p>The Nike Pro Women's Tank features a cropped
                      cut that's great for layering or wearing solo. 
                      Its mesh back panel helps keep you cool, while 
                      its chest band features a stylish cross-over design 
                      for a secure, comfortable fit.</p>
                  </div>
                  <ul>
                    <li>
                      <span>Shown: Black /Thunder Grey</span>
                    </li>
                    <li>
                      <span>Style: BQ8316-010</span>
                    </li>
                  </ul>
                  <a href="#">Show Now</a>
               </div>
               <div className="right">
                    
                      <img src={img3} className="bottom" />
                   
                   
                      <img src={img2}  className="top"/>
               </div>
           </div>

		)
	}
}

export default Section2;