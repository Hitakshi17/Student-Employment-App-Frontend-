import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import CompanyList from '../components/Student/CompanyList';

function StudentView() {

    const [studentDetail, setStudentDetail] = useState({});

    const URL = "http://localhost:8080/api/students/"

    useEffect(() => {
        const fetchData = async () => {

            try {
                const { data: response } = await axios.get( `${URL}4` );
                console.log(response);
                setStudentDetail(response);
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
                    <h1>{ studentDetail.sname }</h1>
                    <p className='text-secondary'>{ studentDetail.t_skills }</p>
                </div>
                <div className="btn-container">
                    <Link to="/student/selectedby">
                        <button className='btn btn-success m-3'>Selected By Company </button>
                    </Link>
                    <Link to="/student/details">
                        <button className='btn btn-info m-3'>View Details</button>
                    </Link>
                </div>
            </section>

            <CompanyList />
        </main>
    )
}

export default StudentView
