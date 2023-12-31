
import React from "react";

export default function Register()
{
    return(
        <div className='Box'>
            <h1 className="hh">Register Page</h1>
            <div>
                <form>
                    Name :
                    <input type="text" placeholder=" Name" />
                    <br />
                    <br />

                    User Name :
                    <input type="text" placeholder=" User Name" />
                    <br />
                    <br />
                    Email :
                    <input type="email" placeholder="Email Address"/>
                    <br />
                    <br />
                    Password:
                    <input type="password" placeholder="Password"/>
                    <br />
                    <br />
                    Confirm Password:
                    <input type="password" placeholder="Confirm Password"/>
                    <br />
                    <br />
                </form>
            </div>
        </div>
    )
}