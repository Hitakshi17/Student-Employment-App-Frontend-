import React from 'react'
import { Link } from "react-router-dom";
import StudentList from '../components/Company/StudentList';


function CompanyView() {
    return (
        <main className='container'>
            <section className='card mt-3 d-flex flex-row justify-content-between p-3 custom-shadow'>
                <div>
                    <h1>XYZ Company</h1>
                    <p className='text-secondary'> Consultancy Firm </p>
                </div>
                <div className="btn-container">
                    <Link to="/company/selected">
                        <button className='btn btn-primary m-3'>Selected Student list</button>
                    </Link>
                    <Link to="/company/details">
                        <button className='btn btn-info m-3'>View Details</button>
                    </Link>
                </div>
            </section>

            <StudentList />
        </main>
    )
}

export default CompanyView
