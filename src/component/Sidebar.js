import React from 'react'
import firebase, { auth } from "firebase/app";
import { Link } from "react-router-dom"
import { useAlert } from 'react-alert'

import { SidebarData } from "./SidebarData"

export default function Sidebar({ children }) {
    const alert = useAlert()

    const LogOut = () => {

        firebase.auth().signOut();
        alert.show('Çıkış Yapıldı!');

    }

    return (
        <div className="container-fliud">

            <div className="Sidebar" style={{ position: "fixed" }}>
                <style>{'.App { background-color: height:100%;width:100% }'}</style>

                <ul className="SidebarList">
                    <li><h2 style={{ color: "white", display: "grid", placeContent: "center" }}>Admin Paneli</h2></li>
                    {SidebarData.map((val, key) => {
                        return (
                            <li key={key} id={window.location.pathname == val.link ? "active" : ""} className="row" onClick={() => { window.location.pathname = val.link; }}>
                                <div className="icon"><i style={{ marginRight: 10 }} className={val.icon}></i></div>
                                <div className="title">{val.title}</div>
                            </li>
                        );
                    })}
                </ul>

            </div>

            <div className="Main" style={{ height: '100%', marginLeft: 200 }}>
                <div className="header" style={{ backgroundColor: "white", alignContent: "center" }}>
                    <div class="d-flex flex-row-reverse" style={{ padding: 10 }} >

                        <Link to="/Login" onClick={LogOut}><i class="fa fa-sign-out" aria-hidden="true">Çıkış yap</i></Link>

                    </div>
                </div>
                {children}
            </div>
        </div>
    )


};

