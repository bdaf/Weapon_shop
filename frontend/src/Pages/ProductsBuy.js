import { useState, useEffect } from "react";
import axios from "axios";
import ProductsList from "../Components/Product/ProductsBuyList";
import styles from "../Components/Product/ProductsList.module.css";

const api = axios.create({
  baseURL: "http://localhost:80/api/products",
});

function ProductsBuy() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [loadedFilteredProducts, setFilteredProducts] = useState([]);

  const fetchAllProducts = async (url) => {
    await api.get("/"+url).then(function (response) {
      setIsLoading(false);
      setLoadedProducts(response.data);
      setFilteredProducts(response.data);
    }).catch((e) => {
      console.log(e);
    });
  };

 function updateSortType(url){
    fetchAllProducts(url);
 }
  
  useEffect(() => {
    fetchAllProducts('');
  }, []);

  function filterProducts(e){
    console.log("SIEMA " +e.target.value)

    setFilteredProducts(loadedProducts.filter((product) => {
      console.log(product + e.target.value)
      return product.name.toLowerCase().includes(e.target.value.toLowerCase());
    }))
  }

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <br></br>
          <h2>Products for you to Buy!</h2>
          <div className={styles.filter}>
              <b>Sort by:</b>{' '}
              <button className="btn btn-dark" onClick={() => updateSortType("order/name/asc")}>Name</button>
              <button className="btn btn-dark" onClick={() => updateSortType("order/name/desc")}>Name desc</button>
              <button className="btn btn-dark" onClick={() => updateSortType("order/price/asc")}>Price</button>
              <button className="btn btn-dark" onClick={() => updateSortType("order/price/desc")}>Price desc</button>
              <button className="btn btn-dark" onClick={() => updateSortType("order/date/asc")}>Release date</button>
              <button className="btn btn-dark" onClick={() => updateSortType("order/date/desc")}>Release date desc</button>
              <input className={styles.input} type="text" required id="filter" onChange={(e) => filterProducts(e)}/>
              <button className="btn btn-dark">Filter</button>
              </div>
      <ProductsList
        products={loadedFilteredProducts}
        updateProducts={fetchAllProducts}
      />
    </div>
  );
}

export default ProductsBuy;
