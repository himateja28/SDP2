import React, { useState } from 'react'
import axios from 'axios';
import img from '../assests/img2.png'
export default function Apply() {
 const [status,setStatus] = useState('')
 const [file, setFile] = useState("");
  const handleSubmit = async(event) => {
    event.preventDefault();
    const file = document.getElementById('avatar1').files[0]
    console.log(file)
    await axios.post('http://localhost:8000/newvisa',{
      name:document.getElementById('name').value,
      email:document.getElementById('email').value,
      aadhaar:document.getElementById('anum').value,
      avatar:file,
      father_name:document.getElementById('fname').value,
      mother_name:document.getElementById('mname').value,
      pin_code:document.getElementById('pin').value,
      address:document.getElementById('add').value,
      applied_visa:document.getElementById('visa').value,
      applied_by: localStorage.getItem('username')
    }, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then(response => {
      setStatus(`Your Application is being processed ! your application token number is ${response.data}`)
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error);
    });
    
  }
  return (
    <>
    <h1>Visa Application Form</h1>
  <form  method="post" enctype="multipart/form-data">
    <fieldset>
      <legend>Personal Information:</legend>
      <label for="fullName">Full Name:</label><br/>
      <input type="text" id="fullName" name="fullName" required/><br/><br/>
      <label for="dob">Date of Birth:</label><br/>
      <input type="date" id="dob" name="dob" required/><br/><br/>
      <label for="nationality">Nationality:</label><br/>
      <input type="text" id="nationality" name="nationality" required/><br/><br/>
      <label for="passportNumber">Passport Number:</label><br/>
      <input type="text" id="passportNumber" name="passportNumber" required/><br/><br/>
      <label for="address">Address:</label><br/>
      <textarea id="address" name="address" required></textarea><br/><br/>
    </fieldset>

    <fieldset>
      <legend>Visa Details:</legend>
      <label for="visaType">Type of Visa:</label><br/>
      <input type="text" id="visaType" name="visaType" required/><br/><br/>
      <label for="purposeOfVisit">Purpose of Visit:</label><br/>
      <input type="text" id="purposeOfVisit" name="purposeOfVisit" required/><br/><br/>
    </fieldset>

    <fieldset>
      <legend>Upload Documents:</legend>
      <label for="passportCopy">Passport Copy:</label><br/>
      <input type="file" id="passportCopy" name="passportCopy" accept=".jpg, .jpeg, .png, .pdf" required/><br/><br/>
      <label for="passportPhoto">Passport Size Photo:</label><br/>
      <input type="file" id="passportPhoto" name="passportPhoto" accept=".jpg, .jpeg, .png" required/><br/><br/>
      <label for="invitationLetter">Invitation Letter (if applicable):</label><br/>
      <input type="file" id="invitationLetter" name="invitationLetter" accept=".pdf"/><br/><br/>
    </fieldset>

    <fieldset>
      <legend>Declaration:</legend>
      <label for="declaration">I hereby declare that the information provided above is true and accurate to the best of my knowledge. I understand that any false information provided may result in the rejection of my visa application.</label><br/>
      <input type="checkbox" id="declaration" name="declaration" required/><br/><br/>
    </fieldset>

    <label for="signature">Signature:</label><br/>
    <input type="text" id="signature" name="signature" required/><br/><br/>

    <label for="date">Date:</label><br/>
    <input type="date" id="date" name="date" required/><br/><br/>

    <input type="submit" value="Submit Application"/>
  </form>
  </>
  )
}
