import React from "react"
import {FaLandmark, FaBriefcase} from "react-icons/fa";
import ProductCard from "../components/ProductCard";

export default function Products(){
    const productData=[
        {
            Icon: FaLandmark,
            title: "Tourism Monitoring",
            description: "Track tourism activities and ....",
            link :""
        },
         {
            Icon: FaBriefcase,
            title: "Crop Monitoring",
            description: "Agricultural productivity using remote sensing technology.....",
            link :" "
        },
         {
            Icon: FaLandmark,
            title: "Carbon Monitoring",
            description: "Track tourism activities and ....",
            link :" "
        },
         {
            Icon: FaBriefcase,
            title: "National Park Platform",
            description: "visitor tracking ....",
            link :" "
        }
    ];
    return(
        <section className=" mt-5">
            <section className="bg-gray-50 mb-12 text-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Products & Services</h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto text-secondary">
              Our department develops innovative products and services 
              that apply our research to solve real-world challenges.
            </p>
          </div>
        </div>
      </section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
             { productData.map((product, index)=>(
                <ProductCard key={index} {...product}/>
             ))}
            </div>
        </section>
    )
}