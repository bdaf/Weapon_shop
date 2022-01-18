import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import axios from "axios";
import NewProductForm from "../Components/Product/NewProductForm";
import ProductsList from "../Components/Product/ProductsList";

const api = axios.create({
  baseURL: "http://localhost:80/api/products",
});

function Products(props) {
  const [feedback, setFeedback] = useState(null);

  async function addProductHandler(productData) {
    // http POST method
    const res = api
      .post("/", {
        name: productData.name,
        description: productData.description,
        price: productData.price,
        amount: productData.amount,
        producer: productData.producer,
        category: productData.category,
        photoUrl: productData.photoUrl,
      })
      .then(function (response) {
        if (response.status === 200) {
          setFeedback(<Alert variant="success">Product has been added!</Alert>);
          // get result data from http method
          const resultData = response.data;
          // check if there isn't one with same name
          const theSameProduct = loadedProducts.find(
            (cat) =>
              cat.name == resultData.name &&
              cat.producer.nip == resultData.producer.nip
          );
          // adding locally product to site if condition above
          if (theSameProduct == null) {
            setLoadedProducts((prev) => [...prev, resultData]);
          } else {
            // changing properties of the same product if it already existed
            theSameProduct.amount = resultData.amount;
            setLoadedProducts((prev) => [...prev]);
          }
        }
      })
      .catch((e) => {
        console.log(e);
        setFeedback(
          <Alert variant="danger">
            Error occurred during adding product, check out fills and try again.
          </Alert>
        );
      });
  }

  const [isLoading, setIsLoading] = useState(true);
  const [loadedProducts, setLoadedProducts] = useState([]);

  useEffect(() => {
    api.get("/").then(function (response) {
      setIsLoading(false);
      setLoadedProducts(response.data);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1>Products</h1>
      <h1>Add new product:</h1>
      <NewProductForm onAddProduct={addProductHandler} />
      {feedback != null ? feedback : null}
      <ProductsList products={loadedProducts} />
    </div>
  );
}

export default Products;
