// list the company in student view for students to apply in it 

import { Button, Modal } from 'react-bootstrap';
import React, { useState, useEffect } from 'react'
import axios from 'axios';

import "./CompanyList.css"


function MyVerticallyCenteredModal(props) {

    const { ...details } = props.details;


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

    const [isSelectedList, setIsSelectedList] = useState([]);
    const [companyList, setCompanyList] = useState([]);
    const [selectionList, setSelectionList] = useState([]);
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        const fetchData = async () => {

            try {
                await axios.all([
                    axios.get('http://localhost:8080/api/selections/selectedcompanylist/2'),
                    axios.get('http://localhost:8080/api/companies'),
                    axios.get('http://localhost:8080/api/selections')
                ])
                    .then(axios.spread((obj1, obj2, obj3) => {
                        // Both requests are now complete
                        setIsSelectedList(obj1.data)
                        setCompanyList(obj2.data);
                        setSelectionList(obj3.data)
                    }));
            }
            catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, [update]);


    //console.log(isSelectedList)
    // console.log(companyList);
    console.log(selectionList);



    // filters the company which already selected that particular student   // is select 1 is applied 1 this is for tanmay 
    let newfilteredArray = [];
    if (isSelectedList.lenght > 0) {
        for (let item of isSelectedList) {
            for (let company of companyList) {
                if ((company.comp_id !== item.comp_id)) {
                    console.log(company);
                    newfilteredArray.push(company);
                }
            }
        }
    }

    if (isSelectedList.length === 0) {
        for (let company of companyList) {
            newfilteredArray.push(company);
        }
    };

    console.log(newfilteredArray);




    // filters the selection List by particular student 
    let newfilteredSelectionArray = [];
    for (let item of selectionList) {
        if ((item.std_id === 2) && (item.is_select === 0)) {
            newfilteredSelectionArray.push(item);
        }
    }

    console.log(newfilteredSelectionArray);

    var flag;
    const istrue = (comp_id) => {

        for (let item of newfilteredSelectionArray) {
            var id = item.comp_id
            if (id === parseInt(comp_id)) {
                // console.log(id, comp_id);
                flag = true;
                break;
            }

            else {
                //console.log(id, comp_id);
                flag = false;
            }
        }
        return flag;
    }

    // for (let company of newfilteredArray) {
    //     console.log(istrue(company.comp_id));
    // }




    const handleOnApply = async (comp_id) => {

        try {
            const res = await axios.post("http://localhost:8080/api/selections/insert",
                {
                    comp_id: comp_id,
                    std_id: 2,
                    is_applied: 1,
                });
            console.log(res);
            setUpdate(true);
        }
        catch (err) {
            console.log(err)
        }

    }


    const [modalShow, setModalShow] = React.useState(false);
    const [modalData, setModalData] = useState({})

    return (

        <main className='companyList'>
            {
                newfilteredSelectionArray?.length === 0 ?
                    <h1>No Companies To Display</h1>
                    : (newfilteredArray?.map(company => {

                        return (
                            <section key={company.comp_id}
                                className='card card-box p-3 d-flex flex-row justify-content-between mt-3'
                            >

                                <div className=' col-md-9 '>
                                    <button
                                        className="custom-btn"
                                        onClick={() => {
                                            setModalShow(true);
                                            setModalData(company);
                                        }}
                                    >
                                        <h3 className='text-capitalize'>
                                            {company.cname}
                                        </h3>
                                    </button>
                                    <p className='text-capitalize'>{company.jd}</p>
                                </div>

                                <div className="button-container d-flex align-items-center justify-content-between col-md-2">
                                    {

                                        istrue(company.comp_id) ? <h6 className='text-info text-capitalize'>you have already applied</h6>
                                            : <button type="submit" className='btn btn-success' onClick={() => handleOnApply(company.comp_id)}>Apply</button>

                                    }

                                </div>

                            </section>
                        )
                    }))

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
