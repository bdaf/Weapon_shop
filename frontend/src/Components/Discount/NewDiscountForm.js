import { useRef } from 'react';
import styles from "./DiscountsList.module.css";

function NewDiscountForm(props) {

    const percentInputRef = useRef();
    const fromInputRef = useRef();
    const toInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredpercent = percentInputRef.current.value/100;
        const enteredfrom = fromInputRef.current.value;
        const enteredto = toInputRef.current.value;

        const discountData = {
            percent: enteredpercent,
            fromDate: enteredfrom,
            toDate: enteredto
        };

        props.onAddDiscount(discountData);
    }

    return (
        <div className={styles.formp}>
            <div className="m-3" className="form-group border rounded shadow p-3 mb-5 bg-body rounded mb-3">
                <div className={styles.padding2}>
                    <form onSubmit={submitHandler}>
                        <h5>Add New Discount:</h5>
                        <label className={styles.labels} htmlFor="percent">Percent:</label>
                        <input class="form-control" type="text" required id="percent" ref={percentInputRef} />
                        <label className={styles.labels} htmlFor="from">Date from:</label>
                        <input class="form-control" type="text" required id="from" ref={fromInputRef} />
                        <label className={styles.labels} htmlFor="to">To:</label>
                        <input class="form-control" type="text" required id="to" ref={toInputRef} />
                        <br></br>
                        <button className="btn btn-dark">Add discount</button>
                        <br></br>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default NewDiscountForm;
