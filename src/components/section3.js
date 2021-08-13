import './section3.css';
import img1 from '../images/section3-images/image1.jpg';
import img2 from '../images/section3-images/image2.png';
import img3 from '../images/section3-images/image3.png';
let Section3 =()=>{

	return(
         <div className="section3">
              <div className="left">
                 <img src={img1} className="img1"/>
                 <img src={img2} className="img2"/>
                 <img src={img3} className="img3"/>
              </div>
              <div className="right">
                  <h6>New Releases</h6>
                  <div className='h2'>
                     <div className="bg-h2"></div>
                     <h2>Nike Women's</h2>
                  </div>
                  <p>The best in breathability, the Nike Top features bonded cutouts 
                   at the sides for stylish ventilation. Its cropped silhouette is ideal
                   for showing off your abs or pairing with your favorite high-waisted 
                   	tights, while a shimmery finish elevates the look.</p>
                   <ul>
                     <li>Shown: Oil Grey/Black</li>
                     <li>Style: AT0595-080</li>
                   </ul>
                   <a href="#">Show Now</a>
              </div>
         </div>
	)
}

export default Section3;