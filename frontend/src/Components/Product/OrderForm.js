import styles from "./ProductsList.module.css";
import { useRef } from "react";


function OrderForm(props) {

    const nameInputRef = useRef();
    const surnameInputRef = useRef();
    const emailInputRef = useRef();
    const phoneNumberInputRef = useRef();
    const streetInputRef = useRef();
    const houseNumberInputRef = useRef();
    const cityInputRef = useRef();
    const postcodeInputRef = useRef();
    const countryInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

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
            name: enteredName,
            surname: enteredSurname,
            email: enteredEmail,
            phoneNumber: enteredPhoneNumber,
            street: enteredStreet,
            houseNumber: enteredHouseNumber,
            city: enteredCity,
            postcode: enteredPostcode,
            country: enteredCountry,
        };
        props.onAddForm(orderData);
    }


    return (
        <div className={styles.formp}>
            <form className="form-group border rounded shadow p-3 mb-5 bg-body rounded mb-3" onSubmit={submitHandler} responsive>
                <div className={styles.pad}>
                    <h5>Product Order Form:</h5>
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
                    <label className={styles.labels} htmlFor="houseNumber">House number</label>
                    <input className="form-control" type="number" required id="houseNumber" ref={houseNumberInputRef} />
                    <label className={styles.labels} htmlFor="city">City:</label>
                    <input className="form-control" type="text" required id="city" ref={cityInputRef} />
                    <label className={styles.labels} htmlFor="postcode">Postcode:</label>
                    <input className="form-control" type="text" required id="postcode" ref={postcodeInputRef} />
                    <label className={styles.labels} htmlFor="country">Country:</label>
                    <input className="form-control" type="text" required id="country" ref={countryInputRef} />
                    <br></br>
                    <button className="btn btn-dark">Buy</button>
                </div>
            </form>

        </div>
    );
}

export default OrderForm;
