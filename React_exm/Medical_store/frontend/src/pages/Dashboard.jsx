import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import api from '../store/api';
import '../styles/Dashboard.css';

function Dashboard() {
    const [medicines, setMedicines] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const [editingId, setEditingId] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const medicinesPerPage = 2;

    useEffect(() => {
        fetchMedicines();
    }, []);

    // Fetch all medicines from Django
    async function fetchMedicines() {
        try {
            let url = 'medicines/';
            let allMedicines = [];

            while (url) {
                const response = await api.get(url);
                allMedicines = [...allMedicines, ...response.data.results];
                url = response.data.next;
            }

            setMedicines(allMedicines);
        } catch (error) {
            console.error(error);
            setErrorMessage('Failed to load medicines.');
        }    
    }

    // Clear form
    function clearForm() {
        setName('');
        setDescription('');
        setQuantity('');
        setPrice('');
        setEditingId(null);
    }

    // Add or update medicine
    function saveMedicine(e) {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        const medicine = {
            name,
            description,
            quantity: Number(quantity),
            price
        };

        const request = editingId
            ? api.patch(`medicines/${editingId}/`, medicine)
            : api.post('medicines/', medicine);

        request
            .then(() => {
                setSuccessMessage(
                    editingId
                        ? 'Medicine updated successfully!'
                        : 'Medicine added successfully!'
                );
                clearForm();
                fetchMedicines();
            })
            .catch(error => {
                const data = error.response?.data;

                if (data?.detail) {
                    setErrorMessage(data.detail);
                } else if (data) {
                    const messages = Object.entries(data).map(
                        ([field, errors]) =>
                            `${field}: ${Array.isArray(errors) ? errors.join(' ') : errors}`
                    );
                    setErrorMessage(messages.join(' '));
                } else {
                    setErrorMessage('Failed to save medicine.');
                }
            });
    }

    // Load medicine details for editing
    function editMedicine(medicine) {
        setEditingId(medicine.id);
        setName(medicine.name);
        setDescription(medicine.description);
        setQuantity(String(medicine.quantity));
        setPrice(String(medicine.price));
        setErrorMessage('');
        setSuccessMessage('');
    }

    // Delete medicine
    function deleteMedicine(id) {
        const confirmDelete = window.confirm(
            'Are you sure you want to delete this medicine?'
        );

        if (!confirmDelete) return;

        api.delete(`medicines/${id}/`)
            .then(() => {
                setSuccessMessage('Medicine deleted successfully!');
                fetchMedicines();

                if (editingId === id) {
                    clearForm();
                }
            })
            .catch(error => {
                console.error(error);
                setErrorMessage('Failed to delete medicine.');
            });
    }

    // Search medicines
    const searchValue = searchTerm.toLowerCase();

    const filteredMedicines = [...medicines]
    .filter(medicine =>
        medicine.name.toLowerCase().includes(searchValue) ||
        medicine.description.toLowerCase().includes(searchValue)
    )
    .sort((a,b)=>
        new Date(b.created_at) - new Date(a.created_at)
    );

    // Pagination
    const totalPages = Math.ceil(
        filteredMedicines.length / medicinesPerPage
    );

    const startIndex = (currentPage - 1) * medicinesPerPage;

    const currentMedicines = filteredMedicines.slice(
        startIndex,
        startIndex + medicinesPerPage
    );

    return (
        <div className="dashboard-page">
            <Navbar />

            <div className="container dashboard-container">
                <h2 className="dashboard-title">
                    Medical Store Dashboard
                </h2>
                {errorMessage && (
                    <div className="alert alert-danger">
                        {errorMessage}
                    </div>
                )}
                {successMessage && (
                    <div className="alert alert-success">
                        {successMessage}
                    </div>
                )}

                {/* Medicine count */}
                <div className="card dashboard-card statistics-card">
                    <div className="card-body">
                        <div className="medicine-stat-content">
                            <div className="medicine-progress">
                                <svg viewBox="0 0 120 120">
                                    <circle className="progress-background"
                                        cx="60"
                                        cy="60"
                                        r="50"/>
                                    <circle className={`progress-value progress-${medicines.length}`}
                                        cx="60"
                                        cy="60"
                                        r="50"
                                        style={{strokeDasharray: `${(Math.min(medicines.length, 5) / 5) * 314} 314` }} />
                                </svg>
                                <div className="progress-count">
                                    {medicines.length}/5
                                </div>
                            </div>

                            <div className="medicine-stat-info">
                                <h5>Total Medicines</h5>

                                <h3>{medicines.length}</h3>

                                {medicines.length >= 5 ? (
                                    <p className="capacity-full">
                                        Maximum capacity reached!
                                    </p>
                                ) : (
                                    <p className="capacity-available">
                                        You can add {5 - medicines.length} more medicines
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Medicine form */}
                <div className="card dashboard-card">
                    <div className="card-header dashboard-card-header">
                        {editingId ? 'Edit Medicine' : 'Add New Medicine'}
                    </div>

                    <div className="card-body">
                        <form onSubmit={saveMedicine}>
                            <div className="mb-3">
                                <label className="form-label">
                                    Medicine Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    required/>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Description
                                </label>
                                <textarea
                                    className="form-control"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}/>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        Quantity
                                    </label>
                                    <input
                                        type="number"
                                        min="0"
                                        className="form-control"
                                        value={quantity}
                                        onChange={e => setQuantity(e.target.value)}
                                        required/>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        className="form-control"
                                        value={price}
                                        onChange={e => setPrice(e.target.value)}
                                        required />
                                </div>
                            </div>

                            <button type="submit" className="btn dashboard-primary-btn me-2" >
                                {editingId ? 'Update Medicine' : 'Add Medicine'}
                            </button>

                            {editingId && (
                                <button type="button" className="btn dashboard-cancel-btn" onClick={clearForm} >
                                    Cancel
                                </button>
                            )}
                        </form>
                    </div>
                </div>

                {/* Search */}
                {/* Medicine table */}
                <div className="card dashboard-card medicine-list-card">
                    <div className="medicine-list-header">
                        <h5>Medicine List</h5>

                        <div className="medicine-search">
                            <i className="bi bi-search"></i>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search medicines..."
                                value={searchTerm}
                                onChange={e => {
                                    setSearchTerm(e.target.value); 
                                    setCurrentPage(1);
                                }}/>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped medicine-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Quantity</th>
                                        <th>Stock Status</th>
                                        <th>Price</th>
                                        <th>Created At</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {filteredMedicines.length > 0 ? ( currentMedicines.map(medicine => (
                                    <tr key={medicine.id}>
                                        <td>{medicine.id}</td>
                                        <td>{medicine.name}</td>
                                        <td>{medicine.description}</td>
                                        <td>{medicine.quantity}</td>
                                        <td>
                                            {medicine.quantity === 0 ? (
                                            <span className="stock-badge out-of-stock">
                                                Out of Stock
                                            </span>
                                            ) : medicine.quantity <= 50 ? (
                                                <span className="stock-badge low-stock">
                                                    Low Stock
                                                </span>
                                            ) : (
                                                <span className="stock-badge in-stock">
                                                    In Stock
                                                </span>
                                            )}
                                        </td>
                                        <td>Rs.{medicine.price}</td>
                                        <td>
                                            {new Date( medicine.created_at ).toLocaleString()}
                                        </td>
                                        <td className="action-buttons">
                                            <button className="btn btn-warning btn-sm me-2" onClick={() => editMedicine(medicine)} >
                                                Edit
                                            </button>

                                            <button className="btn btn-danger btn-sm" onClick={() => deleteMedicine(medicine.id)} >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                    ))
                                    ) : (
                                        <tr>
                                            <td colSpan="8" className="text-center">
                                                No medicines found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="dashboard-pagination">
                            <button className="btn dashboard-cancel-btn" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} >
                                Previous
                            </button>

                            <span>
                                Page {currentPage} of {Math.max(totalPages, 1)}
                            </span>

                            <button className="btn dashboard-primary-btn" disabled={currentPage >= totalPages} onClick={() => setCurrentPage(currentPage + 1)} >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
