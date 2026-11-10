import React from 'react'
import { useState } from 'react'

function Book() {

    var [books, setBooks]= useState([
        {id: 1, name: "Harry potter", author: "J K Rowling", dop: "2004-01-10"},
        {id: 2, name: "The Alchemist", author: "Paulo Coelho", dop: "2000-06-05"},
        {id: 3, name: "Vagabond", author: "Takehiko", dop: "1999-01-08"}
    ]);

    const [bookName, setBookName]= useState("");
    const [bookAuthor, setBookAuthor]= useState("");
    const [bookDate, setBookDate]= useState("");

    const [editingBookId, setEditingBookId] = useState(null);
    const [editedBookName, setEditedBookName] = useState("");

    const [searchTerm, setSearchTeam]= useState("")
    
    const handleInputChange= (event)=> {
        setBookName(event.target.value);
    };

    const handleEditBook= (book)=> {
        setEditingBookId(book.id);
        setEditedBookName(book.name);
    };
    const handleSaveBook= ()=> {
        if (editedBookName.trim() ===""){
            alert("Book name cannot be empty");
            return;
        }
            
        const updatedBooks= books.map((book)=>{
            if (book.id === editingBookId){
                return{...book, name: editedBookName.trim()};
            }
            else{
                return book;
            }
        });
        setBooks(updatedBooks);
        setEditingBookId(null);
        setEditedBookName("")
    };

    const handleCancelEdit=()=>{
        setEditingBookId(null);
        setEditedBookName("")
    };

    const handleSubmit= (event)=>{
        event.preventDefault();
        if (bookName.trim()===""){
            alert("Book name cannot be empty");
            return
        }
        var x= books.length +1;
        var newBook= {
            id: x,
            name: bookName,
            author: bookAuthor,
            dop: bookDate
        };
        setBooks([...books, newBook]);
        setBookName("");
        setBookAuthor("");
        setBookDate("");
    }

    const handleDeleteBook= (id)=> {
        const filteredBooks= books.filter((book)=> book.id !==id);
        setBooks(filteredBooks);
    }

    const filteredBooks= books.filter((book)=>{
        return (book.name.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase()))
    })

  return (
    <div>
        <h1>Book List Manager</h1>
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter book name" value={bookName} onChange={(e)=> setBookName(e.target.value)} />

                <input type="text" placeholder="Enter author name" value={bookAuthor} onChange={(e)=> setBookAuthor(e.target.value)} />

                <input type="date" value={bookDate} onChange={(e)=> setBookDate(e.target.value)} />

                <button type="submit" className="btn btn-small btn-primary">Add book</button>
            </form><br />
        </div>

        <div className="container">
            <input type="text" placeholder="Search for books" value={searchTerm} onChange={(e)=> setSearchTeam(e.target.value)} />
        </div><br/>

        <div className="container">
            <table className="table table-bordered table-dark" border={'1px'}>
                <thead>
                    <tr>
                        <th>Book id</th>
                        <th>Book name</th>
                        <th>Author</th>
                        <th>Publish date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBooks.length=== 0 ?(
                        <tr>
                            <td colSpan= "5">No books found</td>
                        </tr>
                    ):(
                    filteredBooks.map((book)=>{
                        return(
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{editingBookId === book.id ?( <input type="text" value={editedBookName} onChange={(e)=> setEditedBookName(e.target.value)} />) : (book.name)}</td>
                            <td>{book.author}</td>
                            <td>{book.dop}</td>
                            <td>
                                {editingBookId=== book.id ?(
                                    <>
                                        <button className="btn btn-success" onClick={handleSaveBook}>Save</button>

                                        <button className="btn btn-secondary" onClick={handleCancelEdit}>Cancel</button>
                                    </>
                                ):(
                                    <>
                                    <button className="btn btn-danger" onClick={()=> handleDeleteBook(book.id)}>Delete</button>
                                    <button className="btn btn-secondary" onClick={()=> handleEditBook(book)}>Edit</button>
                                    </>
                                )}
                            </td>
                        </tr>
                        );
                    }))}
                </tbody>
            </table>
        </div>


    </div>
  )
}

export default Book