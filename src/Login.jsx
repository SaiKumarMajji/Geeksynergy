import React from "react";
import {Link ,useHistory} from "react-router-dom"

export default function Login() {
    const history = useHistory();

    const [formData, setFormData] = React.useState({
        name: "",
        password: "",
      });
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleLogin = (event) => {
        event.preventDefault();
        const storedFormData = JSON.parse(localStorage.getItem("formData"));
        if (
          storedFormData &&
          formData.name === storedFormData.name &&
          formData.password === storedFormData.password
        ) {
          history.push("/movie");
        } else {
          alert("Invalid login credentials. Please try again.");
        }
      };
    

    return (
        
        <div className="login">
        <form onSubmit = {handleLogin}>
            <h1>LOGIN</h1>
            <label>Name</label> <br />
            <input value={formData.name} onChange = {handleChange} name="name" className="input" type ="text"  />
            <br />
            <label>Password</label> <br />
            <input value={formData.password}  onChange = {handleChange} name="password" className="input"  type ="password"  />
            <div>
                <input type = "submit" />
            </div>
            <span><p>Don't have an account? </p><Link to="/signup">SignUp</Link></span>
        </form>
        </div>
    )
}