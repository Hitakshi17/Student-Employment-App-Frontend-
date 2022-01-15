// lists the students applied in that particular company 

import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';
import "./StudentList.css"

// function MyVerticallyCenteredModal(props) {

//     const { name, clgName, phno, CGPA, email, technicalSkills } = props.details;

//     return (
//         <Modal
//             {...props}
//             size="lg"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//         >
//             <Modal.Header closeButton>
//                 <Modal.Title id="contained-modal-title-vcenter">
//                     {name}
//                 </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <h6>College Name: {clgName}</h6>
//                 <h6>Contact Number: {phno}</h6>
//                 <h6>Mail Address: {email}</h6>
//                 <h6>CGPA: {CGPA}</h6>
//                 <h6 className='d-flex col-md-5 justify-content-between'>
//                     Technical Skills:
//                     {
//                         technicalSkills.map(skill => {
//                             return <p>{skill}</p>
//                         })
//                     }
//                 </h6>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button onClick={props.onHide}>Close</Button>
//             </Modal.Footer>
//         </Modal>
//     );
// }

function StudentList() {

    const [isAppliedList, setIsAppliedList] = useState([]);
    const [studentList, setStudentList] = useState([]);


    const URL = "http://localhost:8080/api/selections/"

    useEffect(() => {
        const fetchData = async () => {

            try {
                const { data: response } = await axios.get(URL);
                console.log(response);
                setIsAppliedList(response);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, []);

    console.log(isAppliedList)
    console.log(studentList)

    const [modalShow, setModalShow] = React.useState(false);
    const [modalData, setModalData] = useState({})


    return (
        <main className='studentList'>

            {
                // isAppliedList.filter(item => item.is_applied == 1).map((filteredData, index) => {

                //     const { std_id } = filteredData;

                //     return (
                //         <section key={index} className='card card-box p-3 d-flex flex-row justify-content-between'>

                //             <div className=' col-md-9 '>
                //                 <button
                //                     onClick={() => {
                //                         setModalShow(true);
                //                     }}
                //                     className="custom-btn">
                //                     <h3>

                //                     </h3>
                //                 </button>
                //                 <p></p>
                //             </div>

                //             <div className="button-container d-flex align-items-center justify-content-between col-md-2">
                //                 <button type="submit" className='btn btn-success'>Accept</button>
                //                 <button type="submit" className='btn btn-danger' >Reject</button>
                //             </div>

                //         </section>
                //     )
                // })
            }


            {/* <MyVerticallyCenteredModal
                details={modalData}
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> */}



        </main>
    )
}

export default StudentList
