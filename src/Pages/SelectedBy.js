// company list which selected a student 
// company 1
// company 2
// company 3

import axios from 'axios';
import React, { useEffect, useState } from 'react'

function SelectedBy() {

    const [isSelectedList, setIsSelectedList] = useState([]);
    const [companyList, setCompanyList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            try {
                await axios.all([
                    axios.get('http://localhost:8080/api/selections/selectedcompanylist/2'),
                    axios.get('http://localhost:8080/api/companies')
                ])
                    .then(axios.spread((obj1, obj2) => {
                        // Both requests are now complete
                        setIsSelectedList(obj1.data)
                        setCompanyList(obj2.data);
                    }));
            }
            catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, []);


    let flag = 0;
    let newfilteredArray = [];
    for (let item of isSelectedList) {
        newfilteredArray.push(companyList.find(company => company.comp_id === item.comp_id));
    }

    // console.log(newfilteredArray);


    return (
        <main className='SelectedBy'>
            <h1>Company That Selected You</h1>

            {
                newfilteredArray?.length === 0 ?
                    <h2>No Companies To Display</h2>

                    : (newfilteredArray?.map(company => {

                        return (
                            <section key={company?.comp_id} className='container d-flex flex-wrap'>

                                <div className='card card-body col-md-5 m-3 custom-shadow'>
                                    <h3>{company?.cname}</h3>
                                    <h6 className='text-secondary'>{company?.cemail}</h6>
                                    <h6 className='text-secondary'>{company?.cmob}</h6>
                                    <p>{company?.jd}</p>
                                </div>
                            </section>
                        )
                    }))
            }

        </main>
    )
}

export default SelectedBy



/* 
    ============================================================
    INSERTION QUERY
    ============================================================

    if a student accepts a company 

    selected table will have an insertion  isApplied = true 

    post(studentid, company, isApplied="true")

    selectedID - 2
    stdID - 3
    CompanyID - 5
    IsApplied - 1 
    IsSelected - Null



    =======================================================
    update query 
    =======================================================

    if student is selected by a company  isSelected = true

    selectedID - 2
    stdID - 3
    CompanyID - 5
    IsApplied - 1
    IsSelected - 1 // true 
    

*/
