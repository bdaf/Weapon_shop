import { useRef } from "react";

function NewProductForm(props) {

    const nameInputRef = useRef();
    const descriptionInputRef = useRef();
    const priceInputRef = useRef();
    const amountInputRef = useRef();
    const releaseDateInputRef = useRef();
    const photoUrlInputRef = useRef();
    const forSaleInputRef = useRef();

    const categoryInputRef = useRef();

    const companyNameInputRef = useRef();
    const nipInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const enteredPrice = priceInputRef.current.value;
        const enteredAmount = amountInputRef.current.value;
        const enteredReleaseDate = releaseDateInputRef.current.value;
        const enteredPhotoUrl = photoUrlInputRef.current.value;
        const enteredForSale = forSaleInputRef.current.value;

        const enteredNameCategory = categoryInputRef.current.value;

        const enteredCompanyName = companyNameInputRef.current.value;
        const enteredNip = nipInputRef.current.value;


        const productData = {
            name: enteredName,
            description: enteredDescription,
            price: enteredPrice,
            amount: enteredAmount,
            releaseDate: enteredReleaseDate,
            photoUrl: enteredPhotoUrl,
            forSale: enteredForSale,
            category: {
                nameCategory: enteredNameCategory,
            },
            producer: {
                companyName: enteredCompanyName,
                nip: enteredNip,
            },
        };

        props.onAddProduct(productData);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name:</label>
                <input type="text" required id="name" ref={nameInputRef} /> <br></br>
                <label htmlFor="name">Description:</label>
                <input type="text" required id="description" ref={descriptionInputRef} /><br></br>
                <label htmlFor="name">Price:</label>
                <input type="number" required id="price" ref={priceInputRef} /><br></br>
                <label htmlFor="name">Amount:</label>
                <input type="number" required id="amount" ref={amountInputRef} /><br></br>
                <label htmlFor="name">Release Date:</label>
                <input type="text" required id="releaseDate" ref={releaseDateInputRef} /><br></br>
                <label htmlFor="name">Photo URL:</label>
                <input type="url" required id="photoUrl" ref={photoUrlInputRef} /><br></br>
                <label htmlFor="name">For Sale:</label>
                <input type="text" required id="forSale" ref={forSaleInputRef} /><br></br>
                <label htmlFor="name">Category Name:</label>
                <input type="text" required id="nameCategory" ref={categoryInputRef} /><br></br>
                <label htmlFor="name">Company Name:</label>
                <input type="text" required id="companyName" ref={companyNameInputRef} /><br></br>
                <label htmlFor="name">NIP:</label>
                <input type="number" required id="nip" ref={nipInputRef} /><br></br>
                <button>Add product</button>
            </form>
        </div>
    );
}

export default NewProductForm;