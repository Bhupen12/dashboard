import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <Link to="/">
        Go to <span className="btn underline-offset-8">Home</span>
      </Link>
    </div>
  );
};

export default Product;
