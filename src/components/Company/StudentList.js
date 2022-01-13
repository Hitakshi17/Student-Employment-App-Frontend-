// lists the students applied in that particular company 

import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import "./StudentList.css"

function MyVerticallyCenteredModal(props) {

    const { name, clgName, phno, CGPA, email, technicalSkills } = props.details;

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                     {name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>College Name: {clgName}</h6>
                <h6>Contact Number: {phno}</h6>
                <h6>Mail Address: {email}</h6>
                <h6>CGPA: {CGPA}</h6>
                <h6 className='d-flex col-md-5 justify-content-between'>
                    Technical Skills: 
                    {
                        technicalSkills.map( skill => {
                            return <p>{skill}</p>
                        })
                    }
                </h6>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function StudentList() {

    const [StudentDetail, setStudentDetail] = useState({
        name: "Rachana Jadhav",
        phno: +911234567891,
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
                    <button type="submit" className='btn btn-danger' >Reject</button>
                </div>

                <MyVerticallyCenteredModal
                    details = {StudentDetail}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />


            </section>

            

        </main>
    )
}

export default StudentList
 