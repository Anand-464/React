import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Delete from "./Delete";

function List() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    function fetchProducts() {
        axios.get("https://worksheet-catalogue.mashupstack.com/products")
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log("API Error:", error.response?.data || error);
            });
    }
    useEffect(() => {
        fetchProducts();
    }, []);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <h1 className="text-center my-4">Product Catalog</h1>

                <div className="row mb-4">
                    <div className="col-8 offset-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search products"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-10 offset-1">
                        {filteredProducts.length === 0 ? (
                            <h5 className="text-center">
                                No products found
                            </h5>
                        ) : (
                            filteredProducts.map(product => (
                                <Delete key={product.id} post={product} refresh={fetchProducts}/>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;
