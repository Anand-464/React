import React, { useState } from "react";

function CRUD() {
  const [items, setItems] = useState([
    { id: 1, name: "John", rollNo: "101", studentClass: "10A" },
    { id: 2, name: "David", rollNo: "102", studentClass: "10B" },
    { id: 3, name: "William", rollNo: "103", studentClass: "10A" }
  ]);

  const [studentName, setStudentName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [studentClass, setStudentClass] = useState("");

  const [editingItemId, setEditingItemId] = useState(null);

  const [editedStudent, setEditedStudent] = useState({name: "", rollNo: "", studentClass: "" });

  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (studentName.trim() === "" || rollNo.trim() === "" || studentClass.trim() === "") {
      alert("Please fill all fields");
      return;
    }

    const duplicate = items.some((item) => item.rollNo.toLowerCase() === rollNo.trim().toLowerCase());

    if (duplicate) {
      alert("Roll number already exists");
      return;
    }

    const newStudent = {
      id: items.length + 1,
      name: studentName.trim(),
      rollNo: rollNo.trim(),
      studentClass: studentClass.trim()
    };

    setItems([...items, newStudent]);
    setStudentName("");
    setRollNo("");
    setStudentClass("");
  };

  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  const handleEditItem = (item) => {
    setEditingItemId(item.id);

    setEditedStudent({
      name: item.name,
      rollNo: item.rollNo,
      studentClass: item.studentClass
    });
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;

    setEditedStudent({...editedStudent,[name]: value});
  };

  const handleSaveItem = () => {
    if (editedStudent.name.trim() === "" || editedStudent.rollNo.trim() === "" || editedStudent.studentClass.trim() === "") {
      alert("Please fill all fields");
      return;
    }

    const duplicate = items.some(
      (item) =>item.rollNo.toLowerCase() === editedStudent.rollNo.trim().toLowerCase() && item.id !== editingItemId);

    if (duplicate) {
      alert("Roll number already exists");
      return;
    }

    const updatedItems = items.map((item) => {
      if (item.id === editingItemId) {
        return {...item, name: editedStudent.name.trim(), rollNo: editedStudent.rollNo.trim(), studentClass: editedStudent.studentClass.trim()};
      }
      return item;
    });

    setItems(updatedItems);
    setEditingItemId(null);
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
    setEditedStudent({name: "", rollNo: "", studentClass: ""});
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    <div className="container">
      <h1>Student List Management</h1><hr />
      <h2>Add New Student</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Student Name" value={studentName} onChange={(e) => setStudentName(e.target.value)} /><br/><br/>
        <input type="text" placeholder="Enter Roll Number" value={rollNo} onChange={(e) => setRollNo(e.target.value)} /><br/><br/>
        <input type="text" placeholder="Enter Class" value={studentClass} onChange={(e) => setStudentClass(e.target.value)} /><br/><br/>

        <button type="submit" className="btn btn-small btn-primary">
          Add
        </button>
      </form><br/>

      <h2>Search Students</h2>
      <input type="text" placeholder="Search by student name..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /><br/><br />

      <h2>Student List</h2><br />
      <table className="table table-bordered table-dark" border={'1px'}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Roll Number</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredItems.length === 0 ? (
            <tr>
              <td colSpan="5">No students found</td>
            </tr>
          ) : (
            filteredItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>

                {editingItemId === item.id ? (
                  <>
                    <td>
                      <input type="text" name="name" value={editedStudent.name} onChange={handleEditChange} />
                    </td>
                    <td>
                      <input type="text" name="rollNo" value={editedStudent.rollNo} onChange={handleEditChange} />
                    </td>
                    <td>
                      <input type="text" name="studentClass" value={editedStudent.studentClass} onChange={handleEditChange} />
                    </td>
                    <td>
                      <button type="button" className="btn btn-success" onClick={handleSaveItem} >
                        Save
                      </button>

                      <button type="button" className="btn btn-secondary" onClick={handleCancelEdit} >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{item.name}</td>
                    <td>{item.rollNo}</td>
                    <td>{item.studentClass}</td>
                    <td>
                      <button type="button" className="btn btn-secondary" onClick={() => handleEditItem(item)} >
                        Edit
                      </button>

                      <button type="button" className="btn btn-danger" onClick={() => handleDelete(item.id)} >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>    
  );
}

export default CRUD;
