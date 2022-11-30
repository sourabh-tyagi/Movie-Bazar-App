import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ResetPasswordPage from './components/pages/ResetPasswordPage'
import HomePage from './components/pages/HomePage'
import ReviewPage from './components/ReviewPage'
import './App.css'


export default function App() {

    return (
        <Router >
            {}
            <div>
                <Switch>
                    <Route exact path="/" component={ LoginPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/reset-password" component={ ResetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/review" component= {ReviewPage}/>
                    <Route component={ErrorComponent}></Route>
                </Switch>
                
            </div>
        </Router>
    )
}
function ErrorComponent (){
    return(
        <div><center>An Error Occured! Please use /login for sign in to the application</center></div>
    )
}

