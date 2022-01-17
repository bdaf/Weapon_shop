import NewDiscountForm from "../Components/Discount/NewDiscountForm";
import { useState, useEffect } from "react";
import axios from "axios";
import DiscountsList from "../Components/Discount/DiscountsList";

const api = axios.create({
  baseURL: "http://localhost:80/api/discounts",
});

function Discounts() {

  async function addDiscountHandler(discountData) {
    // http POST method
    const res = api
      .post("/", { 
        percent: discountData.percent,
        fromDate: discountData.fromDate,
        toDate: discountData.fromDate
       })
      .then(function (response) {
        // get result data from http method
        const resultData = response.data;
        // check if there isn't one with same name
        const theSameDiscount = loadedDiscounts.find(
          (dis) => dis.percent == resultData.percent &&
          dis.fromDate == resultData.fromDate &&
          dis.fromDate == resultData.fromDate
        );
        // adding locally discount to site if condition above
        if (theSameDiscount == null) {
          setLoadedDiscounts((prev) => [...prev, resultData]);
        }
      });
  }

  const [isLoading, setIsLoading] = useState(true);
  const [loadedDiscounts, setLoadedDiscounts] = useState([]);

  useEffect(() => {
    api.get("/").then(function (response) {
      setIsLoading(false);
      setLoadedDiscounts(response.data);
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
      <h1>Discounts</h1>
      <h1>Add new discount:</h1>
      
      <NewDiscountForm onAddDiscount={addDiscountHandler} />
      <DiscountsList discounts={loadedDiscounts} />
    </div>
  );
}

export default Discounts;
