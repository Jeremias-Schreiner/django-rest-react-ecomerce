import React from "react";

export default function CardComponent({title, description, imageURL, buttonText, onButtonClick}){
    return(
        <div className="m-5 mb-0 max-w-sm bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group hover:cursor-pointer hover:scale-110">
            <img className="w-full h-50 object-cover" src={imageURL} alt={title}></img>
            <div className="p-6 flex justify-between">
                <div>
                    <h2 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 group-hover:text-2xl transition-all">{title}</h2>
                    <p className="text-gray-200 mb-4 ">{description}</p>
                    <p className="text-2xl font-bold mb-2 text-white mt-5 group-hover:text-green-400">$2000</p>
                </div>
                <button onClick={onButtonClick} className="bg-blue-800 bg-opacity-40 text-white px-4 py-2 h-10 rounded-lg hover:bg-blue-600 transition-colors mt-24 text-md">
                    {buttonText}
                </button>
            </div>
        </div>
    );
}