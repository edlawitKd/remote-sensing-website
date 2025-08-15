import React from "react"

export default function ServiceCard({Icon,title,description}){
    return(
        <div className="bg-white shadow-md border-t-4 border-t-[#DD994D]
 rounded-lg p-4 hover:shadow-lg transition">
           {Icon && <Icon className="text-primary text-4xl mb-4 mx-auto" />}
            <h3 className="text-xl font-semibold mb-2 text-secondary">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
        </div>
    )
}