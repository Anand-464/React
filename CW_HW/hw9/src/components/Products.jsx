import axios from "axios";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { setProducts } from "../store/productSlice";

import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Products() {

    const dispatch = useDispatch();

    const token = useSelector(
        store => store.auth.token
    );

    const products = useSelector(
        store => store.products.productList
    );

    const hasFetched = useSelector(
        store => store.products.hasFetched
    );

    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(!hasFetched);

    useEffect(() => {
        if (!token || hasFetched) {
            setLoading(false);
            return;
        }
        axios.get(
            "https://worksheet-product.mashupstack.com/product",
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
        )
        .then(response => {
            const data = response.data;
            dispatch(
                setProducts(
                    Array.isArray(data) ? data : data.products || []
                )
            );
            setErrorMessage("");
        })
        .catch(error => {
            console.log(error);
            setErrorMessage(
                error.response?.data?.message ||
                "Failed to fetch products"
            );
        })
        .finally(() => {
            setLoading(false);
        });
    }, [token, hasFetched, dispatch]);


    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <h1>Electronics Store Dashboard</h1>
                <h3 className="mt-4">Product List</h3>
                {loading && (
                    <p>Loading products...</p>
                )}
                {errorMessage && (
                    <div className="alert alert-danger">
                        {errorMessage}
                    </div>
                )}

                {!loading && !errorMessage && (
                    <table className="table table-bordered table-striped mt-3">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.length > 0 ? (
                                products.map(product => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.description}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>
                                            <Link
                                                to={`/product/${product.id}`}
                                                className="btn btn-primary"
                                            >
                                                View
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center">
                                        No products found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default Products;