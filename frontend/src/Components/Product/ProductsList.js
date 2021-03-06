import ProductCard from "./ProductCard";
import { Table } from "react-bootstrap";
import styles from "./ProductsList.module.css";


function ProductsList(props) {
  return (
      <div className={styles.width} >
          <Table stripped bordered hover variant="dark" className="table-responsive-sm" responsive>
          <thead>
              <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Category Name</th>
                    <th>Company Name</th>
                    <th>NIP</th>
                    <th>Delete</th>
              </tr>
          </thead>
        {props.products.map((product) => {
          return (
            <tbody key={product.productId}>
                  <ProductCard product={product} updateProducts={props.updateProducts} showFeedback={props.showFeedback}/>
            </tbody>
          );
        })}
          </Table>
    </div>
  );
}

export default ProductsList;
