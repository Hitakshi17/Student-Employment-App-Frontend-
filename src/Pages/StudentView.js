import React from 'react'

function StudentView() {
    return (
        <main className='container'>
            <section className='card mt-3 d-flex flex-row justify-content-between p-3'>
                <div>
                    <h1>Rachana Jadhav</h1>
                    <p className='text-secondary'>B.tech In computer Science engineering </p>
                </div>
                <div className="btn-container">
                    <button className='btn btn-success m-3'>Selected By Company </button>
                    <button className='btn btn-info m-3'>View Details</button>
                </div>
            </section>
        </main>
    )
}

export default StudentView
