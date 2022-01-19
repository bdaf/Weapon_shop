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
            .then(function(response) {
                if (response.status === 200) {
                    showFeedback("success", "Discount has been added!");
                    // get result data from http method
                    const resultData = response.data;
                    setLoadedDiscounts((prev) => [...prev, resultData]);
                } else
                    showFeedback("danger", "We couldn't add this discount!");
            })
            .catch((e) => {
                console.log(e);
                showFeedback(
                    "danger",
                    "Error occured, propably this discount already is in database or 'From' is gratest than 'To'. Try with another one."
                );
            });
    }

    const [isLoading, setIsLoading] = useState(true);
    const [loadedDiscounts, setLoadedDiscounts] = useState([]);

    function fetchAllDiscounts() {
        api.get("/").then(function(response) {
            setIsLoading(false);
            setLoadedDiscounts(response.data);
        });
    }

    useEffect(() => {
        fetchAllDiscounts();
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
            <br></br>
            <h3>Discounts</h3>
            <br></br>
            <NewDiscountForm onAddDiscount={addDiscountHandler} />
            <div className={styles.imargin}>{feedback != null ? feedback : null}</div>
            <DiscountsList
                discounts={loadedDiscounts}
                updateDiscounts={fetchAllDiscounts}
                showFeedback={showFeedback} />
        </div>
    );
}
export default Discounts;
