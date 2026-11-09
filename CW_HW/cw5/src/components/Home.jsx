import { Link, useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  const students = ["Alexa", "Riya", "Rahul", "Anu"];

  return (
    <div>
      <h1>Student List</h1>

      {students.map((student) => (
        <p key={student}>
          <Link to={`/student/${student}`}>
            {student}
          </Link>
        </p>
      ))}

      <button onClick={() => navigate('/student/Riya')}>
        Go to Default Student
      </button>

    </div>
  );
}

export default Home;