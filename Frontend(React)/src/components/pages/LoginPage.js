import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { SignInIcon } from '@primer/octicons-react'
import BackgroundImage from '../../assets/images/c.jpg'
import '../../App.css'

export default function SignInPage() {

    const fnHandleSubmit = event => {
        event.preventDefault();
    }
    const history = useHistory();
    const shoot = () => {
        
          
        var email= document.getElementById('email').value;
      
        var password= document.getElementById('password').value;
        var url = '/home?email=' +email;

        axios.post('http://localhost:8080/moviereview/user/login',{
            
            "email":email,
            "password":password
           
        })
        .then(response =>{console.log(response);if(response['data'] === 'Invalid Credentials'){
            alert("Invalid Credentials");
            return;
        }else{
            alert("Succesfully Logged in");
            history.push(url);
            return;
        }} );


        
    }
        
         
    return (
        <header style={ HeaderStyle }>
        <div className='bg'>
        <div className="text-center m-5-auto">
            <h2>Sign in to us for exclusive movie reviews</h2>
            <form  onSubmit={fnHandleSubmit} >
                <p>
                    <label>Email</label><br/>
                    <input type="text" id="email" name="email" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/reset-password"><label className="right-label">Reset password</label></Link>
                    <br/>
                    <input type="password" id="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" onClick={() => shoot("Goal!")}>Login <SignInIcon size={20} /></button>
                </p>
                <p>New User? <br></br><Link to="/register"><button type="button" class="btn btn-primary">Create an account <i class="bi bi-person-plus-fill"></i></button></Link></p>
            </form>
            <footer>
            </footer>
        </div>
        </div>
       </header>
        
        
    )
}
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
