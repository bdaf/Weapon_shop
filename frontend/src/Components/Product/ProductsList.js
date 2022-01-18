import ProductCard from "./ProductCard";
import { Table } from "react-bootstrap";

function ProductsList(props) {
  return (
      <div>
          <Table stripped bordered hover variant="dark" className="table-responsive-sm">
          <thead>
              <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Category Name</th>
                    <th>Company Name</th>
                    <th>NIP</th>
              </tr>
          </thead>
        {props.products.map((product) => {
          return (
            <tbody key={product.productId}>
                  <ProductCard product={product} />
            </tbody>
          );
        })}
          </Table>
    </div>
  );
}

export default ProductsList;
