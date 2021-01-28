import React from 'react'

const Registrationform = () => (
    <div className="container">
        <h1 className="text-secondary">Registration form page</h1>
        <div className="d-flex flex-column">
            <form action="">
                <label className="text-secondary mt-2 login-text-holder" for="first_name">Please enter your first name</label>
                <input className="form-control ml-0 my-1" type="first_name" name="first_name" required autofocus></input>
                <label className="text-secondary mt-2 login-text-holder" for="last_name">Please enter your last name</label>
                <input className="form-control ml-0 my-1" type="last_name" name="last_name" required autofocus></input>
                <label className="text-secondary mt-2 login-text-holder" for="phone_number">Please enter your phone number</label>
                <input className="form-control ml-0 my-1" type="phone_name" name="phone_number" required autofocus></input>
                <label className="text-secondary mt-2 login-text-holder" for="email">Please enter your email</label>
                <input className="form-control ml-0 my-1" type="email" name="email" required autofocus></input>
                <label className="text-secondary mt-2 login-text-holder" for="password">Please enter your password</label>
                <input class="form-control ml-0 my-1" type="password" name="password" required autofocus></input>
                <button type="submit" class="registration-submit-button text-white my-2 pb-1">Submit</button>
            </form>
        </div>
    </div>
)

export default Registrationform