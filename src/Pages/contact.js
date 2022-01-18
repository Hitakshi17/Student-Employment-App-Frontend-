import React from 'react'
import Contact2 from '../Pages/Contact2.png'
import './about1.css';

function contact() {
    return (
        <main>
           <table class="table table-striped">
  <thead>
    <tr>
    
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Contact No.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
   
      <td>Rachana Jadhav</td>
      <td>Rachana_jadhav@gmail.com</td>
      <td>9872864387</td>
    </tr>
    <tr>
      
      <td>Hitakshi Komkar</td>
      <td>Hitakshi17@gmail.com</td>
      <td>8975643289</td>
    </tr>
    <tr>
      
      <td>Shreelakshmi S</td>
      <td>shreelakshmi_s@gmail.com</td>
      <td>9278275362</td>
    </tr>

    
  </tbody>
</table>
<img className='abc' src={Contact2}/>
        </main>
    )
}

export default contact
