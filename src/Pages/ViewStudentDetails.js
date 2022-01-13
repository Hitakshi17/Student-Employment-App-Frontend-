import React, { useState } from 'react'
import "../App.css"

function ViewStudentDetails() {

    const [StudentDetail, setStudentDetail] = useState({
        name: "Rachana Jadhav",
        phno: +911234567891,
        email: "rachana@email.com",
        clgName: "ABC College",
        CGPA: 8.5,
        technicalSkills: ["HTML", "React", "Css", "Js"]
    })

    return (
        <div className='container StudentDetail'>
            <h1>Studets Details Page </h1>
            <form className='form-group border rounded custom-shadow'>
                <div className="form-row">
                    <div classname="form-group col-md-5">
                        <label for="inputEmail4">Name</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className='d-flex flex-row justify-content-between'>
                        <div className="form-group col-md-5">
                            <label for="inputPassword4">Phone Number</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                        </div>
                        <div className="form-group col-md-5 ">
                            <label for="inputPassword4">Email Address</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-row justify-content-between'>
                    <div className="form-group col-md-5">
                        <label for="inputPassword4">Collge Name</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                    <div className="form-group col-md-5 ">
                        <label for="inputPassword4">CGPA <span className='text-secondary'> (based in 10)* </span></label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                </div>

                <div className="form-group">
                    <label for="inputAddress2">Technical Skills <span className='text-secondary'> (Maximum 5)* </span></label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>

                <button type="submit" className="btn btn-primary m-3 custom-shadow">Update</button>
                <button type="submit" className="btn btn-danger m-3 custom-shadow">Delete Account</button>

            </form>
        </div>
    )
}

export default ViewStudentDetails
