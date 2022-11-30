import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


import '../../App.css'

export default function ResetPasswordPage() {

    const fnHandleSubmit = event => {
        event.preventDefault();
    }
    const history = useHistory();
    const shoot = () => {
        
          
        var email= document.getElementById('email').value;
      
        var password= document.getElementById('password').value;

        axios.put('http://localhost:8080/moviereview/user/forgot',{
            
            "email":email,
            "password":password
           
        })
        .then(response =>{console.log(response);if(response['data'] === 'Password Change Failed'){
            alert("Please register first");
            return;
        }else{
            alert("Passoword changed succesfully");
            history.push('/login');
            return;
        }} );


        
    }


    return (
        <div className="text-center m-5-auto">
            <h2>Reset your password</h2>
            <h5>Enter your email address and a new password</h5>
            <form  onSubmit={fnHandleSubmit}>
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" id="email" name="email" required />
                </p>
                <p>
                    <label id="reset_pass_lbl">New Password</label><br/>
                    <input type="password" id="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" onClick={() => shoot("Goal!")}>Update Password</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
