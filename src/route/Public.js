import React,{useState} from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const [load,setLoad]=useState("nul");//burayı null harici yap

    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            load && restricted ?
                <Redirect to="/AdminAddProduct" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;