import React from 'react';

const Loginform = () => (
    
    <div className="container">
        <h1 className="text-secondary">Login form page</h1>
        <div className="d-flex flex-column">
            <form action="">
                <label className="text-secondary mt-2 login-text-holder" htmlFor="email">Please enter your email</label>
                <input className="form-control ml-0 my-1" type="email" name="email" required autoFocus></input>
                <label className="text-secondary mt-2 login-text-holder" htmlFor="password">Please enter your password</label>
                <input className="form-control ml-0 my-1" type="password" name="password" required autoFocus></input>
                <button type="submit" className="registration-submit-button text-white my-2 pb-1">Login</button>
            </form>
        </div>
    </div>
    
)

export default Loginform

