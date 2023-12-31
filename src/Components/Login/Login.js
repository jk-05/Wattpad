import React from "react";

export default function Login()
{
    const login = (
        <div className='box'>
                        <h1 className="hh">Login Page</h1>

                    <form>
                        Email 
                        <input className='Box--inp' typeof='email' placeholder=' Enter your email' />
                        <br />
                        <br />
                        PassWord 
                        <input className='Box--inp' typeof='password' placeholder=' Password' />
                        <br />
                        <br />
                        <input type='submit' className="bb" />
                        <br />
                        <p>If you dont have an account </p>
                    </form>
                </div>
    )
    return(
        <>
        {login} 
        </>
    )
}