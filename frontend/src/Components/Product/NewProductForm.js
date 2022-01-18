import { useRef } from "react";

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
        <div>
            <br></br>

            <form className="mb-3" onSubmit={submitHandler}>
                <label htmlFor="name">Name:</label>
                <input type="text" required id="name" ref={nameInputRef} /> <br></br>
                <label htmlFor="description">Description:</label>
                <input type="text" required id="description" ref={descriptionInputRef} /><br></br>
                <label htmlFor="price">Price:</label>
                <input type="number" required id="price" ref={priceInputRef} /><br></br>
                <label htmlFor="amount">Amount:</label>
                <input type="number" required id="amount" ref={amountInputRef} /><br></br>
                <label htmlFor="photoUrl">Photo URL:</label>
                <input type="url" required id="photoUrl" ref={photoUrlInputRef} /><br></br>
                <label htmlFor="nameCategory">Category Name:</label>
                <input type="text" required id="category" ref={categoryInputRef} /><br></br>
                <label htmlFor="companyName">Company Name:</label>
                <input type="text" required id="companyName" ref={companyNameInputRef} /><br></br>
                <label htmlFor="nip">NIP:</label>
                <input type="text" required id="nip" ref={nipInputRef} /><br></br>
                <button>Add product</button>
            </form>
            <br></br>

        </div>
    );
}

export default NewProductForm;