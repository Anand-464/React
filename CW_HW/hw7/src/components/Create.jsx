import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Create() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");

    const navigate = useNavigate();

    function addProduct() {
        axios.post("https://worksheet-catalogue.mashupstack.com/products", {
            name: name,
            price: Number(price),
            category: category,
            quantity: Number(quantity)
        })
        .then(response => {
            alert("Product added successfully!");
            navigate("/list");
        })
        .catch(error => {
            console.log("API Error:", error.response?.data || error);
            alert("Error adding product");
        });
    }

    return (
        <div>
            <Navbar />

            <div className="container mt-4">
                <div className="row">
                    <div className="col-8 offset-2">

                        <h1 className="text-center">Add Product</h1>

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
                                onChange={(e) => setPrice(e.target.value)} />
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

                        <button className="btn btn-primary" onClick={addProduct} >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;
