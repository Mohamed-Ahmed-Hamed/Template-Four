import "./section4.css";
import img1 from "../images/section4-images/image1.png";
import img2 from "../images/section4-images/image2.png";
let Section4 =()=>{
	return(
           <div className="section4">
              <div className="left">
                  <h6>Womens Shoe</h6>
                  <div className="h2">
                    <div className="bg-h2"></div>
                    <h2>New Year Collection</h2> 
                  </div>
                  <div className="p">
                     <img src={img1} />
                     <p>Two styles of graphics are used to represent 
                     this throughout the collection: The first is a 
                     traditional geometric quilt pattern that is influenced 
                     by all 12 Chinese Zodiac symbols; the second is a mosaic 
                     pattern of the 12 symbols.</p>
                  </div>
                  <ul>
                    <li>Shown: White/Black/Team Orange</li>
                    <li>Style: AO1069-106</li>
                  </ul>
                  <a href="#">view collection</a>
               </div>
              <div className="right">
                    <img src={img2} />
                    <div className="bg-img"></div>
              </div>
           </div>
	)
}
export default Section4;
