import React from 'react';

const Loginform = () => (
    <div className="container">
        <h1 className="text-secondary">Login form page</h1>
        <div className="d-flex flex-column">
            <form action="">
                <label className="text-secondary mt-2 login-text-holder" for="email">Please enter your email</label>
                <input className="form-control ml-0 my-1" type="email" name="email" required autofocus></input>
                <label className="text-secondary mt-2 login-text-holder" for="password">Please enter your password</label>
                <input class="form-control ml-0 my-1" type="password" name="password" required autofocus></input>
                <button type="submit" class="registration-submit-button text-white my-2 pb-1">Login</button>
            </form>
        </div>
    </div>
)

export default Loginform

