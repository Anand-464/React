import axios from "axios";
import { Link } from "react-router-dom";

function Delete(props) {

    function deleteBook() {
        axios.delete(
            "https://worksheet-library.mashupstack.com/books/" + props.post.id
        )
        .then(response => {
            alert("Book deleted successfully!");
            props.refresh();
        })
        .catch(error => {
            console.log(error);
            alert("Error deleting book");
        });
    }

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5>{props.post.title}</h5>
                <p>Author: {props.post.author}</p>
                <p>Published Year: {props.post.published_year}</p>
                <p>Genre: {props.post.genre}</p>

                <button className="btn btn-danger me-2" onClick={deleteBook}>
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
