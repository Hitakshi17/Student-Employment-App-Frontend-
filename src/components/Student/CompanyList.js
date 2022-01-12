// list the company in student view for students to apply in it 

import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react'
import "./CompanyList.css"


function MyVerticallyCenteredModal(props) {

    const { name, phno, email, jobDescription } = props.details;


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
                <h6> Contact Info: {phno} </h6>
                <h6> Email Address: {email} </h6>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


function CompanyList() {

    const [companyDetail, setCompanyDetail] = useState({
        name: "XYZ Company",
        phno: +911234567891,
        email: "company@email.com",
        jobDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eos reiciendis sit odio repudiandae soluta voluptatibus incidunt dignissimos non quibusdam.",
    })

    const [modalShow, setModalShow] = React.useState(false);

    return (

        <main className='companyList'>

            <section className='card card-box p-3 d-flex flex-row justify-content-between'>


                <div className=' col-md-9 '>
                    <button onClick={() => setModalShow(true)} className="custom-btn">
                        <h3>
                            {companyDetail.name}
                        </h3>
                    </button>
                    <p>{companyDetail.jobDescription}</p>
                </div>

                <div className="button-container d-flex align-items-center justify-content-between col-md-2">
                    <button type="submit" className='btn btn-success'>Accept</button>
                    <button type="submit" className='btn btn-danger'>Reject</button>
                </div>

                <MyVerticallyCenteredModal
                    details={companyDetail}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

            </section>

        </main>

    )
}

export default CompanyList
