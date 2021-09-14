import React from 'react'
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { Link, NavLink } from "react-router-dom";


// map & render your breadcrumb components however you want.
const Breadcrumb = withBreadcrumbs()(({ breadcrumbs }) => (
    <div>

        {breadcrumbs.map(({ match, breadcrumb }) => (
            // other props are available during render, such as `location`
            // and any props found in your route objects will be passed through too
            <span key={match.url}>

                <div className=" d-inline"> / <NavLink to={match.url}> {breadcrumb} </NavLink> </div>


            </span>

        ))}

    </div>
));
export default withBreadcrumbs()(Breadcrumb);
