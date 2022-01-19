import React, { useEffect, useState, useRef } from "react";
import styles from "./DiscountsList.module.css";
import { Button, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

function DiscountDetails() {
    const params = useParams();
  
    const [discount, setDiscount] = useState(null);
    const [loading, setLoading] = useState(false);
    const [feedbackAfterUpdating, setFeedbackAfterUpdating] = useState(false);

    const percentInputRef = useRef();
    const fromDateInputRef = useRef();
    const toDateInputRef = useRef();
  
    const fetchDiscount = async () => {
      await axios
        .get(`http://localhost:80/api/discounts/${params.id}`)
        .then((response) => {
          setDiscount(response.data);
          setLoading(true);
        });
    };

    function updateDiscountHandler(event) {
        event.preventDefault();
        const enteredPercent = percentInputRef.current.value/100;
        const enteredFromDate = fromDateInputRef.current.value;
        const enteredToDate = toDateInputRef.current.value;
    
        axios
          .put(`http://localhost:80/api/discounts/${discount.discountId}`, {
              percent: enteredPercent,
              fromDate: enteredFromDate,
              toDate: enteredToDate 
          })
          .then((response) => {
            if (response.status === 200)
              showFeedbackAfterUpdating("success", "Discount has been updated!");
            else
              showFeedbackAfterUpdating(
                "danger",
                "We couldn't update this discount!"
              );
              //props.onUpdateCategory(categoryData); update
          })
          .catch((e) => {
            console.log(e);
            showFeedbackAfterUpdating(
              "danger",
              "Error occured, propably dates are typed incorrectly or from date is grater than to date, check them!"
            );
          });
      }

    useEffect(() => {
      fetchDiscount();
    }, []);
  
    const showFeedbackAfterUpdating = (typeOfAlert, text) => {
        setFeedbackAfterUpdating(<Alert variant={typeOfAlert}>{text}</Alert>);
      };

    if (!loading) return null;
     return (
        <div className={styles.formp}>
            <div className="m-3" className="form-group border rounded shadow p-3 mb-5 bg-body rounded mb-3">
                <div className={styles.padding2}>
                    <form onSubmit={(e) => updateDiscountHandler(e)}>
                        <h5>Edit Discount:</h5>
                        <label className={styles.labels} htmlFor="percent">Percent:</label>
                        <input class="form-control" type="number" required id="percent" defaultValue={discount.percent*100} ref={percentInputRef} />
                        <label className={styles.labels} htmlFor="from" > From date: </label>
                        <input class="form-control" type="text" required id="from" defaultValue={discount.fromDate} ref={fromDateInputRef}/>
                        <label className={styles.labels} htmlFor="to">To date:</label>
                        <input class="form-control" type="text" required id="to" defaultValue={discount.toDate} ref={toDateInputRef}/>
                        <br></br>
                        <button className="btn btn-dark" type="submit">Edit discount</button>
                        <br></br><br></br>
                        {feedbackAfterUpdating != null ? feedbackAfterUpdating : null}
                    </form>
                </div>
            </div>
            
        </div>
    );
}
export default DiscountDetails;
