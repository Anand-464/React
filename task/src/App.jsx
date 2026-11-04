import './App.css'

function App() {
  let obj= [{name: "Ebi", location: "Trivandrum", age: 20}, 
    {name: "Akash", location: "Kollam", age: 21},
    {name: "Abhi", location: "Kochi", age: 19},
    {name: "Abhinav", location: "Thrissur", age: 22},
    {name: "Peter", location: "Palakad", age: 18}
  ]
  return (
    <>
      {obj.map((item)=>{
      return [
      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Hello i am {item.name} from {item.location}, age is {item.age}</p>
        </div>
      </div>
      ]
      })}   
    </>
  )
}

export default App
