import React, { useState } from 'react'

function ViewCompanyDetails() {
    const [companyDetail, setCompanyDetail] = useState({
        name: "XYZ Company",
        phno: +911234567891,
        email: "company@email.com",
        jobDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eos reiciendis sit odio repudiandae soluta voluptatibus incidunt dignissimos non quibusdam.",
    })

    return (
        <div className="card text-center CompanyDeatils custom-shadow">
            <div className="card-body">
                <h1 className="card-title">{companyDetail.name}</h1>
                <h4 className="card-text">{companyDetail.phno}</h4>
                <h4 className="card-text">{companyDetail.email}</h4>
                <p className="card-text">{companyDetail.jobDescription}</p>
                <a href="#" className="btn btn-primary">Visit our website</a>
            </div>
        </div>
    )
}

export default ViewCompanyDetails