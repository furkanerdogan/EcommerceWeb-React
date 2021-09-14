import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import firebase, { auth } from "firebase/app";
import { useAlert } from 'react-alert'



export default function Login() {
    const alert = useAlert()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        try {
            firebase.auth().signInWithEmailAndPassword(email, password);


        } catch (error) {
            console.log(error);
        }
        alert.show('Giriş Başarılı');
    }
    const GoogleLogin = async () => {
        try {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);

            alert.show('Giriş Başarılı');

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div class="container">
            <style>{'body { background-color: #4e73df; }'}</style>
            <div class="row justify-content-center">
                < div class="col-lg-6 col-md-6" >
                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body ">
                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Giriş Yap</h1>
                                </div>
                                <form class="user" >
                                    <div class="form-group">
                                        <input type="email" class="form-control form-control-user"
                                            id="exampleInputEmail" aria-describedby="emailHelp"
                                            placeholder="Email Adresi..."
                                            onChange={e => setEmail(e.target.value)}
                                        />

                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control form-control-user"
                                            id="exampleInputPassword" placeholder="Şifre..."
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <Link to="/AdminAddProduct" class="btn btn-primary btn-user btn-block" onClick={() => login()} >
                                        Giriş Yap
                                    </Link>
                                    <Link to="#" class="btn btn-google btn-user btn-block" onClick={GoogleLogin}>
                                        <i class="fab fa-google fa-fw"></i> Login with Google
                                    </Link>

                                </form>
                                <div class="text-center">
                                    <Link class="small" to="#">Forgot Password?</Link>
                                </div>
                                <div class="text-center">
                                    <Link to="/Register" class="small" >Create an Account!</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div >

            </div >

        </div >

    )
}
