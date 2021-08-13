import React,{Component} from 'react';
import './section1.css';
import img1 from "../images/section1-images/image1.png";
import img3 from "../images/section1-images/image3.png";
import img4 from "../images/section1-images/image4.png";
import img5 from "../images/section1-images/image5.png";
import img6 from "../images/section1-images/image6.png";
class Section1 extends Component{
	render(){
     
		return(
               <div className="section1">
                  
                  <div className="left">
                      <img src={img4} />
                      <h2>shop best sellers</h2>
                      <p>Raise your game in a collection ready for tennis all day and all night.</p>
                      <a href="#">Shop The Collection</a>
                  </div>
 
                  <div className="right">
                     <div className="top">
	                      <h6>Women Training Hoodie</h6>
	                      <h4>Knit Running Top</h4>
	                      <span>$90</span>
                     </div>
                     <div className="bottom">
                           <img src={img5} />
                     </div>

                  </div>
                  <div className="img">
                     <img src={img1} />
                  </div>
               </div>

			)
	}
}

export default Section1;