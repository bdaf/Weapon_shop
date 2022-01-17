import { useRef } from 'react';

function NewDiscountForm(props) {

  const percentInputRef = useRef();
  const fromInputRef = useRef();
  const toInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredpercent = percentInputRef.current.value;
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
    <div>
      <form onSubmit={submitHandler}>

        <label htmlFor="percent">Percent:</label>
        <input type="text" required id="percent" ref={percentInputRef} />

        <label htmlFor="from">From:</label>
        <input type="text" required id="from" ref={fromInputRef} />

        <label htmlFor="to">To:</label>
        <input type="text" required id="to" ref={toInputRef} />

        <button>Add discount</button>
      </form>
    </div>
  );
}

export default NewDiscountForm;
