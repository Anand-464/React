import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Create() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear]= useState("");
    const [genre, setGenre]= useState("");

    var navigate = useNavigate()

    function addBook() {
        axios.post('https://worksheet-library.mashupstack.com/books',{
            title: title.trim(),
            author: author.trim(),
            published_year: Number(year),
            genre: genre.trim()
        }).then(response=>{
            alert("Book added successfully!");
            navigate('/list')
        })
        .catch(error => {
            console.log("Full error:", error);
            console.log("API error response:", error.response?.data);
            console.log("Status:", error.response?.status);
        });
    }
    return (<div>
        <Navbar/>
        <div className="container mt-4">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1 className="text-center">Create Book</h1>

                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text" className="form-control" value={title} onChange={(event)=>{setTitle(event.target.value)}} />
                    </div>

                    <div className="form-group">
                        <label>Author:</label>
                        <input type="text" className="form-control" value={author} onChange={(event)=>{setAuthor(event.target.value)}} />
                    </div>

                    <div className="form-group">
                        <label>Published year:</label>
                        <input type="number" className="form-control" value={year} onChange={(event)=>{setYear(event.target.value)}} />
                    </div>

                    <div className="form-group">
                        <label>Genre:</label>
                        <input type="text" className="form-control" value={genre} onChange={(event)=>{setGenre(event.target.value)}} />
                    </div>


                    <div className="form-group">
                        <button className="btn btn-primary float-right" onClick={addBook}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Create;