//  LISTS THE STUDENTS WHICH A COMPANY SELECTED 

import axios from 'axios';
import React, { useEffect, useState } from 'react'

function SelectedStudent() {

    const [studentList, setStudentList] = useState([]);
    const [studentSelectedList, setStudentSelectedList] = useState([]);


    const URL = "http://localhost:8080/api/selections/selectedstudentlist/2"

    useEffect(() => {

        const fetchData = async () => {

            try {
                await axios.all([
                    axios.get('http://localhost:8080/api/selections/selectedstudentlist/2'), // returning all the students who all applied to cmp_id = 2  // return the selected rows of {id} 
                axios.get('http://localhost:8080/api/students/')
            ])
                .then(axios.spread((obj1, obj2) => {
                    console.log(obj1);
                    console.log(obj2);
                    // Both requests are now complete
                    setStudentSelectedList(obj1.data)
                    setStudentList(obj2.data);
                }));
            }
            catch(err){
                console.log(err);
            }
        }

        fetchData();
    }, []);

    console.log(studentSelectedList)
    console.log(studentList)

    let newfilteredArray = [];
    for (let item of studentSelectedList) {
        newfilteredArray.push(studentList.find(student => student.std_id === item.std_id));
    }

    console.log(newfilteredArray);


    return (
        <main>
            <h1>Students You Have Selected </h1>

            {
                newfilteredArray?.length === 0 ?
                    <h2>You Have Not Selected Any Student</h2>
                    : (newfilteredArray?.map(student => {

                        return (
                            <section key={student?.std_id} className='container d-flex flex-wrap'>

                                <div className='card card-body col-md-5 m-3 custom-shadow'>
                                    <h3>{student?.sname}</h3>
                                    <h6 className='text-secondary'>{student?.semail}</h6>
                                    <h6 className='text-secondary'>{student?.smob}</h6>
                                    <p>{student?.t_skills}</p>
                                </div>
                            </section>
                        )
                    }))

            }
        </main>
    )
}

export default SelectedStudent
