import Navbar from "./components/Navbar";

function App() {

    return (
        <div>
            <Navbar />
            <div className="container text-center mt-5">
                <h1>Welcome to Book Manager</h1>
                <p>Manage your library books easily.</p>
            </div>
        </div>
    );
}

export default App;
