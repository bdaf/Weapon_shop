import styles from "./DiscountsList.module.css";

function DiscountDetails() {

     return (
        <div className={styles.formp}>
            <div className="m-3" className="form-group border rounded shadow p-3 mb-5 bg-body rounded mb-3">
                <div className={styles.padding2}>
                    <form>
                        <h5>Edit Discount:</h5>
                        <label className={styles.labels} htmlFor="percent">Percent:</label>
                        <input class="form-control" type="text" required id="percent" />
                        <label className={styles.labels} htmlFor="from">Date from:</label>
                        <input class="form-control" type="text" required id="from" />
                        <label className={styles.labels} htmlFor="to">To:</label>
                        <input class="form-control" type="text" required id="to"/>
                        <br></br>
                        <button className="btn btn-dark">Edit discount</button>
                        <br></br>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default DiscountDetails;
