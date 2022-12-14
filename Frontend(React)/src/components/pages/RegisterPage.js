import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import '../../App.css'
import axios from 'axios'
import { CheckCircleIcon } from '@primer/octicons-react'
import BackgroundImage from '../../assets/images/c.jpg'

export default function SignUpPage() {



    const fnHandleSubmit = event => {
        event.preventDefault();
    }
    const history = useHistory();
    const shoot = () => {
        var checkBox = document.getElementById("checkbox");
        if (checkBox.checked === true){
            var first_name = document.getElementById('first_name').value;
        var email= document.getElementById('email').value;
        var phone_no= document.getElementById('phone_no').value;
        var password= document.getElementById('password').value;

        axios.post('http://localhost:8080/moviereview/user/register',{
            "name":first_name,
            "email":email,
            "password":password,
            "phoneNumber":phone_no
        })
        .then(response =>{console.log(response);if(response['data'] === 'Email Already Exists,Try with another email'){
            alert("User already exists");
            return;
        }else{
            alert("User Registered Succesfully");
            history.push('/login');
            return;
        }} );

        
          } else {
                     }

        
    }
    return (
        <header style={ HeaderStyle }>
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form onSubmit={fnHandleSubmit} >
                <p>
                    <label>Username</label><br/>
                    <input type="text" id='first_name' name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email"  id='email' name="email" required />
                </p>
                <p>
                    <label>Phone No</label><br/>
                    <input  id='phone_no'  name="phone_no" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" id='password' name="password" required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="/login" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" onClick={() => shoot("Goal!")} type="submit">Register <CheckCircleIcon size={20} /></button>
                </p>
                <p><Link to="/"><button type="button" class="btn btn-info">Back to Sign in <i class="bi bi-arrow-left"></i></button></Link>.</p>
            </form>
            {/* <footer>
                
            </footer> */}
        </div>
       </header>
    )

}
const HeaderStyle = {
    width: "100%",
    height: "118vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
