import { Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import NewDiscountForm from "../Components/Discount/NewDiscountForm";
import DiscountsList from "../Components/Discount/DiscountsList";

const api = axios.create({
  baseURL: "http://localhost:80/api/discounts",
});

function Discounts() {
  const [feedback, setFeedback] = useState(null);

  async function addDiscountHandler(discountData) {
    // http POST method
    const res = api
      .post("/", { 
        percent: discountData.percent,
        fromDate: discountData.fromDate,
        toDate: discountData.toDate
       })
      .then(function (response) {
        if (response.status === 200){
          setFeedback(<Alert variant="success">Discount has been added!</Alert>);
          // get result data from http method
          const resultData = response.data;
          setLoadedDiscounts((prev) => [...prev, resultData]);
        } else
        setFeedback(<Alert variant="danger">We couldn't add this discount!</Alert>);
      })
      .catch((e) => {
        console.log(e);
        setFeedback(
          <Alert variant="danger">
            Error occured, propably this discount already is in database or 'From' is gratest than 'To'. Try with another one.
          </Alert>
        );
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
      {feedback != null ? feedback : null }
      <DiscountsList discounts={loadedDiscounts} />
    </div>
  );
}

export default Discounts;
