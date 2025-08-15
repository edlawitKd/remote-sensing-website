import React from "react"
import { Link } from "react-router-dom"

export default function ProductCard({Icon, title, description, link}){
    return(
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300 text-center">
            {Icon && <Icon className="text-primary text-3xl mb-4 mx-auto" />}
            <h3 className="text-xl font-semibold mb-2 text-secondary">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
          {link && link.trim() !== "" && (
        <Link
          to={link}
         className="inline-block text-white font-medium px-4 py-2 rounded-lg bg-secondary hover:bg-primary hover:text-secondary transition"
        >
          Visit →
        </Link>
      )}
        </div>
    )
}