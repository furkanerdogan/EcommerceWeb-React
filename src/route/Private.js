import React,{useState} from 'react';
import { Route, Redirect } from 'react-router-dom';
import "firebase/auth";
import  firebase,{auth}from "firebase/app";
import Sidebar from "../component/Sidebar"

const PrivateRoute = ({component: Component, ...rest}) => {
    const [load,setLoad]=useState("s");
    return (

        <Route {...rest} render={props => (
            load!==null ?(
                  <Sidebar>
                <Component {...props} />
                </Sidebar>)
              
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;