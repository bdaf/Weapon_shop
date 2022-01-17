
function ProductCard(props) {
    return (
        <tr>
            <td>{props.product.name}</td>
            <td>{props.product.description}</td>
            <td>{props.product.price}</td>
            <td>{props.product.amount}</td>
            <td>{props.product.photoUrl}</td>
            <td>{props.product.category.name}</td>
            <td>{props.product.producer.companyName}</td>
            <td>{props.product.producer.nip}</td>
        </tr>
  );
}

export default ProductCard;