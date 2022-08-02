import axios from "axios";
import React, { useState } from "react";
import { IProduct } from "../../types/models";
import Error from "../UI/Error/Error";

const productData: IProduct = {
  title: "test product",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 42,
    count: 10,
  },
};

interface CreateProductsProps {
  onCreate: (product: IProduct) => void;
}

const CreateProduct = ({ onCreate }: CreateProductsProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    productData.title = value;

    if (value.trim().length === 0) {
      setError("Please enter valid title");
      return;
    }

    const response = await axios.post(
      "https://fakestoreapi.com/products",
      productData
    );

    onCreate(response.data);
  };

  const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full"
        placeholder="Enter product title..."
        onChange={changeHandler}
        value={value}
      />
      {error && <Error error={error} />}
      <button type="submit" className="py-2 px-4 border bg-yellow-400">
        Create
      </button>
    </form>
  );
};

export default CreateProduct;
