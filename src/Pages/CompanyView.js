import React from 'react'

function CompanyView() {
    return (
        <main className='container'>
            <section className='card mt-3 d-flex flex-row justify-content-between p-3'>
                <div>
                    <h1>XYZ Company</h1>
                    <p className='text-secondary'> Consultancy Firm </p>
                </div>
                <div className="btn-container">
                    <button className='btn btn-primary m-3'>Selected Student list</button>
                    <button className='btn btn-info m-3'>View Details</button>
                </div>
            </section>
        </main>
    )
}

export default CompanyView
