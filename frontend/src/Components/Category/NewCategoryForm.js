import { useRef } from "react";

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
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Category Name</label>
                <input type="text" required id="name" ref={nameInputRef} />
                <button>Add category</button>
            </form>
        </div>
  );
}

export default NewCategoryForm;
