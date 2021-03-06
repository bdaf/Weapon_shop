import axios from "axios";
import { useNavigate } from "react-router";

function ProductCard(props) {
    const navigate = useNavigate();

    function navigateToDetails() {
        navigate("" + props.product.productId);
    }


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
                <button type="button" class="btn btn-outline-light" onClick={() => navigateToDetails()}> Buy</button>
            </td>
        </tr>
    );
}

export default ProductCard;
