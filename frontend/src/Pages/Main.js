import { Carousel } from "react-bootstrap";
import photo from "./Photo/gun.jpg";
import photo2 from "./Photo/gun2.jpg";
import photo3 from "./Photo/gun3.jpg";
import { Link } from "react-router-dom";

function Main() {
    return <div>
        <Carousel>
            <Carousel.Item>
                <img width={1920} height={600} src={photo} />
                <Carousel.Caption>
                    <h1>Welcome to our Store!</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={1920} height={600} src={photo2} />
                <Carousel.Caption>
                    <h1>Store with military, outdoor and self-defense</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={1920} height={600} src={photo3} />
                <Carousel.Caption>
                    <h1>In this store you will find the best products at attractive prices!</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br></br>
        <Link to="productsBuy" className="link-light"> <button className="btn btn-dark p-4 py-4 fs-5">Buy Products</button></Link>
    </div>

}
export default Main;