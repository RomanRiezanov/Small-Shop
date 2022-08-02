import { useState } from "react";
import { IProduct } from "../../types/models";

interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center my-2">
      <img src={product.image} className="w-1/6" alt={`${product.title}`} />
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>
      <button
        onClick={() => setShowDetails(!showDetails)}
        className={`py-2 px-4 border ${
          showDetails ? "bg-blue-400" : "bg-yellow-400"
        }`}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails ? (
        <div>
          <p>{product.description}</p>
          <p>
            Rate:{" "}
            <span style={{ fontWeight: "bold" }}>{product?.rating?.rate}</span>
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Product;
