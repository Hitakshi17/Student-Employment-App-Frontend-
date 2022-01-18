import React from 'react'
import './about1.css';
import About2 from '../Pages/About2.png'
function about() {
    return (
        <main>
            <body className='about' >
            <p>
            Student Employment App aims at providing the compatibility to simplify the process of placement for students. This system consists of a student login and the company login. This is beneficial for college students, various companies visiting the campus for recruitment and even the college placement officer. The software system allows the students to create their profiles and upload all their details including their cgpa on to the system. The system also consists of a company login where various companies visiting the college can view a list of students in that college and also their respective resumes. The software system allows students to view a list of companies who have posted for vacancy.
            </p>
            <img src={About2}/>
            </body>
        </main>
    )
}

export default about
