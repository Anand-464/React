import axios from "axios";
import { Link } from "react-router-dom";

function Delete(props) {
    function deleteProduct() {
        axios.delete("https://worksheet-catalogue.mashupstack.com/products/" + props.post.id)
        .then(response => {
            alert("Product deleted successfully!");
            props.refresh();
        })
        .catch(error => {
            console.log("Delete Error:", error.response?.data || error);
            alert("Error deleting product");
        });
    }

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">
                    {props.post.name}
                </h5>
                <p>Price: {props.post.price}</p>
                <p>Category: {props.post.category}</p>
                <p>Available Quantity: {props.post.quantity}</p>

                <button className="btn btn-danger me-2" onClick={deleteProduct} >
                    Delete
                </button>

                <Link to={"/list/" + props.post.id + "/edit"} className="btn btn-primary">
                    Edit
                </Link>
            </div>
        </div>
    );
}

export default Delete;
