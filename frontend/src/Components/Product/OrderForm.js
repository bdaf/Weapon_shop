import styles from "./ProductsList.module.css";

function OrderForm(props) {

    return (
        <div className={styles.formp}>
            <form className="form-group border rounded shadow p-3 mb-5 bg-body rounded mb-3" responsive>
                <div className={styles.pad}>
                    <h5>Product Order Form:</h5>
                    <label className={styles.labels} htmlFor="name">Name:</label>
                    <input className="form-control" type="text" required id="name"  />
                    <label className={styles.labels} htmlFor="surname">Surname:</label>
                    <input className="form-control" type="text" required id="surname" />
                    <label className={styles.labels} htmlFor="email">Email:</label>
                    <input className="form-control" type="text" required id="email"  />
                    <label className={styles.labels} htmlFor="amount">Phone Number:</label>
                    <input className="form-control" type="number" required id="phoneNumber"  />
                    <label className={styles.labels} htmlFor="street">Street:</label>
                    <input className="form-control" type="text" required id="street"  />
                    <label className={styles.labels} htmlFor="houseNumber">House number</label>
                    <input className="form-control" type="number" required id="houseNumber" />
                    <label className={styles.labels} htmlFor="city">City:</label>
                    <input className="form-control" type="text" required id="city" />
                    <label className={styles.labels} htmlFor="postcode">Postcode:</label>
                    <input className="form-control" type="text" required id="postcode" />
                    <label className={styles.labels} htmlFor="country">Country:</label>
                    <input className="form-control" type="text" required id="country" />
                    <br></br>
                    <button className="btn btn-dark">Add</button>
                </div>
            </form>

        </div>
    );
}

export default OrderForm;
