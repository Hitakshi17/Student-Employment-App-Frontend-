import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import StudentList from '../components/Company/StudentList';


function CompanyView() {

    const [companyDetail, setCompanyDetail] = useState({});

    const URL = "http://localhost:8080/api/companies/2"

    useEffect(() => {
        const fetchData = async () => {

            try {
                const { data: response } = await axios.get(URL);
                setCompanyDetail(response);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, []); 


    return (
        <main className='container'>
            <section className='card mt-3 d-flex flex-row justify-content-between p-3 custom-shadow'>
                <div>
                    <h1>{companyDetail.cname}</h1>
                    <p className='text-secondary text-capitalize'> {companyDetail.jd} </p>
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
