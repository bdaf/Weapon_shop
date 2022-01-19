import axios from "axios";

function ProductCard(props) {

  const deleteProductHandler = async (e) => {
    e.preventDefault();
    console.log("usuwamy");
    await axios.delete(`http://localhost:80/api/products/${props.product.productId}`, {
        data: {productId: props.product.productId}
      }).then((response) => {
        if (response.status === 200)
          props.showFeedback("success","Product has been removed!" )
        else props.showFeedback("danger","We couldn't remove this product!");
        props.updateProducts();
      }).catch((e) => {
        console.log(e);
        props.showFeedback("danger","Error occured. Try with another one or later.");
      });
  }

  return (
    <tr>
      <td>{props.product.name}</td>
      <td>{props.product.description}</td>
      <td>{props.product.price.toFixed(2)}</td>
      <td>{props.product.amount}</td>
      <td>{props.product.category.name}</td>
      <td>{props.product.producer.companyName}</td>
      <td>{props.product.producer.nip}</td>
      <td>
        <button type="button" class="btn btn-outline-light"
        onClick={deleteProductHandler}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ProductCard;
