import { useContext } from "react";
import CreateProduct from "../../components/CreateProduct/CreateProduct";
import Modal from "../../components/Modal/Modal";
import Product from "../../components/Product/Product";
import Error from "../../components/UI/Error/Error";
import Loader from "../../components/UI/Loader/Loader";
import ModalContext from "../../context/ModalContext";
import useProducts from "../../hooks/useProducts";
import { IProduct } from "../../types/models";

const ProductsPage = () => {
  const { loading, error, products, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Error error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create new product" onClose={() => close()}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-lg px-4 py-2"
        onClick={() => open()}
      >
        +
      </button>
    </div>
  );
};

export default ProductsPage;
