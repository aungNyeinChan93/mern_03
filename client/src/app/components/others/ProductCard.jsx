import React from "react";
import { Link } from "react-router";

const ProductCard = ({ image, id, title, description }) => {
  return (
    <React.Fragment>
      <div className="bg-white [box-shadow:0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
        <div className="aspect-[3/2]">
          <img
            src={image}
            className="w-full h-full object-cover"
            alt="Card image"
          />
        </div>

        <div className="p-6">
          <h3 className="text-slate-900 text-xl font-semibold">{title}</h3>
          <p className="mt-3 text-sm text-slate-500 leading-relaxed">
            {description && description?.substring(0, 100)}
          </p>
          <button
            type="button"
            className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm font-medium tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600 cursor-pointer"
          >
            <Link to={`/${id}`}>View</Link>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductCard;
