import React, { useState } from 'react'

function SelectedBy() {

    const [companyDetail, setCompanyDetail] = useState({
        name: "XYZ Company",
        pnone: +911234567891,
        email: "company@email.com",
        jobDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eos reiciendis sit odio repudiandae soluta voluptatibus incidunt dignissimos non quibusdam.",
    })

    
    return (
        <main className='SelectedBy'>
            <h1>Company That Selected You</h1>

            <section className='container d-flex flex-wrap'>

                <div className='card card-body border-success col-md-5 m-3 custom-shadow'>
                    <h3>{companyDetail.name}</h3>
                    <h6 className='text-secondary'>{companyDetail.email}</h6>
                    <h6 className='text-secondary'>{companyDetail.pnone}</h6>
                    <p>{companyDetail.jobDescription}</p>
                </div>
                
                
            </section>

        </main>
    )
}

export default SelectedBy
