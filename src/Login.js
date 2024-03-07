import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setError] = useState(false);    
    const handleSubmit = (event) => {
        // const newData = { values }
        event.preventDefault();

        if (LoginValidation()) {
            fetch("http://localhost:3031/users/" + userName).then((result) => {
                return result.json();
            }).then((response) => {
                console.log(response);
                if (Object.keys(response).length === 0) {
                    alert(`Username is not match! so enter register username`);
                } else {
                    if (response.password === password) {
                        alert(`Login Successfully`);
                        
                    } else {
                        alert(`Password is not match! so enter a valid password`);
                    }
                }
            }).catch((err) => {
                console.log(`Login Failed!`, +err.message);
            });
        }
       
    }


    const LoginValidation = () => {
        let isValid = true;

        if (userName === '' || userName === null) {
            isValid = false;
            setError(true);
            console.log(`Enter Email`);
        }
        if (password === null || password === '') {
            isValid = false;
            setError(true);
            console.log(`Enter Password`);
        }
        return isValid;
    }

    return (
        <>
            <div className="container login-box-style">

                <div className="row">
                    <div className="col-lg 6">
                        <div className="image">
                            <img src="login.gif" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg 6 mt-5">
                        <h1 className="mb-5 col-lg 6" >Welcome Back !</h1>

                        <p>Login to continue</p>
                        
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mt-4">
                                <label for="userName">User-name<span style={{color:"red"}}>*</span></label>
                                <input type="text" className="form-control login_text_box" id="myUserName" value={userName} placeholder="Enter Username" name="userName" onChange={e => setUserName(e.target.value)} />
                                {errorMsg && userName.length <= 0 ? <p style={{ color: "red" }}>UserName is Required</p> : ""}
                            </div>

                            <div className="form-group mt-4">
                                <label for="password">Password<span style={{color:"red"}}>*</span></label>
                                <input type="password" className="form-control login_text_box" id="myPassword" value={password} placeholder="password here" name="password" onChange={e => setPassword(e.target.value)} />
                                {errorMsg && password.length <= 0 ? <p style={{ color: "red" }}>Passeword is Required</p> : ""}
                            </div>  
                            <p className="mt-2 ml-5  justify-content-end"><Link to='/forgetpassword'style={{color:"gray"}} >Forgot Password ?</Link></p>
                        
                            <div className="mt-4">
                                <button type="submit" className="login_button_style">Log in</button>
                            </div>
                        </form>
                     
                        <div className='text2'>
                            <p className="mt-4">Don't have an account? <span><Link to='/Signup'> Signup</Link></span></p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Login