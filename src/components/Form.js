import React from 'react'
import register from '../images/register.gif'

const Form = () => {
    return (
        <div className='container d-flex'>
            <div className="left-data">
                <form className='registration-form' id='registration-form'>
                    <div class="mb-3">
                        <label for="firstName" class="form-label">First Name</label>
                        <input type="text" name='firstName' class="form-control" id="firstName" />
                    </div>
                    <div class="mb-3">
                        <label for="lastName" class="form-label">Last Name</label>
                        <input type="lastName" name='lastName' class="form-control" id="lastName" />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" name='email' class="form-control" id="email" aria-describedby="emailHelp" />
                        <div id="email" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" name='password' class="form-control" id="password" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="rigth-data">
                <img src={register} alt="registration" />
            </div>
        </div>
    )
}

export default Form;
