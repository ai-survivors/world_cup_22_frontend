import React, { useState } from 'react'

export default function LoginForm({handelLoginForm}) {
    

    return (
        <form onSubmit={e => handelLoginForm(e)}>
        <h3>Sign In</h3>

        <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" placeholder="Username" name="username"  />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="text" className="form-control" placeholder="Enter password" name="password" />
        </div>

        <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block" >Submit</button>
        <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
        </p>
    </form>
    )
}
