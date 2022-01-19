import { Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import NewDiscountForm from "../Components/Discount/NewDiscountForm.js";
import DiscountsList from "../Components/Discount/DiscountsList";
import styles from "../Components/Discount/DiscountsList.module.css";

const api = axios.create({
  baseURL: "http://localhost:80/api/discounts",
});

function Discounts() {
  const [feedback, setFeedback] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedDiscounts, setLoadedDiscounts] = useState([]);

  const showFeedback = (typeOfAlert, text) => {
    setFeedback(<Alert variant={typeOfAlert}>{text}</Alert>);
  };

  async function addDiscountHandler(discountData) {
    // http POST method
    const res = api
      .post("/", {
        percent: discountData.percent,
        fromDate: discountData.fromDate,
        toDate: discountData.toDate,
      })
      .then(function (response) {
        if (response.status === 200) {
          showFeedback("success", "Discount has been added!");
          // get result data from http method
          const resultData = response.data;
          setLoadedDiscounts((prev) => [...prev, resultData]);
        } else showFeedback("danger", "We couldn't add this discount!");
      })
      .catch((e) => {
        console.log(e);
        showFeedback(
          "danger",
          "Error occured, propably this discount already is in database or 'From' is gratest than 'To'. Try with another one."
        );
      });
  }

  function fetchAllDiscounts(url) {
    console.log(url);
    api.get("/"+url).then(function (response) {
      setIsLoading(false);
      setLoadedDiscounts(response.data);
    });
  }

  useEffect(() => {
    fetchAllDiscounts();
  }, []);


  function updateSortType(url){
    fetchAllDiscounts(url)
  }

  function filterProducts(e){

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
          <h2>Discounts</h2>
          <br></br>
      
          
          <big className={styles.marginn} >Sort by:</big>{' '}
              <button  className = {`${styles.marginn} btn btn-dark`} onClick={() => updateSortType("order/percent/asc")}>Percent</button>{' '}
              <button className={`${styles.marginn} btn btn-dark`} onClick={() => updateSortType("order/percent/desc")}>Percent desc</button>{' '}
              <button className={`${styles.marginn} btn btn-dark`} onClick={() => updateSortType("order/from/asc")}>From</button>{' '}
              <button className={`${styles.marginn} btn btn-dark`} onClick={() => updateSortType("order/from/desc")}>From date desc</button>{' '}
              <button className={`${styles.marginn} btn btn-dark`} onClick={() => updateSortType("order/to/asc")}>To date</button>{' '}
              <button className={`${styles.marginn} btn btn-dark`} onClick={() => updateSortType("order/to/desc")}>To date desc</button>
              <input className={`${styles.marginn} ${styles.input}`} type="text" placeholder="Search Product" required id="filter" onChange={(e) => filterProducts(e)} />
              <NewDiscountForm onAddDiscount={addDiscountHandler} />
              <div className={styles.imargin}>{feedback != null ? feedback : null}</div>
      <DiscountsList
        discounts={loadedDiscounts}
        updateDiscounts={fetchAllDiscounts}
        showFeedback={showFeedback}
      />
    </div>
  );
}

export default Discounts;
