import NewProductForm from "../Components/Product/NewProductForm";
import { useState, useEffect } from "react";
import ProductsList from "../Components/Product/ProductsList";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:80/api/products",
});

function Products(props) {
  async function addProductHandler(productData) {
     // http POST method
     const res = api
       .post("/", { name: productData.name })
       .then(function (response) {
         // get result data from http method
         const resultData = response.data;
         // check if there isn't one with same name
         const theSameProduct = loadedProducts.find(
           (cat) => cat.name == resultData.name
         );
         // adding locally product to site if condition above
         if (theSameProduct == null) {
           setLoadedProducts((prev) => [...prev, resultData]);
         }
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
      <ProductsList products={loadedProducts} /> 
    </div>
  );
}

export default Products;
