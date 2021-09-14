import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import  firebase,{auth}from "firebase/app";



export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const register= async()=>{
        try {
        firebase.auth().createUserWithEmailAndPassword(email, password);
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
                        <div class="card-body p-0">
                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Hesap Oluştur</h1>
                                </div>
                                <form class="user">
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                            <input type="text" class="form-control form-control-user" id="exampleFirstName"
                                                placeholder="Ad " />
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control form-control-user" id="exampleLastName"
                                                placeholder="Soyad" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                                            placeholder="Email Adresi" onChange={e=>setEmail(e.target.value)} />
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                            <input type="password" class="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Şifre"  onChange={e=>setPassword(e.target.value)}/>
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="password" class="form-control form-control-user"
                                                id="exampleRepeatPassword" placeholder="Tekrar Şifre " />
                                        </div>
                                    </div>
                                    <Link to="AdminAddProduct" onClick={()=>register()} class="btn btn-primary btn-user btn-block">
                                        Hesabı Oluştur
                                </Link>
                            
                                </form>
                            
                                <div class="text-center">
                                    <a class="small" href="login.html">Already have an account? Login!</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}
