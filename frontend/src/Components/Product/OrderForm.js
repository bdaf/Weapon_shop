import styles from "./ProductsList.module.css";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router";

function OrderForm(props) {
    const params = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    const nameInputRef = useRef();
    const surnameInputRef = useRef();
    const emailInputRef = useRef();
    const phoneNumberInputRef = useRef();
    const streetInputRef = useRef();
    const houseNumberInputRef = useRef();
    const cityInputRef = useRef();
    const postcodeInputRef = useRef();
    const countryInputRef = useRef();

    const navigate = useNavigate();

    const fetchProduct = async () => {
        console.log("siema");

        await axios
            .get(`http://localhost:80/api/products/${params.id}`)
            .then((response) => {
                console.log("siema");
                setProduct(response.data);
                setLoading(true);;
            }).catch((e) => { 
                console.log(e);
            });
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    function navigateToMenu() {
        navigate('/pay');
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredSurname = surnameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPhoneNumber = phoneNumberInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredHouseNumber = houseNumberInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredPostcode = postcodeInputRef.current.value;
        const enteredCountry = countryInputRef.current.value;

        const orderData = {
            customer: {
                name: enteredName,
                surname: enteredSurname,
                email: enteredEmail,
                phoneNumber: enteredPhoneNumber,
                street: enteredStreet,
                houseNumber: enteredHouseNumber,
                city: enteredCity,
                postcode: enteredPostcode,
                country: enteredCountry
            },
            product: product
        };
        
    
        await axios
            .post(`http://localhost:80/api/orders`, {
                customer: {
                    name: enteredName,
                    surname: enteredSurname,
                    email: enteredEmail,
                    phoneNumber: enteredPhoneNumber,
                    street: enteredStreet,
                    houseNumber: enteredHouseNumber,
                    city: enteredCity,
                    postcode: enteredPostcode,
                    country: enteredCountry
                },
                product: product
            }).then((response) => {
                if (response.status === 200) {
                    console.log("Discount has been added to category!");

                    navigateToMenu();
                }
                   // showFeedbackAfterAdding("success", "Discount has been added to category!");
                else console.log("We couldn't add this discount to category!");
                props.fetchDiscountsOfSelectedCategory();
            }).catch((e) => {
                console.log(e);
                //showFeedbackAfterAdding("danger", "Error occured, propably this discount already is in this category. Try with another one.");
            });
    };


    if (!loading) return null;

    return (
        <div className={styles.formp}>
            <form className="form-group border rounded shadow p-3 mb-5 bg-body rounded mb-3" onSubmit={submitHandler} responsive>
                <div className={styles.pad}>
                    <h4>Product Order Form:</h4>
                    <img width={150} height={150} src={product.photoUrl} alt="Logo" />
                    <h6>Product name: { product.name }</h6>
                    <h6>Product price: {product.price} zl</h6>
                    <br></br>
                    <label className={styles.labels} htmlFor="name">Name:</label>
                    <input className="form-control" type="text" required id="name" ref={nameInputRef}  />
                    <label className={styles.labels} htmlFor="surname">Surname:</label>
                    <input className="form-control" type="text" required id="surname" ref={surnameInputRef}/>
                    <label className={styles.labels} htmlFor="email">Email:</label>
                    <input className="form-control" type="text" required id="email" ref={emailInputRef} />
                    <label className={styles.labels} htmlFor="amount">Phone Number:</label>
                    <input className="form-control" type="number" required id="phoneNumber" ref={phoneNumberInputRef} />
                    <label className={styles.labels} htmlFor="street">Street:</label>
                    <input className="form-control" type="text" required id="street" ref={streetInputRef} />
                    <label className={styles.labels} htmlFor="houseNumber">House number:</label>
                    <input className="form-control" type="number" required id="houseNumber" ref={houseNumberInputRef} />
                    <label className={styles.labels} htmlFor="city">City:</label>
                    <input className="form-control" type="text" required id="city" ref={cityInputRef} />
                    <label className={styles.labels} htmlFor="postcode">Postcode:</label>
                    <input className="form-control" type="text" required id="postcode" ref={postcodeInputRef} />
                    <label className={styles.labels} htmlFor="country">Country:</label>
                    <input className="form-control" type="text" required id="country" ref={countryInputRef} />
                    <br></br>
                    <button className="btn btn-dark" type="submit">Buy {product.name}</button>
                </div>
            </form>

        </div>
    );
}

export default OrderForm;
