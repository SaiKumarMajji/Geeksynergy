import React from "react";
import { useEffect } from "react";

export default function SignUp() {
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    
    const [formData, setFormData] = React.useState({name: "", password: "", email: "", phoneNumber: "", profession: ""})
     
    const handleChange =(event) => {
        const {name, value} = event.target;
        setFormData((prevFormData => ({...prevFormData, [name]: value, [password]: value})))
    }

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
      }, [formData]);

    return (
        <div  className="signup">
        <form onSubmit = {handleSubmit} >
            <h1>SIGN UP</h1>
            <label>Name</label> <br />
            <input value ={formData.name} onChange = {handleChange} className="input" type ="text"  />
            <br />
            <label>Password</label> <br />
            <input value ={formData.password} onChange = {handleChange} className="input"  type ="password"  />
            <br />
            <label>Email</label> <br />
            <input value ={formData.email} onChange = {handleChange} className="input"  type ="email"  />
            <br />
            <label>Phone number</label> <br />
            <input value ={formData.phoneNumber} onChange = {handleChange} className="input"  type ="tel"  />
            <br />
            <label>Profession</label> <br />
            <select value ={formData.profession} onChange = {handleChange} className="select">
                <option>Software Engineer</option>
                <option>Student</option>
            </select>
            <div className="signbtn">
            {/* <button>SIGN UP</button> */}
            <input type = "submit" />
            </div>
        </form>
        </div>
    )
}