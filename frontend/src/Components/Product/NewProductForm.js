import { useRef } from "react";
import styles from "./ProductsList.module.css";

function NewProductForm(props) {

    const nameInputRef = useRef();
    const descriptionInputRef = useRef();
    const priceInputRef = useRef();
    const amountInputRef = useRef();
    const photoUrlInputRef = useRef();
    const categoryInputRef = useRef();
    const companyNameInputRef = useRef();
    const nipInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const enteredPrice = priceInputRef.current.value;
        const enteredAmount = amountInputRef.current.value;
        const enteredPhotoUrl = photoUrlInputRef.current.value;
        const enteredNameCategory = categoryInputRef.current.value;
        const enteredCompanyName = companyNameInputRef.current.value;
        const enteredNip = nipInputRef.current.value;
        console.log(enteredNameCategory);

        const productData = {
            name: enteredName,
            description: enteredDescription,
            price: enteredPrice,
            amount: enteredAmount,
            photoUrl: enteredPhotoUrl,
            category: {
                name: enteredNameCategory,
            },
            producer: {
                companyName: enteredCompanyName,
                nip: enteredNip,
            },
        };
        console.log(productData);
        props.onAddProduct(productData);
    }

    return (
        <div className = { styles.formp }>
            <form className="form-group border rounded shadow p-3 mb-5 bg-body rounded mb-3" onSubmit={submitHandler}>
                <div className={styles.pad}>
                    <h5>Add new product:</h5>
                    <label className = {styles.labels} htmlFor="name">Name:</label>
                    <input className="form-control" type="text" required id="name" ref={nameInputRef} /> 
                    <label className={styles.labels} htmlFor="description">Description:</label>
                    <input className="form-control" type="text" required id="description" ref={descriptionInputRef} />
                    <label className={styles.labels} htmlFor="price">Price:</label>
                    <input className="form-control" type="number" required id="price" ref={priceInputRef} />
                    <label className={styles.labels} htmlFor="amount">Amount:</label>
                    <input className="form-control" type="number" required id="amount" ref={amountInputRef} />
                    <label className={styles.labels} htmlFor="photoUrl">Photo URL:</label>
                    <input className="form-control" type="url" required id="photoUrl" ref={photoUrlInputRef} />
                    <label className={styles.labels} htmlFor="nameCategory">Category Name:</label>
                    <input className="form-control" type="text" required id="category" ref={categoryInputRef} />
                    <label className={styles.labels} htmlFor="companyName">Company Name:</label>
                    <input className="form-control" type="text" required id="companyName" ref={companyNameInputRef} />
                    <label className={styles.labels} htmlFor="nip">NIP:</label>
                    <input className="form-control" type="text" required id="nip" ref={nipInputRef} />
                    <br></br>
                    <button className="btn btn-dark">Add product</button>
                </div>
            </form>

        </div>
    );
}

export default NewProductForm;