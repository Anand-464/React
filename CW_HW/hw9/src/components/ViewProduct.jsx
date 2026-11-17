import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

function ViewProduct() {

    const { id } = useParams();

    const navigate = useNavigate();

    const products = useSelector(
        state => state.products.productList
    );

    const product = products.find(
        item => String(item.id) === id
    );

    if (!product) {
        return (
            <>
                <Navbar />
                <div className="container mt-5">
                    <h2>Product not found</h2>
                    <button
                        className="btn btn-primary"
                        onClick={() => navigate("/products")}
                    >
                        Back to Products
                    </button>
                </div>
            </>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <h2>Product Details</h2>
                <div className="card p-4 mt-3">

                    <h3>{product.name}</h3>
                    <p>
                        <strong>Description:</strong>
                        {" "}{product.description}
                    </p>
                    <p>
                        <strong>Price:</strong>
                        {" "}{product.price}
                    </p>
                    <p>
                        <strong>Quantity:</strong>
                        {" "}{product.quantity}
                    </p>

                    <button
                        className="btn btn-secondary"
                        onClick={() => navigate("/products")}
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ViewProduct;