import "./section8.css";


let Section8 =()=>{
	return(
           <div className="section8">

                <div className="box box1">
                    <h2>Follow Me</h2>
                    <ul>
                       <li><i class="fab fa-facebook-square fa-3x"><a href='#'></a></i></li>
                       <li><i className="fab fa-github fa-3x"><a href='#'></a></i></li>
                    </ul>
                </div>
                <div className="box box2">
                    <h2>About Me</h2>
                    <p>Full Stack Developer (PHP)</p>
                </div>
                <div className="box box3">
                    <h2>Contact Me</h2>
                    <span>mohamedahmedhamed500@gmail.com</span>
                </div>
                <div className="footer">
                    <span>Created by Mohamed Ahmed Hamed</span>
                </div>
           </div>

	)
}

export default Section8;