import { Link } from "react-router-dom";
import Explore from "../components/Explore"

export default function Home(){
    return(
        <main>
            <div className=" bg-[#204E67] felx justify-center">
                <h1 className=" text-white text-3xl py-16 text-center">Welcome to Remote Sensing Department</h1>
            </div>

          <section className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-black p-6 md:p-10 lg:p-12 xl:p-16 leading-relaxed mb-6">
            Our department is dedicated to advancing knowledge through 
            cutting-edge research, providing excellent education to our students,
             and offering valuable services to the community and industry partners. 
                 With a focus on innovation and excellence,we strive to make 
                   meaningful contributions to our field and society.</p>
            <Link to="/about" className="text-[#204E67] py-5  hover:text-[#DD994D] font-semibold transition-colors duration-200">
                Read more about our Vision and Mission →</Link>
          </section>
           <Explore/>
        </main>
    )
}
