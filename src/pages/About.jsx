import React from "react"

export default function About(){
    return(
        <section className="bg-gray-50">
           <div className="max-w-6xl my-10 mx-auto text-center mb-12">
             <h2 className="text-3xl font-bold text-[#204E67]">About Us</h2>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
           <div className="card border-t-4 bg-white shadow-md border-t-[#DD994D] rounded-lg p-6 hover:shadow-lg transition duration-300 text-center">
            <h3 className="text-xl font-semibold mb-4 text-[#204E67]">Our Vision</h3>
              <p className="text-gray-700">
                    To be a national leader in geospatial science and remote sensing, 
                    advancing data-driven solutions for sustainable development.
                    </p>
           </div>
           <div className="card border-t-4 bg-white shadow-md border-t-[#DD994D] rounded-lg p-6 hover:shadow-lg transition duration-300 text-center">
              <h3 className="text-xl font-semibold mb-4 text-[#204E67]">Our Mission</h3>
              <p className="text-gray-700">
                    To conduct innovative geospatial research, provide capacity-building programs,
                   and deliver remote sensing solutions for sustainable development and decision-making.
              </p>
           </div>
            <div className="bg-white shadow-md border-t-4 border-t-[#DD994D] rounded-lg p-6 hover:shadow-lg transition duration-300 text-center">
               <h3 className="text-xl font-semibold mb-6 text-[#204E67]">Our Core Values</h3>

             <div className="flex flex-col md:flex-row justify-center items-center gap-3">
               <div className="p-2 bg-white shadow rounded">
                   🔬 Innovation</div>
               <div className="p-2 bg-white shadow rounded">
                   🤝 Collaboration</div>
              <div className="p-2 bg-white shadow rounded">
                  🌍 Sustainability</div>
             </div>
             </div>
           </div>
        </section>
    )
}