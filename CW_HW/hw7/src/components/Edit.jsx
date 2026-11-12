import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Edit() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");

    const { postId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://worksheet-catalogue.mashupstack.com/products/" + postId)
        .then(response => {
            setName(response.data.name);
            setPrice(response.data.price);
            setCategory(response.data.category);
            setQuantity(response.data.quantity);

        })
        .catch(error => {
            console.log("GET Error:", error.response?.data || error);
            alert("Error fetching product details");
        });
    }, [postId]);

    function updateProduct() {

        axios.put("https://worksheet-catalogue.mashupstack.com/products/" + postId,
            {
                name: name,
                price: Number(price),
                category: category,
                quantity: Number(quantity)
            }
        )
        .then(response => {
            alert("Product updated successfully!");
            navigate("/list");
        })
        .catch(error => {
            console.log("PUT Error:", error.response?.data || error);
            alert("Error updating product");
        });
    }

    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-8 offset-2">
                        <h1 className="text-center">Edit Product</h1>

                        <div className="form-group mb-3">
                            <label>Product Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}/>
                        </div>

                        <div className="form-group mb-3">
                            <label>Price:</label>
                            <input
                                type="number"
                                className="form-control"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}/>
                        </div>

                        <div className="form-group mb-3">
                            <label>Category:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)} />
                        </div>

                        <div className="form-group mb-3">
                            <label>Available Quantity:</label>
                            <input
                                type="number"
                                className="form-control"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)} />
                        </div>

                        <button className="btn btn-primary" onClick={updateProduct} >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;
