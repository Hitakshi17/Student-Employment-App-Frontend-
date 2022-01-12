// lists the students applied in that particular company 

import React, { useState } from 'react'
import MyVerticallyCenteredModal from '../Modal';
import "./StudentList.css"


function StudentList() {

    const [StudentDetail, setStudentDetail] = useState({
        name: "Rachana Jadhav",
        pnone: +911234567891,
        email: "rachana@email.com",
        clgName: "ABC College",
        CGPA: 8.5,
        technicalSkills: ["HTML", "React", "Css", "Js"]
    })

    const [modalShow, setModalShow] = React.useState(false);


    return (
        <main className='studentList'>


            <section className='card card-box p-3 d-flex flex-row justify-content-between'>

                <div className=' col-md-9 '>
                    <button onClick={() => setModalShow(true)} className="custom-btn">
                        <h3>
                        {StudentDetail.name}
                        </h3>
                    </button>
                    <p>{StudentDetail.clgName}</p>
                </div>

                <div className="button-container d-flex align-items-center justify-content-between col-md-2">
                    <button type="submit" className='btn btn-success'>Accept</button>
                    <button type="submit" className='btn btn-danger'>Reject</button>
                </div>

            </section>

            {modalShow && <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />}


        </main>
    )
}

export default StudentList
