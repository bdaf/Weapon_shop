import { useRef } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

function NewCategoryForm(props){
    const nameInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        
        const enteredName = nameInputRef.current.value;

        const categoryData = {
            name: enteredName
        };

        console.log(categoryData);
        props.onAddCategory(categoryData);
    }

    return <div>
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Category Name</label>
            <input type="text" required id="name" ref={nameInputRef}/>
            <button>Add category</button>
        </form>
    </div>
}

export default NewCategoryForm;