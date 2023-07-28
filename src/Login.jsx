import React from "react";

export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        
        <div className="login">
        <form onSubmit = {handleSubmit}>
            <h1>LOGIN</h1>
            <label>Name</label> <br />
            <input className="input" type ="text"  />
            <br />
            <label>Password</label> <br />
            <input className="input"  type ="password"  />
        </form>
        </div>
    )
}