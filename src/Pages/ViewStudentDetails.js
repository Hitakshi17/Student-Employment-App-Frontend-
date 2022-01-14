import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import "../App.css"

function MyVerticallyCenteredModal(props) {

    const [cgpa, setCgpa] = useState(0);
    const [skills, setSkills] = useState(" ");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // try {
        //      await axios.post(URL, {
        //         cgpa : cgpa,
        //         t_skills : "skills",
        //     });
        // } catch (error) {
        //     console.error(error.message);
        // };
        
        
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
                        <Form.Control type="number" placeholder="Enter New CGPA" onChange={(e) => setCgpa(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="t_skills">
                        <Form.Label>Edit Technical Skills </Form.Label>
                        <Form.Control type="text" placeholder="t_skills" onChange={(e) => setSkills(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Edit
                    </Button>
                </Form>
                
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleSubmit} className='btn btn-success' type="submit"> Edit </Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}



function ViewStudentDetails() {

    const [studentDetail, setStudentDetail] = useState({});

    // Modal Form for edit details 
    const [modalShow, setModalShow] = React.useState(false);

    const URL = "http://localhost:8080/api/students/3"

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
    }, []);

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
                    <p className="card-text">{studentDetail.t_skills}</p>
                    <button className='btn btn-primary' onClick= {() => setModalShow(true)} >edit your details</button>
                </div>

            </section>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </main>
    )
}

export default ViewStudentDetails
