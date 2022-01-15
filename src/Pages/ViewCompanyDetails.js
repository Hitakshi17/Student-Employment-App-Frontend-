import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ViewCompanyDetails() {
    
    const [companyDetail, setCompanyDetail] = useState({});

    const URL = "http://localhost:8080/api/companies/2"

    useEffect(() => {
        const fetchData = async () => {

            try {
                const { data: response } = await axios.get(URL);
                console.log(response);
                setCompanyDetail(response);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="card text-center CompanyDeatils custom-shadow">
            <div className="card-body">
                <h1 className="card-title">{companyDetail.cname}</h1>
                <h4 className="card-text">{companyDetail.cmob}</h4>
                <h4 className="card-text">{companyDetail.cemail}</h4>
                <p className="card-text text-capitalize ">{companyDetail.jd}</p>
                <a href="#" className="btn btn-primary">Visit our website</a>
            </div>
        </div>
    )
}

export default ViewCompanyDetails