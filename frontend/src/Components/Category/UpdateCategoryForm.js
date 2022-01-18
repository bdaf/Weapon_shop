import { useRef } from "react";

function UpdateCategoryForm(props) {
  const nameInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;

    const categoryData = {
      name: enteredName,
    };

    props.onUpdateCategory(categoryData);
  }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h2>Change name of category:</h2>
                <label htmlFor="name">Category Name</label>
                <input type="text" required id="name" ref={nameInputRef} />
                <Button variant="outline-warning">Update category</Button>{' '}
            </form>
        </div>
  );
}

export default UpdateCategoryForm;
