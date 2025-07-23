import React from "react"
import {FaLandmark, FaBriefcase} from "react-icons/fa";
import ProductCard from "../components/ProductCard";

export default function Products(){
    const productData=[
        {
            Icon: FaLandmark,
            title: "Tourism Monitoring",
            description: "Track tourism activities and ....",
            link :"https://react.dev/"
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
        <section className="bg-gray-50">
            <div className="max-w-6xl mx-auto py-10 px-6 text-center">
               <h1 className="text-4xl font-bold text-[#204E67] py-6">Products & Services</h1>
               <p className="text-gray-600 mt-4">Our department develops innovative products 
                and services that apply our research to solve real-world challenges.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
             { productData.map((product, index)=>(
                <ProductCard key={index} {...product}/>
             ))}
            </div>
        </section>
    )
}