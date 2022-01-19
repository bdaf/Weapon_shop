import axios from "axios";

function ProductCard(props) {

    return (
        <tr>
            <td>{props.product.name}</td>
            <td>{props.product.description}</td>
            <td>{props.product.price.toFixed(2)}</td>
            <td>{props.product.amount}</td>
            <td>{props.product.category.name}</td>
            <td>{props.product.producer.companyName}</td>
            <td><img width={150} height={150} src={props.product.photoUrl} alt="Logo" /></td>
            <td>
                <button type="button" class="btn btn-outline-light">Buy</button>
            </td>
        </tr>
    );
}

export default ProductCard;
