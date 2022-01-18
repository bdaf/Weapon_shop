import { useRef } from "react";
import styles from "./CategoriesList.module.css";

function NewCategoryForm(props) {
  const nameInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;

    const categoryData = {
      name: enteredName,
    };

    props.onAddCategory(categoryData);
  }

    return (
       // styles that don't work a bit
       // <div class="card">
       //     <div class="card-body">
       //   <form onsubmit={submithandler}>
       //             <div class="mb-3">
       //           <label htmlfor="name">category name</label>
       //          <input type="text" required id="name" ref={nameinputref} />
       //                 <button type="button" class="btn btn-dark">add category</button>
       //                 </div>
       //         </form>
       //         </div>
       //     <br></br>
       // </div>
        <div className={styles.formp}>
            <form className="form-group border rounded shadow p-3 mb-5 bg-body rounded mb-3" onSubmit={submitHandler}>
                <h5>Add New Category:</h5>
                <div className={styles.pad}>
                <label htmlFor="name">Category Name:</label>
                    <input className="form-control" type="text" required id="name" ref={nameInputRef} />
                    <br></br>
                    <button className="btn btn-dark">Add Category</button>
                    </div>
            </form>
        </div>
  );
}

export default NewCategoryForm;
