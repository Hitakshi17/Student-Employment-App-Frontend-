import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import "../App.css"

function MyVerticallyCenteredModal(props) {

    const [newCgpa, setNewCgpa] = useState(props.cgpa);
    const [skills, setSkills] = useState(props.t_skills);

    const handleSubmit = async (e) => {


        e.preventDefault()

        try {
            const res = await axios.put('http://localhost:8080/api/students/',
                {
                    std_id: 2,
                    cgpa: newCgpa,
                    t_skills: skills,
                });
            console.log(res);
        } catch (error) {
            console.error(error.message);
        };

        props.onHide();
        props.setUpdated(true);

    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit Form
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form>
                    <Form.Group className="mb-3" controlId="cgpa">
                        <Form.Label>CGPA</Form.Label>
                        <Form.Control type="number" placeholder="Enter New CGPA" onChange={(e) => setNewCgpa(e.target.value)} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="t_skills">
                        <Form.Label>Edit Technical Skills </Form.Label>
                        <Form.Control type="text" placeholder="t_skills" onChange={(e) => setSkills(e.target.value)} required />
                    </Form.Group>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleSubmit} className='btn btn-success' type="submit"> Edit </Button>
            </Modal.Footer>
        </Modal>
    );
}



function ViewStudentDetails() {

    const [studentDetail, setStudentDetail] = useState({});
    const [updated, setUpdated] = useState(false)

    // Modal Form for edit details 
    const [modalShow, setModalShow] = React.useState(false);

    const URL = "http://localhost:8080/api/students/2"

    useEffect(() => {
        const fetchData = async () => {

            try {
                const { data: response } = await axios.get(URL);
                console.log(response);
                setStudentDetail(response);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, [updated]);

    return (
        <main className='container StudentDetail'>

            <h1>Studets Details Page </h1>

            <section className="card text-center CompanyDeatils custom-shadow">

                <div className="card-body">
                    <h1 className="card-title">{studentDetail.sname}</h1>
                    <h4 className="card-text">{studentDetail.smob}</h4>
                    <h4 className="card-text">{studentDetail.semail}</h4>
                    <p className="card-text">{studentDetail.clg}</p>
                    <p className="card-text">{studentDetail.cgpa}</p>
                    <p className="card-text text-capitalize">{studentDetail.t_skills}</p>
                    <button className='btn btn-primary' onClick={() => setModalShow(true)} >edit your details</button>
                </div>

            </section>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                setUpdated={setUpdated}
                cgpa={studentDetail.cgpa}
                t_skills={studentDetail.t_skills}
            />

        </main>
    )
}

export default ViewStudentDetails
