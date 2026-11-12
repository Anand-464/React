import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Edit() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear]= useState('');
    const [genre, setGenre]= useState('');

    const { postId } = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        axios.get('https://worksheet-library.mashupstack.com/books/'+postId)
        .then(response=>{
            setTitle(response.data.title);
            setAuthor(response.data.author);
            setYear(response.data.published_year);
            setGenre(response.data.genre)
        })
        .catch(error => {
            console.log(error);
            alert("Error fetching book details");
        });
    },[postId]);

    function updateBook(){
        axios.put('https://worksheet-library.mashupstack.com/books/'+postId,{
            title: title,
            author: author,
            published_year: Number(year),
            genre: genre
        }).then(response=>{
            alert(response.data.message)
            navigate('/list');
        })
        .catch(error => {
            console.log(error);
            alert("Error updating book");
        });
        
    }
    return <div>
        <Navbar/>
        <div className="container mt-4">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1 className="text-center">Edit book</h1>
                    
                    <div className="form-group mb-3">
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
                        <button className="btn btn-primary float-right" onClick={updateBook}>Submit</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
}

export default Edit;