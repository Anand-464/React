import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import checkAuth from '../auth/checkAuth';

function StudentList() {
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);

    const user = useSelector(state => state.auth.user);
    const token = user?.token;

    useEffect(()=>{
        if(token){
            axios.get('https://worksheet-student.mashupstack.com/students',{
               headers:{'Authorization':"Bearer "+ token}
            }).then(response=> {
                const data= response.data;
                setStudents(data);
            }).catch(error=> {
                console.log(error);
            })   
        }else{
            navigate("/login")
        }
    },[token, navigate])

  return (
    <div>
        <Navbar/>
        <div className='container mt-5'>
            <h2>Student List</h2>
            <table className='table table-bordered table-striped mt-3'>
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((student) => (
                        <tr key={student.id }>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default checkAuth(StudentList);