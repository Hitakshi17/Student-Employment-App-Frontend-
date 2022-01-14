// list the company in student view for students to apply in it 

import { Button, Modal } from 'react-bootstrap';
import React, { useState, useEffect } from 'react'
import axios from 'axios';

import "./CompanyList.css"


function MyVerticallyCenteredModal(props) {

    const {...details} = props.details;
    
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {details.cname}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6> Contact Info: {details.cmob} </h6> 
                 <h6> Email Address: {details.cemail} </h6>
                <p>
                    {details.jd}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


function CompanyList() {

    const [companyList, setCompanyList] = useState([]);

    const URL = "http://localhost:8080/api/companies/"

    useEffect(() => {
        const fetchData = async () => {

            try {
                const { data: response } = await axios.get(URL);
                // console.log(response);
                setCompanyList(response);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, []);


    const [modalShow, setModalShow] = React.useState(false);
    const [modalData, setModalData] = useState({})

    return (

        <main className='companyList'>
            {

                companyList.map(company => {

                    const { comp_id, cname, jd, cmob, cemail } = company; 


                    return (
                        <section key = {comp_id} 
                        className='card card-box p-3 d-flex flex-row justify-content-between mt-3'>

                            <div className=' col-md-9 '>
                                <button 
                                className="custom-btn"
                                    onClick={() => {
                                        setModalShow(true);
                                        setModalData(company);
                                    }}
                                >
                                    <h3>
                                        {cname}
                                    </h3>
                                </button>
                                <p>{jd}</p>
                            </div>

                            <div className="button-container d-flex align-items-center justify-content-between col-md-2">
                                <button type="submit" className='btn btn-success'>Accept</button>
                                <button type="submit" className='btn btn-danger'>Reject</button>
                            </div>

                            

                        </section>
                    )
                })

            }

            <MyVerticallyCenteredModal
                details={modalData}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </main>

    )
}

export default CompanyList
