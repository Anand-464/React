import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

function Products() {

    const user = useSelector(store => store.auth.user);

    const [products, setProducts] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
         if (!user?.token) {
            return;
        }

        axios.get("https://worksheet-product.mashupstack.com/product",
            {
                headers: {
                    Authorization: "Bearer " + user.token
                }
            }
        )
        .then(response => {
            console.log(response.data);
            const data = response.data;
            setProducts(
                Array.isArray(data) ? data : data.products || []
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
    }, [user.token]);

    return (
        <div>
            <Navbar />
            <div className="container mt-5">

                <h1>Electronics Store Dashboard</h1>

                <p>Welcome, {user?.email}</p>

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
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center">
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