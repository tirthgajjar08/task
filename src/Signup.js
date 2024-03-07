import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



function Signup() {

    const [values, setValues] = useState({
        id: '',
        fullName: '',
        number: '',
        email: '',
        password: '',
        cpassword: '',
    });

    const navigate = useNavigate();

    const [errorMsg, setError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newObj = { ...values, [name]: value };
        setValues(newObj);
        console.log(e.target.name);
    };

    const SignupValidation = () => {
        let checkValid = true;

        if (values.id === null || values.id === '') {
            checkValid = false;
            setError(true);
            // document.getElementById("usernameAuth").innerHTML = "Name is Required";
            console.log(` UserName`);
        }

        if (values.fullName === null || values.fullName === '') {
            checkValid = false;
            setError(true);
            // document.getElementById("usernameAuth").innerHTML = "Name is Required";
            console.log(` Name`);
        }

        if (values.number === null || values.number === '') {
            checkValid = false;
            setError(true);
            // document.getElementById("numberAuth").innerHTML = "Number is Required";
            console.log(` Number`);
        }

        if (values.email === null || values.email === '') {
            checkValid = false;
            setError(true);
            // document.getElementById("emailAuth").innerHTML = "Email is Required";
            console.log(` Email`);
        }
        if (values.password === null || values.password === '') {
            checkValid = false;
            setError(true);
            // document.getElementById("passwordAuth").innerHTML = "Passowrd is Required";
            console.log(` Password`);
        }
        if (String(values.cpassword) !== String(values.password)) {
            checkValid = false;
            setError(true);
            console.log(values.cpassword + `___` + values.password);
            // alert(`password not match`)
            // document.getElementById("confirmAuth").innerHTML = "Confirm Password not match";
            console.log(`Confirm Password and Password not match`);
        }

        return checkValid;
    }


    const handleSubmit = (event) => {
        const newData = { values };
        event.preventDefault();

        if (SignupValidation(values)) {
            fetch(`http://localhost:3031/users`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(values),
            }).then((result) => {
                alert(`Successfull SignUp`);
                navigate('/Login')
            }).catch((error) => {
                console.log(`Failed SignUp!`);
            });
        }
        console.log(newData);
    }

    return (
        <div>
            <div className="container login-box-style">
                <div className="row">
                    <div className="col-lg 6">
                        <div className="image">
                            <img src="login.gif" alt=""></img>
                        </div>
                    </div>

                    <div className="col-lg 6 mt-5">
                        <h1 className="col-lg 6" >SignUp</h1>
                        <form onSubmit={handleSubmit}>

                            <div className="form-group mt-4">
                                <label for="fname"> Username<span style={{ color: "red" }}>*</span></label>
                                <input type="text" name="id" className="form-control login_text_box" value={values.id} onChange={handleChange} placeholder="Enter your userName" />
                                {errorMsg && values.id.length <= 0 ? <p id="usernameAuth" style={{ color: "red" }}>Username is Required</p> : ""}
                            </div>

                            <div className="form-group mt-4">
                                <label for="fname"> Full Name<span style={{ color: "red" }}>*</span></label>
                                <input type="text" name="fullName" className="form-control login_text_box" value={values.userName} onChange={handleChange} placeholder="Enter your full name" />
                                {errorMsg && values.fullName.length <= 0 ? <p id="usernameAuth" style={{ color: "red" }}>Name is Required</p> : ""}
                            </div>

                            <div className="form-group mt-4">
                                <label for="text"> Phone number<span style={{ color: "red" }}>*</span></label>
                                <input type="text" name="number" className="form-control login_text_box" value={values.number} onChange={handleChange} placeholder="Enter your phone number" />
                                {errorMsg && values.number.length <= 0 ? <p id="numberAuth" style={{ color: "red" }}>Number is Required</p> : ""}
                            </div>

                            <div className="form-group mt-4">
                                <label for="email"> Email Address<span style={{ color: "red" }}>*</span></label>
                                <input type="email" name="email" className="form-control login_text_box" value={values.email} onChange={handleChange} placeholder="Enter your email-id" />
                                {errorMsg && values.email.length <= 0 ? <p id="emailAuth" style={{ color: "red" }}>Email is Required</p> : ""}
                            </div>

                            <div className="form-group mt-4">
                                <label for="password"> Password<span style={{ color: "red" }}>*</span></label>
                                <input type="password" name="password" className="form-control login_text_box" value={values.password} onChange={handleChange} placeholder="Enter password" />
                                {errorMsg && values.password.length <= 0 ? <p id="passwordAuth" style={{ color: "red" }}>Passeword is Required</p> : ""}
                            </div>

                            <div className="form-group mt-4">
                                <label for="cpass"> Confirm Password<span style={{ color: "red" }}>*</span></label>
                                <input type="password" name="cpassword" className="form-control login_text_box" value={values.cpassword} onChange={handleChange} placeholder="confirm password" />


                                {errorMsg && values.cpassword.length <= 0 ? <p id="confirmAuth" style={{ color: "red" }}>Confirm Password is Required</p> : ""}

                                {values.password === values.cpassword ? "" : <p id="confirmAuth" style={{ color: "red" }}>Both Password not match</p>}

                                {/* <p id="confirmAuth" style={{ color: "red" }}></p> */}

                            </div>
                            <div className="mt-4">
                                <button type="submit" className="login_button_style mb-5">Create new account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup

