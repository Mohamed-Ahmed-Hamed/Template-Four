import "./section5.css";
import img1 from "../images/section5-images/image1.jpg";
import img2 from "../images/section5-images/image2.png";
let Section5 = ()=>{
	return(
            <div className="section5">
                <div className="left">
                  <img src={img1} />
                </div>
                <div className="right">
                  <img src={img2} />
                  <h6>Trending</h6>
                  <div className="h2">
                    <div className="bg-h2"></div>
                    <h2>Nike React 2 Collection</h2> 
                  </div>
                  <div className="p">
                     <p>The Nike Epic React Flyknit 2 takes smooth, lightweight 
                     performance to the next level. A Flyknit upper conforms to your 
                     foot with a minimal, supportive design. Underfoot, durable Nike 
                     React technology defies odds by being both soft and responsive.</p>
                  </div>
                  <ul>
                    <li>Shown: Black/Sapphire/Lime</li>
                    <li>Blast/Black Style: BQ8928-003</li>
                  </ul>
                  <a href="#">shop now</a>
                </div>

            </div>
       
	)
}

export default Section5;