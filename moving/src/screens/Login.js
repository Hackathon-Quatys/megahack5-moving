import React from 'react';
import firebaseConfig from '../secrets/firebaseConfig'
import firebase from "firebase";
import db from "../FirestoreConnection"
import { Link } from 'react-router-dom';
import '../style/login.css';
import logo from "../images/moving-removebg-preview.png";
import googleLogo from "../style/images/google_logo.jpg";



class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            displayName: "",
            photoURL: "",
            email: "",
            userID: "",
            loggedIn: false
        }
        this.oAuthLogin = this.oAuthLogin.bind(this)
    }

    async register() {
        const randomId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        await db.collection('users').doc(randomId).set({
            name: this.state.displayName,
            photo: this.state.photoURL,
            email: this.state.email,
            id: this.state.randomId
        })
        console.log('registrado')
        this.state.login()
    }

    async login() {
        var query = await db.collection("users").where("email", "==", this.state.email).get()
        query.forEach(item => {
            console.log('login', item.data())
            this.setState({
                userID: item.data().id,
                loggedIn: true
            })
        })
        
    }

    async loginOrRegister() {
        var query = await db.collection("users").where("email", "==", this.state.email).get()
        if(query.size > 0) this.login()
        else this.register()
    }
    
    async oAuthLogin() {
        const config = {
            apiKey: firebaseConfig.apiKey,
            authDomain: firebaseConfig.authDomain,
            projectId: "megahack-5ed-moving"
        }
        
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
         }

        const auth = firebase.auth();
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await auth.signInWithPopup(provider)
        await this.setState({
            displayName: result.user.displayName,
            photoURL: result.user.photoURL,
            email: result.user.email
        })
        this.loginOrRegister()
    }

    loggedRender() {
        if(this.state.loggedIn) {
            console.log('mandando', this.state.userID)
            return (
                <div className="welcome">
                    <h3>Bem Vindo {this.state.displayName}</h3>
                    <Link to={{pathname: "/", state: [{user: this.state.userID}]}}><h3>Entrar no app</h3></Link>
                </div>
            )
        }
        return (
            <div className="first-screen">
                <div className="logo">
                    <img src={logo} alt="Moving Logo"/>
                </div>
                <div className="login-div-button">
                    <div className="login-header">
                        <h1 className="login-header-text">Login com Google</h1>
                    </div>
                    <div className="login">
                        <img className="google-logo" src={googleLogo} alt="logo google"/>
                        <button className="login-button" onClick={this.oAuthLogin}>Entrar</button>
                    </div>
                </div>
            
            </div>
        )
    }

    render() {
        return (
            this.loggedRender()
        )
    }
    
}

export default Login


