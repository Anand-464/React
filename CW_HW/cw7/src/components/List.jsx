import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Delete from "./Delete";

function List() {
    const [books, setBooks] = useState([]);

    function fetchBooks(){
        axios.get('https://worksheet-library.mashupstack.com/books')
        .then(response=>{
            setBooks(response.data)
        })
        .catch(error => {
                console.log(error);
                alert("Error fetching books");
        });
    }
    useEffect(()=>{
        fetchBooks()
    },[])

    return (<div>
        <Navbar/>
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center my-4">Books</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-8 offset-2">
                    {books.map(book =><Delete key={book.id} post={book} refresh={fetchBooks}/>)}
                </div>
            </div>
        </div>
    </div>)
}

export default List;